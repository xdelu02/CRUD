window.onload = getEmployees;
//localStorage.clear();
var countEmployees = localStorage.getItem('count') || 3;

function getEmployees(){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET","http://localhost:8080/api/tutorial/1.0/employees",false);
  xmlHttp.send(null);
  var employeesObj = JSON.parse(xmlHttp.responseText);
  drawEmployeesTable(employeesObj);
}

function postEmployees(firstName,lastName,email,phone) {
  
    var postData = {
        "employeeId": ++countEmployees,
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "phone": phone
    };
    localStorage.setItem('count', countEmployees);
    var httpPost = new XMLHttpRequest();
    httpPost.open("POST", 'http://localhost:8080/api/tutorial/1.0/employees', true);
    httpPost.setRequestHeader("Content-Type", "application/json");
  
    httpPost.onreadystatechange = function() {
      if (httpPost.readyState === XMLHttpRequest.DONE && httpPost.status === 200) {
        var responseData = JSON.parse(httpPost.response);
      }
    }
    httpPost.send(JSON.stringify(postData));

}

function deleteEmployee(id){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("DELETE","http://localhost:8080/api/tutorial/1.0/employees/"+id,true);
  xmlHttp.send(null);
  --countEmployees;
  localStorage.setItem('count',countEmployees);

}

function putEmployee(firstName,lastName,email,phone,empToChange){

  var postData = {
    "employeeId": countEmployees,
    "firstName": firstName,
    "lastName": lastName,
    "email": email,
    "phone": phone
};
  

var httpPost = new XMLHttpRequest();
httpPost.open("PUT", 'http://localhost:8080/api/tutorial/1.0/employees/'+empToChange, false);
httpPost.setRequestHeader("Content-Type", "application/json");

httpPost.onreadystatechange = function() {
  if (httpPost.readyState === XMLHttpRequest.DONE && httpPost.status === 200) {
    var responseData = JSON.parse(httpPost.response);
  }
}
httpPost.send(JSON.stringify(postData));
}