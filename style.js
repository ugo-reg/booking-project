const cruise= document.getElementById("cruise")
let form=document.getElementById("form")
let form2=document.getElementById("form2")
let originalFormContent = form.innerHTML;
let hotel=document.getElementById("hotel")
cruise.addEventListener("click", function(){

form.innerHTML= form2.innerHTML

})
hotel.addEventListener("click", function(){
form.innerHTML= originalFormContent
    
})