import { SignupDialogComponent } from './shared/dialogs/signup-dialog/signup-dialog.component';
import { AuthInterceptor } from './core/components/auth/auth-interceptor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { Reducers } from './app.reducer';
import { TaskEffect } from './core/store/effects/task.effects';
import { TaskComponent } from './core/components/tasks/tasks.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthComponent } from './core/components/auth/auth.component';
import { LoginDialogComponent } from './shared/dialogs/login-dialog/login-dialog.component';
import { TopMenuComponent } from './core/components/top-menu/top-menu.component';



@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    AuthComponent,
    SignupDialogComponent,
    LoginDialogComponent,
    TopMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(Reducers),
    EffectsModule.forRoot([TaskEffect]),
    FormsModule,
    AngularMaterialModule,
    BrowserAnimationsModule
  ],
  entryComponents:[SignupDialogComponent, LoginDialogComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
