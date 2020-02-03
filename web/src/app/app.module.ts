import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { appRoutes } from './routes/routes.root';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MessagesComponent } from './components/messages/messages.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/erorrs/notfound/notfound.component'
import { CanActivateAuthGuard } from './routes/can-activate-auth.guard';
import { AuthenService } from './service/authen.service';
import { AuthenComponent } from './templates/authen/authen.component';
import { GeneralComponent } from './templates/general/general.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessagesComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent,
    AuthenComponent,
    GeneralComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CanActivateAuthGuard,
    AuthenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
