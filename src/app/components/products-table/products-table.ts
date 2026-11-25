import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-table',
  imports: [],
  templateUrl: './products-table.html',
  styleUrl: './products-table.css',
})
export class ProductsTable {

  //constructor(private router: Router){}
  private router = inject(Router); //pour nouvelles version d'angular

 


isConnected:boolean=true;

//declarer un tableau ds ts
productsTab:any[]=[
{
  _id:1, name:"produit 1", description: "description du produit 1", price: 20
},{
  _id:2, name:"produit 2", description: "description du produit 2", price: 30
},{
  _id:3, name:"produit 3", description: "description du produit 3", price: 40
},{
  _id:4, name:"produit 4", description: "description du produit 4", price: 50
}

];

 display(id:any){
  this.router.navigate(["/productInfo"]);

}

goToEdit(id:any){
  this.router.navigate(["/editProducts"]);
}
deleteproduct(id:any){
  console.log("produit supprimé!");
  
}

 
}
