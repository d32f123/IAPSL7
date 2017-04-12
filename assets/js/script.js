function clear1() {
	var x = document.getElementById("xfield");
	x.value = "";
	var y = document.getElementById("yfield");
	y.selectedIndex ="4";
	var r = document.getElementById("rfield");
	r.value = "";
}

function btnchk() {
	var x = parseFloat(document.getElementById("xfield").value);
	var r = parseFloat(document.getElementById("rfield").value);
	var btn = document.getElementById("submitbtn");
	if (isNaN(x) || x < -5.0 || x > 5.0 || isNaN(r) || r < 2.0 || r > 5.0)
	{
		btn.disabled = true;
	}
	else
		btn.disabled = false;
}

function xchk(textbox) {
	var num = parseFloat(textbox.value);
	if (isNaN(num) || num < -5.0 || num > 5.0)
	{
		textbox.style.outline = "2px solid red";
		textbox.style.outlineRadius = "4px";
	} else
	{
		textbox.style.outline = "solid 1px #f2f2f2"
		textbox.style.outline = "none";
	}
	btnchk();
}

function rchk(textbox) {
	var num = parseFloat(textbox.value);
	if (isNaN(num) || num < 2.0 || num > 5.0)
	{
		textbox.style.outline = "2px solid red";
		textbox.style.outlineRadius = "4px";
	} else
	{
		textbox.style.outline = "solid 1px #f2f2f2"
		textbox.style.outline = "none";
	}
	btnchk();
}