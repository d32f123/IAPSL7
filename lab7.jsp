<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<meta name="description" content="5 Лаба" />
	<meta name="keywords" content="lab5,itmo" />
	<link rel="stylesheet" href="assets/css/style.css">
	<script src="assets/js/l7.js"></script>
</head>
<body>

	<div class="main">

		<div class="header">
			<div class="logo">
				<div class="logo_text">
					<h1><a href=".">Лаба 2</a></h1>
					<h2>Нестеров Андрей, P3211</h2>
					<h2>Вариант 3103</h2>
				</div>
			</div>

			<div class="menubar">
				<ul class="menu">
					<li class="selected"><a href=".">Лаба 2</a></li>
				</ul>
			</div>
		</div>

		<div class="site_content">

			<div class="content">

				<h1>Задача</h1>

				<div class="films_block">

					<a href="#"><img src="assets/img/areas2.png" /></a>

				</div>

				<div class="main_block">

					<hr>
					<h2>Интерактивный элемент</h2>
					<div class="interactive_element">
						<canvas id="graph" onclick="setPoint(event)" width="600" height="600"></canvas>
					</div> 

					<h2>Формы</h2>
					<div class="main_content">
						<form method="post" action="assets/php/checkpoint.php" id="getdata">
						<table name="table" cellspacing="0" cellpadding="0">
						
   							<tr> 
    						<td class="leftcol">Введите X:</td><td class="rightcol"><li>
    							<ul><input type="checkbox" name="xBox" value="-4"> -4 </ul>
                				<ul><input type="checkbox" name="xBox" value="-3"> -3 </ul>
                				<ul><input type="checkbox" name="xBox" value="-2"> -2 </ul>
                				<ul><input type="checkbox" name="xBox" value="-1"> -1 </ul>
                				<ul><input type="checkbox" name="xBox" value="0"> 0 </ul>
                				<ul><input type="checkbox" name="xBox" value="1"> 1 </ul>
                				<ul><input type="checkbox" name="xBox" value="2"> 2 </ul>
                				<ul><input type="checkbox" name="xBox" value="3"> 3 </ul>
                				<ul><input type="checkbox" name="xBox" value="4"> 4 </ul></li>
                			</td>
   							</tr>
   							<tr>
							<td class="leftcol">Введите Y:</td><td class="rightcol"><input onfocusout="ychk(this)" id="y_field" type="text" name="y_field" placeholder="Y"/></td>
   							</tr>
   							<tr>
   							<td class="leftcol">Введите R:</td><td class="rightcol"><li>
                				<ul><input type="checkbox" onclick="selectRadius(0)" name="rBox" value="1"> 1 </ul>
                				<ul><input type="checkbox" onclick="selectRadius(1)" name="rBox" value="2"> 2 </ul>
                				<ul><input type="checkbox" onclick="selectRadius(2)" name="rBox" value="3"> 3 </ul>
                				<ul><input type="checkbox" onclick="selectRadius(3)" name="rBox" value="4"> 4 </ul>
                				<ul><input type="checkbox" onclick="selectRadius(4)" name="rBox" value="5"> 5 </ul></li>
            				</td>
   							</tr>
   							<tr>
								<td class="leftcol"><input id="submitbtn" type="submit" onload="btnchk()" disabled="true" class="btn" /></td><td class="rightcol"><button type="button" onclick="javascript: clear1(); return false;" class="btn" >Очистить</button></td>
   							</tr>
  						</table>
						</form>
					</div>
				</div>

			</div>

		</div>

	</div>

</body>
</html>