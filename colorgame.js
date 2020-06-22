var level;
var color=generaterandomcolor(level);
 var squares = document.querySelectorAll(".square");
 var pickedcolor=pickcolor();
 var colordisplay=document.getElementById("colordisplay");
var messagedispaly=document.getElementById("colormessage");
var h1=document.querySelector("h1");
var reset1=document.querySelector("#reset");
 var modbutton=document.querySelectorAll(".mode");



main();


function main(){
setsquares();
level=3;
modbutton[0].classList.add("selected")
reset();
setmode();
}





 function reset() {
	color=generaterandomcolor(level);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
messagedispaly.textContent=" "
reset1.textContent="New Game"
h1.style .background="steelblue";
for(var i=0; i<squares.length; i++){ 
	if(color[i])
	{
 	squares[i].style.background=color[i];
 	squares[i].style.display="block";
 }
 else
 squares[i].style.display="none";
 }	
}







function setmode(){
 for(var i=0;i<modbutton.length;i++){
 	modbutton[i].addEventListener("click",function(){
 		for(var i=0;i<modbutton.length;i++){
 		modbutton[i].classList.remove("selected")
 	}
 	this.classList.add("selected")
 	if(this.textContent==="Easy")
 		level=3;
 	else if(this.textContent==="Medium")
 		level=6;
 	else
 		level=9;
 	reset();
 });
}
 }

 

reset1.addEventListener("click",function(){
	reset();
})
 




function setsquares(){
 colordisplay.textContent=pickedcolor;
 for(var i=0; i<squares.length; i++){ 
 	squares[i].addEventListener("click",function()
 	{
 		var clickedcolor= this.style.background;
 		// alert(clickedcolor+", "+pickedcolor)
 if(clickedcolor === pickedcolor){
 	//alert("Correct
 	changecolor(clickedcolor);
 	messagedispaly.textContent="Correct"
 	h1.style.background=clickedcolor; 
 	reset1.textContent="Play Again?"
 	 } else{
 	//alert("Wrong!");
this.style.background="#232323";
messagedispaly.textContent="Try Again"
 }
});
 }
}



 function changecolor(colors){
 	for(var i=0; i<squares.length; i++){ 
 	squares[i].style.background=colors;
 }}


 function pickcolor() {
 	var random=Math.floor(Math.random() * color.length);
 	return color[random];
 }



 function generaterandomcolor(num) {
 	var arr=[];
for(var i=0;i<num;i++)
{
//arr.push(randomcolor());
arr[i]=randomcolor();
}
 	return arr;
 }
  

 function randomcolor() {
 	var r=Math.floor(Math.random() * 256);
 	var g=Math.floor(Math.random() * 256);
 	var b=Math.floor(Math.random() * 256);
return "rgb(" + r +", "+ g +", "+ b +")";
 }
 
