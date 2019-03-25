import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {  AuthenticationService } from  '../shared/services/authentication.service';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
       ) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    public get loggedIn(): boolean{
        return localStorage.getItem('currentuser') !==  null;
      }
    login() {
        this.loading = true;
        console.log(this.model.username +'' + this.model.password);
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    console.log(this.returnUrl);
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                 
                    this.loading = false;
                });
    }
}
