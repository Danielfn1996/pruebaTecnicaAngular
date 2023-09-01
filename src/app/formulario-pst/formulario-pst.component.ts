import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Models/Usuario.model';
import { jsonPlaceHolder } from '../Services/jsonplaceholder.service';

@Component({
  selector: 'app-formulario-pst',
  templateUrl: './formulario-pst.component.html',
  styleUrls: ['./formulario-pst.component.css'],
})
export class FormularioPstComponent implements OnInit {
  usuario = new Usuario();
  mostrar = false;
  mensaje: string = '';
  readonly = true;
  subtitulo = 'Consumo metodo Post';
  constructor(private jsonPlaceHolder: jsonPlaceHolder) {}

  ngOnInit(): void {}

  RegistrarData() {
    const data = {
      usuerId: this.usuario.userId,
      id: 0,
      title: this.usuario.title,
      completed: this.usuario.completed,
    };

    this.jsonPlaceHolder.Create(data).subscribe(
      (data) => {
        console.log(data);
        this.mostrar = true;
        this.mensaje =
          'Se registro exitosamente el registro el cual quedo con el id:' +
          data.id;
      },
      (err) => {
        console.log('Se presento un error al registrar el usuario');
      }
    );
  }
}
