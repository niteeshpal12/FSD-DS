function fetchData() {
    return new Promise((resolve, reject) => {
        let data = { id: 1, name: "Abhishek", city: "Ghzb" };
        setTimeout(() => { 
            resolve(data);
        }, 3000);
    });
}


fetchData()
    .then((data) => {
        console.log("Data received:", data);
    })
    .catch((err) => {
        console.log("Error fetching data:", err);
    });

    fetchData()