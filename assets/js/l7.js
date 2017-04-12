

R = 0;
k = 50;
x_val = [];
y_val = [];

function setRadius()
{
	rCheckBoxes = document.forms[0].elements.rBox;
	for (i = 0; i < rCheckBoxes.length; ++i)
	{
		if (rCheckBoxes[i].checked) 
		{
			R = rCheckBoxes[i].value;
		}
	}
}

function selectRadius(num) 
{
	rCheckBoxes = document.forms[0].elements.rBox;
	R = 0;
	for (i = 0; i < rCheckBoxes.length; ++i)
	{
		if (i != num && rCheckBoxes[i].checked)
		{
			rCheckBoxes[i].checked = false;
		}
		if (rCheckBoxes[i].checked)
		{
			R = rCheckBoxes[i].value;
		}
	}
	canvasFill();
}

function ychk(textbox) 
{
	var num = parseFloat(textbox.value);
	var btn = document.getElementById("submitbtn");
	if (isNaN(num) || num < -5.0 || num > 3.0)
	{
		textbox.style.outline = "2px solid red";
		textbox.style.outlineRadius = "4px";
		btn.disabled = true;
		
	} else
	{
		textbox.style.outline = "solid 1px #f2f2f2"
		textbox.style.outline = "none";
		btn.disabled = false;
	}
	selectRadius(2);
	//canvasFill();
}

function canvasFill()
{
	canvas = document.getElementById("graph");
	canvas.width = canvas.width;
	context = canvas.getContext("2d");
	if (R > 0)
	{
		drawFigure(context);
	}
	drawAxis(context);
}

function setPoint(event)
{
	rect = canvas.getBoundingClientRect();
	offset = (rect.width - canvas.width) / 2 + 1;
	x = event.clientX - rect.left - offset;
	y = event.clientY - rect.top - offset;
	if (R == 0)
	{
		alert("Set the R");
	}
	else
	{
		real_x = (x - 300) / k;
		real_y = -(y - 300) / k;
		x_val.push(real_x);
		y_val.push(real_y);
		doRequest([real_x], [real_y]);
	}
}

function drawPoint(context, x, y, doesBelong)
{
	context.beginPath();
	if (doesBelong)
	{
		context.fillStyle = "Blue";
	}
	else
	{
		context.fillStyle = "Red";
	}
	context.arc(x, y, 3, 0, 2*Math.PI);
	context.fill();
}

function drawAxis(context)
{

	context.beginPath();
	//Draw axis
	context.strokeStyle="#666666";
	context.moveTo(0, 300);
	context.lineTo(600, 300);
	context.moveTo(300, 0);
	context.lineTo(300, 600);
	context.closePath();
	context.stroke();
	//Draw arrows
	context.beginPath();
	context.strokeStyle="black";
	context.moveTo(590, 290);
	context.lineTo(600, 300);
	context.lineTo(590, 310);

	context.moveTo(290, 10);
	context.lineTo(300, 0);
	context.lineTo(310, 10);
	//Do the stroke
	
	context.stroke();
	context.closePath();
	//Label axis
	context.font = "22px Georgia";
	context.textBaseline="top";
	context.textAlign="left";
	context.fillStyle="black";
	context.fillText("Y", 310, 0);
	context.fillText("X", 585, 310);
	
	//Draw measures if radius is set
	if (R > 0)
	{
		context.beginPath();
		pixelsForRadius = R * k;
		//Draw x measures
		context.moveTo(300 - pixelsForRadius, 295);
		context.lineTo(300 - pixelsForRadius, 305);
		context.moveTo(300 - pixelsForRadius / 2, 295);
		context.lineTo(300 - pixelsForRadius / 2, 305);
		context.moveTo(300 + pixelsForRadius, 295);
		context.lineTo(300 + pixelsForRadius, 305);
		context.moveTo(300 + pixelsForRadius / 2, 295);
		context.lineTo(300 + pixelsForRadius / 2, 305);
		context.strokeStyle="black";
		context.stroke();
		//Draw y measures
		context.moveTo(295, 300 - pixelsForRadius);
		context.lineTo(305, 300 - pixelsForRadius);
		context.moveTo(295, 300 - pixelsForRadius / 2);
		context.lineTo(305, 300 - pixelsForRadius / 2);
		context.moveTo(295, 300 + pixelsForRadius);
		context.lineTo(305, 300 + pixelsForRadius);
		context.moveTo(295, 300 + pixelsForRadius / 2);
		context.lineTo(305, 300 + pixelsForRadius / 2);
		context.stroke();
		context.closePath();
	}
}

function drawFigure(context)
{
	pixelsForRadius = R * k;
	context.beginPath();
	context.fillStyle="#5c99ED";
	context.strokeStyle="#5c99ED";
	//Top-Left
	context.moveTo(300-pixelsForRadius, 299);
	context.lineTo(299, 300 - pixelsForRadius / 2);
	context.lineTo(299, 299);
	//Bottom-Left
	context.fillRect(300 - pixelsForRadius / 2, 301, pixelsForRadius / 2 - 1, pixelsForRadius - 1);
	//Bottom-Right
	context.fill();
	context.closePath();
	context.beginPath();
	context.arc(301, 301, pixelsForRadius / 2 - 1, 0, 0.5 * Math.PI);
	context.lineTo(301, 301);
	context.closePath();
	context.fill();
}