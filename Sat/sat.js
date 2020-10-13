for (let i = 0; i < document.body.childNodes.length; i++) {
  alert( document.body.childNodes[i].nodeName ); // Text, DIV, Text, UL, ..., SCRIPT
}

setInterval(postaviSat);
const sat=document.getElementById('sat');
const minuta=document.getElementById('minuta');
const sekunda=document.getElementById('sekunda');
function postaviSat(){
const vrijemeSada=new Date;

const s=vrijemeSada.getSeconds()/60;
const m=(s+vrijemeSada.getMinutes())/60;
const h=(m+vrijemeSada.getHours())/60;
rotacija(sat,h);
rotacija(minuta,m);
rotacija(sekunda,s);
console.log(h);
console.log(m);
console.log(s);
console.log(vrijemeSada);

}
function rotacija(element,r){
element.style.setProperty('--r',r*360);
}
postaviSat();