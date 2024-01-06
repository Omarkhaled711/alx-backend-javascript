export default class Currency {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newamount) {
    this._amount = newamount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newcurrency) {
    this._currency = newcurrency;
  }

  displayFullPrice() {
    const { name, code } = this._currency;
    return `${this.amount} ${name} (${code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
