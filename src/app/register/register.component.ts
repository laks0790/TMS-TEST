import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';

 

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService
         ) { }

    register() {
        console.log(this.model);
        this.loading = true;
         this.model.address.
        this.userService.create(this.model)
            .subscribe(
                data => {
                   console.log('Registration successful' );
                    this.router.navigate(['/login']);
                },
                error => {
                  console.log('Error' );
                    this.loading = false;
                });
    }
}
