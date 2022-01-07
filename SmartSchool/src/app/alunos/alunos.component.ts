import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  titulo = 'Alunos'

  public alunos = [
    { nome: 'Shark'},
    {nome: 'Teiga'},
    {nome: 'Kit'},
    {nome: 'Dinossauro'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
