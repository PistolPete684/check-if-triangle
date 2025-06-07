function isTriangle(a,b,c) {
  // return the conditions needed to qualify as a triangle to get a true or false response
   return a + b > c && a + c > b && b + c > a && a + b + c > 0;
}