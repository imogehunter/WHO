// JavaScript Document

$(document).ready(function() {
  $.ajax({
         type: "POST",
         enctype: 'multipart/form-data',
         url: "../insertUserBarclay.php",
         data: "",
         processData: false,//prevents from converting into a query string
         contentType: false,
         cache: false,
         timeout: 600000,
         success: function (response) {
         //reponse is a STRING (not a JavaScript object -> so we need to convert)
         console.log("test"+response);
         displayResponse(response);
       //use the JSON .parse function to convert the JSON string into a Javascript object
       //let parsedJSON = JSON.parse(response);
       //console.log(parsedJSON);
        },
        error:function(){
       console.log("error occurred");
     }
   });
});
// JavaScript Document

function displayResponse(response){

// FACES
console.log(parseInt(response));
  if(parseInt(response)>70){
    //console.log(document.getElementsByClassName('balley1')[0]);
    document.getElementsByClassName('barclay1Image')[0].src = "img/Bourdin/head.right.2.png";
  }
console.log(parseInt(response));
  if(parseInt(response)>75){
    //console.log(document.getElementsByClassName('balley1')[0]);
    document.getElementsByClassName('barclay2Image')[0].src = "img/Bourdin/mouth.2.png";
  }
console.log(parseInt(response));
  if(parseInt(response)>80){
    //console.log(document.getElementsByClassName('balley1')[0]);
    document.getElementsByClassName('barclay3Image')[0].src = "img/Bourdin/mouth.chin.png";
  }
console.log(parseInt(response));
  if(parseInt(response)>85){
    //console.log(document.getElementsByClassName('balley1')[0]);
    document.getElementsByClassName('barclay4Image')[0].src = "img/Bourdin/left.eye.png";
  }
console.log(parseInt(response));
  if(parseInt(response)>90){
    //console.log(document.getElementsByClassName('balley1')[0]);
    document.getElementsByClassName('barclay5Image')[0].src = "img/Bourdin/mouth.2.png";
  }
console.log(parseInt(response));
  if(parseInt(response)>95){
    //console.log(document.getElementsByClassName('balley1')[0]);
    document.getElementsByClassName('barclay6Image')[0].src = "img/Bourdin/left.ear.png";
  }

  // BIO
  console.log(parseInt(response));
  if(parseInt(response)>72){
    document.getElementById("bio").innerHTML = "<b>Nicholas Barclay:</b><br>Frederic Bourdin was born in Nanterre.Three years later when he was 16 he was rediscovered by police officers, and despite his appearance drastically changing such as his darker hair, different eye colour and newfound accent,  until he ran away and eventually went to Paris, and were convinced that it was the same person.  Initially, his impersonations were always fictional, he would spend time creating a name and a back story for each character he assumed. Bourdin served six years in prison for the deception, Barclay had spend the last three years being tortured and forced into prostitution on a completely different continent. It would take Barclay’s family, and those around him fivelong careers of impersonations,. Many wonder why Bourdin committed so many impersonations…";
  }
  console.log(parseInt(response));
  if(parseInt(response)>83){
    document.getElementById("bio").innerHTML = "<b>Bourdin Barclay:</b><br>13 year old Nicholas Barclay was born in  San Antonio, Texas. He was raised by his grandparents, until he ran away and eventually went to Paris. He never knew his father, whom his mother stated was a married Algerian immigrant named Kaci. Fatherless, and with a mother who was frequently distracted,  his family did not notice anything unusual, and began impersonating orphans. Initially, his impersonations were always fictional, he would spend time creating a name and a back story for each character he assumed. Bourdin served six years in prison for the deception, only to return to Europe and continue to impersonate orphans. Over his career, Bourdin claims to have taken on as many as 40 false identities. After a long career of impersonations, today Bourdin seems to have found contentment in his own identity. Many wonder why Bourdin committed so many impersonations… was it for money, fame?";
  }
  console.log(parseInt(response));
  if(parseInt(response)>90){
    document.getElementById("bio").innerHTML = "<b>Frederic Bourdin:</b><br>Frederic Bourdin was born in Nanterre. He was raised by his grandparents, until he ran away and eventually went to Paris. He never knew his father, whom his mother stated was a married Algerian immigrant named Kaci. Fatherless, and with a mother who was frequently distracted, Bourdin was an outcast mostly at school. Initially, his impersonations were always fictional, he would spend time creating a name and a back story for each character he assumed. Over his career, Bourdin claims to have taken on as many as 40 false identities. After a long career of impersonations, today Bourdin seems to have found contentment in his own identity. Many wonder why Bourdin committed so many impersonations… was it for money, fame? Bourdin himself has actually commented on this, stating that I want to be loved, quite simply, he said. I will stop at nothing to be listened to, to have people look after me.";
  }

  // LINKS
  console.log(parseInt(response));
  if(parseInt(response)>73){
    document.getElementById("link").href = "/Sanchez.html";
  }
  console.log(parseInt(response));
  if(parseInt(response)>87){
    document.getElementById("link2").href = "/Balley.html";
  }


  // BG
  console.log(parseInt(response));
  if(parseInt(response)>70){
    document.getElementsByTagName("body")[0].className  = "bodiesChange";
  }
  console.log(parseInt(response));
  if(parseInt(response)>80){
    document.getElementsByTagName("body")[0].className  = "bodiesChange2";
  }
  console.log(parseInt(response));
  if(parseInt(response)>90){
    document.getElementsByTagName("body")[0].className  = "bodiesChange3";
  }

  // TEXT/BIO
  console.log(parseInt(response));
  if(parseInt(response)>75){
    document.getElementById("bio").setAttribute("style","box-shadow:0 0 0 10px ##4a4a4a");
  }

  console.log(parseInt(response));
  if(parseInt(response)>85){
    document.getElementById("bio").setAttribute("style","box-shadow:0 0 0 10px #000000");
  }






}
