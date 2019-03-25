import { Injectable } from '@angular/core';
import {
CanActivate,
ActivatedRouteSnapshot,
RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../app_services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class LoggedOutGuard implements CanActivate {
	constructor(private authService: AuthService, private router: Router) {}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
			const isLoggedIn = this.authService.getUser();
			if (isLoggedIn){
                isLoggedIn=='Q' ? this.router.navigate(['/profile']) :this.router.navigate(['/protected']);
				return false;
			}
				return true;
		}
		
}