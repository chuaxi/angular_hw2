import { Component }                    from '@angular/core';
import {  MyCurrencyService }           from './app.currencyservice';
import { CryptoCurrencyType, coinList } from './CryptoModel';

@Component({
    selector: 'app-root',
    templateUrl: './layout/app.home.html',
    styleUrls: ['./style/app.home.css'],

    providers: [MyCurrencyService]
})

export class HomeComponent {
    currencyArray: Array<CryptoCurrencyType>;

    // Since we are using a provider above we can receive 
    // an instance through an instructor.
    constructor(private currencyService: MyCurrencyService) {
        // Store local reference to MyDataService.
        this.currencyArray  = coinList;
        this.getSomeData();
    }


    getSomeData() {
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
                    coinList[idx].price = data[currentSymbol].USD;
                }     
            },
            // 2. Handle error.
            error => {
                alert(error)
            });
    }
}

