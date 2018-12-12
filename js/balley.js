// JavaScript Document

$(document).ready(function() {
  $.ajax({
         type: "POST",
         enctype: 'multipart/form-data',
         url: "../insertUserBalley.php",
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
  if(parseInt(response)>37){
    //console.log(document.getElementsByClassName('balley1')[0]);
    document.getElementsByClassName('balley1Image')[0].src = "img/Bourdin/head.left.2.png";
  }
console.log(parseInt(response));
  if(parseInt(response)>43){
    //console.log(document.getElementsByClassName('balley1')[0]);
    document.getElementsByClassName('balley2Image')[0].src = "img/Bourdin/mouth.2.png";
  }
console.log(parseInt(response));
  if(parseInt(response)>48){
    //console.log(document.getElementsByClassName('balley1')[0]);
    document.getElementsByClassName('balley3Image')[0].src = "img/Bourdin/mouth.chin.png";
  }
console.log(parseInt(response));
  if(parseInt(response)>52){
    //console.log(document.getElementsByClassName('balley1')[0]);
    document.getElementsByClassName('balley4Image')[0].src = "img/Bourdin/left.eye.png";
  }
console.log(parseInt(response));
  if(parseInt(response)>58){
    //console.log(document.getElementsByClassName('balley1')[0]);
    document.getElementsByClassName('balley5Image')[0].src = "img/Bourdin/nose.2.png";
  }
console.log(parseInt(response));
  if(parseInt(response)>61){
    //console.log(document.getElementsByClassName('balley1')[0]);
    document.getElementsByClassName('balley6Image')[0].src = "img/Bourdin/left.ear.png";
  }
console.log(parseInt(response));
  if(parseInt(response)>65){
    //console.log(document.getElementsByClassName('balley1')[0]);
    document.getElementsByClassName('balley7Image')[0].src = "img/Bourdin/right.eye.png";
  }

  // BIO
  console.log(parseInt(response));
  if(parseInt(response)>40){
    document.getElementById("bio").innerHTML = "<b>Leo Balley:</b><br>In 1996 on a trip in Nanterre. , France, 6 year old Leo Balley disappeared from his families camp site in the 2000m high Paris mountain, around 5.30pm. He never knew his father, whom his mother stated was a married Algerian immigrant named Kaci. Fatherless, and with a mother who was frequently distracted, he was never seen again, despite extensive search and investigation efforts. The case was thought to be closed until 8 years later in 2003, when Leo  served six years in prison for the deception, only to return to Europe and continue to impersonate orphans. However, DNA testing found that in-fact it was not Leo at all, but again an elaborate impersonation by Frederic Bourdin’s after his recent release from prison for impersonating Nicholas Barclay.";
  }
  console.log(parseInt(response));
  if(parseInt(response)>50){
    document.getElementById("bio").innerHTML = "<b>Bourdin Balley:</b><br>Leo Balley was born in Nanterre. He was raised by his grandparents, until he ran away and eventually went to Paris. He never knew his father, whom his mother stated was a married Algerian immigrant named Kaci.  Initially, he served six years in prison for the deception, only to return to Europe and continue to impersonate orphans. Over his career, Bourdin claims to have taken on as many as 40 false identities. The case was thought to be closed until 8 years later in 2003, when Leo reappeared, claiming to have escaped from his abductor. Many wonder why Bourdin committed so many impersonations… was it for money, fame? Bourdin himself has actually commented on this, stating that I want to be loved, quite simply, he said. I will stop at nothing to be listened to, to have people look after me";
  }
  console.log(parseInt(response));
  if(parseInt(response)>60){
    document.getElementById("bio").innerHTML = "<b>Frederic Bourdin:</b><br>Frederic Bourdin was born in Nanterre. He was raised by his grandparents, until he ran away and eventually went to Paris. He never knew his father, whom his mother stated was a married Algerian immigrant named Kaci. Fatherless, and with a mother who was frequently distracted, Bourdin was an outcast mostly at school. Initially, his impersonations were always fictional, he would spend time creating a name and a back story for each character he assumed. Over his career, Bourdin claims to have taken on as many as 40 false identities. After a long career of impersonations, today Bourdin seems to have found contentment in his own identity. Many wonder why Bourdin committed so many impersonations… was it for money, fame? Bourdin himself has actually commented on this, stating that I want to be loved, quite simply, he said. I will stop at nothing to be listened to, to have people look after me.";
  }

  // LINKS
  console.log(parseInt(response));
  if(parseInt(response)>45){
    document.getElementById("link").href = "/Sanchez.html";
  }
  console.log(parseInt(response));
  if(parseInt(response)>55){
    document.getElementById("link2").href = "/Barclay.html";
  }

  // BG
  console.log(parseInt(response));
  if(parseInt(response)>40){
    document.getElementsByTagName("body")[0].className  = "bodiesChange";
  }
  console.log(parseInt(response));
  if(parseInt(response)>50){
    document.getElementsByTagName("body")[0].className  = "bodiesChange2";
  }
  console.log(parseInt(response));
  if(parseInt(response)>60){
    document.getElementsByTagName("body")[0].className  = "bodiesChange3";
  }

  // TEXT/BIO
  console.log(parseInt(response));
  if(parseInt(response)>45){
    document.getElementById("bio").setAttribute("style","box-shadow:0 0 0 10px ##4a4a4a");
  }

  console.log(parseInt(response));
  if(parseInt(response)>55){
    document.getElementById("bio").setAttribute("style","box-shadow:0 0 0 10px #000000");
  }

}
