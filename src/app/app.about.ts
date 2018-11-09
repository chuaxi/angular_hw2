import { Component }                    from '@angular/core';

@Component({
    templateUrl: "./layout/app.about.html",
    styleUrls: ["./style/app.about.css"]
})

export class AboutComponent {
    myName: string;
    constructor(){
        this.myName = "";
    }

    public setName() {
        sessionStorage.setItem('name', this.myName);
    }
}