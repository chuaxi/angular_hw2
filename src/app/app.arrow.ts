import { Component, Input }  from '@angular/core';

@Component({
    selector: 'arrow',
    templateUrl: './layout/app.arrow.html',
    styleUrls: ['./style/app.arrow.css'],
})

export class  ArrowComponent {
    @Input()
    isIncreased: boolean;

    constructor() {

    }
}