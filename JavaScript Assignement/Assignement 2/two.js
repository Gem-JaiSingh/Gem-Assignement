var userN, Email, Phone;
var Nametrue, emailtrue, numbertrue;
var count = 1;

function sub() {
  Nametrue = false;
  emailtrue = false;
  numbertrue = false;
  userN = document.getElementById("name").value;
  Email = document.getElementById("email").value;
  Phone = document.getElementById("phone").value;

  // console.log(userN);

  validation();
}

function validation() {
  var a = /^[A-Za-z]+$/;
  var b = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var c = /^\d{10}$/;

  if (a.test(userN) && userN.length != 0) {
    Nametrue = true;
    document.getElementById("name-v").style.display = "none";
    document.getElementById("name-inv").style.display = "block";
  } else {
    userN = false;
    document.getElementById("name-v").style.display = "block";
    document.getElementById("name-inv").style.display = "none";
  }
  if (b.test(Email) && Email.length != 0) {
    emailtrue = true;
    document.getElementById("email-v").style.display = "none";
    document.getElementById("email-inv").style.display = "block";
  } else {
    Email = false;
    document.getElementById("email-v").style.display = "block";
    document.getElementById("email-inv").style.display = "none";
  }
  if (c.test(Phone) || Phone.length == 0) {
    numbertrue = true;
    document.getElementById("num-v").style.display = "none";
    if(Phone.length==0){
      document.getElementById("num-inv").style.display = "none";
    } else{
      document.getElementById("num-inv").style.display = "block";
    }
    
  } else {
    Phone = false;
    document.getElementById("num-v").style.display = "block";
    document.getElementById("num-inv").style.display = "none";
  }
  isvalid();
}

function isvalid() {
  if (Nametrue && emailtrue && numbertrue) {
    informationCorrect();
  }
}

function informationCorrect() {
  localStorage.setItem(count + "name", userN);
  localStorage.setItem(count + "email", Email);
  localStorage.setItem(count + "number", Phone);
  viewdetails();
}

function viewdetails() {
  var table = document.getElementById("tbody");
  let d = document.createElement("tr");

  d.innerHTML = `<tr>
    <th scope = "row">${count}</th>
    <td>${localStorage.getItem(count + "name")}</td>
    <td>${localStorage.getItem(count + "email")}</td>
    <td>${localStorage.getItem(count + "number")}</td>
  </tr>`;
  table.append(d);
  count++;
}
