import { Component } from '@angular/core';
import { ValoresComponent } from '../valores/valores.component';
import { BannerproyectosComponent } from '../bannerproyectos/bannerproyectos.component';
import { EquipoComponent } from "../equipo/equipo.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ValoresComponent, BannerproyectosComponent, EquipoComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
