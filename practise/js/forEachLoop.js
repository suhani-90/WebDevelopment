let arr=[1,2,3,4,5,6,7,8,9];

//forEach using normal function
arr.forEach(function printVal(val){
    //console.log(val);
});
//forEach using arrowfunction
let i=0;
arr.forEach((val,i)=>{
    //console.log(val,i);
});

//squre of each element
arr.forEach((val,i)=>{
    //console.log(val*val,i);
})
//another way for callback
let calSquare=(num)=>{
    console.log(num*num);
};
arr.forEach(calSquare);
