import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {debounceTime, startWith} from 'rxjs';
import {Treatment} from './interfaces/treatment';
import {RequestService} from './services/request.service';
import {treatmentCodeValidator} from './validators/treatmentCode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  treatments: Treatment[] = [];
  loading: boolean = true;
  term = new FormControl('', [
    Validators.minLength(3),
    treatmentCodeValidator(),
  ]);

  constructor(private requestService: RequestService) {
  }

  ngOnInit(): void {
    // subscribe to input changes
    this.term.valueChanges
      .pipe(
        startWith(''),
        // wait for 500ms of silence
        debounceTime(500)
      )
      .subscribe((value) => {
        if (this.term.valid) {
          this.loading = true;
          this.requestService
            .getTreatments({
              treatmentCode_like: value,
            })
            .subscribe({
              next: (value) => {
                this.loading = false;
                this.treatments = value
              },
              error: () => {
                this.loading = false;
                console.log('Error from backend API')
              }
            })
        }
      });
  }
}
