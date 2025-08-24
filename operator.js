str1="Hello"
str2=" World"
str4=str1+str2
console.log(str4);
str3=`${str1} ${str2}`
console.log("1" + 2);//12
console.log(typeof("1" + 2));//string
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");
console.log(true);
console.log(false);
console.log(+true);//true+ not possible
console.log(+"");
console.log(+"1234abc");//NaN //+ operator tries to convert it into a valid 
// number but fails
console.log(typeof(+"1234abc"));//number //In js the typeof NAN is number
let gamecounter = 100
gamecounter++;
console.log(gamecounter);
gamecounter--;
console.log(gamecounter);