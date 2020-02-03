import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { MessagesComponent } from './components/messages/messages.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/erorrs/notfound/notfound.component'
import { CanActivateAuthGuard } from './can-activate-auth.guard';
import { AuthenService } from './authen.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessagesComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CanActivateAuthGuard, AuthenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
