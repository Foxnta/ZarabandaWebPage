import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { MainComponent } from './main/main.component';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeroComponent, MainComponent, FooterComponent, CommonModule, FormComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'zarabanda';
  constructor(private router: Router) { }

  showFooter: boolean = true;

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {

        window.scrollTo(0, 0);
      }
      if (this.router.url.includes('projectview')) {
        this.showFooter = false;
      } else {
        this.showFooter = true;
      }
    });
  };
}
