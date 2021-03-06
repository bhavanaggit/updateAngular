import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import{ActivatedRoute,Router} from '@angular/router';
import{SharedService} from '../shared.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  form:FormGroup
  AddEarings:any=[]
  id:number
 file:any;
 name:string;
 price:number;



  constructor(private dataService:DataService,private activatedroute:ActivatedRoute,private router:Router) { }
  

  ngOnInit(): void {
   
    this.activatedroute.params.subscribe((param)=>
    {
      this.id=param["id"]
      this.dataService.getProdById(this.id).subscribe((data)=>
      {
        this.AddEarings=data
        this.form=new FormGroup(
          {
            prod_code:new FormControl(this.AddEarings.prod_code),
          prod_name:new FormControl(this.AddEarings.prod_name),
          prod_cat:new FormControl(this.AddEarings.prod_cat),
          price:new FormControl(this.AddEarings.price),
          color:new FormControl(this.AddEarings.color),
          design:new FormControl(this.AddEarings.design),
          
        })
      
        this.file=this.AddEarings.file;
        
      })
    })
  }
  }


