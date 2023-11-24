let elms=document.querySelectorAll("#container div")
console.log(elms);
elms=[...elms]
elms.map(elm=>elm.addEventListener("click", onDivClick))
let numbers=new Set()
function onDivClick(){
    let col="#"+parseInt(Math.random()*0xffffff).toString(16)
    if(this.innerText)
    {
    this.innerText++
}
    else
 {  
    let num=10+parseInt(Math.random()*90)
    if(!numbers.has(num)){
        numbers.add(num)
        this.innerText=num
        this.style.color=col
    }
    else{
        this.innerText="-1"
        this.style.background="gray"
    }
}
}

//const btn1=document.querySelector("#btn1")
const btn1=document.getElementById("btn1")
console.log(btn1);
const btn2=document.querySelector("#btn2")
const btn3=document.querySelector("#btn3")
function getRandomColor(){
    return "#"+parseInt(Math.random()*0xffffff).toString(16)
}
btn1.onclick=function(){
    let col=getRandomColor()
    elms.map(elm=>elm.style.backgroundColor=col)
}
btn2.onclick=function(){
    elms.map(elm=>elm.style.backgroundColor=getRandomColor())
}
btn3.onclick=function(){
    elms.map(elm=>elm.innerText=null)
}