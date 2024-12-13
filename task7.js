var num1=Number(prompt('inter first number '))
var num2=Number(prompt('inter second number '))

var sum
sum=num1+num2
document.write('<h3>', num1 ,' + ', num2 ,' = ', sum ,'</h3>');

var sub
sub=num1-num2
document .write('<h3>', num1 ,' - ', num2 ,' = ', sub,'</h3>');


var mul
mul=num1*num2
document .write('<h3>', num1 ,' * ', num2 ,' = ', mul,'</h3>');


var div
div=num1/num2
document .write('<h3>', num1 ,' / ', num2 ,' = ', div,'</h3>');


var mod
mod=num1+num2
document .write('<h3>', num1 ,' % ', num2 ,' = ', mod,'</h3>');

var exp
exp=num1**num2
document .write('<h3>', num1 ,' power ', num2 ,' = ', exp,'</h3>' );

var comp1
comp1=num1==num2
document.write( '<h3>','are equal?! ', comp1 , '<h3>',);

var comp2
comp2=num1>num2
document.write( '<h3>','is ' , num1 ,' > ', num2 ,' ? ', comp2 ,'<h3>',);