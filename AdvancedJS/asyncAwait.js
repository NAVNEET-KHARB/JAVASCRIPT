function fetchUserData(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({name:"Navneet",url:"https://www.linkedin.com/in/navneet-kharb-6b76a12b1/"});
            // reject({status:"504",msg:"Bad Getaway"});
        }, 3000);
    })
}

async function getUserData() {
    try{
        console.log("Fetching user data...");
        const userData = await fetchUserData();
        console.log("User data fetched successfully");
        console.log(`User data : `,userData);
    }catch(error){
        console.log(`Error fetching data : `,error)
    }
}

// getUserData();

function fetchPostData(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Post data fetched.");
        }, 2000);
    })
}

function fetchCommentData(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Comment data fetched.");
        }, 3000);
    })
}

async function getBlogData() {
    try {
        console.log("Fetching blog data...");
        // const postData = await fetchPostData();
        // console.log(postData);
        // const commentData = await fetchCommentData();
        // console.log(commentData);
        
        const [postData,commentData] = await Promise.all([fetchPostData(),fetchCommentData()]);
        console.log(postData);
        console.log(commentData);
        console.log("Data fetched...");
    } catch (error) {
        console.error("Error fetching blog data ", error);
    }
}

getBlogData();