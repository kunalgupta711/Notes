import { Injectable } from '@angular/core';
import { Note } from './notes.model';
import { not } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes: Note[] = new Array<Note>();
  constructor() { }

  getAll(){
    return this.notes; 
  }
  get(id:number) {
    return this.notes[id];
  }
  getId(note: Note){
    return this.notes.indexOf(note);
  }
  add(note: Note){
    let newLength = this.notes.push(note);

    let index = newLength - 1;
    note.dateCreated = new Date();
    note.dateUpdated= new Date();
    return index;
  }
  update(id: number, title: string, body: string){
    let note =this.notes[id];
    note.title =title;
    note.body= body;
    note.dateUpdated= new Date();
  }
  delete(id: number){
    this.notes.splice(id,1);
  }
}
