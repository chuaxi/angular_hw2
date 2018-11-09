import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: "./layout/app.component.html",
    styleUrls: ["./style/app.component.css"],
})
export class AppComponent {
    myName: string;
    constructor() {
        
    }

    refreshName() {
        if(sessionStorage.getItem('name')){
            this.myName = sessionStorage.getItem('name');
        }
    }
}

