const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = () => {
  const newArr = [];
  tutorials.map(str =>{
    let words = str.split(' ');
    console.log(words)
    let firstCap = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    let FirstLetterCapped = firstCap.join(" ")
    newArr.push(FirstLetterCapped)
  })
  console.log(newArr)
  return newArr
}




titleCased()
const words = tutorials.map(str => str.split(' '))
console.log(words)
const firstLetter = words.map(word => word)
console.log(firstLetter)
