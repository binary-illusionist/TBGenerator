import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '@tbgen/modules/angular-material/angular-material.module';
import { TbappContainerComponent } from '@tbgen/modules/toolbar-generator/components/tbapp-container/tbapp-container.component';
import { AppToolbarComponent } from '@tbgen/modules/toolbar-generator/components/app-toolbar/app-toolbar.component';
import { SlickToolbarComponent } from '@tbgen/modules/toolbar-generator/components/slick-toolbar/slick-toolbar.component';
import { AdditemDiagComponent } from '@tbgen/modules/toolbar-generator/components/additem-diag/additem-diag.component';
import { ToolbarGeneratorService } from '@tbgen/modules/toolbar-generator/services/toolbar-generator.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SelIconDiagComponent } from '@tbgen/modules/toolbar-generator/components/selicon-diag/selicon-diag.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { TbPreviewComponent } from '@tbgen/modules/toolbar-generator/components/tb-preview/tb-preview.component';
import { ExportcodeDiagComponent } from './components/exportcode-diag/exportcode-diag.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SaveDiagComponent } from './components/save-diag/save-diag.component';
import { OpenDiagComponent } from './components/open-diag/open-diag.component';

@NgModule({
  declarations: [
    AppToolbarComponent,
    TbappContainerComponent,
    SlickToolbarComponent,
    AdditemDiagComponent,
    SelIconDiagComponent,
    TbPreviewComponent,
    ExportcodeDiagComponent,
    SaveDiagComponent,
    OpenDiagComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ColorPickerModule
  ],
  exports: [
    TbappContainerComponent
  ],
  providers: [
    ToolbarGeneratorService,
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] }

  ],
  
  entryComponents: [
    AdditemDiagComponent,
    SelIconDiagComponent,
    ExportcodeDiagComponent,
    SaveDiagComponent,
    OpenDiagComponent
  ]
})
export class ToolbarGeneratorModule { }