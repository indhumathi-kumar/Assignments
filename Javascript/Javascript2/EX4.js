/* js file for 4*/
function map(){
    array=[];
    for(i=0; i< arguments[0].length; i++){
        str=arguments[1](arguments[0][i]);
        array.push(str);
    }
    return array;
}

function task4(){
    document.getElementById('square').innerHTML='Sqaure ouput : ' + map([1,2,3,4,5],square);
    document.getElementById('root').innerHTML='Square root output : ' + map([1,4,9,16,25],Math.sqrt);
}
