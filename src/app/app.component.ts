import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  private apiUrl = 'http://localhost:8080/api/usuarios'; // para que solo se pueda llamar desde este appcomponent
  private apiUrl2 = 'http://localhost:8080/api/delete/usuarios'; // para que solo se pueda llamar desde este appcomponent
  data: {
    nombre
    // puedo poner lo que sea porque lo recoje de date y lo mete aqui
  };
  usuario: {
    nombre,
    apellidos,
    email,
    password
  };

  onSubmit() {
    // Mostramos el objeto usuario
    console.log(this.usuario);
    this.postUsers(); // ejecuto el post cuando hago click
    // window.location.reload();
  }
  onSubmit2() {
    // Mostramos el objeto usuario
    console.log(this.usuario.nombre);
    this.deleteUsers();

    // window.location.reload();
  }
  onSubmit3() {
    // Mostramos el objeto usuario
    this.deleteAllUsers();
    // window.location.reload();
  }

  constructor (private http: Http) {
    console.log('Hello user');
    this.getUsers();
    this.getDataRequest();
    this.usuario = {
      'nombre': '',
      'apellidos': '',
      'email': '',
      'password': ''
    };
  }

  getDataRequest() { // creo la request a la api
    return this.http.get(this.apiUrl).map((res: Response) => res.json());
  }

  postDataRequest() {
    return this.http.post(this.apiUrl, this.usuario);
  }

  deleteDataRequest() {
    return this.http.delete(this.apiUrl2 + '/' + this.usuario.nombre);
  }

  deleteAllDataRequest() {
    return this.http.delete(this.apiUrl2);
  }

  getUsers() {
    this.getDataRequest().subscribe(data => { // ejecuto la request del get
      console.log(data);
      this.data = data;
    });

  }

  postUsers() {
    this.postDataRequest().subscribe();
  }

  deleteUsers() {
    this.deleteDataRequest().subscribe();
  }

  deleteAllUsers() {
    this.deleteAllDataRequest().subscribe();
  }

}
