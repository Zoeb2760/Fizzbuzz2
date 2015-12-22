$(document).ready(function() { 


   var game = Number(prompt("Please enter a number to see numbers divisble by 3 written as Fizz, numbers divisible by 5 as Buzz and numbers divisble by 5 and 3 as Fizzbuzz?"));
 // Create a function for the action
 //game= Number(game);
     //if (game % 1 !=0) {break};
        //document.writeln("please enter a whole number"); }
      
       
       function fizzBuzz () {

  
    for (a = 1; a <= game; a++) {
       if (game % 1 !=0) {break;}
           
         else if (a % 3 == 0 && a %5 >0) { // if value is divisible by the number 3 
             document.writeln("Fizz")/*console.log("fizz")*/ ; }
        else if (a % 5 == 0 &&  a %3 >0) { 
             document.writeln("Buzz"); }
        else if (a % 5 == 0 && a %3 == 0) {
             document.writeln("FizzBuzz");
             } else{ document.writeln(a); } 
                                 }
                                 } 
                  
   fizzBuzz(game);          
 

   




 });
