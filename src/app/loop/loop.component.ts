import { Component } from '@angular/core';

@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.css']
})
export class LoopComponent {
product=[{
  img:'../../assets/img1.jpeg',
  head:'PUMA x SPONGEBOB AOP Unisex',
  price:'$4,299',
  head2:'Polo'
},{
  img:'../../assets/leg.jpeg',
  head:'PUMA x SPONGEBOB AOP Unisex',
  price:'$4,999',
  head2:'Shorts'
},{
  img:'../../assets/yellow.webp',
  head:'PUMA x SPONGEBOB Graphic',
  price:'$#,499',
  head2:'unisex T-shirt'
},{
  img:'../../assets/black.webp',
  head:'PUMA x SPONGBOB 17 Mens ',
  price:'$5,999',
  head2:'Pants'
},{
  img:'../../assets/PUMA-x-SPONGEBOB-Bucket-Unisex-Hat.webp',
  head:'Puma x SPONGEBOB ',
  price:'$1,999',
  head2:'Bucket Unisex Hat'
},{
  img:'../../assets/white shoe.webp',
  head:'PUMA x SPONGEBOB ',
  price:'$4,499',
  head2:'Evolve court V Kids...'
}]
}
