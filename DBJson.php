<?php

$con=mysql_connect("localhost","root","");//servername, username, password
$sel=mysql_select_db("web10",$con);

$data=mysql_query("select * from students");
$student='';
while($row=mysql_fetch_array($data))
{
	if($student!='')
	{
		$student.=",";
	}
$student.='{"name":"'.$row["name"].'","marks":"'.$row["marks"].'","email":"'.$row["email"].'","ind":"'.$row["ind"].'","id":"'.$row["rollno"].'"}';
}
echo "[".$student."]";
?> 