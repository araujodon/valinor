import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'professores'

  public professores = [
    {nome: 'Shark'},
    {nome: 'Teiga'},
    {nome: 'Kit'},
    {nome: 'Dinossauro'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
