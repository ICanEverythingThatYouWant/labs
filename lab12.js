var sentence = "123321"

sentence = sentence.toLowerCase();

var re = new RegExp('[^a-я0-9]+')

sentence = sentence.split(re).join("")

if (sentence.length % 2 != 0) {
    checkPalindrome(parity = false)
}
else {
    checkPalindrome(parity = true)
}

function checkPalindrome(parity){
    halfLength = Math.floor(sentence.length/2)
    firstHalfSentence = sentence.slice(0, halfLength)
    secondHalfSentence = sentence.slice(halfLength + !parity, sentence.length)
    if(firstHalfSentence == reverse(secondHalfSentence)) {
        alert("Это полиндром!")
    }
    else {
        alert("Это не полиндром!")
    }
}


function reverse(sentence) {
    return sentence.split("").reverse().join("")
}