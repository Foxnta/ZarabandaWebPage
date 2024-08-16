import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent implements OnInit{

  proyectos = [
      {
        name: 'Proyecto 1',
        description: 'Descripción del proyecto 1',
        url_img: '/assets/proyectos/proyecto1.jpeg',
        url_pdf: '/assets/proyectos/proyecto1.pdf',
      },
      {
        name: 'Proyecto 2',
        description: 'Descripción del proyecto 2',
        url_img: '/assets/proyectos/proyecto2.jpeg',
        url_pdf: '/assets/proyectos/proyecto1.pdf',
      }, 
      {
        name: 'Proyecto 3',
        description: 'Descripción del proyecto 3',
        url_img: '/assets/proyectos/proyecto3.jpeg',
        url_pdf: '/assets/proyectos/proyecto1.pdf',
      }, 
      {
        name: 'Proyecto 4',
        description: 'Descripción del proyecto 4',
        url_img: '/assets/proyectos/proyecto4.jpeg',
        url_pdf: '/assets/proyectos/proyecto1.pdf',
      },
      {
        name: 'Proyecto 5',
        description: 'Descripción del proyecto 5',
        url_img: '/assets/proyectos/proyecto5.jpeg',
        url_pdf: '/assets/proyectos/proyecto1.pdf',
      }
  ]

  constructor() { }

  ngOnInit(): void { }
}
