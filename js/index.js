// JavaScript Document

$(document).ready(function(){
 let userCount;
    $.ajax({
           type: "POST",
           enctype: 'multi-part/form-data',
           url: "../insertUser.php",
           data: "",
           processData: false,//prevents from converting into a query string
           contentType: false,
           cache: false,
           timeout: 600000,
           success: function (response) {
             console.log(response);
             //use the JSON .parse function to convert the JSON string into a Javascript object
             let parsedJSON = JSON.parse(response);
             console.log(parsedJSON);
             userCount = parsedJSON;
             displayResponse(parsedJSON);
          },
          error:function(){
         console.log("error occurred");
       }
     });

// IF/THEN

     function displayResponse(response){

    // BODY / BACKGROUND
       if(userCount>12){
         document.getElementsByTagName("body")[0].className  = "defaultChange";
       }
       if(userCount>20){
         document.getElementsByTagName("body")[0].className  = "defaultChange1";
       }
       if(userCount>28){
         document.getElementsByTagName("body")[0].className  = "defaultChange2";
       }
       if(userCount>35){
         document.getElementsByTagName("body")[0].className  = "defaultChange3";
       }

    // TITLE
      if(userCount>14){
        document.getElementById("title").innerHTML = "Who? Who’s";
        document.getElementById("title").style.color = "white";
    }
      if(userCount>22){
        document.getElementById("title").innerHTML = "? ??Who? Who’s";
        document.getElementById("title").style.color = "maroon";
    }
      if(userCount>30){
        document.getElementById("title").innerHTML = "W??h???wW?oho’s";
        document.getElementById("title").style.color = "red";
    }
      if(userCount>37){
        document.getElementById("title").innerHTML = "???????????";
        document.getElementById("title").style.color = "black";
    }

   // SUBTITLE
      if(userCount>12){
        document.getElementById("subtitle").innerHTML = "The lives of many Fredric Bourdins";
        document.getElementById("subtitle").style.color = "maroon";
    }
      if(userCount>20){
        document.getElementById("subtitle").innerHTML = "The Fredric of many lives Bourdins";
        document.getElementById("subtitle").style.color = "black";
    }
      if(userCount>28){
        document.getElementById("subtitle").innerHTML = "Bourdins Tliveshe of Frmanyedric ";
        document.getElementById("subtitle").style.color = "gray";
    }
      if(userCount>35){
        document.getElementById("subtitle").innerHTML = "The esoicBiour dfmal ivicBi nyFred rns";
        document.getElementById("subtitle").style.color = "white";
    }
  }

 });
