import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

import { ListItem } from '../../../data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  constructor(private fb: FormBuilder) {}
  contactForm!: FormGroup;

  @Input() data: ListItem | undefined;
  @Input() date: string | undefined;

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
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
    console.log("submit");
    console.log(this.contactForm.value);
  }
}
