import { EventEmitter, Injectable } from '@angular/core';

import { LogService } from '../shared/log.service';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>()
  static criouNovoCurso = new EventEmitter<string>()
  // static faz com que não precisamos da instancia da classe para poder acessar o mesmo

  private cursos: string[] = ['Angular', 'Java', 'React']

  constructor(private logService: LogService) {
    console.log('CursosService')
  }

  getCursos() {
    this.logService.consoleLog('Obtendo lista de cursos')
    return this.cursos
  }

  addCurso(curso: string) {
    this.logService.consoleLog(`Criando novo curso ${curso}`)
    this.cursos.push(curso)
    this.emitirCursoCriado.emit(curso)
    CursosService.criouNovoCurso.emit(curso)
  }
}
