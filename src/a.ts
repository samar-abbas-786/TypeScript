// // const x:number=1;
// // console.log(x);

// function greet(firstName:string){
//     console.log("Hello" + firstName);
    
// }
// greet("Samar Abbas")


// function sum(a:number,b:number):number{
//     return a+b;
// }
// let ans=sum(1,2);
// console.log(ans);


// function runAfterT(fn:()=>number){
//     setTimeout(fn,1000);
// };

// runAfterT(()=>{
//     console.log("Hii There");
  

//     return 1;
    
// })



// function isLegal(user:{
//     name:string,age:number,email:string
// }){
//     if(user.age>19){
//         console.log("Legal");
        
//     }
//     else{
//         console.log("Not Legal");
        
//     }
// }

interface User{
    name:string,
    age:number,
    email:string
    grade?:number
}

function isLegal(user:User){
    if(user.age>18){
        console.log("Legal");
        
    }
    else{
        console.log("Not Legal");
        
    }
}

function greet(user:User){
    console.log("Hello " + user.name);
    
}
greet({
    name:"Samar",
    age:21,
    email:"xyz@gmail.com"
})

isLegal({
    name:"Samar",
    age:21,
    email:"xyz@gmail.com"
})

type isOk={
 name:"Abbas",
 age:20
}