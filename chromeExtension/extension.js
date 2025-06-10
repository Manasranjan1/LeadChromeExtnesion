const saveBtn = document.getElementById("input-btn");
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
let inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

saveBtn.addEventListener("click", () => {
   let inputValue = inputEl.value;
   myLeads.push(inputValue)
   console.log(myLeads)
});


for (let  i = 0; i< myLeads.length ; i++){
   // ulEl.innerHTML + = "<li>" + myLeads[i] + "</li>"

   let li = document.createElement("li")
   li.textContent = myLeads[i]
   ulEl.append(li)
}
