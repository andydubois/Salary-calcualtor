$(document).ready(readyNow);

function readyNow() {
    console.log('jquery is good to go');
    //event listener
    $('#submitButton').on('click', addEmployee);
    $('.deleteButton').on('click', 'button', deleteRow);
}

let monthlySalary = 0

//adds employees to table
function addEmployee() {
    //Appends employee information to HTML table
    $('#tableBody').append('<tr><td>' + $('#firstName').val() + '</td><td>' + $('#lastName').val() + '</td><td>' + $('#emplId').val() + '</td><td>' + $('#title').val() + '</td><td>$' + $('#annSalary').val() + '<td><button class="deleteButton">Delete</button></tr>');
    //clearing salary
    $('#annSalary').val('');
    //Calc monthly salary
    monthlySalary += parseFloat(($('#annSalary').val())/12);
    $('#totalMonthly').append(monthlySalary);
    //Clears all inputs on submisson
    $('#firstName').val('');
    $('#lastName').val('');
    $('#emplId').val('');
    $('#title').val('');
    $('#annSalary').val('');
    //Calc monthly salary

};

function deleteRow () {
    console.log('deleteRow!');

}