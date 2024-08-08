const foods = [
    {
      category: "dairy",
      items: [
        { name: "milk", quantity: 1 },
        { name: "cheese", quantity: 4 }
      ]
    },
    {
      category: "meat",
      items: [
        { name: "chicken", quantity: 2 },
        { name: "lamb", quantity: 1 }
      ]
    },
    {
      category: "veg",
      items: [
        { name: "tomatoes", quantity: 3 },
        { name: "broccoli", quantity: 2 },       
      ]
    }
  ];
  
//   console.log(foods);
console.dir(foods, { depth: null });

  const newFoods = [
    {
      category: "dairy",
      items: [
        { name: "butter", quantity: 2 },
        { name: "milk", quantity: 1 }
      ]
    },
    {
      category: "meat",
      items: [
        { name: "beef", quantity: 3 }
      ]
    },
    {
      category: "veg",
      items: [
        { name: "tomatoes", quantity: 2},
        { name: "onions", quantity: 4 },
        { name: "asparagus", quantity: 2}
      ]
    },
  ];

function addFoodItems(existingFoods, newFoods) {  // Function to add new food items to the existing array
    newFoods.forEach(newFoodCategory => {  // Find if the category already exists in the existing foods array
      const existingCategory = existingFoods.find(
        food => food.category === newFoodCategory.category
      );
  
      {  // Update existing category with new items or update quantities
        newFoodCategory.items.forEach(newItem => {
          const existingItem = existingCategory.items.find(
            item => item.name === newItem.name
          );

          if (existingItem) {  // If the item exists, update its quantity
            existingItem.quantity += newItem.quantity;
          } 
          
          else {  // If the item does not exist, add it to the items array 
            existingCategory.items.push(newItem);
          }
        });
      } 
    });
  };


  
  // Run the function with arrays added into parameters
  addFoodItems(foods, newFoods);
  
  // Display the updated foods array
  console.dir(foods, { depth: null });