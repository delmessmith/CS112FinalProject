/**
 * Created by Del on 10/24/2016.
 */
var Rent = 0;
var Mortgage = 0;
var Water = 0;
var Gas = 0;
var Electric = 0;
var TV = 0;
var Internet = 0;
var CellPhone = 0;
var HomePhone = 0;
var Pet = 0;
var CreditCard = 0;
var Groceries = 0;
var Restaurants = 0;
var Entertainment = 0;
var Savings = 0;
var Investments = 0;
var Other = 0;

var CategoriesTotal = 0;
var ContPersonA = 0;
var ContPersonB = 0;
var ContTotal = 0;

var PercentContPersonA = 0;
var PercentContPersonB = 0;

var GasAmntArray = [];
var GasTotalAmnt = 0;

var GasPricesArray = [];
var GasPriceTotal = 0;

function $(element) {
   return document.getElementById(element);
}

function isChecked(Category) {
    if ($('chk' + Category).checked == true){
        $('txt' + Category).disabled = false;
    } else {
        $('txt' + Category).value = "";
        $('txt' + Category).disabled = true;
    }
}

function Calculate() {
    Rent = GetInput('Rent');
    Mortgage = GetInput('Mortgage');
    Water = GetInput('Water');
    Gas = GetInput('Gas');
    Electric = GetInput('Electric');
    TV = GetInput('TV');
    Internet = GetInput('Internet');
    CellPhone = GetInput('CellPhone');
    HomePhone = GetInput('HomePhone');
    Pet = GetInput('Pet');
    CreditCard = GetInput('CreditCard');
    Groceries = GetInput('Groceries');
    Restaurants = GetInput('Restaurants');
    Entertainment = GetInput('Entertainment');
    Savings = GetInput('Savings');
    Investments = GetInput('Investments');
    Other = GetInput('Other');

    CategoriesTotal = CalcCategoriesTotal();

    alert(CategoriesTotal);
    ContPersonA = GetInput("ContA");
    ContPersonB = GetInput("ContB");
    alert(ContPersonA + " " + ContPersonB);
    ContTotal = ContPersonA + ContPersonB;
    alert(ContTotal);
    if (CategoriesTotal > ContTotal){
        alert("You spent more money than there is available!");
        DisplayLowFundsMsg();
    }

    PercentContPersonA = ContPersonA/ContTotal;
    PercentContPersonB = ContPersonB/ContTotal;

    alert(PercentContPersonA + " " + PercentContPersonB)
}

function GetInput(category) {
    var categoryAmnt;
    if (parseFloat($('txt' + category).value) > 0){
    categoryAmnt = parseFloat($("txt" + category).value)}
    else {categoryAmnt = 0}
    return categoryAmnt
}

function DisplayLowFundsMsg() {
    if (CategoriesTotal > ContTotal){
        $("divLowFunds").innerHTML = "You are over budget!"
    } else $("divLowFunds").innerHTML = "";
}

function AddtoTable() {
    var table = $("GasTableBdy");
    var row = table.insertRow(-1);
    var date = row.insertCell(0);
    var gas = row.insertCell(1);
    var price = row.insertCell(2);
    GasAmntArray.push(GetInput("GasAmnt"));
    GasPricesArray.push(GetInput("SaleAmnt"));

    date.innerHTML = $("inputDate").value;
    gas.innerHTML = GetInput("GasAmnt") + " Gallon(s)";
    price.innerHTML = "$" + GetInput("SaleAmnt");

    alert(GasAmntArray);
    alert(GasPricesArray);

        var GasAmntSum = 0;
        var GasSaleSum = 0;

    for (i = 0; i < GasAmntArray.length; i++){
        GasAmntSum += GasAmntArray[i];
    }
    $("divTotalGas").innerHTML = GasAmntSum.toFixed(2) + " Gallons";

    for (i = 0; i < GasPricesArray.length; i++){
        GasSaleSum += GasPricesArray[i];
    }
    $("divTotalGasSales").innerHTML = "$" + GasSaleSum.toFixed(2);
}



function CalcCategoriesTotal() {
    var total;

    total = Rent + Mortgage + Water + Gas + Electric + TV + Internet + CellPhone +
    HomePhone + Pet + CreditCard + Groceries + Restaurants + Entertainment + Savings +
    Investments + Other;

    return total
}