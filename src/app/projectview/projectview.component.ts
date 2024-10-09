import { Component, OnInit } from '@angular/core';
import { PdfViewerModule, PDFDocumentProxy } from 'ng2-pdf-viewer'; // Importa PDFDocumentProxy para tener acceso a la información del PDF
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projectview',
  standalone: true,
  imports: [PdfViewerModule, CommonModule],
  templateUrl: './projectview.component.html',
  styleUrl: './projectview.component.css'
})
export class ProjectviewComponent implements OnInit {
  pdfSrc: string = '';
  isLoading: boolean = true; // Controla el estado de carga

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.pdfSrc = params['pdfUrl'] || '/';
      this.isLoading = true;  // Reinicia el estado de carga al cambiar el PDF
    });
  }

  reRender = true;
  pdfSize = 80;

  renderAgain() {
    this.reRender = false;
    setTimeout(() => {
      this.reRender = true;
    }, 5);
  }

  // Función callback para cuando el PDF se haya cargado completamente
  callBackFn(pdf: PDFDocumentProxy) {
    // console.log('PDF cargado:', pdf);
    this.isLoading = false; // Oculta el spinner cuando el PDF ha sido cargado
  }
}
