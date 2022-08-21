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
var Q = (3*a*c - b*b)/(9*a*a);
var R = ((9 * a * b * c) - (27 * a * a * d) - (2 * b * b * b)) / (54 * a * a * a);
var S = Math.cbrt(R + Math.sqrt(Q * Q * Q + R * R));
var T = Math.cbrt(R - Math.sqrt(Q * Q * Q + R * R));
var x1 = Math.round(((S + T - (b / 3 * a)) + Number.EPSILON) * 100) / 100;
var x2 = Math.round(((-(S + T) / 2 - (b / 3 * a)) + Number.EPSILON) * 100) / 100 + "+" + Math.round(((Math.sqrt(3) / 2) * (S - T) + Number.EPSILON) * 100)/100+ "i";
var x3 = Math.round(((-(S + T) / 2 - (b / 3 * a)) + Number.EPSILON) * 100) / 100 + "-" + (Math.round(((Math.sqrt(3) / 2) * (S - T) + Number.EPSILON) * 100) / 100 )+ "i";
    alert("X1 : " + x1 + " , x2 : " + x2 + " , x3 : " + x3);
}

btn.addEventListener("click",Calculate);