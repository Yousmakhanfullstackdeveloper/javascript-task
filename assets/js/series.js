let n=parseInt(prompt("Enter the Number of Fibonacci Series"));
let n1=0;
let n2=1;
let nextTerm;
document.write("<h1 class='head'>Fibonacci Series :</h1>");
document.write("<div id='body'>");
document.write(n1);
document.write(n2);
for(let i=3;i<=n;i++){
   nextTerm=n1+n2;
   document.write(nextTerm);
   n1=n2;
   n2=nextTerm
}

document.write("</div>");