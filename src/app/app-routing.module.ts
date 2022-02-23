import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdwardComponent } from './features/edward/edward.component';
import { ElpasoComponent } from './features/elpaso/elpaso.component';
import { HomeComponent } from './features/home/home.component';
import { IdaComponent } from './features/ida/ida.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'el-paso',
    component: ElpasoComponent
  },
  {
    path: 'edward',
    component: EdwardComponent
  },
  {
    path: 'ida',
    component: IdaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
