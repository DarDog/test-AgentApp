import { Component } from '@angular/core';

class ItemAeroflot {
  purchase: string
  price: number

  constructor(purchase: string, price: number) {
    this.purchase = purchase
    this.price = price
  }
}

class ItemTrain {
  purchase: string
  price: number

  constructor(purchase: string, price: number) {
    this.purchase = purchase
    this.price = price
  }
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{

  range: number = 1000;
  age: number = 20;
  width: number = 35;
  itemsAeroflot: ItemAeroflot[] = [];
  itemsTrain: ItemTrain[] = [];
  error: string = '';

  addItem(range: number, age: number, width: number): void {
    if (range < 1 || age < 1 || width < 1) {
      this.error = 'Введены некорректные данные'
      this.itemsAeroflot = [];
      this.itemsTrain = [];
    } else {
      this.error = ''
      this.itemsAeroflot = [];
      this.itemsTrain = [];
      this._getVariables(range, age, width);
    }
  }


  _getVariables(range: number, age: number, width: number) {
    let text: string = '',
      price: number = 0;
    if (width < 20) {
      text = 'Эконом';
      price = range * 4 + (width < 5 ? 0 : 4000);
      this.itemsAeroflot.push(new ItemAeroflot(text, price))
    } else if (width > 20) {
      if (width < 50) {
        text = 'Продвинутый';
        price = range * 8 - (age < 7 ? Math.round(range * 8 * 30 / 100) : 0) + (width < 20 ? 0 : 5000);
        this.itemsAeroflot.push(new ItemAeroflot(text, price));

        text = 'Люкс';
        price = range * 15 - (age < 16 ? Math.round(range * 15 * 30 / 100) : 0);
        this.itemsAeroflot.push(new ItemAeroflot(text, price));

        text = 'Эконом';
        price = range * .5 - (age < 5 ? Math.round(range * .5 * 50 / 100) : 0) + (width < 15 ? 0 : (width - 15) * 50);
        this.itemsTrain.push(new ItemTrain(text, price));
      }

      if (width < 60) {
        text = 'Продвинутый';
        price = range * 2 - (age < 8 ? Math.round(range * 2 * 30 / 100) : 0) + (width < 20 ? 0 : (width - 20) * 50);
        this.itemsTrain.push(new ItemTrain(text, price));

        text = 'Люкс';
        price = (range * 4) - (age < 16 ? Math.round((range * 4) * 20 / 100) : 0)
        this.itemsTrain.push(new ItemTrain(text, price))
      }
    }
  }
}
