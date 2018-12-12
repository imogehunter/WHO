<?php

class MyDB extends SQLite3
   {
      function __construct()
      {
         $this->open('db/whoiswho.db');
      }
   }

// try
// {
//    $db = new MyDB();
//    echo ("Opened or created whoiswho data base successfully<br \>");
//    $theQuery = 'CREATE TABLE whoTable (pieceID INTEGER PRIMARY KEY NOT NULL, userCount INTEGER NOT NULL, userCountBalley INTEGER NOT NULL, userCountBarclay INTEGER NOT NULL, userCountSanchez INTEGER NOT NULL)';
//  $ok = $db ->exec($theQuery);
// 	// make sure the query executed
// 	if (!$ok)
// 	die($db->lastErrorMsg());
// 	// if everything executed error less we will arrive at this statement
// 	echo "Table whoiswho created successfully<br \>";
// }
try{
  $db = new MyDB();
  $theQuery = "INSERT INTO whoTable (userCount, userCountBalley,userCountBarclay,userCountSanchez) VALUES ('0','0','0','0')";
  $ok1 = $db->exec($theQuery);
   if (!$ok1)
   {
        die($db->lastErrorMsg());
  }
  echo("insertion successful");

}
catch(Exception $e)
{
   die($e);
}
?>
