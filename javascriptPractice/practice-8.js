
function celciousToFarenhite(celcious){
    let farenhite = (celcious * 9/5) + 32;
    return farenhite
}
console.log(celciousToFarenhite(90));

function numberOfRepeat( numbers,findNumber){
    let count =0;
    for(const number of numbers){
        if(number===findNumber){
            count++
        }
    }
    return count;
}
console.log(numberOfRepeat( [5,6,11,12,98, 5],5));
console.log(numberOfRepeat([23,34,23,33,23],55));

function vowelCheck(sentence){
    let count=0;
    for(const letter of sentence){
        if(letter === 'a' || letter === 'A' ||
  letter === 'e' || letter === 'E' ||
  letter === 'i' || letter === 'I' ||
  letter === 'o' || letter === 'O' ||
  letter === 'u' || letter === 'U'){
            count++;
        }
    }
    return count;
}
console.log( 'Number of Vowel:', vowelCheck('I go to school'));
console.log('Number of Vowel2:', vowelCheck('He is not only man but also superman'));

let sentenc='I go to school';
console.log(sentenc.split(' ' ))
function longestWord(sentence){
    let convertArray=sentence.split(' ' );
    let longestWord=convertArray[0];
    for(const word of convertArray){
        if(word.length>longestWord.length){
            longestWord=word;
        }
    }
    return [longestWord,longestWord.length];
}
console.log('Longest Word is :',longestWord('I am learning Programming to become a programmer'))
console.log('Longest Word is :',longestWord('I am learning English'))

let randomNumber=Math.random()*20;
let integerRandom=Math.round(randomNumber)
console.log(randomNumber)
console.log(integerRandom)

let randomNumber1=Math.random()*10;
let integerRandom1=Math.round(randomNumber1)
console.log(randomNumber1)
console.log(integerRandom1)