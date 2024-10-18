import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  showOverlay: boolean = false;

  ngOnInit(): void {
    // Mostrar el overlay después de 3 segundos
    setTimeout(() => {
      this.showOverlay = false;
    }, 9000);
  }

  closeForm(): void {
    this.showOverlay = false;
  }

}
