import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    { id: 'r1',
      title: 'Banane flambée',
      imageUrl: 'https://www.atelierdeschefs.com/media/recette-e15624-bananes-flambees.jpg',
      ingredients: ['Banane', 'Caramel']
    },
    {
      id: 'r2',
      title: 'Poireaux mimosa',
      imageUrl: 'http://www.laurentmariotte.com/wp-content/uploads/2017/05/ppee-s93_poireaux_plat1-1024x576.jpg',
      ingredients: ['Oeufs', 'Poireaux']
    }
  ];
  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
        ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
