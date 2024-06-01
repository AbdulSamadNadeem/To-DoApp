let UserInp =document.getElementById('userInp')
let work = document.getElementById("para")
// let time = document.getElementById('date')
let eror = document.getElementById('error') 

function todo_App(){

    let done = UserInp.value


if(done == ""){

    eror.innerText = "THIS FIELD CAN NOT BE EMPTY"

}
else{
    let date = new Date()
   
    eror.innerText= ""
    work.innerText += done + date.toLocaleTimeString()  +  date.toLocaleDateString()  +"\n" 
    // time.innerText += date.toLocaleTimeString()  +  date.toLocaleDateString() + "\n"
    UserInp.value = ""

}
}
