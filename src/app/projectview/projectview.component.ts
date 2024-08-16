import { Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projectview',
  standalone: true,
  imports: [PdfViewerModule, CommonModule],
  templateUrl: './projectview.component.html',
  styleUrl: './projectview.component.css'
})
export class ProjectviewComponent {
  pdfSrc: string = '/assets/proyectos_pdf/proyecto1.pdf';
  reRender = true;
  pdfSize = 80;

  renderAgain() {
    this.reRender = false;
    setTimeout(() => {
      this.reRender = true;
    }, 5);
  }


}
