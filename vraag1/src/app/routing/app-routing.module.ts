import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GiftListComponent } from '../components/gift-list/gift-list.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
