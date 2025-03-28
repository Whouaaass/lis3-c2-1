import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public proyect = {
    year: "2024",
    name: "Proyecto de clase",
  }
  public technology = {
    legend: "WebApp desarrollada con ",
    tecs: ["Angular", "Spring - SpringBoot"]
  }
  public author = "Desarrollado por Fredy Esteban Anaya Salazar "
}
