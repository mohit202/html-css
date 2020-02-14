var person = [
    {"firstname":"rahul","lastname":"kumar","dob":"06-05-1998"},
    {"firstname":"sachin","lastname":"kumar","dob":"08-06-1999"},   
]
function table(person){
var table = document.getElementById("mytable")
for(var i=0; i < person.length; i++)
{
    var row = `<tr>
    <td> ${person[i].firstname}</td>
    <td> ${person[i].lastname}</td>
    <td> ${person[i].dob}</td>
    </tr>`
    table.innerHTML+=row;
}
}
table(person);
 document.getElementById("tablelen").innerHTML=("the person length :"+person.length);