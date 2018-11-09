import { Component, Input }  from '@angular/core';

@Component({
    selector: 'arrow',
    templateUrl: './layout/app.arrow.html',
    styleUrls: ['./style/app.arrow.css'],

    // providers: [MyCurrencyService]
})

export class  ArrowComponent {
    isIncreased: boolean;
    @Input()
    priceClose: number;
    @Input()
    priceOpen: number;

    constructor() {
        this.checkPriceIncrease();
    }

    checkPriceIncrease() {
        if(this.priceOpen>this.priceClose)
            this.isIncreased = false;
            //set it to increase if not decreased
        else
            this.isIncreased = true;
    }
}