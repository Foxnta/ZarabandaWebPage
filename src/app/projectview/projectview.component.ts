import { Component, OnInit } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.pdfSrc = params['pdfUrl'] || '/';
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


}
