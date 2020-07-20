import { Component ,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControllableLocalStorageService } from '../../common/storage.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

    constructor(
        private router: Router,
        private controllableLocalStorageService: ControllableLocalStorageService
    ){

    }
    ngOnInit(){
        
    }

    login(){
        let userInfo = {
            userID: "15051832490",
            loginDate : new Date(),
        };
        let deadline = new Date();
        deadline.setTime(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
        this.controllableLocalStorageService.setItem("userInfo",userInfo,deadline);
        this.router.navigate(['/home'])
    }
}