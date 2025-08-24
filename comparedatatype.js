console.log(2 > 1);
console.log(2 < 1);
console.log(2 >= 1);
console.log(2 !=1)
console.log(2 == 1);
//datatype same hona chahiye
console.log(2 == "2");
console.log(2 === "2");//strict equality operator
console.log("Compare with null");
console.log(null>0);
console.log(null==0);
console.log(null>=0);
console.log("Compare with undefined")
console.log(undefined==0);
console.log(undefined>0);  //avoid these type of  comparisons as 
// they give unexpected results
//how the data stored and excessed the data is broadly classified into two types
//1.primitive data types    
//2.reference data types
//primitive data types(call by value- Original value will not be changed,
// there is a copy of original value)
//1.string,2.number,3.boolean ,4.undefined,5.null,6.symbol,7.bigint

//reference data types/non-primitive data types(call by reference- Original 
// value will be changed)
//1.array,2.object literals,3.functions
//primitive data types are stored in stack memory
//reference data types are stored in heap memory
//stack memory is faster than heap memory

//javascript is a dynamically typed language
//we can change the datatype of a variable at any time