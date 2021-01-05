import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from './../product.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Observable<any>;
  constructor(
    private productService: ProductService,
  ) {

    this.products = this.productService.getPageLink();
    this.productService.getPageLink().subscribe(res=>{
      console.log(res);

    })
    this.productService.getlocal().pipe(
      switchMap(id => {
        console.log(id);
        return this.productService.getlocalID();
      })
    ).subscribe(res => console.log(res));
   }

  ngOnInit(): void {
  }
  submit(){
    let event = localStorage.getItem('pages');
    this.productService.setPageLink(parseInt(event) + 1)
  }
}
