function drawTriangle(size) {

   // Your solution goes here
   let str = "";
   for (i=0; i<size; i++){
      for (j=0; j <= i; j++){
         str += "*";
      }
      console.log(str);
      str = "";
   }
}