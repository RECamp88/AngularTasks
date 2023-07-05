import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Components
import { CounterComponent } from './components/counter/counter.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FormValidationsComponent } from './components/form-validations/form-validations.component';
import { ProductsComponent } from './components/products/products.component';
import { ImageUploadComponent} from './components/image-upload/image-upload.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// Material Imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material/table';





@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TodoListComponent,
    FormValidationsComponent,
    ProductsComponent,
    ImageUploadComponent,
    UserDetailsComponent,
    HomepageComponent,
    NavbarComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
