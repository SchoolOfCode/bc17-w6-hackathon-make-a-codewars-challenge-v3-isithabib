export const existingFoods = [
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
  
console.dir(existingFoods, { depth: null });

export const newFoods = [
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

export function addFoodItems() {

};

  addFoodItems(existingFoods, newFoods);