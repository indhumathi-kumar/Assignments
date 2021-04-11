/* js file ex1*/

function square(val){
    return val*val;
}
function double(val){
    return val*2;
}
function composedValue(){
 document.getElementById('task1').innerHTML="output " + arguments[0](arguments[1](arguments[2]));

}
function task1(){
    var val=document.getElementById('entry1').value;
    
    composedValue(square,double,val);
}
