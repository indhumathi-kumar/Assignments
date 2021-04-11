/*js file 3*/
function isEven(val){
   return (val % 2 == 0);
}
function find(){
   for(i=0; i< arguments[0].length; i++){
        if(isEven(arguments[0][i]))
            return arguments[0][i];
    }
}
function task3(){
    var val=document.getElementById('entry3').value;  
    document.getElementById('even').innerHTML="Even: " + isEven(val);
    document.getElementById('task3').innerHTML= "Result: " + find([1,3,5,4,2]);
}