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
    ValidateInput();

    DisplayLowFundsMsg();
}

function GetInput() {
    
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