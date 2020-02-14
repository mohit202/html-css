


var data = [{"id":28,"Title":"Sweden"}, {"id":56,"Title":"USA"}, {"id":89,"Title":"England"}];
document.writeln("<table border = '1' width = 100 >");
document.writeln("<tr><td>No Id</td><td>Title</td></tr>"); 
for(var i=0;i<data.length;i++){
document.writeln("<tr><td>"+data[i].id+"</td><td>"+data[i].Title+"</td></tr>");
}
document.writeln("</table>");