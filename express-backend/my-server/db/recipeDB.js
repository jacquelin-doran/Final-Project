var sqlite3 = require('sqlite3').verbose()

class RecipeDB {

    static initialize() {
        this.db.serialize(() => {
            this.db.run('CREATE TABLE Recipes (pk INTEGER PRIMARY KEY, id TEXT NOT NULL, title TEXT NOT NULL, ingredients TEXT NOT NULL, directions TEXT NOT NULL)')
            this.db.run('INSERT INTO Recipes (id, title, ingredients, directions) VALUES ("1", "Black Bean Tacos", "Refried black beans 2 cans (15 ounces each) black beans, or 3 cups cooked black beans 2 tablespoons extra-virgin olive oil 1 teaspoon ground cumin 2 cloves garlic, pressed or minced ½ teaspoon fine sea salt 1 cup plain Greek or regular yogurt 2 tablespoons lime juice (from 1 small lime) ¼ teaspoon fine sea salt 8 to 10 small corn or flour tortillas 3 cups finely sliced red or green cabbage (about ½ medium head of cabbage) ½ cup or more crumbled Cotija or feta cheese", "To make the black beans We’re going to use the cooking liquid from one can of beans (or substitute ⅓ cup water for the cooking liquid). Rinse and drain the other can of beans. Once the beans are ready to go, warm the olive oil in small saucepan over medium-low heat. Add the cumin, garlic and salt. Cook, stirring often, until fragrant, about 30 seconds to 1 minute. Pour in the can of beans with all of its liquid (or ⅓ cup water). Stir to combine. Mash up a portion of the beans with a potato masher or serving fork. Cook for a few minutes, stirring often, until the mixture reaches a simmer. Mash up the beans once more, then add the rinsed and drained beans. Stir to combine. Simmer for a few minutes, then reduce the heat to a bare minimum while we finish the remaining ingredients. Cover the pot, and stir it every few minutes so the beans don’t stick to the bottom of the pan. To make the “crema”: Combine the yogurt, lime juice and salt in a small bowl. Stir to combine. If desired, add hot sauce, to taste. Set aside. Warm the tortillas in a large skillet over medium heat in batches, flipping to warm each side. Alternatively, you can warm them directly over a low flame on a gas range. Stack the warmed tortillas on a plate and cover with a tea towel to keep warm. Soften the cabbage just a bit by sprinkling it with a couple dashes of salt. Then use your hands to “massage” it by scrunching up handfuls of cabbage until it is slightly wilted and fragrant. Finally, assemble your tacos: Spread a layer of beans down the center of each tortilla, followed by a small handful of cabbage, a generous drizzle of sauce, and sprinkles of cheese and cilantro and/or green onion. Serve immediately.")')
            this.db.run('INSERT INTO Recipes (id, title, ingredients, directions) VALUES ("2", "Easy Shakshuka", "2 tablespoons olive oil 1 large yellow onion, chopped 1 large red bell pepper or roasted red bell pepper, chopped ¼ teaspoon fine sea salt 3 cloves garlic, pressed or minced 2 tablespoons tomato paste 1 teaspoon ground cumin ½ teaspoon smoked paprika ¼ teaspoon red pepper flakes 1 large can (28 ounces) crushed tomatoes, preferably fire-roasted 2 tablespoons chopped fresh cilantro or flat-leaf parsley, plus addition cilantro or parsley leaves for garnish 5 to 6 large eggs ½ cup crumbled feta Crusty bread or pita", "Preheat the oven to 375 degrees Fahrenheit. Warm the oil in a large, oven-safe skillet (preferably stainless steel) over medium heat. Once shimmering, add the onion, bell pepper, and salt. Cook, stirring often, until the onions are tender and turning translucent, about 4 to 6 minutes. Add the garlic, tomato paste, cumin, paprika and red pepper flakes. Cook, stirring constantly, until nice and fragrant, 1 to 2 minutes. Pour in the crushed tomatoes with their juices and add the cilantro. Stir, and let the mixture come to a simmer. Reduce the heat as necessary to maintain a gentle simmer, and cook for 5 minutes to give the flavors time to meld. Turn off the heat. Taste (careful, it’s hot), and add salt and pepper as necessary. Use the back of a spoon to make a well near the perimeter and crack the egg directly into it. Gently spoon a bit of the tomato mixture over the whites to help contain the egg. Repeat with the remaining 4 to 5 eggs, depending on how many you can fit. Sprinkle a little salt and pepper over the eggs. Carefully transfer the skillet to the oven (it’s heavy) and bake for 8 to 12 minutes, checking often once you reach 8 minutes. They’re done when the egg whites are an opaque white and the yolks have risen a bit but are still soft. They should still jiggle in the centers when you shimmy the pan. (Keep in mind that they’ll continue cooking after you pull the dish out of the oven.) Using oven mitts (both hands!), transfer the hot skillet to a heat-safe surface like the stove. Top with the crumbled feta, fresh cilantro leaves, and more red pepper flakes, if desired. Serve in bowls with crusty bread on the side.")')
        })
    }

    static recipes() {
        return new Promise( (resolve, reject) => {
            this.db.all('SELECT * from Recipes', (err, response) => {   
                if (err)
                    reject(err)         
                resolve(response)
            })
        })
    }

    static insertRecipe(recipe) {
        return new Promise((resolve, reject) => {
            this.db.run(`INSERT INTO Recipes (id, title, ingredients, directions) VALUES ("${recipe.id}", "${recipe.title}", "${recipe.ingredients}", "${recipe.directions}")`, function(err, data) {
                resolve(recipe)
            })
        })
    }
}

RecipeDB.db = new sqlite3.Database('recipes.sqlite')

module.exports = RecipeDB