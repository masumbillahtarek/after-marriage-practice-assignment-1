 //1
 function multiplyNumbers(num1,num2,num3,num4){
    var multiplyAll=num1*num2*num3*num4;
    return multiplyAll;
}
console.log(multiplyNumbers(23,54,65,76));
//2
function evenOdd(number){
    if(number%2===1){
        let result=number*2;
        return result;
    }else{
  let result=number/2;
        return result;
    }
}
console.log(evenOdd(45))
console.log(evenOdd(44))
console.log(evenOdd(47))
//3
function make_avg(marks){
    let sum=0;
    for(const mark of marks){
        sum=sum+mark;
    }
    let avg=sum/(marks.length);
    return parseInt(avg);
}
console.log('Average Marks :', make_avg([23,43,54]))
console.log('Average Marks2 :', make_avg([23,43,54,65,89]))
//4
function count_zero(binaryValue){
    count=0;
for(let i=0;i<binaryValue.length;i++){
    if(binaryValue[i]==='0'){
        count++;
    }
}
return count;
}
console.log('Number Of Zero : ',count_zero('010101011'))
console.log('Number Of Zero 2: ',count_zero('01010101100000001'))
//5
function getEvenOdd(number){
    if(number%2===1){
        return 'Odd';
    }else{
        return 'Even';
    }
}
console.log(getEvenOdd(45))
console.log(getEvenOdd(44))


function oddAvg(numbs){
    let sum=0;
    let count=0;
    for(const numb of numbs){
        if(numb%2===1){
         sum=sum+numb;
         count++;
        }
    }
    let avg=sum/count;
    return  parseInt(avg);
}
console.log('Average :',oddAvg([12,34,33,34,45,46])) 

function removeDuplicates(marks){
    let noDuplicates=[];
    for(const mark of marks){
        if(noDuplicates.includes(mark)===false){
            noDuplicates.push(mark);
        }
    }
    return noDuplicates;
}
console.log(removeDuplicates([10,23,45,10,23,24,25,23,23]))
console.log(removeDuplicates(['alim','jalim','kolim','solim','alim','kolim']))

let a=3;
let b=5;
let c;
console.log(a,b)
c=a;
a=b;
b=c;
console.log(a,b)

let ab=3;
let bc=5;
[ab,bc]=[bc,ab]
console.log(ab,bc)
