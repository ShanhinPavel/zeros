module.exports = function getZerosCount(number) {
  // your implementation
  var x = number;
  var n = number;
  var counter_5s = 0;
  

while(x>0) {
  var counter_5 = 0;
n=x;
while(n > 0 && n % 5 == 0) {
	counter_5++;
  n = n / 5;
}
x--;
counter_5s =counter_5s +counter_5;
}

return counter_5s;
 }

