var userN , Email , Phone;
var Nametrue , emailtrue , numbertrue;
var count = 1;

function sub(){
  console.log("one");
  Nametrue = false;
  emailtrue = false;
  numbertrue = false;
  userN = document.getElementById("name").value;
  Email = document.getElementById("email").value;
  Phone = document.getElementById("phone").value;

  // console.log(userN);

  validation();
}

function validation(){
  console.log("two");
  var a = /^[A-Za-z]+$/;
  var b = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var c = /^\d{10}$/;

  if(a.test(userN) && userN.length!=0){
    Nametrue = true;
    document.getElementById("name-v").style.display = "none";
  } else{
    userN = false;
    document.getElementById("name-v").style.display = "block";
  }
  if(b.test(Email) && Email.length!=0){
    emailtrue= true;
    document.getElementById("email-v").style.display = "none";
  } else{
    Email = false;
    document.getElementById("email-v").style.display = "block";
  }
  if(c.test(Phone) || Phone.length==0){
    numbertrue = true;
    document.getElementById("num-v").style.display = "none";
  } else{
   Phone = false;
    document.getElementById("num-v").style.display = "block";
  }
  isvalid();
}

function isvalid(){
  console.log("three");
  if(Nametrue && emailtrue && numbertrue){
    informationCorrect();
  }
}

function informationCorrect(){
  console.log("four");
  localStorage.setItem(count + "name", userN);
  localStorage.setItem(count + "email", Email);
  localStorage.setItem(count + "number", Phone);
  viewdetails();
}

function viewdetails(){
  console.log("five");
  var table = document.getElementById("tbody");
  let d = document.createElement("tr");
  // console.log(localStorage);
  d.innerHTML = `<tr>
    <th scope = "row">${count}</th>
    <td>${localStorage.getItem(count + "name")}</td>
    <td>${localStorage.getItem(count + "email")}</td>
    <td>${localStorage.getItem(count + "number")}</td>
  </tr>`
  table.append(d);
  count++;
}
