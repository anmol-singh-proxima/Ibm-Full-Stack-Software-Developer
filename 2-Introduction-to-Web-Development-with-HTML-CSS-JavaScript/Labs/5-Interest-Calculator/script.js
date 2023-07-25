function computeSimpleInterest() {
    let principal = parseInt(document.getElementById("simple-principal").value);
    let rate = parseFloat(document.getElementById("simple-rate").value);
    let years = parseInt(document.getElementById("simple-years").value);
    let interest = principal * years * rate / 100;
    let amount = principal + interest;
    let result = document.getElementById("simple-result");
    let year = new Date().getFullYear() + parseInt(years);

    if (principal <= 0) {
        alert('Please enter a positive number!');
        document.getElementById("principal").focus();
    } else {
        result.classList.add("simple-result");
        result.innerHTML = `Interest: If you deposit Rs. <b>${principal}</b>, at an interest rate of <b>${rate}%</b>. You will receive a total amount of Rs. <b>${amount}</b>, in the year <b>${year}</b>`;
    }
}

function computeCompoundInterest() {
    let principal = parseInt(document.getElementById("compound-principal").value);
    let rate = parseFloat(document.getElementById("compound-rate").value);
    let years = parseInt(document.getElementById("compound-years").value);
    let amount = principal;
    for(let i=0; i<years; i++) {
        amount *= (1 + rate / 100);
    }
    let result = document.getElementById("compound-result");
    let year = new Date().getFullYear() + parseInt(years);

    if (principal <= 0) {
        alert('Please enter a positive number!');
        document.getElementById("principal").focus();
    } else {
        result.classList.add("compound-result");
        result.innerHTML = `Interest: If you deposit Rs. <b>${principal}</b>, at an interest rate of <b>${rate}%</b>. You will receive a total amount of Rs. <b>${amount}</b>, in the year <b>${year}</b>`;
    }
}

function updateSimpleInterestRate() {
    var rateval = document.getElementById("simple-rate").value;
    document.getElementById("simple-rate_val").innerText = rateval;
}

function updateCompoundInterestRate() {
    var rateval = document.getElementById("compound-rate").value;
    document.getElementById("compound-rate_val").innerText = rateval;
}