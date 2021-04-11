/*js2 file*/

function sFunction() {

    var one = prompt(" Enter the number"); 
    var as1 = "";

    if (one < 30 ) {
    for(i=0;i<one;i++){
        
      as1 = as1 +"*" ;
    
    }}
    else {
      as1 = "Please Enter valid input";
    }

    document.getElementById("one").innerHTML = as1;

    var two =prompt("Enter the second number");
    var as2 = "";

    if (two < 30 ) {
    for(i=0;i<two;i++){
        as2 = as2 + "*" ;
    
    }}
    else {
      as2 = "Please Enter valid input";
    }
    
    document.getElementById("two").innerHTML = as2;

    var third =prompt("Enter the third number");
    var as3 = "";

    if (third < 30 ) {
    for(i=0;i<third;i++){
        as3 = as3 + "*" ;
    
    }}
    else {
      as3 = "Please Enter valid input";
    }
    
    document.getElementById("three").innerHTML = as3;

  }
  sFunction();