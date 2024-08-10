import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class EquipoComponent implements OnInit {
  equipo = {
    integrantes: [
      {
        nombre: 'Andres Felipe Zarabanda',
        especialidad: 'Cofundador, Representante legal y director operativo.',
        url: "/assets/team/Felipe.jpg"
      },
      {
        nombre: 'Jose Ignacio Zarabanda',
        especialidad: 'Cofundador y director general.',
        url: "/assets/team/Jose.jpg"
      },
      {
        nombre: 'Betzy Hernandez',
        especialidad: 'Directora comercial, financiera y jurídica.',
        url: "/assets/team/Betzy.jpg"
      },
      {
        nombre: 'Juanita Arango',
        especialidad: 'Directora de proyectos y mercadeo.',
        url: "/assets/team/Juanita.jpg"
      }
    ]
  };

  slidesPerView: number = 0;

  constructor() {
    this.updateSlidesPerView(window.innerWidth);
  }

  ngOnInit(): void {
    this.updateSlidesPerView(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.updateSlidesPerView(event.target.innerWidth);
  }

  updateSlidesPerView(width: number): void {
    if (width <= 790) {
      this.slidesPerView = 1;
    } else if (width <= 1200) {
      this.slidesPerView = 2;
    } else if (width <= 1400) {
        this.slidesPerView = 3;
    } else {
      this.slidesPerView = 4;
    }
  }

}
