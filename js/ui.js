function drawEmployeesTable(employeesObj) {
    var table = document.getElementById("emloyeesTable");
    for(var i=0; i<employeesObj.length; i++){
      
      var row = table.insertRow(-1);
      row.setAttribute("id",  employeesObj[i].employeeId);
  
      for (let j = 0; j<6; j++){
        let cell = row.insertCell(j);
        if(j === 0) cell.innerHTML = "<input type='checkbox' id='checkbox"+i+"'>";
        if(j === 1) cell.innerHTML = "<span>Name</span>" + employeesObj[i].firstName;
        if(j === 2) cell.innerHTML = "<span>Last name</span>" + employeesObj[i].lastName;
        if(j === 3) cell.innerHTML = "<span>Email</span>" + employeesObj[i].email;
        if(j === 4) cell.innerHTML = "<span>Phone</span>" + employeesObj[i].phone;
        if(j === 5) cell.innerHTML = "<span>Action</span>" + "<img src='pencil.png' id='"+i+"edit' class='editBtn' onclick='editRow(this)'>";
    }
  } 
}

function deleteRows() {
  for(let i=0; i<countEmployees; i++) {
    var checkbox = document.getElementById("checkbox"+i);

    if(checkbox.checked) {
      document.getElementById("emloyeesTable").deleteRow(i+1);
      let idEmployee = checkbox.parentNode.parentNode.id;
      deleteEmployee(idEmployee);
    }
  }
}

function showDivEmployee(){
  document.getElementById("divAddEmployee").style.visibility = "visible";
}

function addEmployee(){
  let name = document.getElementById("inputName").value;
  let lastName = document.getElementById("inputLastName").value;
  let email = document.getElementById("inputEmail").value;
  let phone = document.getElementById("inputPhone").value;
  postEmployees(name, lastName, email, phone);
}

function editRow(emp){
  document.getElementById(emp.id).innerHTML = "''";
  let num = parseInt(emp.id);
  console.log(num);
  var table = document.getElementById("emloyeesTable");
  var row = table.rows[num+1];
  newId = row.id;
  row.cells[5].innerHTML = "<img src='check.png' id='putConfirm' class='editBtn' onclick='sendPut("+newId+")'>";
  for(let i=1; i<5; i++) {
    row.cells[i].innerHTML = "<input type='text' id='"+(i+10)+"'>";
  }
}

function sendPut(id) {
  putEmployee(document.getElementById("11").value,document.getElementById("12").value,document.getElementById("13").value,document.getElementById("14").value,id);
}
