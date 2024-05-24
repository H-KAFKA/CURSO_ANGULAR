import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';

import { ContadorComponent } from './contador/contador.component';

@NgModule({
  declarations: [ContadorComponent],
  exports: [ContadorComponent],
})
export class ContadorModule {}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Curso_Angular';
}
