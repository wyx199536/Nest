import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';

@Component({
    selector: 'nest',
    templateUrl: './nest.component.html',
    styleUrls: ['./nest.component.css']
})

export class NestComponent implements OnInit{

    constructor(
        private router: Router,
    ){

    }
    ngOnInit(){
        
    }

    goDiary(){
        this.router.navigate(['/home/nest/diary'])
    }
    goHollow(){
        this.router.navigate(['/home/nest/hollow'])
    }

}