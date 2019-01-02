import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarGeneratorModule } from '@tbgen/modules/toolbar-generator/toolbar-generator.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularMaterialModule } from '@tbgen/modules/angular-material/angular-material.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarGeneratorModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
