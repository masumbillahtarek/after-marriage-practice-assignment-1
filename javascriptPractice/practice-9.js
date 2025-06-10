 //1
 function findLowestNumber(heights){
    let lowestNumber=heights[0];
    for(const height of heights){
if(height<lowestNumber){
    lowestNumber=height;
}
    }
    return lowestNumber;
}
console.log(findLowestNumber( [167, 190, 120, 165, 137]))
//2
function findSmallestName(names){
    let smallestName=names[0];
    for(const name of names){
if(name.length<smallestName.length){
    smallestName=name;
}
    }
    return smallestName;
}
console.log(findSmallestName(['rahim', 'robin', 'rafi', 'ron', 'rashed']))
//3
function calculateElectronicsBudget(laptopQuantity, tabletsQuantity,  mobileQuantity){
    let perLaptop= 35000 ;
    let   perTablet = 15000 ;
    let    perMobile = 20000 ;
    let totalLaptopPrice=perLaptop*laptopQuantity;
    let totalTabletPrice=perTablet*tabletsQuantity;
    let totalMobilePrice=perMobile*mobileQuantity;
    let totalPrice=totalLaptopPrice+totalTabletPrice+totalMobilePrice;
    return totalPrice;
}
console.log(calculateElectronicsBudget(3,5,2));
//4
  const phones = [
            { model: "PhoneA", brand: "Iphone", price: 95000 },
            { model: "PhoneB", brand: "Samsung", price: 40000 },
            { model: "PhoneC", brand: "Oppo", price: 26000 },
            { model: "PhoneD", brand: "Nokia", price: 35000 },
            { model: "PhoneE", brand: "Iphone", price: 105000 },
            { model: "PhoneF", brand: "HTC", price: 48000 },
        ]; 
function findAveragePhonePrice(phones){
    let totalPhonesPrice=0;
for (const phone of phones){
totalPhonesPrice=totalPhonesPrice+phone.price;
}
let totalPhonesPriceAvg=totalPhonesPrice/(phones.length);
return totalPhonesPriceAvg;
}
console.log(findAveragePhonePrice(phones));
//5
 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];
 function getPermanentSalary(employees)  {
    let permanentSalary=[];
    for(const employee of employees){
        let perPersonSalary=employee.starting+(employee.experience*employee.increment);
        permanentSalary.push(perPersonSalary);
    }
    return permanentSalary;
 }     
 console.log(getPermanentSalary(employees))

 //Normal Calculator

 function add(num1,num2){
    return num1+num2;
 }
  function subtract(num1,num2){
    return num1-num2;
 }
  function multiply(num1,num2){
    return num1*num2;
 }
  function devide(num1,num2){
    return num1/num2;
 }
  function modulas(num1,num2){
    return num1%num2;
 }
  function calculator(num1,num2,operator){
    if(operator==='add'){
const result=add(num1,num2);
return result;
    }else if(operator==='subtract'){
        const result=subtract(num1,num2);
        return result;
    }else if(operator==='multiply'){
        const result=multiply(num1,num2);
        return result;
    }
    else if(operator==='devide'){
        const result=devide(num1,num2);
        return result.toFixed(2);
    }
    else if(operator==='Vagses'){
        const result=modulas(num1,num2);
        return result;
    }else{
return 'No result';
    }
 }
console.log(calculator(7,3,'Vagses'))
console.log(calculator(7,3,'add'))
console.log(calculator(7,3,'subtract'))
console.log(calculator(7,3,'multiply'))
console.log(calculator(6,3,'devide'))
console.log(calculator(6,3,''))

//Error Handling
function add(a,b){
    if(typeof(a)!=='number'||typeof(b)!=='number'){
        return'Please enter number Type'
    }
    let sum=a+b;
    return sum;
}
console.log(add('e',78))