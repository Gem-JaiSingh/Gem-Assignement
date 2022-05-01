var submit = document.getElementById("submit");
submit.addEventListener("Click", myfun());
var row = 1;
function myfun() {
  var a = document.getElementById("Name").value;
  var b = document.getElementById("Email").value;
  var c = document.getElementById("Phone").value;
//   if (!a || !b || !c) {
//     alert("Please fill the details ");
//     return;
//   }
//   var display = document.getElementById("display");
//   var newrow = display.insertRow(row);
//   var cell1 = newrow.insertCell(0);
//   var cell2 = newrow.insertCell(1);
//   var cell3 = newrow.insertCell(2);
//   cell1.innerHtml = a;
//   cell2.innerHtml = b;
//   cell3.innerHtml = c;
//   row++;

//   localStorage.setItem("Name", a);
//   localStorage.setItem("Email", b);
//   localStorage.setItem("Phone", c);
  console.log(a);
  console.log(b);
}
