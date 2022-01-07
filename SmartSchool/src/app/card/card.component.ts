import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  repositorios: string[] = ["Angular 2"];

  mostrarRepositorios: boolean = false; 

  /* OnMostrarRepositorios(){
    this.mostrarRepositorios = !this.mostrarRepositorios;
  } */

  constructor() { }

  ngOnInit(): void {
  }

}
