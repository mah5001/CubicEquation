"use stricct";
var aa = document.getElementById("a");
var bb = document.getElementById("b");
var cc = document.getElementById("c");
var dd = document.getElementById("d");
let btn = document.getElementById("calc");
function Calculate(){
var a = aa.value;
var b = bb.value;
var c = cc.value;
var d= dd.value;
//var Q = (3*a*c - b*b)/(9*a*a);
//var R = ((9 * a * b * c) - (27 * a * a * d) - (2 * b * b * b)) / (54 * a * a * a);
//var S = Math.cbrt(R + Math.sqrt(Q * Q * Q + R * R));
//var T = Math.cbrt(R - Math.sqrt(Q * Q * Q + R * R));
//var x1 = Math.round(((S + T - (b / 3 * a)) + Number.EPSILON) * 100) / 100;
//var x2 = Math.round(((-(S + T) / 2 - (b / 3 * a)) + Number.EPSILON) * 100) / 100 + "+" + Math.round(((Math.sqrt(3) / 2) * (S - T) + Number.EPSILON) * 100)/100+ "i";
//var x3 = Math.round(((-(S + T) / 2 - (b / 3 * a)) + Number.EPSILON) * 100) / 100 + "-" + (Math.round(((Math.sqrt(3) / 2) * (S - T) + Number.EPSILON) * 100) / 100 )+ "i";
var a = b/a;
var b = c/a;
var c = d/a;
var p = b-((a*a)/3);
var q = ((2*a*a*a)-(9*a*b) + (27*c))/27;
var delta = (27*q*q+ 4*p*p*p)/108;
console.table(q,p,Math.round(delta * 1000)/1000);
    if(Math.round(delta * 1000)/1000>0){
    console.log("is Positive");
    alert(Math.cbrt("X1:" +-q/2 + Math.sqrt(delta)) + Math.cbrt(-q/2 - Math.sqrt(delta)) - a/3);}
    if(Math.round(delta * 1000)/1000==0){
    console.log("is zero");
    alert("X1:" +-2 * Math.cbrt(q/2)-a/3 +"X2:" +Math.cbrt(q/2)-a/3);}
    if(Math.round(delta * 1000)/1000<0){
    console.log("is negative");}
    
}

btn.addEventListener("click",Calculate);
