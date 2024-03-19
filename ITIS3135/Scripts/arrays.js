let persons = [];
let salaries = [];

window.onload = function() {
    document.getElementById("nameInput").focus();
};

function addSalary() {
    let name = document.getElementById("nameInput").value.trim();
    let salary = parseFloat(document.getElementById("salaryInput").value.trim());
    if (name === "" || isNaN(salary)) {
        alert("Please enter a valid name and a numeric salary.");
        return;
    }
    persons.push(name);
    salaries.push(salary);
    updateEmployeeSelect();
    document.getElementById("nameInput").value = "";
    document.getElementById("salaryInput").value = "";
    document.getElementById("nameInput").focus();
}

function modifySalary() {
    let selectedIndex = document.getElementById("employeeSelect").selectedIndex;
    let newSalary = parseFloat(document.getElementById("newSalaryInput").value.trim());
    if (selectedIndex < 0 || isNaN(newSalary)) {
        alert("Please select an employee and enter a valid new salary.");
        return;
    }
    salaries[selectedIndex] = newSalary;
    displaySalary();
}

function updateEmployeeSelect() {
    let select = document.getElementById("employeeSelect");
    select.innerHTML = "";
    for (let i = 0; i < persons.length; i++) {
        let option = document.createElement("option");
        option.text = persons[i];
        option.value = i;
        select.add(option);
    }
}

function displayResults() {
    let sum = salaries.reduce((a, b) => a + b, 0);
    let avg = sum / salaries.length;
    let max = Math.max(...salaries);
    document.getElementById("results").innerHTML = `
        <h2>Results</h2>
        <p>Average Salary: ${avg.toFixed(2)}</p>
        <p>Highest Salary: ${max.toFixed(2)}</p>
    `;
}

function displaySalary() {
    let table = document.getElementById("results_table");
    let rows = "<tr><th>Employee</th><th>Salary</th></tr>";
    for (let i = 0; i < persons.length; i++) {
        rows += `<tr><td>${persons[i]}</td><td>${salaries[i].toFixed(2)}</td></tr>`;
    }
    table.innerHTML = rows;
}
