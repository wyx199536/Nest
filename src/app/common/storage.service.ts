import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ControllableLocalStorageService{

    setItem(name:string,data:any,deadline:Date){
        let tempData = {
            data:data,
            deadline:deadline
        }
        localStorage.setItem(name,JSON.stringify(tempData));
    }
    getItem(name:string){
        let tempData = localStorage.getItem(name);
        let data = JSON.parse(tempData);
        if(data.deadline > new Date()){
            localStorage.removeItem(name);
            return false;
        }
        return data;
    }
}