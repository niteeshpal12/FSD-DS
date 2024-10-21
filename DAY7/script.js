// function sayhello(){
//     console.log("I am in hello function");
// };
// console.log("Task started");
// setTimeout(sayhello,1000);
// // sayhello();
// console.log("Task end");
console.log("start");

setTimeout(() => {
    console.log("first task completed");
    setTimeout(() => {
        console.log("second task completed");
        setTimeout(() => {
            console.log("third task completed");
        }, 1000); 
    }, 1000); 
}, 1000); 
