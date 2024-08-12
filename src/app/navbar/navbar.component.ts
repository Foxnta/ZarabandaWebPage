import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [RouterModule] 
})
export class NavbarComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    const toggleButton = this.renderer.selectRootElement('#navbar-toggle', true);
    const navbarLinks = this.renderer.selectRootElement('#navbar-links', true);
    const toggleIcon = this.renderer.selectRootElement('#toggle-icon', true);
    const body = this.renderer.selectRootElement('body', true);

    this.renderer.listen(toggleButton, 'click', () => {
      if (navbarLinks.classList.contains('active')) {
        this.renderer.removeClass(navbarLinks, 'active');
        this.renderer.removeClass(body, 'no-scroll');
      } else {
        this.renderer.addClass(navbarLinks, 'active');
        this.renderer.addClass(body, 'no-scroll');
      }

      if (toggleIcon.classList.contains('fa-bars')) {
        this.renderer.removeClass(toggleIcon, 'fa-bars');
        this.renderer.addClass(toggleIcon, 'fa-x');
        this.renderer.addClass(toggleIcon, 'rotate');
      } else {
        this.renderer.removeClass(toggleIcon, 'fa-x');
        this.renderer.addClass(toggleIcon, 'fa-bars');
        this.renderer.removeClass(toggleIcon, 'rotate');
      }
    });
  }
}