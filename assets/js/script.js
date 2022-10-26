let inputText = document.getElementById('input');
let outputText = document.getElementById('outPutEle');
let vowels = ['a', 'e', 'i', 'o', 'u'];
let ending = 'ay';

inputText.addEventListener('keyup', (e) => {
  
    let input = e.target.value;
    let words = input.split(' ');
    
    let newWords = words.map((value) => latinTranslate(value))
    
    outputText.innerText = newWords.join(' ');
    
})

function latinTranslate(string) {
    let output = '';

    for(let i = 0; i < string.length; i++) {
        if(vowels.some(value => value == string[i])) {
            break;
        } else {
            output += string[i];
        }
    }

    let result = string.slice(output.length) + output + ending;
    return result;

}