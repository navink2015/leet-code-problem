// palindrom example madam, 121

const isPalindrome = (str) =>{
// debugger
    if(str.length <= 1) return true;
    if(str[0] === str[str.length -1]){
      return  isPalindrome(str.substring(1, str.length -1))
    }else return false;

}
const a = isPalindrome('madam')
console.log("result",a)