import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './loginComponent/login.component';
import { AuthentificationService } from './authentification.service';
import { LoginRoutingModule } from './login-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }