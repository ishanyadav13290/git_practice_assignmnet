let word=naman;
let rev="";

for(let i=word.length-1;i>=0;i--){
    rev+=word[i]
  
} if(rev==word){
    console.log("palindrome");
} else {
    console.log("not a palindrome");
}