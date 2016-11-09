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

var CategoriesTotal = 5;
var ContTotal = 4;


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

    CalcTotal();

    alert(CategoriesTotal);
    DisplayLowFundsMsg();
}

function GetInput(category) {
    var categoryAmnt;
    if (parseFloat($('txt' + category).value) > 0){
    categoryAmnt = parseFloat($("txt" + category).value);}
    else {categoryAmnt = 0}
    return categoryAmnt
}

function ValidateInput(Category) {
    GetInput(Category);
    
    if (parseFloat("txt" + Category) >= 0){
        
    }
        
    else {alert("Please Enter a Valid, Positive Number")}
}

function DisplayLowFundsMsg() {
    if (CategoriesTotal > ContTotal){
        $("divLowFunds").innerHTML = "You are over budget!"
    } else $("divLowFunds").innerHTML = "";
}

function AddtoTable() {
    var table = document.getElementById("GasTableBdy");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = document.getElementById("txtDate").value;
    cell2.innerHTML = document.getElementById("txtGasAmnt").value;
    cell3.innerHTML = document.getElementById("txtSaleAmnt").value;
}

function CalcTotal() {
    CategoriesTotal = Rent + Mortgage + Water + Gas + Electric + TV + Internet + CellPhone +
        HomePhone + Pet + CreditCard + Groceries + Restaurants + Entertainment + Savings +
        Investments + Other;
}