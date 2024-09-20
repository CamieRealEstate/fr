import { Component, Input, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatError } from '@angular/material/form-field';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import emailjs from '@emailjs/browser';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

import { ListItem } from '../../../data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, MatError, MatProgressBar],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit, OnDestroy {
  constructor(private fb: FormBuilder, private matSnackBar: MatSnackBar, private translate: TranslateService) { }
  contactForm!: FormGroup;
  private destroy$ = new Subject<void>();
  readonly isLoading = signal(false);
  private date = new Date().toString();

  @Input() data: ListItem | undefined;

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      title: ['[' + this.date + '] ' + this.data?.name + ' enquiry', Validators.required],
      message: ['I would like to learn more about ' + this.data?.name, []]
    });

    this.updateTitleOnNameChange();
  }

  updateTitleOnNameChange() {
    this.contactForm.get('name')?.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((value: string) => {
      const titleValue = '[' + this.date + '] ' + value + ': ' + this.data?.name + ' enquiry';
      this.contactForm.get('title')?.setValue(titleValue, { emitEvent: false });
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmit() {
    this.showSuccessSnackbar();
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.sendEmail();
    } else {
      Object.values(this.contactForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.markAsTouched();
        }
      });
    }
  }

  sendEmail() {
    this.isLoading.set(true)
    emailjs.init('biRBgw6KU04Oqs1LU');
    emailjs.send('service_36vua4a', 'template_scplfby', {
      title: this.contactForm.get('title')?.value || '',
      message: this.contactForm.get('message')?.value || '',
      name: this.contactForm.get('name')?.value || '',
      phone: this.contactForm.get('phone')?.value || '',
      email: this.contactForm.get('email')?.value || ''
    })
      .then(() => {
        this.isLoading.set(false)
        this.showSuccessSnackbar();
      }, (error) => {
        this.isLoading.set(false)
        this.showErrorSnackbar();
      });
  }

  private showSuccessSnackbar() {
    this.translate.get('Email sent!').subscribe(
      (translatedMessage: string) => {
        this.matSnackBar.open(translatedMessage, 'Close', {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      },
    );
  }

  private showErrorSnackbar() {
    this.translate.get('Error while sending email').subscribe(
      (translatedMessage: string) => {
        this.matSnackBar.open(translatedMessage, 'Close', {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      },
    );
  }
}
