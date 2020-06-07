import { Injectable, Output, EventEmitter } from '@angular/core';
import { CourseService } from './course.service';
import { ICourse } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  items: ICourse[] = [];
  @Output() itemsEmitter = new EventEmitter<ICourse[]>(); 

  
  constructor() { }

  addToCart(product){
    this.items.push(product);
  }

  getItem(items: ICourse[]){
    this.items= items;
    this.itemsEmitter.emit(this.items);
  }

  clearCart(){
    this.items = [];
    return this.items;
  }
}
