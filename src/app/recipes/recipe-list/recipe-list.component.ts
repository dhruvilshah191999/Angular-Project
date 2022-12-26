import { Recipe } from '@Recipes/recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test.',
      'https://assets.materialup.com/uploads/d2feb47f-3d3c-4b05-8673-a2886e5f6aca/preview'
    ),
    new Recipe(
      'A Test Recipe 2',
      'This is simply a test.',
      'https://assets.materialup.com/uploads/d2feb47f-3d3c-4b05-8673-a2886e5f6aca/preview'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
