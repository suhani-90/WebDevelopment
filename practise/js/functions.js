function printHello(msg){
    console.log("hello",msg);

}
printHello("suhani");
printHello("aryan");

function add(a,b){
    let sum=a+b;
    return sum;
}
let sum=add(34,67);
console.log(sum);

//ARROW FUNCTIONS
const arrowSum=(a,b)=>{
    return a+b;
};

const arrowSum2=(a,b)=>{
    console.log(a+b);
};

const printHello2=()=>{
    console.log("hello");
};
