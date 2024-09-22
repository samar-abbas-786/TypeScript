// const x:number=1;
// console.log(x);

function greet(firstName:string){
    console.log("Hello" + firstName);
    
}
greet("Samar Abbas")


function sum(a:number,b:number):number{
    return a+b;
}
let ans=sum(1,2);
console.log(ans);


function runAfterT(fn:()=>number){
    setTimeout(fn,1000);
};

runAfterT(()=>{
    console.log("Hii There");
  

    return 1;
    
})
