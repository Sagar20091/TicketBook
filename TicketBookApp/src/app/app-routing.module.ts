import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './Pages/search/search.component';
import { BookingComponent } from './Pages/booking/booking.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' }, // Default path
  { path: 'search', component: SearchComponent },
  { path: 'booking', component: BookingComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
    
  
 }
