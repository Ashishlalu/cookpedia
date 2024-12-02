import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ProfileComponent } from './profile/profile.component';
import { SavedRecipeComponent } from './saved-recipe/saved-recipe.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { PnfComponent } from './pnf/pnf.component';

export const routes: Routes = [
    // http://localhost:4200
    {
        path: '',component:HomeComponent,title:"Home Page"
    },
    // http://localhost:4200/about
    {
        path: 'about', component: AboutComponent, title: "About Page"
    },
    // http://localhost:4200/contact
    {
        path: 'contact', component: ContactComponent, title: "Contact Page"
    },
    // http://localhost:4200/login
    {
        path: 'login', component: LoginComponent, title: "Login Page"
    },
    // http://localhost:4200/register
    {
        path:'register',component:RegisterComponent,title:"Register Page"
    },
    // http://localhost:4200/recipes
    {
        path:'all-recipes',component:RecipesComponent,title:"All-recipes Page"
    },
    // http://localhost:4200/profile
    {
        path:'profile',component:ProfileComponent,title:"Profile Page"
    },
    // http://localhost:4200/saved-recipe
    {
        path:'save-recipe',component:SavedRecipeComponent,title:"Save Recipes Collection"
    },
    // http://localhost:4200/id/view
    {
        path:'recipe/:id/view',component:ViewRecipeComponent,title:"View Recipe"
    },
        // http://localhost:4200/
    {
        path:'**',component:PnfComponent,title:'Page not found'
    }

];
