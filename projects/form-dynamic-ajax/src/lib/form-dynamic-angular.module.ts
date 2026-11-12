import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { TreeSelectModule } from 'primeng/treeselect';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextModule } from 'primeng/inputtext';
import { EditorModule } from 'primeng/editor';
import { FormDynamicAngularComponent } from './form-dynamic-angular.component';
import { MessageService } from 'primeng/api';
import { TextareaModule } from 'primeng/textarea';
import { CheckboxModule } from 'primeng/checkbox';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CommonModule } from '@angular/common';
import { MultiSelectModule } from 'primeng/multiselect';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { PasswordModule } from 'primeng/password';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { PopoverModule } from 'primeng/popover';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
@NgModule({ declarations: [
        FormDynamicAngularComponent
    ],
    exports: [
        FormDynamicAngularComponent
    ], imports: [InputMaskModule,
        InputNumberModule,
        PasswordModule,
        ButtonModule,
        TableModule,
        FileUploadModule,
        MultiSelectModule,
        CommonModule,
        SelectButtonModule,
        ToggleSwitchModule,
        CheckboxModule,
        TextareaModule,
        InputTextModule,
        DividerModule,
        DatePickerModule,
        SelectModule,
        TreeSelectModule,
        RadioButtonModule,
        AutoCompleteModule,
        ReactiveFormsModule,
        PopoverModule,
        EditorModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            },
        })], providers: [provideHttpClient(withInterceptorsFromDi())] })

export class FormDynamicAngularModule { }
