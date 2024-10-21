// const mypromise = new Promise((resolve, reject) => {
//     let success = true; 

    
//     setTimeout(() => {
//         if (success) {
//             resolve("data sent successfully");
//         } else {
//             reject("Data failed to send");
//         }
//     }, 4000); 
// });

// mypromise
//     .then((message) => {
//         console.log("Data received: " + message);
//     })
//     .catch((err) => {
//         console.log("Failed to fetch data: " + err);
//     });
function task(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {  
            console.log(message);
            resolve();
        }, delay);
    });
}

task("First task completed", 1000)
    .then(() => task("Second task is completed", 2000)) 
    .then(() => task("Third task is completed", 3000)) 
    .then(() => task("Third task is completed", 4000)); 
    
