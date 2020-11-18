import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';


const routes: Routes = [
  {
    path: 'clientok', component: ClientComponent, data: {url: 'http://localhost:8080/granted-url'}
  }, {
    path: 'clientko', component: ClientComponent, data: {url: 'http://localhost:8080/not-granted-url'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
