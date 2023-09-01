import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Models/Usuario.model';
import { jsonPlaceHolder } from '../Services/jsonplaceholder.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  usuario = new Usuario();
  readonly = true;
  subtitulo = 'Consumo metodo Get';
  constructor(private jsonPlaceHolder: jsonPlaceHolder) {}

  ngOnInit(): void {}

  ConsultarData() {
    const data = {
      usuerId: this.usuario.userId,
      id: this.usuario.id,
      title: this.usuario.title,
      completed: this.usuario.completed,
    };

    this.jsonPlaceHolder.GetAll(this.usuario.id).subscribe(
      (data) => {
        this.usuario = data;
        console.log(data);
      },
      (err) => {
        console.log(
          'Se registro un error al realizar la consulta del registro:' + data.id
        );
      }
    );
  }
}
