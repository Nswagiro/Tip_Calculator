var BillAmount = document.getElementById('billAmount');
var PercentageTip = document.getElementById('percentageTip');
var TipAmount = document.getElementById('tipAmount');
var Total = document.getElementById('total');
var button = document.getElementById('button');
var errors = document.getElementById('errors');
var reset = document.getElementById('reset')

 button.addEventListener('click', function () {
    
    var bill = Number (billAmount.value);
    
    var percentage = Number (percentageTip.value);

    if (isNaN(bill) || bill <= 0 || bill === null) {
        
        errors.value = 'Enter Bill Amount';

    }else if (isNaN(percentage) || percentage <= 0 || percentage === null) {
        
        errors.value = 'Enter Percentage Tip';

    }else{
        
        var calculatedBillAmount = bill * percentage/100;
        
        tipAmount.value =calculatedBillAmount;

        var calculatedTotal = bill + calculatedBillAmount;
        
        total.value = "UGX"+ calculatedTotal;

    }
    
})
reset.addEventListener('click', function () {
    
    BillAmount.value = null;
    
    PercentageTip.value = null;
    
    tipAmount.value = null;
    
    total.value = null;

    errors.value = null;
})