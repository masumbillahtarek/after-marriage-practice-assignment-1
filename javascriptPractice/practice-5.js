let sentence='I go to School';
let reverse='';
for(let letter of sentence){
    reverse=letter+reverse
}
console.log(reverse)
//1
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
console.log(colors["golden rod"]);
//2
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
car.passengerCapacity=5;
console.log(car);

//3
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(student.physics.marks)
//4
let students = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
let studentsProp=Object.keys(students);
console.log(studentsProp)
console.log(studentsProp.length)
//5
let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true

};
for(const prop in myObject){
    console.log(prop,' : ', typeof(myObject[prop]))
}
//String

let name='omitab Baccan';
let count=''
for(let i=0;i<name.length;i++){
   
    if(name[i]==='a'){
 console.log(name[i]);
 count++
    }
}
console.log(count)

let str = "xXxX Hello Xx";

// Replace lowercase 'x' with 'y'
str = str.replace(/x/g, 'y');

// Replace uppercase 'X' with 'Y'
str = str.replace(/X/g, 'Y');

console.log(str); // Output: yYyY Hello Yy