import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule  } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isContactFormSubmitted = false;
  showOverlay: boolean = false;

  
  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]+$') 
      ]),
      body: new FormControl('', [Validators.required]),
    });
    setTimeout(() => {
      this.showOverlay = true;
    }, 9000);
  }

  onSubmit(evt: SubmitEvent) {
    evt.preventDefault();

    const formData = this.contactForm.value;
    // This is important. We need to add the hidden field to make sure Netlify picks up the form submission.
    formData['form-name'] = 'contact';
    const headers = new HttpHeaders({
      Accept: 'text/html',
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    this.http
      .post('/', new URLSearchParams(formData).toString(), { headers, responseType: 'text' })
      .subscribe(() => {
        this.isContactFormSubmitted = true;
        setTimeout(() => {
          this.closeForm();
        }, 5000);
      });
  }

  // functions used in the html template
  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get phone() {
    return this.contactForm.get('phone');
  }
  get body() {
    return this.contactForm.get('body');
  }
  closeForm(): void {
    this.showOverlay = false;
  }
}