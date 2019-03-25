import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AUTH_PROVIDERS } from './auth.service';
import { LoggedInGuard } from './logged-in.guard';
import { LoggedOutGuard } from './logged-out.guard';

import { CheckUserGuard } from './checkUser.guard';
import { CheckDevGuard } from './checkDev.guard';
import { ProtectedComponent } from './protected/protected.component';
import { routes as childRoutes, ProtectedModule } from './protected/protected.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { FilterForTasksPipe } from './app.pipe.filterForTasks';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';


import { PageComponent } from './page/page.component';
import { NavbarComponent } from './page/navbar/navbar.component';


import { FilterComponent } from './page/filter/filter.component';
import { DropdownFilterComponent } from './page/filter/dropdown-filter/dropdown-filter.component';
import { ListComponent } from './page/list/list.component';
import { AccordionComponent } from './page/list/accordion/accordion.component';
import { UserBarInfoComponent } from './page/user-bar-info/user-bar-info.component';
import { LinkToProfilComponent } from './page/user-bar-info/link-to-profil/link-to-profil.component';
import { UserImageComponent } from './page/user-bar-info/user-image/user-image.component';
import { NavbarProfileComponent } from './page/navbar/navbar-profile/navbar-profile.component';



const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [LoggedOutGuard] },
  {
    path: 'profile',
    component: PageComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'protected',
    component: ProtectedComponent,
    children: childRoutes,
    canActivate: [LoggedInGuard, CheckDevGuard]
  },

  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,

    PageComponent,
    FilterComponent,
    NavbarComponent,
    DropdownFilterComponent,
    ListComponent,
    AccordionComponent,
    UserBarInfoComponent,
    LinkToProfilComponent,
    UserImageComponent,
    FilterForTasksPipe,
    NavbarProfileComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),

    ProtectedModule
  ],
  providers: [AUTH_PROVIDERS, LoggedInGuard, LoggedOutGuard, CheckUserGuard, CheckDevGuard],
  bootstrap: [AppComponent]
})

export class AppModule {
}
