import { Routes } from '@angular/router'
import { LoginComponent } from '../components/login/login.component';
import { NotfoundComponent } from '../components/erorrs/notfound/notfound.component';
import { CanActivateAuthGuard } from './can-activate-auth.guard';
import { MessagesComponent } from '../components/messages/messages.component';
import { SettingComponent } from '../components/setting/setting.component';
import { DownloadAppComponent } from '../components/download-app/download-app.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'messages', component: MessagesComponent, canActivate: [CanActivateAuthGuard], pathMatch: 'full' },
  { path: 'messages/:type', component: MessagesComponent, canActivate: [CanActivateAuthGuard], pathMatch: 'full' },
  { path: 'setting', component: SettingComponent, canActivate: [CanActivateAuthGuard], pathMatch: 'full' },
  { path: 'download-app', component: DownloadAppComponent, canActivate: [CanActivateAuthGuard], pathMatch: 'full' },
  { path: 'NotFound', component: NotfoundComponent, pathMatch: 'full' },
  { path: '*path', redirectTo: 'NotFound' },
  { path: '**', redirectTo: 'NotFound' }
]