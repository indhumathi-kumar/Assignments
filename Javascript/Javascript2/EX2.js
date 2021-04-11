/* js file 2*/

function square(val){
    return val*val;
}
function double(val){
    return val*2;
}
function compose(){
    arg1=arguments[0];
    arg2=arguments[1];
    return function(val){
             return arg1(arg2(val));
    }
}

function task2(){
    var fun1=compose(square,double);
    var val=document.getElementById('entry2').value;
    document.getElementById('func1').innerHTML="output1 " + fun1(val);
    
    var fun2=compose(double,square);
    document.getElementById('func2').innerHTML="output 2" + fun2(val);
}
