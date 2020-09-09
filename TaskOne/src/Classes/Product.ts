export default class Product {
  private _currentPrice: string;
  private _previousPrice: string | undefined;
  private _name: string;
  private _link: string;

  constructor() {}

  /**
   * Getter currentPrice
   * @return {string}
   */
  public get currentPrice(): string {
    return this._currentPrice;
  }

  /**
   * Getter previousPrice
   * @return {string}
   */
  public get previousPrice(): string | undefined {
    return this._previousPrice;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter link
   * @return {string}
   */
  public get link(): string {
    return this._link;
  }

  /**
   * Setter currentPrice
   * @param {string} value
   */
  public set currentPrice(value: string) {
    this._currentPrice = value ? value.trim() : value;
  }

  /**
   * Setter previousPrice
   * @param {string} value
   */
  public set previousPrice(value: string | undefined) {
    this._previousPrice = value ? value.trim() : value;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value ? value.trim() : value;
  }

  /**
   * Setter link
   * @param {string} value
   */
  public set link(value: string) {
    this._link = value;
  }
}
