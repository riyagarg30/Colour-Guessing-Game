totalColors=6
var colors= generateRandomColors(totalColors);

var squares = document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector("#message");
var head=document.querySelector("h1");
var newColors=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
console.log(newColors);
colorDisplay.textContent= pickedColor;

for (var i = 0; i <totalColors; i++) {
	
	squares[i].style.backgroundColor = colors[i];
	

	squares[i].addEventListener('click',function (){
		var clickedColor=this.style.backgroundColor;

		if(clickedColor===pickedColor)
		{
			messageDisplay.textContent="Correct";
			changeColors();
			head.style.backgroundColor=pickedColor;
		}
		else
		{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again";
		}
	});
}

easy.addEventListener('click',function(){
	totalColors=3;
	easy.classList.add("selected");
	hard.classList.remove("selected");
	squares[3].style.backgroundColor="#232323";
	squares[4].style.backgroundColor="#232323";
	squares[5].style.backgroundColor="#232323";
	head.style.backgroundColor="steelblue";
	colors= generateRandomColors(totalColors);
	pickedColor=pickColor();
	for (var i = 0; i <totalColors; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	messageDisplay.textContent="";
	colorDisplay.textContent=pickedColor;
});

hard.addEventListener('click',function(){
	totalColors=6;
	colors= generateRandomColors(totalColors);
	hard.classList.add("selected");
	easy.classList.remove("selected");
	pickedColor=pickColor();
	head.style.backgroundColor="steelblue";
	for (var i = 0; i <totalColors; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	messageDisplay.textContent="";
	colorDisplay.textContent=pickedColor;
});

newColors.addEventListener('click', function(){
	colors= generateRandomColors(totalColors);
	//console.log(colors);
	pickedColor=pickColor();
	head.style.backgroundColor="steelblue";
	//console.log(pickedColor);
	for (var i = 0; i <totalColors; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	messageDisplay.textContent="";
	colorDisplay.textContent=pickedColor;
});

function changeColors()
{
	for (var i = 0; i < totalColors; i++) {
		squares[i].style.backgroundColor=pickedColor;
	}
}

function pickColor(){
	random=Math.floor(Math.random() * colors.length);
	console.log(random);
	return (colors[random]);
}

function generateRandomColors(count){

	var red, green, blue;
	var cols=[];

	for (var i = 0; i < count; i++) {
		red=Math.floor(Math.random() * 256);
		green=Math.floor(Math.random() * 256);
		blue=Math.floor(Math.random() * 256);

		generatedColor="rgb(" + red + ", " + green + ", "+ blue + ")";
		console.log(generatedColor);
		cols.push(generatedColor);
	}

	return cols;
}