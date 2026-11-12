import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';

import { FormDynamicAngularComponent } from './form-dynamic-angular.component';
import { FormDynamicAngularModule } from './form-dynamic-angular.module';

describe('FormDynamicAngularComponent', () => {
  let component: FormDynamicAngularComponent;
  let fixture: ComponentFixture<FormDynamicAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDynamicAngularModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDynamicAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind a text field to the provided reactive form', () => {
    const control = new FormGroup({ name: new FormControl('initial') });
    fixture.componentRef.setInput('control', control);
    fixture.componentRef.setInput('form', [{ id: 'name', type: 'text', formControl: 'name' }]);
    fixture.detectChanges();

    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    input.value = 'updated';
    input.dispatchEvent(new Event('input'));

    expect(control.value.name).toBe('updated');
  });

  it('should render textarea and execute callbacks without changing the public contract', () => {
    const callback = jasmine.createSpy('callback');
    fixture.componentRef.setInput('control', new FormGroup({ notes: new FormControl('') }));
    fixture.componentRef.setInput('form', [{ id: 'notes', type: 'text-area', formControl: 'notes', onChange: callback }]);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('textarea')).toBeTruthy();
    component.onChange(callback);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should render the PrimeNG 20 replacements with reactive forms', () => {
    fixture.componentRef.setInput('control', new FormGroup({
      category: new FormControl(null),
      date: new FormControl(null),
      enabled: new FormControl(false),
      search: new FormControl(null),
    }));
    fixture.componentRef.setInput('form', [
      { id: 'category', type: 'select', formControl: 'category', options: [] },
      { id: 'date', type: 'date', formControl: 'date' },
      { id: 'enabled', type: 'switch', formControl: 'enabled' },
      { id: 'search', type: 'autocomplete', formControl: 'search', options: [] },
    ]);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('p-select')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('p-datepicker')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('p-toggleswitch')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('p-autocomplete')).toBeTruthy();
  });
});
