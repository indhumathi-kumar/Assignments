/* js file for 1 */
function isEven(val){
    return (val % 2 == 0);
}
function find(){
    if(arguments[0].length> 0 ){
        if(arguments[1](arguments[0][0])){
            return arguments[0][0];
        }
        return find(arguments[0].slice(1),arguments[1]);
    }

}
function task1(){
    var val=document.getElementById('entry5').value;  
        document.getElementById('even').innerHTML="Even: " + isEven(val);
        document.getElementById('adv').innerHTML= "Result: " + find([1,3,4,5,6],isEven);
}