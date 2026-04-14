//creation of a food list with properties such as id, name, price, category and rating

const foodList = [{
    id: 1,
    name: "salad",
    price: 5000,
    category: "Vegetarian",
    rating: 4.5
},
{
    id: 2,
    name: "Pommes pilés",
    price: 3000,
    category: "Vegetarian",
    rating: 4.0
},
{
    id: 3,
    name: "Poulet rôti",
    price: 8000,
    category: "Non-Vegetarian",
    rating: 4.8
},
{
    id: 4,
    name: "Poisson grillé",
    price: 9000,
    category: "Non-Vegetarian",
    rating: 4.6
},
{
    id: 5,
    name: "Riz au gras",
    price: 7000,
    category: "Vegetarian",
    rating: 4.3
},
{
    id: 6,
    name: "Koki",
    price: 6000,
    category: "Vegetarian",
    rating: 4.1

},
{
    id: 7,
    name: "Brochettes",
    price: 4000,
    category: "Non-Vegetarian",
    rating: 4.2
},
{
    id: 8,
    name: "Kwakoko bible",
    price: 5000,
    category: "Vegetarian",
    rating: 4.4
}
];

// Simulate an API call to fetch food data with a delay
const fetchFoodData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(foodList);
        }, 1000);
    });
};

// Function to display food items based on category
const displayFood = async () => {
    try {
        console.log("Fetching food data...");
        const foodData = await fetchFoodData();

        // Check if food data is empty and display a message if it is
        if (foodData.length === 0) {
            console.log("No food items found.");
            return;
        }
        
        // Filter and map the food data to display only vegetarian dishes with specific properties
        const filteredFoodData = foodData
        .filter(food => food.category === "Vegetarian")
        .map(food => ({
            id: food.id,
            name: food.name,
            price: food.price,
            category: food.category,
        }));

        filteredFoodData.forEach(food => {
            console.log("-------------Menu----------------");
            console.log(`ID: ${food.id}, Name: ${food.name.toUpperCase()}, Price: ${food.price}, Category: ${food.category}`);
        });

        // Log the total number of vegetarian dishes and total filtered dishes
        console.log("Total vegetarian dishes: ", filteredFoodData.length);
        console.log("Total filtered dishes: ", foodData.length);
        
        
    } catch (error) {
        console.error("Error fetching food data: ", error.message);
    }   
};

// Call the function to display food items
displayFood();

/*
1) We use .map() before .filter() to create a new array of food items that only contains the properties we want to display (id, name, price, category). This way, we can easily access these properties when we log the food items to the console.

2) .filter() is used for creating a new array of items based on a condition, while .map() is used for transforming each item in an array into a new format. In this case, we want to filter the food items based on their category (Vegetarian) and then map the filtered items to a new format that only includes the properties we want to display.

3)We transaform the data before display so that we can easily access the properties we want to display when we log the food items to the console. By creating a new array of food items with only the properties we want to display, we can simplify our code and make it easier to read and maintain. Additionally, by filtering the food items before mapping them, we can ensure that we only transform the items that meet our criteria (Vegetarian), which can improve performance and reduce unnecessary processing.
*/