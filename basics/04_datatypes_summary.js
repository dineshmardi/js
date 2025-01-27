//primitive and non primitive

//primitive 
//7 types: string number boolean null(not zero) undefined(not initialised) symbol(value to be unique)
//big int
//rest are reference type---
//array objects functions

//no need to define data type---like int a---

const score=100
const scoreValue=100.3
const outside_temp=null
const login=false
let useremail;

const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid)
const bignumber=6237846287362346n




//-----------------------------------

const heros=["shaktiman","dinesh","doga"];

//object are inside curly braces
let myobj={
    name:"dinesh",
    age:22,
}

//function
const myfunction=function(){
    console.log("hello_world")
}