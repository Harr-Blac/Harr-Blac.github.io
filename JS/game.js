var canvas = document.querySelector("canvas");
canvas.width = 1920;
canvas.height = 947;
var surface = canvas.getContext("2d");

var gPressed = false;
var gdone = true;

window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);

const conR = document.querySelector(".containerR");
const conL = document.querySelector(".containerL");

var uInt;
uInt = setInterval(update, 33.34);

function update()
{
	render(); 
    if (gPressed == true && gdone == true)
	{
        conR.classList.toggle("spreadOpenR");
        conL.classList.toggle("spreadOpenL");
        gdone = false;
	}
}

function onKeyDown(event)
{
	switch (event.keyCode)
	{
		case 71:
			gPressed = true;
			break;
	} 
}

function onKeyUp(event)
{
	switch (event.keyCode)
	{
		case 71:
			gPressed = false; 
			break;
	}
}

function render()
{
	surface.clearRect(0,0,canvas.width,canvas.height);

    surface.drawImage(aim, aim.x, aim.y, aim.width, aim.height);
	surface.drawImage(pit, pit.x, pit.y, pit.width, pit.height);
    surface.drawImage(cntrscrn, cntrscrn.x, cntrscrn.y, cntrscrn.width, cntrscrn.height);
}