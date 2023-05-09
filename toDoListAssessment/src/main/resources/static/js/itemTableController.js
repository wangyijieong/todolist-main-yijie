
const displayItemTableAPI = `http://localhost:8080/itemTable/all`;
let itemTableControllerList = [];

const renderItemTableHTML = ()=>{

    let itemTableDisplay = `
                       <tr style="background-color: #6BDBC3;">
                       <th>Title</th>
                       <th>Description</th>
                       <th>Target Date</th>
                   </tr>`;


    for(let i =0; i < itemTableControllerList.length;i++){
        let targetDate = new Date(itemTableControllerList[i].targetDate);
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        console.log("targetDate : " + targetDate.toLocaleString('en-GB', options));
        //const formattedDateTime = targetDate.toLocaleString();

        itemTableDisplay += `
                            <tr> 
                                <td>${itemTableControllerList[i].title}</td>
                                <td>${itemTableControllerList[i].description}</td>
                                <td>${targetDate.toLocaleString('en-GB', options)}</td>
                            </tr>
                            `;
    }
    //console.log(customerDisplay);
    document.querySelector("#table>table").innerHTML = itemTableDisplay;
};


const displayItemTable= ()=>{
    itemTableControllerList = [];
    fetch(displayItemTableAPI)
        .then((resp)=>resp.json())
        .then((data)=>{

            console.log("Received Data");
            console.log(data);

            data.forEach((itemtable,index)=>{
                const itemTableObj = {
                    id: itemtable.id,
                    title: itemtable.title,
                    description: itemtable.description,
                    targetDate : itemtable.targetDate
                }
                itemTableControllerList.push(itemTableObj);
            })
            renderItemTableHTML();
        })



};



/*
const deleteCustomer = (id)=>{
    fetch(delCustomerAPI + id, {
        method :'DELETE'
    })
    .then((response)=>{
            console.log(response.status); // Will show you the status - 200 ok, 500, 404
            if (response.ok) {
                alert("Successfully deleted Customer!")
                displayCustomer();
            }
            else {
               alert("Something went wrong. Please try again")
            }
    })
    .catch((error)=>{

        console.log("error : " + error);
        alert("Error deleting record from the database");

    })

};


const updateCustomer = (id, name, mobile)=>{

   const formData = new FormData();
   formData.append('id', id);
   formData.append('name', name);
   formData.append('mobile', mobile);

    fetch(updateCustomerAPI, {
        method :'POST',
        body : formData
    })
    .then((response)=>{
            console.log(response.status); // Will show you the status - 200 ok, 500, 404
            if (response.ok) {
                alert("Successfully Updating Customer Details!")
                displayCustomer();
            }
            else {
               alert("Something went wrong. Please try again")
            }
    })
    .catch((error)=>{

        console.log("error : " + error);
        alert("Error updating to the database");

    })

};

*/



