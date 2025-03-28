import { Component } from '@angular/core';
import { Client } from './client';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {
  clients: Client[] = [];
  ngOnInit(): void {
    this.clients = [
      { id: 1, name: "Juan", lastname: "Perez", email: "juan@unicauca.edu.co", createdAt: "2021-05-14" },
      { id: 2, name: "Maria", lastname: "Perez", email: "maria@unicauca.edu.co", createdAt: "2021-05-14" },
      { id: 3, name: "Pedro", lastname: "Perez", email: "pedro@unicauca.edu.co", createdAt: "2021-05-14" },
      { id: 4, name: "Luis", lastname: "Perez", email: "luis@unicauca.edu.co", createdAt: "2021-05-14" },
      { id: 5, name: "Carlos", lastname: "Perez", email: "carlos@unicauca.edu.co", createdAt: "2021-05-14" },
      { id: 6, name: "Juan", lastname: "Perez", email: "juan@unicauca.edu.co", createdAt: "2021-05-14" },
    ]
  }
}
