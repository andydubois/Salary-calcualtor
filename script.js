$(document).ready(readyNow);
//setting global variable for the monthly cost that will be appended to the DOM
let htmlMonthlyCost = 0;

//function to run on page load
function readyNow() {
    console.log('jquery is good to go');
    //event listeners
    $('#submitButton').on('click', addEmployee);
    $('#tableBody').on('click', '.deleteButton', deleteRow);
}
//decided to break math up into pieces to make it easier to see what was happening
function monthlyEmployeeCost(salary) {
    return salary / 12;
};

function totalMonthly(total, monthly) {
    return total += monthly;
}

//adds employees to table
function addEmployee() {
    //set input values equal to variables
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let emplId = $('#emplId').val();
    let title = $('#title').val();
    let annualSalary = $('#annSalary').val();




    //Appends employee information to HTML table using previously made variables
    $('#tableBody').append(
        `<tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${emplId}</td>
        <td>${title}</td>
        <td>${annualSalary}</td>
        <td><button class='deleteButton btn btn-outline-dark'>Delete</button></td>
        </tr>`);
    // Clears all inputs on submission
    $('#firstName').val('');
    $('#lastName').val('');
    $('#emplId').val('');
    $('#title').val('');
    $('#annSalary').val('');
    //cost per employee per month
    let monthlyCost = monthlyEmployeeCost(annualSalary);
    console.log('the monthly cost=' + monthlyCost);
    //total cost to the company for all employees
    let totalMonthlyCost = totalMonthly(htmlMonthlyCost, monthlyCost);
    console.log('the totalMonthlyCost=' + totalMonthlyCost);
    //set global variable equal to monthly cost to company
    htmlMonthlyCost = totalMonthlyCost;
    console.log('htmlMonthlyCost=' + htmlMonthlyCost);

    //Append value in DOM with total cost to company
    $('#totalMonthlySpan').text(htmlMonthlyCost.toFixed(2));
    //change background color to RED if htmlMonthlyCost exceeds 20,000
    if (htmlMonthlyCost > 20000) {
        $('#totalMonthlySpan').css('background-color', 'red');
    };
};

//function for deleting rows from table
function deleteRow() {
    //store the deleted salary value of the employee to be subtracted from the total -- targeting for this is similar to the row delete, but need to be more specific because we are targeting one cell in the tables rather than a whole row.
    let deleteValue = $(this).parent().prev().text();
    console.log('deleteRow!');
    //target row to delete
    $(this).parent().parent().remove();
    console.log("the value to delete is" + deleteValue);
    //find value of number to subtract from total
    let numberToSubtract = deleteValue / 12;
    console.log('number to subtract =' + numberToSubtract);
    //take value away from total
    let finalValue = htmlMonthlyCost -= numberToSubtract;
    console.log(finalValue);
    //set global variable equal to new monthly cost value
    htmlMonthlyCost = finalValue;
    //append new value to DOM
    $('#totalMonthlySpan').text(htmlMonthlyCost.toFixed(2));
    //change background color from red back to nothing IF value drops below $20,000
    if (htmlMonthlyCost < 20000) {
        $('#totalMonthlySpan').css('background-color', '');
    };
}