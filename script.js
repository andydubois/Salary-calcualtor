$(document).ready(readyNow);

let htmlMonthlyCost = 0;

function readyNow() {
    console.log('jquery is good to go');
    //event listener
    $('#submitButton').on('click', addEmployee);
    $('#tableBody').on('click', '.deleteButton', deleteRow);
}

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




    //Appends employee information to HTML table
    $('#tableBody').append(
        `<tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${emplId}</td>
        <td>${title}</td>
        <td>${annualSalary}</td>
        <td><button class='deleteButton'>Delete</button></td>
        </tr>`);
    // clearing salary

    // Calc monthly salary
    // monthlySalary += (parseFloat(annualSalary/12));
    // console.log(monthlySalary);

    
    // Clears all inputs on submission
    $('#firstName').val('');
    $('#lastName').val('');
    $('#emplId').val('');
    $('#title').val('');
    $('#annSalary').val('');
    //Calc monthly salary
    //cost per employee per month
    let monthlyCost = monthlyEmployeeCost(annualSalary);
    //total cost to the company for all employees
    let totalMonthlyCost = totalMonthly(htmlMonthlyCost, monthlyCost);
    htmlMonthlyCost = totalMonthlyCost;
    $('#totalMonthlySpan').text(htmlMonthlyCost);
};

function deleteRow() {
    console.log('deleteRow!');
    $(this).parent().parent().remove();

}

if (htmlMonthlyCost >= 20000) {
    $('#totalMonthlySpan').css(background-color, red);
};