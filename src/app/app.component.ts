import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';

import { ContadorComponent } from './contador/contador.component';
import { BuclesComponent } from "./bucles/bucles.component";

export class ContadorModule {}

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ContadorComponent, BuclesComponent]
})
export class AppComponent {
  title = 'Curso_Angular';
}
