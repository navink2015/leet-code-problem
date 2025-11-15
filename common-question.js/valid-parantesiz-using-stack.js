const isValid = (string)=>{
   const stack = [];
   const map = {
    '(':')',
    '{':'}',
    '[':']'
   }

   for(var i=0; i<string.length; i++){
       console.log( stack)
    const char = string[i]
    if(map[char]){
        stack.push(map[char])
    }else{
        // const pop = stack.pop()
        // console.log("pop",)
        // const pop = stack.pop()
        if( stack.pop() !== char){
            return false;
        }
    }
   }

   if(stack.length === 0) return true;


}



// Examples
// console.log(isValid("({})"));      // Output: true
// console.log(isValid("()[]{}"));  // Output: true
// console.log(isValid("(]"));      // Output: false
// console.log(isValid("([{}])"));  // Output: true
// console.log(isValid("{[]}"));    // Output: true
// console.log(isValid("]"));       // Output: false (stack is empty when closing bracket found)
// console.log(isValid("({"));      // Output: false (stack not empty at the end)
console.log(isValid("{[()()]}"))