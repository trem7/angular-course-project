import { EventEmitter } from "@angular/core";

import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://torange.biz/photo/38/IMAGE/pizza-health-recipe-38030.jpg'),
    new Recipe('Another test recipe', 'This is simply a test', 'https://torange.biz/photo/38/IMAGE/pizza-health-recipe-38030.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
