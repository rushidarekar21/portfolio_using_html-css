// hoisting - declaratio is moved at top

console.log(a)
 var a ;
 a = 12;

 // undifined - existence but not known : not-defined - no existence 


 /// if  a [] () {} then refrence else primitive  
  a = 12;
 b = a;
 print(b);
 b = b + 2;
 print(b) // b =14
 print(a) // a = 12  primitive 

 a =[12,32,11]
 b = a; // here b is sharing with a
 b = b.pop() // so here a value also changes