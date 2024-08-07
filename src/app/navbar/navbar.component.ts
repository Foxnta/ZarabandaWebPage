import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    const toggleButton = this.renderer.selectRootElement('#navbar-toggle', true);
    const navbarLinks = this.renderer.selectRootElement('#navbar-links', true);
    const toggleIcon = this.renderer.selectRootElement('#toggle-icon', true);

    this.renderer.listen(toggleButton, 'click', () => {
      if (navbarLinks.classList.contains('active')) {
        this.renderer.removeClass(navbarLinks, 'active');
      } else {
        this.renderer.addClass(navbarLinks, 'active');
      }
    });
  }
}