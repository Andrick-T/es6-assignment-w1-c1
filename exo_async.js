//create a getPostInfo function that takes a postId as arg
//use fetch to get data from https://jsonplaceholder.typicode.com/posts/[ID]
//print the psot title as Post title: [TITLE]
//wrap the function in a try catch block to handle errors 
//execute for poqtID no 5

const getPostInfo = async (postId) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/5");
        if(!response.ok){
            throw new Error(`could not fetch data. HTTP error! Status: ${response.status}`);
        }
        const postData = await response.json();
        console.log(`Post title: ${postData.title}`);
    }catch(error){
        console.log("Error caught", error.message);
    }    
}

getPostInfo();