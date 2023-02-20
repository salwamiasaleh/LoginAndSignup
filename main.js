var emailel = document.getElementById("email")
console.log(emailel);
var passel = document.getElementById("pass")
var loginbtn = document.getElementById("loginbutton")
var nameel = document.getElementById("namexx")
var signupbtn = document.getElementById("signupbutton")
var warningmsg = document.getElementById("warning")
var sucessmsg = document.getElementById("success")
var wrongname=document.getElementById("nameid")
var emailalertt=document.getElementById("emailalert")
var incorrectlogin=document.getElementById("incorrectlogin")


var passalert=document.getElementById("passworda")
// var enterr=
arrayofdetails = [];

//  nameel.addEventListener("blur",function(){
//    var nameRegex =  /^([a-zA-Z]){2,30}$/
//   if( nameRegex.test(nameel.value)==true){

//    wrongname.classList.replace("d-block","d-none")
//   }
//   else{
 
//    wrongname.classList.replace("d-none","d-block")

//   }
//  })
  emailel.addEventListener("blur",function(){
    var regex2= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(regex2.test(emailel.value)==true){
      emailalertt.classList.replace("d-block","d-none")
      
      console.log(regex2.test(emailel.value));
    }
    else{
      emailalert.classList.replace("d-none","d-block")
      console.log('noo');

    }
  })

    passel.addEventListener("blur",function(){
    
      var regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      if(regex.test(passel.value)==true){
      
        passalert.classList.replace("d-block","d-none")
        console.log('yes');
      }
      else {
        passalert.classList.replace("d-none","d-block")
        console.log('no');
      }
    })

 if(localStorage.getItem("list")==null){
   arrayofdetails=[]
 }
 else{
  arrayofdetails=JSON.parse(localStorage.getItem("list"))  
 }

function signup() {
  let details = {
    email: emailel.value,
    password: passel.value,
    //  name: nameel.value,
  };

  if (arrayofdetails != []) {
    let result = arrayofdetails.find((el) => {
      return el.email == details.email;
    });

    if (result == undefined) {
      arrayofdetails.push(details);
      localStorage.setItem("list", JSON.stringify(arrayofdetails));
      sucessmsg.style.display = "block";
      warningmsg.style.display = "none";
    } else {
      warningmsg.style.display = "block";
      sucessmsg.style.display = "none";
    }
  }
  console.log(arrayofdetails);
}

function login(){

    let res = arrayofdetails.find((el)=>{


      return el.email==emailel.value && el.password ==passel.value
    })

  
  if (res!=undefined){
  window.location.replace("homepage.html");

  incorrectlogin.classList.replace("d-block","d-none")
  }
  else{
    incorrectlogin.classList.replace("d-none","d-block")
  }
// var nameval=emailel.value
}
// for(var i=0; i<arrayofdetails.length;i++){
//   console.log(arrayofdetails[i].email)
// }

// let temp= `<div class="welcome border text-white d-flex justify-content-center align-items-center">
// <h1>welcome </h1>
// </div>`
// document.getElementById("#content").innerHTML=temp


