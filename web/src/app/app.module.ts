import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { appRoutes } from './routes/routes.root';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TimeAgoPipe } from 'time-ago-pipe';

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
import { MessagesService } from './service/messages.service';
import { SettingComponent } from './components/setting/setting.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessagesComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent,
    AuthenComponent,
    GeneralComponent,
    TimeAgoPipe,
    SettingComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CanActivateAuthGuard,
    MessagesService,
    AuthenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
