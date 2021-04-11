/* js file for 2 */
function square(val){
    return val*val;
}
function map(){
    if(arguments[0].length!=0){
        return [arguments[1](arguments[0][0])].concat(map(arguments[0].slice(1),arguments[1]));
    }
    
}
function task2(){
    document.getElementById('square').innerHTML='Sqaure: ' + map([1,2,3,4,5],square);
    document.getElementById('squareroot').innerHTML='Square Root: ' + map([1,4,9,16,25],Math.sqrt);
}
