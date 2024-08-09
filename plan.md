-create existing foods array
-create new foods array

-Function will take items from the new array and add them to the initial array if there are no matching items or update the quantity if the items already exist

-iterate through the new foods array
-check if the newFoods.category matches anything in foods.Category (using.find?)

if yes-constinue   if no-throw error
--(error for new ones for now-potentially be able to add in new categories too?)

-iterate through newFoods.items to see if name exists in existing category
-if yes- update existing food item quantity by adding new food item quantity
-if no- push new item (with name and quantity) into matching category in the existing array

-running should provide the new array with updated quantities for existing items or a brand new item