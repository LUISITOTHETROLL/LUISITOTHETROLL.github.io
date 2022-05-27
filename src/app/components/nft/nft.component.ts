import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.css']
})
export class NftComponent implements OnInit {

  constructor() { }
  cadenaDeSrc:any;
  numDeImg:any;
  product:any[]=[
    {id:121,name:"sida1",url:'./../../assets/images/nft1'},
    {id:122,name:"sida2",url:'./../../assets/images/nft2'},
    {id:123,name:"sida3",url:'./../../assets/images/nft3'}]
  ngOnInit(): void {
    this.numDeImg=0;
    this.cadenaDeSrc=this.product[0].url;
  }

  nextImage()
{
  this.numDeImg++;
    this.cadenaDeSrc=this.product[this.numDeImg].url;
        
    
}
 

   

}
