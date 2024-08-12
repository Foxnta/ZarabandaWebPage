import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ValoresComponent } from '../valores/valores.component';
import { BannerproyectosComponent } from '../bannerproyectos/bannerproyectos.component';
import { EquipoComponent } from "../equipo/equipo.component";
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeroComponent, ValoresComponent, BannerproyectosComponent, EquipoComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.addSmoothScroll();
  }

  addSmoothScroll(): void {
    const navbarLinks = this.renderer.selectRootElement('#navbar-links', true); 
    const navLinks = navbarLinks.querySelectorAll('.nav-links'); 
    navLinks.forEach((link: HTMLElement) => {
      const linkText = link.textContent?.trim();
      if (linkText && ['Servicios', 'Nosotros', 'Contactanos'].includes(linkText)) {
        this.renderer.listen(link, 'click', () => {
          const sectionId = `#${linkText.toLowerCase()}`;
          const checkExist = setInterval(() => {
            const section = document.querySelector(sectionId);
            if (section) {
              clearInterval(checkExist);
              console.log('moviendo');
              const navbarHeight = 80;
              const elementPosition = section.getBoundingClientRect().top + window.scrollY;
              const offsetPosition = elementPosition - navbarHeight;
  
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            }
          }, 100); 
        });
      }
    });
  }
}


