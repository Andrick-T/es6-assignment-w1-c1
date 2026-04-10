//The logic trap
// console.log("step 1: ordering coffee...");
// const data = fetch("https://jsonplaceholder.typicode.com/users/1");

// console.log("step 2: coffee owner data is: ", data);
// console.log("step 3: Talking to a friend...");

console.log("fetchiung user data from the api...");

// const getUserData = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//     const data = await response.json();
//     console.log(`Success! Name:${data.name} from ${data.address.city}`);

//     const {...user} = data;
//     console.log(user.company.name);

// }

// getUserData();
// console.log("I am non-blocking background task. I will execute before the data is fetched");

const getSafeUserData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if(!response.ok) {
            //const data = await response.json();
            throw new Error(`Could not find user. HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(`Success! Name:${data.name} from ${data.address.city} with company ${data.company.name}`);
    } catch (error) {
        console.log("Error caught", error.message);
        console.error("Error fetching user data: ", error);
        console.log("Please check the API endpoint and try again.");
    }
}

getSafeUserData();