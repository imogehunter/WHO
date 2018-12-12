<?php

class MyDB extends SQLite3
   {
      function __construct()
      {
          $this->open('db/whoiswho.db');
      }
   }

try
{
   $db = new MyDB();
}

catch(Exception $e)
{
   die($e);
}
//check if there has been something posted to the server to be processed
if($_SERVER['REQUEST_METHOD'] == 'POST')
{
  //echo("in php");
  $sql_select='SELECT userCountBalley FROM whoTable WHERE pieceID =1';
  $result = $db->query($sql_select);
  if (!$result) die("Cannot execute query.");

 $row = $result->fetchArray(SQLITE3_ASSOC);
  // note the result from SQL is ALREADy ASSOCIATIVE
 $value  = $row["userCountBalley"];
 $value = $value+1;

 $sql_update="UPDATE whoTable SET userCountBalley = '$value' WHERE pieceID =1";
 $ok1 = $db ->exec($sql_update);
 if (!$ok1) die("Cannot execute statement.");

//endcode the resulting array as JSON
$myJSONObj = json_encode($value);
echo $myJSONObj;
exit;
}

?>
