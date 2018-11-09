import { Injectable }      from '@angular/core';
import { Http, Response }  from '@angular/http';
import { Observable}       from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CryptoCurrencyType, coinList } from './CryptoModel';

@Injectable()
export class MyCurrencyService {  //for BTC
    
    constructor(private http: Http) { }

    getAllCurrencyPrices(): Observable<string[]> {
        let dataUrl = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD'; 
        return this.http.get(dataUrl)
       .pipe(map(this.extractData),
        catchError(this.handleError.bind(this)))
    }

    // Notice how BTC is hard-coded in the URL below. Hint: We might need a parameter 
    // which can be used to dynamically adjust the URL. 
    getCurrencyDetail(currencyType: string): Observable<string[]> {
        let url = "https://min-api.cryptocompare.com/data/histoday?fsym=" + currencyType + "&tsym=USD&limit=1"
        let FINAL_TIME = 1;
        return this.http.get(url)
        .pipe(map(this.extractData),
         catchError(this.handleError.bind(this)))
    }

    
    getCoinArrayIndex(abbreviation) {
        for(var i=0; i<coinList.length; i++) {
            if(coinList[i].symbol == abbreviation) {
                return i;
            }
        }
    }

    private extractData(res: Response) {
        let body = res.json();
        return body;
    }

    private handleError(error: any) {
        throw(error);
    }
}
