var name=['Tarek','Masum','Sumaiya','Billah'];
console.log(name[0]);
name[2]='Morshed';
console.log(name)
console.log(Array.isArray(name))
console.log(name.length)
for(var i=0;i<name.length;i++){
   console.log(name[i]) 
}
console.log(name.slice(1,2))
name.push('Asfak');
console.log(name)
name.pop();
console.log(name);
name.unshift('Atlas')
console.log(name);
name.shift();
console.log(name);
console.log(name.indexOf('Billah'));
console.log(name.splice(1,1,'alif'));
console.log(name);

//1
let fruits=['Apple','Banana','Jack-fruits','Orange','Mango'];
let secondFruits=fruits[1];
console.log(secondFruits);
fruits[3]='Jambura';
console.log(fruits);
//2
var touristsDestination=['Coxs-Bazar','Rangamati','Bandarban','Kaptai-Lake'];
touristsDestination.push('Kkagrachari');
touristsDestination.push('Dhaka','Chittagong');
console.log(touristsDestination);
touristsDestination.pop();
console.log(touristsDestination);
//3
var books=['Bangla','English','Javascript','Grammer'];
console.log(books.includes('Javascript'));
if (books.includes('Javascript')) {
    console.log("The array contains a JavaScript book.");
} else {
    console.log("The array does not contain a JavaScript book.");
}
//4
var num4=43;
var subjects=['Bangla','English','Javascript','Grammer'];
console.log(Array.isArray(subjects))
console.log(Array.isArray(num4))
//5
var num1=[1,23,43,22,23];
var num2=[54,56,76,78];
console.log(num1)
console.log(num2)
console.log(num1.concat(num2))