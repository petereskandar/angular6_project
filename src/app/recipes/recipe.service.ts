import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('a Test Recipe', 'This is simply a test', 'https://img.taste.com.au/_k6sa3dZ/w720-h480-cfill-q80/taste/2016/11/chicken-and-prosciutto-parmigiana-79468-1.jpeg',
              [
                new Ingredient('Potatos', 5),
                new Ingredient('Tomatos', 6)
              ]),
    new Recipe('Another Recipe 2', 'This is simply a test 2', 'https://img.taste.com.au/_k6sa3dZ/w720-h480-cfill-q80/taste/2016/11/chicken-and-prosciutto-parmigiana-79468-1.jpeg',
              [
                new Ingredient('Meat', 5),
                new Ingredient('French Fries', 6)
              ])
  ];

  constructor(private slsService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoList(ingredients: Ingredient[]) {
    this.slsService.addIngredients(ingredients);
  }
}
