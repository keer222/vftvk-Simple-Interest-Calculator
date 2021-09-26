function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    if(principal > 0) {
        var interest = principal * years * rate/100;
        var year = new Date().getFullYear()+parseInt(years);
        document.getElementById("result").innerHTML= "If you deposit <mark>"
        +principal+"</mark>,\<br\>&emsp;&emsp;at an interest rate of <mark>"
        +rate+"%</mark>.\<br\>&emsp;&emsp;You will receive an amount of <mark>"
        +interest+"</mark>,\<br\>&emsp;&emsp;in the year <mark>"+year+"</mark>\<br\>";
    } else {
        alert("Enter a positive Number");
        document.getElementById("principal").focus();
    }
 }
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}  