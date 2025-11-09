const fibonoci = (n)=>{
    const fib = [0,1];
    for(var i =2; i<n ; i++){
        fib[i]= fib[i-1] + fib[i-2]
    }
    return fib.slice(0, n)
}

// console.log(fibonoci(5))

const fibnociInRecursion = (n)=>{
    if(n<2) return n;
    return fibnociInRecursion(n-1) - fibnociInRecursion(n-2)
}

console.log(fibnociInRecursion(5))