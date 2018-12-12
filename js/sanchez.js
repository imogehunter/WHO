// JavaScript Document

$(document).ready(function() {
  $.ajax({
         type: "POST",
         enctype: 'multipart/form-data',
         url: "../insertUserSanchez.php",
         data: "",
         processData: false,//prevents from converting into a query string
         contentType: false,
         cache: false,
         timeout: 600000,
         success: function (response) {
         //reponse is a STRING (not a JavaScript object -> so we need to convert)
         console.log(response);
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
  if(parseInt(response)>30){
    document.getElementsByClassName('sanchez1Image')[0].src = "img/Bourdin/head.left.2.png";
  }
console.log(parseInt(response));
  if(parseInt(response)>35){
    document.getElementsByClassName('sanchez2Image')[0].src = "img/Bourdin/left.eye.png";
  }
console.log(parseInt(response));
  if(parseInt(response)>40){
    document.getElementsByClassName('sanchez3Image')[0].src = "img/Bourdin/mouth.chin.png";
  }
console.log(parseInt(response));
  if(parseInt(response)>45){
    document.getElementsByClassName('sanchez4Image')[0].src = "img/Bourdin/right.eye.2.png";
  }
console.log(parseInt(response));
  if(parseInt(response)>50){
    document.getElementsByClassName('sanchez5Image')[0].src = "img/Bourdin/left.ear.2.png";
  }
console.log(parseInt(response));
  if(parseInt(response)>55){
    document.getElementsByClassName('sanchez6Image')[0].src = "img/Bourdin/nose.2.png";
  }
console.log(parseInt(response));
  if(parseInt(response)>60){
    document.getElementsByClassName('sanchez7Image')[0].src = "img/Bourdin/left.eye.2.png";
  }

// BIO
console.log(parseInt(response));
if(parseInt(response)>30){
  document.getElementById("bio").innerHTML = "<b>Ruben Sanchez:</b><br>In a children’s home and secondary school in Pau, south-western France, Ruben Sanchez sought the help of Algerian immigrant named Kaci.. No one blinked an eye with Sanchez’s perfect teenage gestures and slang, as well as his husky pubescent voice. Initially, his impersonations were always fictional, he would spend time creating a name and a back story for each character he assumed. It was not until a month into his stay that it was apparent that Sanchez was not in fact that teenage kid he was pretending to be, after a teacher stumbled upon a television programme recounting the life story of  the infamous impersonator, Kaci.";
}
console.log(parseInt(response));
if(parseInt(response)>40){
  document.getElementById("bio").innerHTML = "<b>Bourdin Sanchez:</b><br>Frederic Bourdin was born in Nanterre. He was raised by his grandparents, Ruben Sanchez sought the help of social workers and students for refuge and safety after  stating that he had run away when both his parents were killed in a car crash. Fatherless, and with a mother who was frequently distracted, Bourdin was an outcast mostly at school. Initially, his impersonations were always fictional, he would spend time creating a name and a back story for each character he assumed. No one blinked an eye, only to return to Europe and continue to impersonate orphans. Over his career, Bourdin claims to have taken on as many as 40 false identities. Many wonder why Bourdin committed so many impersonations… was it for money, fame?";
}
console.log(parseInt(response));
if(parseInt(response)>50){
  document.getElementById("bio").innerHTML = "<b>Frederic Bourdin:</b><br>Frederic Bourdin was born in Nanterre. He was raised by his grandparents, until he ran away and eventually went to Paris. He never knew his father, whom his mother stated was a married Algerian immigrant named Kaci. Fatherless, and with a mother who was frequently distracted, Bourdin was an outcast mostly at school. Initially, his impersonations were always fictional, he would spend time creating a name and a back story for each character he assumed. Over his career, Bourdin claims to have taken on as many as 40 false identities. After a long career of impersonations, today Bourdin seems to have found contentment in his own identity. Many wonder why Bourdin committed so many impersonations… was it for money, fame? Bourdin himself has actually commented on this, stating that I want to be loved, quite simply, he said. I will stop at nothing to be listened to, to have people look after me.";
}

// LINKS
console.log(parseInt(response));
if(parseInt(response)>30){
  document.getElementById("link").href = "/Balley.html";
}
console.log(parseInt(response));
if(parseInt(response)>40){
  document.getElementById("link2").href = "/Barclay.html";
}

// BG
console.log(parseInt(response));
if(parseInt(response)>30){
  document.getElementsByTagName("body")[0].className  = "bodiesChange";
}
console.log(parseInt(response));
if(parseInt(response)>40){
  document.getElementsByTagName("body")[0].className  = "bodiesChange2";
}
console.log(parseInt(response));
if(parseInt(response)>50){
  document.getElementsByTagName("body")[0].className  = "bodiesChange3";
}

// TEXT/BIO
console.log(parseInt(response));
if(parseInt(response)>30){
  document.getElementById("bio").setAttribute("style","box-shadow:0 0 0 10px ##4a4a4a");
}

console.log(parseInt(response));
if(parseInt(response)>45){
  document.getElementById("bio").setAttribute("style","box-shadow:0 0 0 10px #000000");
}



}
