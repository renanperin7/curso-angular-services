import { Component } from '@angular/core';

import { CursosService } from './../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers: [CursosService]
})
export class CriarCursoComponent {

  cursos: string[] = []

  constructor(private cursosService: CursosService) {
    this.cursosService = cursosService
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos()
  }

  onAddCurso(curso: string) {
    this.cursosService.addCurso(curso)
  }

}
