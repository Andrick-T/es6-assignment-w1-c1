//Authour: Tchoukeu Andrick 
const fetchUserData = async () => {

    console.log("Request Started...");
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
            throw new Error(`Failed to access users. HTTP error! Status: ${response.status}`);  
        }
        const user = await response.json();
        console.log(`User_Name: ${user.name}`);
        console.log("Request finished");

    } catch (error) {
        console.log("Error caught", error.message);
    }
}
fetchUserData();

/*
Starter code failed because the code treats an asynchronous request as though it was synchronous. The console.log statements execute before the data is fetched, leading to incorrect output. By using async/await and proper error handling, we can ensure that the data is fetched before we attempt to log it, and we can also catch any errors that may occur during the fetch operation.

The await keyword allows the program to wait for the fetch operation to complete before moving on to the next line of code. This ensures that we have the user data available when we try to log it. 

It is considered a good practice to verify response.ok even if the try block has not caught any errors, because fetch will only throw an error for network issues, not for HTTP errors. By checking response.ok, we can catch HTTP errors and handle them appropriately, providing a better user experience and more robust error handling in our application.
*/