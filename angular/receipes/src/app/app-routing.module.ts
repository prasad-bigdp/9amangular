import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceipesComponent } from './receipes/receipes.component';
import { ReceipeComponent } from './receipe/receipe.component';

const routes: Routes = [
  { path: '', component: ReceipesComponent },
  { path: 'receipes', component: ReceipesComponent },
  { path: 'receipe', component: ReceipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
