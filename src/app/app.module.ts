import { DropDownDirective } from '@app/shared/dropdown.directive';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from '@app/app.component';
import { HeaderComponent } from '@app/header/header.component';
import { RecipesComponent } from '@app/recipes/recipes.component';
import { RecipeListComponent } from '@app/recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from '@app/recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from '@app/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from '@app/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from '@app/shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropDownDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
