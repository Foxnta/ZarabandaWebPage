import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


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
        url_img: '/assets/proyectos/proyecto1.jpg',
        url_pdf: '/assets/proyectos_pdf/proyecto1.pdf',
      },
      {
        name: 'Proyecto 2',
        url_img: '/assets/proyectos/proyecto2.jpeg',
        url_pdf: '/assets/proyectos_pdf/proyecto2.pdf',
      }, 
      {
        name: 'Proyecto 3',
        url_img: '/assets/proyectos/proyecto3.png',
        url_pdf: '/assets/proyectos_pdf/proyecto3.pdf',
      }, 
      {
        name: 'Proyecto 4',
        url_img: '/assets/proyectos/proyecto4.png',
        url_pdf: '/assets/proyectos_pdf/proyecto4.pdf',
      },
      {
        name: 'Proyecto 5',
        url_img: '/assets/proyectos/proyecto5.png',
        url_pdf: '/assets/proyectos_pdf/proyecto5.pdf',
      }
  ]

  constructor(private router: Router) { }

  viewProject(pdfUrl: string): void {
    this.router.navigate(['/projectview'], { queryParams: { pdfUrl } });
  } 

  ngOnInit(): void { }
}
