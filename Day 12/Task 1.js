function test() {
    var a = '3';
    var b ='7';
    
var c = a;
a = b;
b = c;

console.log(a);
console.log(b);
}
test()