

function calculateAmount() {
    var moneyAmount = document.getElementById("moneyAmount").value;
    var valuta = document.getElementById("valuta").value;
    
    if(moneyAmount === "" || valuta == "") {
        window.alert("Molim vas unesite iznos i valutu");
        return;
    }
    
    var total = moneyAmount / valuta;
    total = total.toFixed(4);
    
    document.getElementById("totalAmount").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}


document.getElementById("totalAmount").style.display = "none";

document.getElementById("calculate").onclick = function() { calculateAmount(); };