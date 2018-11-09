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
            this.getCurrencyInformation(localID);
            this.coinType = coinList[this.currencyService.getCoinArrayIndex(localID)];
            });
    }

    getCurrencyInformation(localID: string) {
        this.currencyService.getCurrencyDetail(localID)
        .subscribe(
            // 1. Handle successful data.
            data => {
                // Log the data in the console to see what it looks like.
                // Be sure to use the debugger.
                console.log(JSON.stringify(data));
                let FINAL_UPDATE = 1;
                let priceInfo    = data["Data"][FINAL_UPDATE];
                this.coinType.open  = priceInfo.open;
                this.coinType.close = priceInfo.close;
                alert("Low: " + priceInfo.low + "   High: " + priceInfo.high);
            },
            // 2. Handle error.
            error => {
                alert(error)
            });
    }
}
