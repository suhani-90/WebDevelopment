let arr=[10,20,30,40,50];
console.log(arr);
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
//avg of all elements
let sum=0;
console.log(typeof(arr));
for(let val of arr){
    sum=sum+val;
}
let avg=sum/arr.length
console.log(avg);
console.log('the avg is ',avg);
console.log(`the avg is ${avg}`);

//prints array elements after 10% discount
let items=[25,54,34,78,34,56];
let i=0;
for(let val of items){
    console.log(`value at indes ${i}=${val}`);
    let offers=val/10;
    items[i]=items[i]-offers;
    console.log(`value after offer=${items[i]}`);
}
