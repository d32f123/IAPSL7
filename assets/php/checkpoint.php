<!DOCTYPE html>
<html>
<head>
	<title>PHP script</title>
	<link rel="stylesheet" href="../css/style.css">
</head>
<body>

	<div class="main">

		<div class="header">
			<div class="logo">
				<div class="logo_text">
					<h1><a href="../..">Лаба 1</a></h1>
					<h2>Нестеров Андрей, P3211</h2>
					<h2>Вариант 3005</h2>
				</div>
			</div>

			<div class="menubar">
				<ul class="menu">
					<li class="selected"><a href="../..">Лаба 1</a></li>
					<li><a href="#">Лаба 2</a></li>
					<li><a href="#">Лаба 3</a></li>
					<li><a href="#">Лаба 4</a></li>
				</ul>
			</div>
		</div>

		<div class="site_content">

			<div class="content">
					
					<h1>Ответ</h1>

					<div class="films_block">
						
						<a href="#"><img src="../img/areas.png" /></a>

					</div>

					<div class="main_block">
					
						<hr>

						<div class="main_content">
							<table name="table" cellspacing="0" cellpadding="0">
								<?php
									$answer = true;
									$x = $_GET["x_field"];
									$y = $_GET["y_field"];
									$r = $_GET["r_field"];
									$file = fopen("bd.txt", "a+");
									fwrite($file, "" . $x . "x" . $y . "x" . $r . "x" . "\n");
									fclose($file);
									$file = fopen("bd.txt", "r");
									while (($line = fgets($file)) !== false)
									{
										$arr = explode("x", $line, 100);
										echo "<tr><td class=\"leftcol\">X:</td><td class=\"rightcol\">$arr[0]</td></tr><tr><td class=\"leftcol\">Y:</td><td class=\"rightcol\">$arr[1]</td></tr><tr><td class=\"leftcol\">R:</td><td class=\"rightcol\">$arr[2]</td></tr>";
										if ($x >= 0 && $y >= 0) // first quadrant
										{
											$answer = false;
										} elseif ($x < 0 && $y >= 0) // second quadrant
										{
											if ($x >= (-$r) && $y <= $r)
											{
												$answer = true;
											} else {
												$answer = false;
											}
										} elseif ($x < 0 && $y < 0) // third quadrant
										{
											if ((-$x) - $r < $y)
											{
												$answer = true;
											} else {
												$answer = false;
											}
										} else
										{
											if ($x * $x + $y * $y < $r * $r)
											{
												$answer = true;
											} else {
												$answer = false;
											}
										}
										if ($answer)
											echo "<tr><td class=\"leftcol\">Ответ:</td><td class=\"rightcol\">Принадлежит</td></tr>";
										else
											echo "<tr><td class=\"leftcol\">Ответ:</td><td class=\"rightcol\">Не принадлежит</td></tr>";
										echo "<hr>"
									}
								?>
							</table>
						</div>

					</div>

			</div>
		</div>
		<div class="footer">
				<p>
					<a href="../..">Лаба 1</a> |
					<a href="#">Лаба 2</a> |
					<a href="#">Лаба 3</a> |
					<a href="#">Лаба 4</a>
				</p>
				<p>d32f123@yandex.ru</p>
			</div>
		</div>
</body>
</html>
