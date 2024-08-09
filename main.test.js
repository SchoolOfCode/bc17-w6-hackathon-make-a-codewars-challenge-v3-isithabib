import { test, expect } from "vitest";
import { existingFoods, newFoods, addFoodItems } from "./main.js"

test("barebones test", () => {})


//1
test('should throw an error for categories that do not match', () => {
    const existingFoods = [
      {
        category: 'meat',
        items: [{ name: 'beef', quantity: 2 }]
      }
    ];

    const newFoods = [
      {
        category: 'others',
        items: [{ name: 'ketchup', quantity: 2 }]
      }
    ];

    addFoodItems(existingFoods, newFoods);

    expect(existingFoods).toEqual([
      {
        category: 'meat',
        items: [{ name: 'beef', quantity: 2 }]
      }
    ]);
  });

//2
test('should update quantities of existing items', () => {
    const existingFoods = [
      {
        category: 'meat',
        items: [{ name: 'beef', quantity: 2 }]
      }
    ];

    const newFoods = [
      {
        category: 'meat',
        items: [{ name: 'beef', quantity: 3 }]
      }
    ];

    addFoodItems(existingFoods, newFoods);

    expect(existingFoods).toEqual([
      {
        category: 'meat',
        items: [{ name: 'beef', quantity: 5 }]
      }
    ]);
  });

//3
test('should add new items to existing categories', () => {
    const existingFoods = [
      {
        category: 'dairy',
        items: [{ name: 'milk', quantity: 1 }]
      }
    ];

    const newFoods = [
      {
        category: 'dairy',
        items: [{ name: 'cheese', quantity: 1 }]
      }
    ];

    addFoodItems(existingFoods, newFoods);

    expect(existingFoods).toEqual([
      {
        category: 'dairy',
        items: [
          { name: 'milk', quantity: 1 },
          { name: 'cheese', quantity: 1 }
        ]
      }
    ]);
  });