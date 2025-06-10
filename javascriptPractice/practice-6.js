function average(num1,num2){
    var avg=(num1+num2)/2;
    return avg;
}
console.log(average(24,56))

function sumOfNumber(number){
let sum=0;
for(let i=0;i<=number;i++){
    sum=sum+i;
}
return sum;
}

console.log(sumOfNumber(10))

function sumOfArray(num){
    let sum=0;
    for(let i=0;i<num.length;i++){
        sum=sum+num[i];
    }
    return sum;
}
console.log(sumOfArray([0,1,2,3,4,5,6,7,8,9]))

function reverseArray(name){
    let reversed=[];
    for(let i=0;i<name.length;i++){
        reversed.unshift(name[i])
    }
    return reversed;
}
console.log(reverseArray(['alim','jalim','solimn','kolim']))

function reverseString(sentence){
    let reversedSentence='';
    for(const letter of sentence){
        reversedSentence=letter+reversedSentence;
    }
    return reversedSentence;
}
console.log(reverseString('I go to school.'));

function getEvenFromArray(nums){
    let getEven=[]
    for(const num of nums){
        if(num%2===0){
           getEven.push(num)
        }
    }
    return getEven;
}
console.log( getEvenFromArray([34,54,78,908,56,37,86,55]))

var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
let addNum='';
for(const num of numbers){
addNum=addNum+num;
}
console.log(addNum)