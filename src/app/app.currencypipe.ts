import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'currencyPipe' })

export class CurrencyPipe implements PipeTransform {
    transform(currency: number): string {
        let currencyString;
        if(currency!=null)
            currencyString = "$ "+ currency.toString();
        return currencyString;
    }
}