module.exports = function getZerosCount(number) {
  // your implementation
  
  var n = number;
  var counter_5s = 0;
  
  for (var x = 5; x <= number; x = x + 5) {
    n = x;
    for (var counter_5 = 0; n % 5 == 0; counter_5++) {
      n = n / 5;
      if (n <= 0) {
        break; 
      }
    }
      counter_5s += counter_5;
    }
return counter_5s;
 }
