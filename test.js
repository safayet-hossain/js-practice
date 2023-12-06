
// time formating 
//coverting yy-mm-dd to dd-mm-yy
function hello(date){
    var date = new Date(date);
    var dd =date.getDate();
    var mm=date.getMonth()+1;
    var yy=date.getFullYear();
    return `${dd}/${mm}/${yy}`; 

}; 

console.log(hello("2023-02-20"))