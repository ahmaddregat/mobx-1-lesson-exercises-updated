/* eslint-disable */
import { observable, action, makeObservable } from "mobx";
import { Item } from "./Item";

export class ShoppingList {
  constructor() {
    this.list = [];
    this.length;
    makeObservable(this, { list: Observable, length: Observable });
  }
  checkItem = () => {
    // your code here
  };
  addItem = () => {
    // your code here
  };
  editItem = () => {
    // your code here
  };
  deleteItem = () => {
    // your code here
  };
}
