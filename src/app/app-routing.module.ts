import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerguntasComponent } from './pages/perguntas/perguntas.component';

const routes: Routes = [
  { path: '', component: PerguntasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
