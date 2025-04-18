function fetchData(val){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let success = val;
            if(success) resolve("Data fetched successfully");
            else reject("Error fetching data");
        }, 2000);
    })
}

fetchData(true)
    .then((data) => {
        console.log(data);
        return `Navneet`;
    }).then((data) => console.log(data))
    .catch((error) => console.warn(error));