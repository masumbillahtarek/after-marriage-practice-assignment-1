//1
function calculateMoney(ticketQuantity){
    if(typeof(ticketQuantity)!=='number'||typeof(ticketQuantity)!=='-number'){
        return'Please enter number Type'
    }
    let perTicketPrice=120;
    let dailyIncome=perTicketPrice*ticketQuantity;
    let labourCost=500;
    let stafCost=8*50;
    let dailyTotalCost=labourCost+stafCost;
    let dailySavings=dailyIncome-dailyTotalCost;
    return dailySavings;
}
console.log(calculateMoney(-10))
//2
function checkName(name){
    if(typeof(name)!=='string'){
        return'Please enter string Type'
    }
    for(let i=name.length-1;i>=0;i--){
        if(name[i]==='a'||name[i]==='e'||name[i]==='i'||name[i]==='o'||name[i]==='u'||name[i]==='y'||name[i]==='w'){
            return 'Good Name';
        }else{
            return 'Bad Name';
        }
    }
}
console.log(checkName('Masum'))
console.log(checkName('Sumaiya'))
console.log(checkName(["Rashed"]))
//3
function deleteInvalid(randomArray){
    if(Array.isArray(randomArray)!==true){
       return'Please enter array Type'
   }
    let numberTypeArray=[];
    for(const part of randomArray){
        if(typeof(part)==='number'&& Number.isNaN(part)===false){
numberTypeArray.push(part);
        }
    }
    return numberTypeArray;
}
console.log(deleteInvalid([NaN,1,12,0,-1, undefined,'ali',true,NaN]));
console.log(deleteInvalid(45));
//4
let information={name:"kolimuddin" ,birthYear:1999,siteName:"google"}
function makePassword(information){
    let passwordFirstWord=information.siteName;
    let capitalize=passwordFirstWord.charAt(0).toUpperCase()+passwordFirstWord.slice(1);
   // console.log(capitalize)
   let myPassword=capitalize+'#'+information.name+'@'+information.birthYear;
   return myPassword;
}

console.log(makePassword(information))
let information2={name:"rahat",birthYear:2002,siteName:"facebook"};
console.log(makePassword(information2))
console.log(makePassword({name:"toky",birthYear:200,siteName:"facebook"}))

let name='alim'
console.log(name.charAt(0))
//5
 function monthlySavings(allPayments,livingCost){
    if(Array.isArray(allPayments)!==true&&livingCost!=='number'){
        return'Please Provide array and number'
    }
        let sum=0;
        let taxSum=0;
    for(const payment of allPayments){
    
        if(payment>=3000){
            let yourTax=(payment*20)/100;
            
            sum=sum+payment;
           
            taxSum=taxSum+yourTax;
        }else{
            sum=sum+payment;
        }
    }
    console.log(taxSum)
let savings=sum-(livingCost+taxSum);
return savings;
 }
console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000))
console.log(monthlySavings('six',6000))
console.log(monthlySavings([2000,3000,5000,2000,3000,2000],6000))