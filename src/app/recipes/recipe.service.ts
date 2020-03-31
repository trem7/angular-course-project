import { EventEmitter } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super tasty Schnitzel',
      'https://upload.wikimedia.org/wikipedia/commons/4/46/Pork_schnitzel.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'A pizza',
      'A regular old pizza',
      'https://torange.biz/photo/38/IMAGE/pizza-health-recipe-38030.jpg',
      [
        new Ingredient('Crust', 1),
        new Ingredient('Sauce', 1),
        new Ingredient('Cheese', 1)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
