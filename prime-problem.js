// prime problem
let X=15;
let flag='prime'
for(let i=2;i<X;i++){
    if(X%i==0){
        flag='not prime'
    }
} 
console.log(flag)