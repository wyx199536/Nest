import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import $ from 'jquery';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
    constructor(
        private router: Router
    ){

    }

    ngOnInit(){
        //根据分辨率调整html的font-size，利用rem适应不同分辨率
        $(function(){
            if(window.screen.width >= 1920){
                $("html").css("font-size","10px")
            }else if(window.screen.width >= 1600){
                $("html").css("font-size","9px")
            }else{
                $("html").css("font-size","8px")
            }
        })
        $(".header_tab_bar_button").hover(
            function(){
                $(this).css("background","#fcccd3")
            },
            function(){
                $(this).css("background","#FFB6C1")
            }
        )
    }

    goNest(){
        this.router.navigate(['/home/nest'])
    }
    goGarden(){
        this.router.navigate(['/home/garden'])
    }
    goPublic(){
        this.router.navigate(['/home/public'])
    }
}