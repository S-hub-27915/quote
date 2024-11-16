 var addBtn=document.getElementById("addBtn")
  var quotes=[
"<div><p>''Sometimes the questions are complicated and the answers are simple.''</P>  Dr. Seuss</div>",
  "<div><p>''Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.''</p>  Lao Tzu</div>",
"<div><p>''I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.''</p> Albert Einstein</div>",
 "<div><p>''Live as if you were to die tomorrow. Learn as if you were to live forever.''</p> Mahatma Gandhi</div>",
 "<div><p>''Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.''</p>  Bill Keane</div>",
"<div><p>''You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go...''</p> Dr. Seuss</div>"
  ]
 
 
  addBtn.onclick =function(){
  var index=Math.floor( Math.random()*(quotes.length))
document.getElementById("quote").innerHTML=quotes[index];

}







   




  

 




