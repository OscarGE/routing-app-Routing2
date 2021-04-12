import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing2-app';
  vistasNintendo=0;
  vistasPlayStation=0;
  vistasXbox=0;

  aumentarN(): void{
    this.vistasNintendo++;
  }
  aumentarP(): void{
    this.vistasPlayStation++;
  }
  aumentarX(): void{
    this.vistasXbox++;
  }
}
