// all data
const maxSeat = 5
const minSeat = 0
const firstClassPrice = 150;
const economyPrice = 100;
const vatPercentage = 10;
const vat = vatPercentage / 100;
const bookNowPop = "Are you sure that you want to book now? Once purchased, tickets can't be returned.";
const bookNowConfirm="Thanks... Ticket has been sent to your email.";

document.getElementById('firstClassPrice').innerText = firstClassPrice;
document.getElementById('economyPrice').innerText = economyPrice;
document.getElementById('vatPercentage').innerText = vatPercentage;

// economy
document.getElementById('plusEconomy').addEventListener('click', function () {
    seat('economyInput', true)
})

document.getElementById('minusEconomy').addEventListener('click', function () {
    seat('economyInput', false)
})

// first class
document.getElementById('plusFirstClass').addEventListener('click', function () {
    seat('firstClassInput', true)
})

document.getElementById('minusFirstClass').addEventListener('click', function () {
    seat('firstClassInput', false)
})

// functions
function seat(id, plus) {
    var seat = parseInt(document.getElementById(id).value)
    if (plus == true) {
        if (seat < maxSeat) {
            var totalSeat = seat + 1
        } else {
            var totalSeat = seat
        }
    } else if (seat > minSeat) {
        var totalSeat = seat - 1
    } else {
        var totalSeat = seat
    }

    document.getElementById(id).value = totalSeat
    finalCalculation()
}


function finalCalculation() {
    var subTotal = parseInt(document.getElementById('economyInput').value) * economyPrice + parseInt(document.getElementById('firstClassInput').value) * firstClassPrice
    var vatTotal = subTotal * vat
    var total = subTotal + vatTotal

    document.getElementById('subTotal').innerText = subTotal
    document.getElementById('vatTotal').innerText = vatTotal
    document.getElementById('total').innerText = total
}

function bookNow() {
  if (confirm(bookNowPop) == true) {
    if(!alert(bookNowConfirm)){window.location.reload();}
  }
}