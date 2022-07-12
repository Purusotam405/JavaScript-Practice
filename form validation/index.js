// // const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// // const squaresOfEvenNumbers = numbers.filter(ele => ele % 2 == 0)
// //     .map(ele => ele ** 2);
// // console.log(squaresOfEvenNumbers);
//
//
// //challenge 1
// for(let i=0;i<=10;i++){
//     if(i%2==0){
//         console.log("The even numbers:"+i,'<br/>')}
//
//     }
// for(let i=0;i<=10;i++){
//     if(i%2!=0){
//         console.log("The odd numbers:"+i, "<br/>")
//     }
//
//
// }
// for(let i=0;i<=10;i++){
//     if(i%2!=0 && i%3!=0){
//         console.log("The prime numbers:"+i,'<br/>')}
//
// }
//
// // challenge 2
// // const number=prompt('Enter an Integer')
// //
// // for(let i=1;i<=12;i++){
// //     const result=i*number;
// //
// //     console.log(`${number}*${i}=${result}`)
// // }
//
// const array=[1,2,3,4];
// let sum=0;
// for(let i=0;i<array.length;i++){
//     sum+=array[i]
//     console.log(sum)
// }
// //challenge 4
//
// //reverse array
// // let myArray=[20,40,60,80];
// // let revArray=[].concat(myArray).reverse();
// // console.log(revArray);
//
//
// // sort array
// let thisArray=[24,56,78,37];
// thisArray.sort(function(a,b){
//     return a - b;
//     // return b - a;
//
// })
//    console.log(thisArray)
//
//
// //filter out negative numbers
// let array1=[12,-45,5,-6,7,-4];
// array2=array1.filter(function(x){
//     return x>-1;
// })
// console.log(array2);
//
// // function func(){
// //     let Str="GeeksForGreeks";
// //     let value=Str.charCodeAt(0);
// //     document.write(value);
// // }
// // func();
// // to find the unicode character set
//
// function func() {
//     let str = 'GEEKS';
//     let value = str.charCodeAt(4);
//     // document.write(value);
//     console.log(value)
// }
// func();
//
// //split and join a string or remove white space
//
// function func1(){
//     let str="Greeks for geeks   ";
//     let st=str.split(" ").join("");
//     console.log(st)
// }
// func1()
//
// //trim() method to remove white spaces
//
// function func2(){
//     let str="     Hello World  ";
//     let st=str.trim()
//     console.log(st);
// }
// func2()
//
// //fromcharcode
// function func3() {
//     let str = String.fromCharCode(70, 72,74,77);
//     console.log(str)
// }
// func3()
//
// let output = (function(x) {
//     delete x;
//     return x;
// })(0);
//
// console.log(output);
//
//
// let Employee = {
//     company: 'xyz'
// }
// let emp1 = Object.create(Employee);
// delete emp1.company
// console.log(emp1.company);
//
//
// function foo() {
//     x = 1; // Throws a ReferenceError in strict mode
// }
//
// foo();
// console.log(x); // 1
//

//closures

let sum=function(a,b,c){
    return {
        getSumTwo:function(){
            return a+b;
        },
            getSumThree:function(){
            return a+b+c;
            }
    }
}
let store=sum(3,4,5);
    console.log(store.getSumTwo());
    console.log(store.getSumThree())


  let sum1=function(d,e,f){
        return{
            getSumFour:function(){
                return d+e;
            },
            getSumFive:function(){
                return d+e+f;
            }
        }
  }
  let storesum=sum1(7,9,6)
console.log(storesum.getSumFive())
console.log(storesum.getSumFour())


// var a=10;
//     function test(){
//         console.log(a);
//         var a=20;
//         console.log(a)
//     }
//     test()


// var test=function(){
//         console.log(10);
// };
//     function test(){
//         console.log(20);
//
//     }
//     test();

// let name="Zone";
//     let obj={
//         name:"Study",
//         showName:function(){
//             console.log(this.name);
//             setTimeout(function(){
//                 console.log(this.name);
//             },3000)
//         }
//
//     }
//     obj.showName();

    // function test(){
    //     this.name="Sunil Syal";
    // }
    // test.name="Study Zone";
    // console.log(test.name);
    //

    // var title="Fun Zone";
    //
    // var obj={
    //     title:"Study Zone",
    //     testOne:()=>{
    //         console.log(this.title)
    //     },
    //     testTwo:function(){
    //         console.log(this.title)
    //     }
    // };
    // obj.testOne();
    // obj.testTwo();


    function testOne(){
        var a=100
        {
            let a=200;
        }
        console.log(a)
    }
    function testTwo(){
        {
            var a=100;
            var b=200;
        }
        console.log(a);
    }

    testOne();
    testTwo();


    var titleArr=["Zone","Zone"];

    titleArr[0]="Gone";
    titleArr[1][0]="G";
    console.log(titleArr);

    console.log(undefined==false);
    console.log(undefined==0);
    console.log(0==false);
    console.log(0==null);
    console.log(undefined==null);
