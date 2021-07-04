import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{CalculatePremiumComponent} from './calculate-premium/calculate-premium.component';

const routes: Routes = [
  
  { path: 'calculate-premium', component: CalculatePremiumComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
