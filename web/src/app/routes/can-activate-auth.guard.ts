import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenService } from '../service/authen.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateAuthGuard implements CanActivate {

  constructor(
    private service: AuthenService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isAuthen = this.service.isAuthen()
    if (!isAuthen) {
      this.router.navigate(['NotFound'])
    }
    return isAuthen
  }
}
