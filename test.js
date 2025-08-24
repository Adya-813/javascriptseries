"use strict"; //treat all js code as newer version
//alert(3 + 3);//we are using nodejs,not browser
console.log(3+3);//6
console.log("Hello World");

let name = "Adyasha"
let age=22
let isLoggedIn=false
console.log(name + age);//Adyasha22
console.log(name + " " + age);//Adyasha 22
console.log(name + " is " + age + " years old");//Adyasha is 22 years old
console.log(`${name} is ${age} years old`);//Adyasha is 22 years old
console.log(`Is ${name} logged in? ${isLoggedIn}`);//Is Adyasha logged in? false    

let state
console.log(state);//undefined
let state1=null
console.log(state1);//null //standalone value
//null is an assignment value
//undefined means a variable has been declared but not assigned a value 
//null is an assignment value, it can be assigned to a variable as a representation of no value
//we can use null when we want to clear the value of a variable
//we can use undefined when we want to check if a variable has been assigned a value or not
//we can use typeof operator to check the type of a variable
console.log(typeof name);//string   
console.log(typeof age);//number
console.log(typeof isLoggedIn);//boolean
console.log(typeof state);//undefined
console.log(typeof state1);//object (this is a bug in javascript, it should be null)
//we can use let,const,var to declare a variable
//symbol= unique
