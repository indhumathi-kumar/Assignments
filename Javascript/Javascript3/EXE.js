/* rectagle */

class Rectangle{
        constructor(width, height){
                  this.height = height;
                  this.width = width;
    }
}
Rectangle.prototype.getArea = function getArea(){
    return this.height * this.width;
}

/* Ques 1 */
function properties(){
    var object1 = new Rectangle(4, 5);
    document.getElementById('output1').innerHTML = "Height= " + object1.height + ",Width = " + object1.width;
}

/* Ques 2 */
function area(){
    var object2 = new Rectangle(4, 5);
    document.getElementById('output2').innerHTML = "Area of Reactangle = " + object2.getArea();
}

/* Ques 3 */
function area2(){
    const r = new Rectangle(4, 5);
    r.height = 50;
    document.getElementById('output3').innerHTML = "Area of Reactangle Width : " + r.width + " Height : " + r.height + " is = " + r.getArea()
}

/* Ques 4 */
let NameDetails = {firstName: 'Indhu', lastName: 'Mathi'};
console.log(NameDetails);
NameDetails.lastName = 'Ranjith';
console.log(NameDetails);

/* Ques 5 */
NameDetails.middleName = 'Kumar';
console.log(NameDetails);

/* Ques 6 */
var string = "{firstName: 'Indhu', lastName: 'Mathi'}";
eval('var object = ' + string);
console.log("eval = ", object);

/* Ques 7 */
var str = '{ "fisrtName": "Indhu", "lastName": "Mathi" }';
var object1 = JSON.parse(str);
console.log("JSON.parse() = ", object1);