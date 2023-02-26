
let myLeads=[];
let oldLeads=[];
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
let ulEl=document.getElementById("ul-el");
const deleteBtn=document.getElementById("delete-btn");
//fetching the leads from the local storage
const leadsFromlocalStorage=JSON.parse((localStorage.getItem("myLeads")))
if(leadsFromlocalStorage){
    myLeads=leadsFromlocalStorage;
    render(myLeads);
}
function render(leads){
    let listItems="";
    for(let i=0;i<leads.length;i++){
       listItems+=`<li>
       <a href='${leads[i]}' target='_blank'>${leads[i]}</a>
       </li>`;
       
    }
    ulEl.innerHTML=listItems;
     }
    
     function clearThis(){
    
     }
deleteBtn.addEventListener("dblclick",function(){
        localStorage.clear();
        myLeads=[];
        render(myLeads);
})
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    //SAVING TO LOCAL STORAGE
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    inputEl.value="";
    render(myLeads);
    
})



