import { Component }                    from '@angular/core';
import { ActivatedRoute, Params }       from '@angular/router';
import {  MyCurrencyService } from './app.currencyservice';
import { CryptoCurrencyType, coinList } from './CryptoModel';

@Component({
    templateUrl: "./layout/app.detail.html",
    providers: [MyCurrencyService]
})
export class DetailComponent { 
    coinType: CryptoCurrencyType;
    // The constructor sets up the class.
    // Defining private parameters for services in the constructor initializes instances
    // for the entire class.
    constructor(private route: ActivatedRoute, 
                private currencyService:MyCurrencyService) {
    }

    // ngOnInit() gets called after the object is set up via the constructor.
    // At this point, the class is able to handle the parameters passed to it.
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let localID = params['symbol'];
            alert(localID);
            this.coinType = coinList[this.currencyService.getCoinArrayIndex(localID)];
            });
    }

}
