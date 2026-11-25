import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.html',
  styleUrl: './banner.css',
})
export class Banner {
  titre: string = "bienvenue sur notre boutique"

  y :boolean = true

  somme(a:number, b:number){
    return a+b
  };

}
