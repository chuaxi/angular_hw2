import { Component } from '@angular/core';
import {  MyCurrencyService }           from './app.currencyservice';
import { CryptoCurrencyType, coinList } from './CryptoModel';

@Component({
    selector: 'app-root',
    templateUrl: "./layout/app.component.html",
    styleUrls: ["./style/app.component.css"],
    
    providers: [MyCurrencyService]
})
export class AppComponent {
    myName: string;
    currencyArray: Array<CryptoCurrencyType>;
    constructor(private currencyService: MyCurrencyService) {
        // Store local reference to MyDataService.
        this.currencyArray  = coinList;
        this.getCurrencyPrice();
    }
    getCurrencyPrice() {
        this.currencyService.getAllCurrencyPrices()
            // Subscribe to changes in the observable object
            // that is returned by getRemoteData.
            .subscribe(
            // 1. Handle successful data retrieval.
            data => {

                // Log the data in the console to see what it looks like.
                // Be sure to use the debugger.
                console.log(JSON.stringify(data));

                // Set the price for each item.
                for(var i=0; i<this.currencyArray.length; i++) {
                    // Get the index for each item in the array and assign the price.
                    let currentSymbol = this.currencyArray[i].symbol;
                    let idx           = this.currencyService.getCoinArrayIndex(currentSymbol);
                    this.currencyArray[idx].price = data[currentSymbol].USD;
                    this.getCurrencyInformation(currentSymbol, idx);
                }     
            },
            // 2. Handle error.
            error => {
                alert(error)
            });
    }

    getCurrencyInformation(localID: string, idx: number) {
        this.currencyService.getCurrencyDetail(localID)
        .subscribe(
            // 1. Handle successful data.
            data => {
                // Log the data in the console to see what it looks like.
                // Be sure to use the debugger.
                console.log(JSON.stringify(data));
                let FINAL_UPDATE = 1;
                let priceInfo    = data["Data"][FINAL_UPDATE];
                this.currencyArray[idx].open  = priceInfo.open;
                coinList[idx].open = priceInfo.open;
                this.currencyArray[idx].close = priceInfo.close;
                coinList[idx].close = priceInfo.close;
                alert("Low: " + priceInfo.low + "   High: " + priceInfo.high);
            },
            // 2. Handle error.
            error => {
                alert(error)
            });
    }

    refreshName() {
        if(sessionStorage.getItem('name')){
            this.myName = sessionStorage.getItem('name');
        }
    }
}

