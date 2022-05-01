(function () {
  let details = [
    ["Name", "Age", "DOB", "Email", "Company"],
    ["ABC", "18", "12/07/2003", "xyz@gmail.com", "XYZ"],
    ["DEF", "19", "10/10/2001", "abc@gmail.com", "MNO"],
    ["GHI", "15", "12/12/2006", "dfe@gmail.com", "SDE"],
    ["JKL", "22", "23/02/2004", "jkl@gmail.com", "HSE"],
  ];
  var table = document.createElement("table");
  table.setAttribute("class", "table table-striped");
  var tHead = document.createElement("tHead");
  tHead.setAttribute("class", "table-dark");

  var tr = document.createElement("tr");
  var th1 = document.createElement("th");
  var th2 = document.createElement("th");
  var th3 = document.createElement("th");
  var th4 = document.createElement("th");
  var th5 = document.createElement("th");

  var val1 = document.createTextNode(details[0][0]);
  var val2 = document.createTextNode(details[0][1]);
  var val3 = document.createTextNode(details[0][2]);
  var val4 = document.createTextNode(details[0][3]);
  var val5 = document.createTextNode(details[0][4]);

  th1.appendChild(val1);
  th2.appendChild(val2);
  th3.appendChild(val3);
  th4.appendChild(val4);
  th5.appendChild(val5);

  tr.appendChild(th1);
  tr.appendChild(th2);
  tr.appendChild(th3);
  tr.appendChild(th4);
  tr.appendChild(th5);

  tHead.appendChild(tr);
  table.appendChild(tHead);

  var tbod = document.createElement("tbody");

  for (var i = 1; i < 5; i++) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");

    var value1 = document.createTextNode(details[i][0]);
    var value2 = document.createTextNode(details[i][1]);
    var value3 = document.createTextNode(details[i][2]);
    var value4 = document.createTextNode(details[i][3]);
    var value5 = document.createTextNode(details[i][4]);

    td1.appendChild(value1);
    td2.appendChild(value2);
    td3.appendChild(value3);
    td4.appendChild(value4);
    td5.appendChild(value5);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    tbod.appendChild(tr);
    table.appendChild(tbod);
  }
  document.body.appendChild(table);
})();
