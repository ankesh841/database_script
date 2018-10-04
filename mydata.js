var hasrentals_array   = document.querySelectorAll('.hasrentals');
var displaycoursename =  document.querySelectorAll('#course-bookdisplay-coursename');
var regex = /[+-]?\d+(?:\.\d+)?/g;
var displayingbooks_coursename = [];
var booktitle = [];
var isbn = [];
var req_optional = [];
var abbrevation = [];
var coursenumber = [];



for(var i = 0;i<hasrentals_array.length;i++){
//if(hasrentals_array[i].querySelector('.course-required')){
if(hasrentals_array[i].querySelector('.book-title')!=null)
{
booktitle.push(hasrentals_array[i].querySelector('.book-title').innerHTML);
}
else if(hasrentals_array[i].querySelector('.book-title') == null){
	booktitle.push("NA");
}

if(hasrentals_array[i].querySelector('.isbn')!=null){
	isbn.push(hasrentals_array[i].querySelector('.isbn').innerHTML);
}
else if(hasrentals_array[i].querySelector('.isbn')==null){
	isbn.push("NA");
}
if(hasrentals_array[i].querySelector('.course-required')!=null){
	req_optional.push("Required");
}
else if(hasrentals_array[i].querySelector('.course-optional')!=null){
	req_optional.push("Optional");
}
else if(hasrentals_array[i].querySelector('.course-optional')==null){
	req_optional.push("NA");
}
else if(hasrentals_array[i].querySelector('.course-required')==null){
	req_optional.push("NA")
}
abbrevation.push(displaycoursename[i].innerHTML.slice(0,4));

if(displaycoursename[i].innerHTML.slice(0,15).match(regex)!=null)
{
	coursenumber.push(displaycoursename[i].innerHTML.slice(0,15).match(regex)[0]);
}
else if(displaycoursename[i].innerHTML.slice(0,15).match(regex)==null){
	coursenumber.push("NA");
}



}

console.log("isbn"+isbn.length);
console.log("book title"+booktitle.length);
console.log("displaycourse name"+displaycoursename.length);
console.log("required optional"+req_optional.length);
console.log("abrevation"+abbrevation.length);
console.log("coursenumber "+coursenumber.length);

for (var i = 0;i<displaycoursename.length;i++){
	console.log(displaycoursename[i].innerHTML.slice(0, 12)  + " "+booktitle[i]+" "+isbn[i] + " "+ req_optional[i]);
}

// for(var i = 0;i<displaycoursename.length;i++){
// 	

// firebase.database().ref(i).set({
// 						abrev:abbrevation[i],
// 						coursenumber:coursenumber[i],
// 						booktitle:booktitle[i],
// 						isbn:isbn[i],
// 						reqOrOptional:req_optional[i]
// 			 });


// }
