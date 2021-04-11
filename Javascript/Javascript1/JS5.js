  
var ck1;
var ck2;
var ck3;
var ck4;
var ck5;
var ck6;
var ck7;
function acceptInput()
{
    fname=document.getElementById('name1').value;
    emailid=document.getElementById('email1').value;
    
    document.getElementById('name').value = fname;
    document.getElementById('email2').value = emailid;

    var location =document.getElementById('address1').value;
    document.getElementById('address2').value = location;

    if(document.getElementById('option1').checked) { 
        document.getElementById("deliver").innerHTML 
            = document.getElementById("option1").value 
            + " "; 
    } 
    
    else  { 
        document.getElementById("deliver").innerHTML 
            = document.getElementById("option2").value 
            + "";   
    } 
    
    var item=document.getElementsByName('element');
    var selectedItem="";
    for(var i=0; i<item.length; i++){
        if(item[i].type=='checkbox' && item[i].checked==true)
            selectedItem +=item[i].value+"\n";
    }
      document.getElementById("cheek").innerHTML=selectedItem;



      selectedItems =  document.querySelector('#tips');
        
result = selectedItems.value;

document.querySelector('.output').textContent
      = result;



     
}