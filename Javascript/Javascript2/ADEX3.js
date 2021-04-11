/* js file for e */
function demo(){
    return function(input){
        return input*input;
    }
}
var anonymous=demo();

function task3(){
    var input=document.getElementById('entry6').value;
    document.getElementById('anonymousfunc').innerHTML='\' ' + anonymous(input) + ' \'';
}