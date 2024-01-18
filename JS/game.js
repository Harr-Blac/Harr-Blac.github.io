var canvas = document.querySelector("canvas");
canvas.width = 1920;
canvas.height = 947;
var surface = canvas.getContext("2d");

var uInt;
uInt = setInterval(update, 33.34);

function update()
{
	render(); 
}

function render()
{
	surface.clearRect(0,0,canvas.width,canvas.height);

    surface.drawImage(aim, aim.x, aim.y, aim.width, aim.height);
	surface.drawImage(pit, pit.x, pit.y, pit.width, pit.height);
}