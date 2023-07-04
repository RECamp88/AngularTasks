import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { HomepageComponent } from './components/homepage/homepage.component';
import { CounterComponent } from './components/counter/counter.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FormValidationsComponent } from './components/form-validations/form-validations.component';
import { ProductsComponent } from './components/products/products.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  {path: '**', component: HomepageComponent},
  {path: 'task1', component: CounterComponent},
  {path: 'task2', component: TodoListComponent},
  {path: 'task3', component: FormValidationsComponent},
  {path: 'task4', component: ProductsComponent},
  {path: 'task5', component: ImageUploadComponent},
  {path: 'task6', component: UserDetailsComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
