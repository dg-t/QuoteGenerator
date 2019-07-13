// my variables containing quotes fragments
var wellness = {
    start: ["Eating", "Exercising", "Medxiting"],
   middle: ["its great for", "will lead you", "can give you"],
   end: ["to wellbeing", "be wise", "strength"]
};
 
 var positivism = {
    start: ["I am always", "Sometimes", "Remember"],
    middle: ["looking for", "one moment", "is possible"],
    end: ["good things", "change the world", "beleive in change"]
};
 
// function with for loop and condition statement for create quote
 function createQuote() {
     var number = document.getElementById("quoteNumber").value;
   var quote="";
     for (var i = 0; i < number; i++) {
         if (document.getElementById("quoteNumber").value >= 6){
          alert("Error: Number must be between 1 and 5!")
          break;
     } else if (document.getElementById("chooseOption").value==="wellness"){
       sub = wellness;
     } else if (document.getElementById("chooseOption").value==="positivism"){ 
      sub = positivism;
     }
     quote += sub.start[Math.floor(Math.random()*sub.start.length)]+" "
     +sub.middle[Math.floor(Math.random()*sub.middle.length)]+" "
     +sub.end[Math.floor(Math.random()*sub.end.length)]+"!"
     +"\n";
   }
       return quote;
 }
 
 // function to display quote
 function displayQuote() {
     var show = document.getElementById("diplay");
     show.innerText=createQuote();
 }
 
 displayQuote();

 function removeQuotes() {
    window.location.reload();
} 

