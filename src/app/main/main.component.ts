import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ValoresComponent } from '../valores/valores.component';
import { BannerproyectosComponent } from '../bannerproyectos/bannerproyectos.component';
import { EquipoComponent } from "../equipo/equipo.component";
import { Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeroComponent, ValoresComponent, BannerproyectosComponent, EquipoComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  constructor(private renderer: Renderer2, private router: Router) {}

  ngOnInit(): void {
    this.addSmoothScroll();
  }

  addSmoothScroll(): void {
    const navbarLinks = this.renderer.selectRootElement('#navbar-links', true); 
    const navLinks = navbarLinks.querySelectorAll('.nav-links');

    const scrollToSection = (sectionId: string) => {
      const checkExist = setInterval(() => {
        const section = document.querySelector(sectionId);
        if (section) {
          clearInterval(checkExist);
          const navbarHeight = 80;
          const elementPosition = section.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navbarHeight;
  
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    };
  
    navLinks.forEach((link: HTMLElement) => {
      const linkText = link.textContent?.trim();
      if (linkText && ['Servicios', 'Nosotros', 'Contactanos', 'Inicio'].includes(linkText)) {
        if (linkText === 'Contactanos') {
          this.renderer.listen(link, 'click', () => {
            if (this.router.url.includes('projectview')) {
              this.router.navigate(['/']).then(() => {
                scrollToSection('#contactanos');
              });
            } else {
              scrollToSection('#contactanos');
            }
          });
        }
        else if (linkText === 'Inicio') {
          this.renderer.listen(link, 'click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });
        } else {
          this.renderer.listen(link, 'click', () => scrollToSection(`#${linkText.toLowerCase()}`));
        }
      }
    });
  

      const buttonContactanos = this.renderer.selectRootElement('#button-contactanos', true);
      this.renderer.listen(buttonContactanos, 'click', () => {
        if (this.router.url.includes('projectview')) {
          this.router.navigate(['/']);
        } else {
          scrollToSection('#contactanos');
        }
      });

  }
  
}


