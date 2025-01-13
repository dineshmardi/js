let score=55
console.log(typeof score);

let scoree="55"
console.log(typeof scoree);

let num=Number(scoree);
console.log(typeof(num)); //gurenteed number datatype


console.log(typeof(String(num)));//again type casted to string


//--------------------------------------------------------------------------------------------------

//sometimes there is a small mistake happens i.e nan appears
console.log("new one====")

let a="33abd"
console.log(typeof(a))
let b=Number(a)
console.log(typeof(b))

console.log(b)  // it returns a nan value beccaause this is not a numbe....ok remember..javascript problem in type casting


//also
let d=null
console.log(typeof d)
let dd=Number(d)
console.table([d,dd]) //also remember this one this is a also a problem in javascript

//"3ab"==nan
//"33"==33
//true==1 false==0
//in boolens 1==true and 0==false
//"name"==true " " ==true
//""==false
let aa=""
let aaa=Boolean(aa)
console.log(aaa)
