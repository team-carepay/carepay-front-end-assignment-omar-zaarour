import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RequestService } from './services/request.service';
import 'zone.js/testing';
describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [RequestService],
      imports: [HttpClientModule, ReactiveFormsModule],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should show the validation span with at least 3 repeating characters', waitForAsync(() => {
    fixture.detectChanges();
    // get the term's input and display elements from the DOM
    const hostElement: HTMLElement = fixture.nativeElement;
    const termInput: HTMLInputElement = hostElement.querySelector('input')!;

    // simulate user entering a new term into the input box
    termInput.value = '1122';

    termInput.dispatchEvent(new Event('input'));
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const errorDisplay: HTMLElement = hostElement.querySelector('span')!;
      expect(errorDisplay).toBeTruthy();

      expect(errorDisplay?.textContent?.toLowerCase()).toBe(
        'at least 3 repeating characters'
      );
    });
  }));

  it('should show the validation span with at least 3 characters', waitForAsync(() => {
    fixture.detectChanges();

    const hostElement: HTMLElement = fixture.nativeElement;
    const termInput: HTMLInputElement = hostElement.querySelector('input')!;


    termInput.value = '11';

    termInput.dispatchEvent(new Event('input'));
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const errorDisplay: HTMLElement = hostElement.querySelector('span')!;
      expect(errorDisplay.textContent?.toLowerCase()).toBe(
        'at least 3 characters'
      );
    });
  }));

  it('should hide the validation span when the input value is valid', waitForAsync(() => {
    fixture.detectChanges();
    const hostElement: HTMLElement = fixture.nativeElement;
    const termInput: HTMLInputElement = hostElement.querySelector('input')!;

    termInput.value = '112233445581';

    termInput.dispatchEvent(new Event('input'));
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const errorDisplay: HTMLElement = hostElement.querySelector('span')!;
      expect(errorDisplay).toBeNull();
    });
  }));
});
