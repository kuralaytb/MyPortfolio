let result=document.getElementById('typewriter');

const words=[
    'Full Stack Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'Web Enthusiast'
]

let charTurn=0;
let wordTurn=0;
printWord();
function printWord(){
    if (charTurn<=words[wordTurn].length){
        result.innerHTML=words[wordTurn].substr(0, charTurn);
        charTurn++;
        setTimeout(printWord, 100)
    } else {
        setTimeout(deleteWord, 500)
    }
    
}

function deleteWord(){
    if (charTurn>=0){
        result.innerHTML=words[wordTurn].substr(0, charTurn);
        charTurn--;
        setTimeout(deleteWord, 100)
    } else{
        if (wordTurn<words.length - 1){
            wordTurn++;
        } else{
            wordTurn=0;
        }
        charTurn=0;
        setTimeout(printWord,100)
    }
}
    
