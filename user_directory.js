// const  fetchUsers = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//      try {
//          const users = await response.json();
//          const  simplifiedUsers = users.map(user => ({
//              id: user.id,
//              name: user.name,
//              email: user.email,
//              city: user.address.city
//          }));

//          console.table(simplifiedUsers);
//          return simplifiedUsers;

//            } catch (error) {
//          console.error("Project Error: ", error.message);
//     }
// }

// fetchUsers();

// const runUserDirectory = async (targetCity) => {
//     console.log(`Fetching users from ${targetCity}...`);
    
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     try {
//         const allUsers = await response.json();
//         const filteredUsers = allUsers.filter(user => user.address.city === targetCity);

//         if (filteredUsers.length === 0) {
//             console.log(`No users found from ${targetCity}`);
//         }
//         else {
//             filteredUsers.forEach(user => {
//             console.log(`[=>ID: ${user.id}]`);
//             console.log(`Name: ${user.name.toUpperCase()}, Email: ${user.email}, Company: ${user.company.name}`);
//             console.log(`Address: ${user.address.street}, ${user.address.suite}`);   
//             });
//         }
//     } catch (error) {
//         console.log("Couldn't find data", error.message);
        
//     }
   
// }

// runUserDirectory("Gwenborough");

const API_URL= 'https://jsonplaceholder.typicode.com/users';

const localUserApp = async () => {
    try {
        console.log("Trying to access database...");
        const response = await fetch(API_URL);

        const rawData = await response.json();
        //console.table(rawData);

        const cleanUsers = rawData.map(user => ({
            id: user.id,
            name: user.name,
            username: user.username.toLowerCase(),
            email: user.email,
            city: user.address.city,
            company: user.company.name,
            address: `${user.address.street}, ${user.address.suite}, ${user.address.city}`
        }));

        const searchCity = "Roscoeview";
        const results = cleanUsers.filter(user => user.city === searchCity);        
        if(results.length === 0) { 
            console.log(`No users found from ${searchCity}`);
        } else {
            console.log("n\============================================================");
            console.log(`Users from ${searchCity}:`);
            console.table(results);
        }

    } catch (error) {
        console.error("Error fetching local users:", error.message);
    }

}
localUserApp();