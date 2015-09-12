$(document).ready(function() { 


   var game = Number(prompt("Please enter a number to see numbers divisble by 3 written as Fizz, numbers divisible by 5 as Buzz and numbers divisble by 5 and 3 as Fizzbuzz?"));
 // Create a function for the action
 game= Number(game);
       
       function fizzBuzz () {

  //for (var a = 1; a <= 101; a++) { 
    for (a = 1; a <= game; a++) { 
        if (a % 3 == 0 && a %5 >0) { // if value is divisible by the number 3 
             document.writeln("Fizz")/*console.log("fizz")*/ ; }
        else if (a % 5 == 0 &&  a %3 >0) { 
             document.writeln("Buzz"); }
        else if (a % 5 == 0 && a %3 == 0) {
             document.writeln("FizzBuzz");
             } else{ document.writeln(a); } }
           }
                          

  
/*var i = 0;
do {
   i += 1;
   console.log(i);
} while (i < 5);


do {

} while ()*/






       fizzBuzz(game);          
 

   //$('#mybutton').on('click',  (function  () {
    // When mybutton is clicked call the function
    //var items = fizzBuzz() 
    //Add(items);
    //}));




 });
