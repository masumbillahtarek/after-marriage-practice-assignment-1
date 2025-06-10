var burgerPrice=400;
if(burgerPrice>=500){
    console.log('Now cake is free with Burger');
}else{
      console.log('Now cake is not free with Burger.Cake Price: 100tk');
}

var weight=62;
var height=1.68;
var bmi=weight/(height*height);
if(bmi < 18.5){
    console.log('you are underweight');
}else if(bmi >= 18.5 && bmi <=24.9){
  console.log(' you are normal') ; 
}else if(bmi >=25 && bmi <= 29.9){
  console.log('you are overweight')  ;
}else{
    console.log('Otherwise, you are obese.')
}

var mark=87;
if(mark>=90 && mark<=100){
console.log('Your Grade is A');
}else if(mark>=80 && mark<=89){
console.log('Your Grade is B');
}else if(mark>=70 && mark<=79){
    console.log('Your Grade is C');
}else if(mark>=60 && mark<=69){
   console.log('Your Grade is D'); 
}else if(mark>=0 && mark<=59){
    console.log('Your Grade is F');
}else{
    console.log('You were absent');
}

var myMarks=87;
var myFriendMarks=78;
if(myMarks>=80){
    if(myFriendMarks>=80){
        console.log('Lets go for a lunch. ');
    }else if(myFriendMarks>=60 && myFriendMarks<=79){
         console.log('Good luck next time.'); 
    }else if(myFriendMarks>=40 && myFriendMarks<=59){
         console.log('keep your friends message unseen'); 
    }else{
console.log('block your friend');
    }
}else{
console.log('go to home and sleep and act sad');
}

var num1=56;
var num2=76;
var result;
if(num1>num2){
    result=num1*2;
    
}else{
    result=num1+num2;
}
console.log(result)
// Using Ternary 
var num1=86;
var num2=76;
var result;
result=num1>num2?num1*2:num1+num2;
console.log(result); 

var ticketPrice=500;
var age=65;
var discount;
if(age<=10){
    console.log('Free for Children');
}else if(age<=25 && age>=11){
    discount=ticketPrice*(50/100);
    const payablePrice=ticketPrice-discount;
    console.log('Student :',payablePrice)
}else if(age>=60){
    discount=ticketPrice*(15/100);
    const payablePrice=ticketPrice-discount;
    console.log('Senior Citizen :',payablePrice)
}else{
     console.log(ticketPrice)
}