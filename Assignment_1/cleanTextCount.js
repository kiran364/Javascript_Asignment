const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher`

/*function countWords(sentence){
sentence = sentence.replace(/(^\s*)|(\s*$)/gi, "");
sentence = sentence.replace(/[ ]{2,}/gi, " ");
sentence = sentence.replace(/\n /, "\n");
return sentence.split(' ').length;
}
console.log(countWords(sentence));*/

function countWords(sentence){
return sentence.trim().split(/\s+/).length;
}
console.log(countWords(sentence));