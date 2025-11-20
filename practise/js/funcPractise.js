//func to count number of vowels
function vowelCount(string){
    let count=0;
    string.toLowerCase();
   for(const char of string){
    if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'){
        count++;
    }
   }
   return count;
}
let count=vowelCount("thisistestsoaeiou");
console.log(count);

//Arrowfunction for same
const countVowels=(str)=>{
    let count=0;
    str.toLowerCase();
   for(const char of str){
    if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
        count++;
    }
   }
   console.log(count);
}
