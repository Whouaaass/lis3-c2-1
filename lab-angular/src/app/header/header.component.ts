import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public name: string = "Fredy Esteban";
  public lastname: string = "Anaya Salazar";
  public discipline: string = "Ingeniero de Software";
  public description: string = "Soy un estudiante de ingeniería de software con buena experiencia en herramientas de desarrollo web"
}
