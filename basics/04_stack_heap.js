//stack and heap memory and js

//primitive type used stack---we get acopy  of variable
//rest goes to heap non primitive---we get reference of original value
let youtube="nfcofficial"
let channel=youtube
channel="gamerji"
console.log(channel);
console.log(youtube);


//non primitive heap

let namee={
    email:"hreo@gmial.com",
    gun:"pistol",
}

let user=namee
user.email="herhiralal@yycom"


console.table([namee.email,user.email]);//same output both pointing to same element or heap memory




