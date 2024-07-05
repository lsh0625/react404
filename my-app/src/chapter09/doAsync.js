//import { printMe } from './doAsync';  // Correct import if PrintMe is exported
// or
//import { increasePromise } from './doAsync';  // Correct import if increasePromise is exported

function printMe(){
    console.log("Hello World");
}
setTimeout(printMe,3000);
console.log('대기중');
function increase(number,callback){
    setTimeout(()=>{
        const result=number+10;
        if(callback){
            callback(result);
        }
    },1000);
    
}
export const increasePromise=(number)=>{
    const promise=new Promise((response,reject)=>{
        setTimeout(()=>{
            const result=number+10;
            if(result>=50){
                const e=new Error('NumberToBig');
                return reject(e);
            }
            response(result);
        },1000);
    });
    return promise;
}
increase(0, result=>{
    console.log(result);
    increase(result,result=>{
        console.log(result);
        increase(result,result=>{
            console.log(result);
            increase(result,result=>{
                console.log(result);
            })
        })
    })
});
export const increaseAsync=(number)=>{
    const promise=new Promise((response,reject)=>{
        setTimeout(()=>{
            const result=number+10;
            if(result>=50){
                const e=new Error('NumberToBig');
                return reject(e);
            }
            response(result);
        },1000);
    });
    return promise;
}