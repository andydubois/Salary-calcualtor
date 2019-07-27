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
        <td id ='deleteMe'>${annualSalary}</td>
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
    console.log('the monthly cost=' + monthlyCost);
    //total cost to the company for all employees
    let totalMonthlyCost = totalMonthly(htmlMonthlyCost, monthlyCost);
     console.log('the totalMonthlyCost=' + totalMonthlyCost);
    //set global variable equal to monthly cost to company
    htmlMonthlyCost = totalMonthlyCost;
    console.log('htmlMonthlyCost=' + htmlMonthlyCost);
    
    //Append value in DOM with total cost to company
    $('#totalMonthlySpan').text(htmlMonthlyCost.toFixed(2));
    //change background color if htmlMonthlyCost exceeds 20,000
    if (htmlMonthlyCost > 20000) {
        $('#totalMonthlySpan').css('background-color', 'red');
    };
};

function deleteRow() {
    let deleteValue = $('#deleteMe').text();
    console.log('deleteRow!');
    $(this).parent().parent().remove();
    console.log("the value to delete is" + deleteValue);

}
