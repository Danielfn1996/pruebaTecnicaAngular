import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Models/Usuario.model';
import { jsonPlaceHolder } from '../Services/jsonplaceholder.service';

@Component({
  selector: 'app-formulario-put',
  templateUrl: './formulario-put.component.html',
  styleUrls: ['./formulario-put.component.css'],
})
export class FormularioPutComponent implements OnInit {
  usuario = new Usuario();
  subtitulo: string = 'Consumo metodo put';
  mostrar = false;
  mensaje = '';
  constructor(private jsonPlaceHolder: jsonPlaceHolder) {}

  ngOnInit(): void {}

  ActualizarData() {
    const data = {
      usuerId: this.usuario.userId,
      id: 0,
      title: this.usuario.title,
      completed: this.usuario.completed,
    };
    this.jsonPlaceHolder.Update(1, data).subscribe(
      (data) => {
        console.log(data);
        this.mostrar = true;
        this.mensaje =
          'Se actualizo correctamente el registro con el id:' + data.id;
      },
      (err) => {
        console.log(
          'Se registro un error al realizar la actualizacion del registro:' +
            data.id
        );
      }
    );
  }
}
