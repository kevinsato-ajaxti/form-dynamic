
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  FormDynamicAngularModule,
  IForm,
} from 'projects/form-dynamic-ajax/src/public-api';

@Component({
    selector: 'app-installation',
  imports: [FormDynamicAngularModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [],
    templateUrl: './installation.component.html',
    styleUrl: './installation.component.scss'
})

export class InstallationComponent {
  readonly control = new FormGroup({
    name: new FormControl(''),
    notes: new FormControl(''),
    area: new FormControl(null),
    date: new FormControl(null),
    active: new FormControl(false),
    table: new FormControl(null),
  });

  readonly fields: IForm[] = [
    { id: 'name', label: 'InputText', type: 'text', formControl: 'name', col: 'md:col-6' },
    { id: 'notes', label: 'Textarea', type: 'text-area', formControl: 'notes', rowsTextArea: 3, col: 'md:col-6' },
    {
      id: 'area',
      label: 'Select',
      type: 'select',
      formControl: 'area',
      options: [
        { code: 1, description: 'Área 1' },
        { code: 2, description: 'Área 2' },
      ],
      col: 'md:col-6',
    },
    { id: 'date', label: 'Date', type: 'date', formControl: 'date', col: 'md:col-6' },
    { id: 'active', label: 'Checkbox', type: 'check-box', formControl: 'active', col: 'md:col-6' },
    {
      id: 'table',
      label: 'Tabela',
      type: 'table',
      formControl: 'table',
      colsTable: [
        { field: 'code', header: 'Código' },
        { field: 'description', header: 'Descrição' },
      ],
      rowsTable: [
        { code: 1, description: 'Linha 1' },
        { code: 2, description: 'Linha 2' },
      ],
      col: 'col-12',
    },
  ];
}
