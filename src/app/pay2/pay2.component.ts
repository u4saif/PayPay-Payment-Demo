
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { async } from '@angular/core/testing';

declare var paypal;
@Component({
  selector: 'app-pay2',
  templateUrl: './pay2.component.html',
  styleUrls: ['./pay2.component.css']
})
 
export class Pay2Component implements OnInit   {
@ViewChild ('paypal', {static:true}) paypalElement:ElementRef;
constructor() { }
paid=false;

product={
  name:'macBook Pro',
  price:999,
}
  ngOnInit(): void {
    paypal.
    Buttons({
      createOrder:(data,actions)=>{
         return actions.order.create({
          purchase_units:[
             { description:this.product.name,
               amount: {
                 value:this.product.price}
             }
           ]
         });

      },
      onApprove:async(data,actions)=>{
        const order =await actions.order.capture();
        this.paid=true;
        console.log(order);
      }
    }).render(this.paypalElement.nativeElement);
   
  }

}
