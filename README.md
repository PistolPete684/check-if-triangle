# check-if-triangle
A function that returns true if a triangle can be built with the three length sides provided and false in any other case.

7 kyu
Is this a triangle?
Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

Examples:

Input -> Output
1,2,2 -> true
4,2,3 -> true
2,2,2 -> true
1,2,3 -> false
-5,1,3 -> false
0,2,3 -> false
1,2,9 -> false 

________________________________________________________________________________________________________________________________________________________________________________________

Because we are looking for a true or false response, we can simply use the return keyword and input the conditions it must meet.
   
   return a + b >= c && a + c >= b && b + c >= a && a + b + c >= 0;


__________________________________________________________________________________________________________________________________________________________________________
Final solution

function isTriangle(a,b,c) {
  // return the conditions needed to qualify as a triangle to get a true or false response
   return a + b > c && a + c > b && b + c > a && a + b + c > 0;
}




