import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElpasoComponent } from './features/elpaso/elpaso.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'el-paso',
    component: ElpasoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
