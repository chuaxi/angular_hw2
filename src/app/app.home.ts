import { Component }                    from '@angular/core';
import { CurrencyPipe }                 from './app.currencypipe';
import { CryptoCurrencyType, coinList } from './CryptoModel';
import { MyCurrencyService } from './app.currencyservice';

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
        this.currencyArray = coinList;
    }


    
}

