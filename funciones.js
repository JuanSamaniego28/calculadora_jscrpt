/* function sumar(a, b, c){
    //mss=mssj
    return a+b+c;
}
var result = sumar(4, 5, 8);
console.log(result) */

/* var factorial = function(n){
    if((n ==0) ||(n==1))
        return 1;
    else
        return(n*factorial(n-1));
    
}

 console.log(factorial(5)); */
 var nombres =["juan","pao", "aury","luis"]
 var vegetales =new Array ("tomate","lechuga", "zanahoria")

/* console.log(nombres[0])
nombres[0]="jose"
console.log(nombres[0]) 
 */
/* console.log(nombres.length);
for (var i=0;i<=nombres.length-1;i++){
    console.log(nombres[i]);
}

vegetales.forEach(function(elemento) {
    console.log(elemento)
    
})  */
console.log(nombres);
nombres.push("daniel");
console.log(nombres);
nombres.unshift("lili");
console.log(nombres);
nombres.pop();
console.log(nombres);
nombres.shift();
console.log(nombres);

var pos = nombres.indexOf("aury");
console.log(pos);

nombres.splice(1,1);
console.log(nombres);