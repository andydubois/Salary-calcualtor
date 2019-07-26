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
    //set input values equal to variables
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let emplId = $('#emplId').val();
    let title = $('#title').val();
    let annualSalary = $('#annSalary').val();
    //Appends employee information to HTML table
    $('#tableBody').append(
        `<tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${emplId}</td>
        <td>${title}</td>
        <td>${annualSalary}</td>
        </tr>`);
    // clearing salary
       $('#firstName').val('');
       $('#lastName').val('');
       $('#emplId').val('');
       $('#title').val('');
       $('#annSalary').val('');
    // Calc monthly salary
    monthlySalary += parseFloat(($('#annSalary').val())/12);
    $('#totalMonthly').replaceWith(monthlySalary);
    // Clears all inputs on submission
 
    //Calc monthly salary

};

function deleteRow () {
    console.log('deleteRow!');

}