import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { async } from '@angular/core/testing';

declare var paypal;
@Component({
  selector: 'app-payme',
  templateUrl: './payme.component.html',
  styleUrls: ['./payme.component.css']
})
export class PaymeComponent implements OnInit {
@ViewChild ('paypal', {static:true}) paypalElement:ElementRef;
constructor() { }
paid=false;

product={
  name:'macBook',
  price:499,
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
