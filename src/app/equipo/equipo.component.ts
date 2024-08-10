import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.updateSlidesPerView(window.innerWidth);
  }

  ngOnInit(): void {
    this.updateSlidesPerView(window.innerWidth);
    this.modifySwiperButtonStyles();
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

  modifySwiperButtonStyles(): void {
    const swiperContainer = document.querySelector('swiper-container');
    if (swiperContainer && swiperContainer.shadowRoot) {
      const styleElement = document.createElement('style');
      styleElement.innerText = `
        .swiper-button-next {
          color: var(--primary-color) !important;
        }
        .swiper-button-prev {
          color: var(--primary-color) !important;
        }
      `;
      swiperContainer.shadowRoot.appendChild(styleElement);
    }
  }

}
