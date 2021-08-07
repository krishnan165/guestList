
var array1=[];

function add_guest()
{
var name_guests=document.getElementById("addguest").value;

array1.push(name_guests);
console.log(array1);
document.getElementById("addedguests").innerHTML=array1;
}
function show()
{
    document.getElementById("sortedguest").innerHTML=array1.sort();
    console.log(array1.sort());
    
}
