import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NintendoComponent} from './components/nintendo/nintendo.component';
import {PlaystationComponent} from './components/playstation/playstation.component';
import {XboxComponent} from './components/xbox/xbox.component';


const routes: Routes = [
  {path:'nintendo-component', component: NintendoComponent},
  {path: 'playstation-component', component: PlaystationComponent},
  {path: 'xbox-component', component: XboxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
