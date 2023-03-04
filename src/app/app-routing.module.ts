import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'home',  pathMatch: 'full', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  // { path: 'side', pathMatch: 'full', component: SideNavComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
