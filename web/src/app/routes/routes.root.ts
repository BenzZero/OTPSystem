import { Routes } from '@angular/router'
import { LoginComponent } from '../components/login/login.component';
import { NotfoundComponent } from '../components/erorrs/notfound/notfound.component';
import { CanActivateAuthGuard } from './can-activate-auth.guard';
import { MessagesComponent } from '../components/messages/messages.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'messages', component: MessagesComponent, canActivate: [CanActivateAuthGuard] },
  { path: 'messages/:type', component: MessagesComponent, canActivate: [CanActivateAuthGuard] },
  { path: 'setting', component: MessagesComponent, canActivate: [CanActivateAuthGuard] },
  { path: 'NotFound', component: NotfoundComponent },
  { path: '*path', redirectTo: 'NotFound' },
  { path: '**', redirectTo: 'NotFound' }
]