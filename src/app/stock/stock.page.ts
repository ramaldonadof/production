import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage implements OnInit, OnChanges {

  public stocks = [];

  llenado()
  {
    var objects = [];
    let ref = firebase.firestore().collection('comida');
    ref.get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }

        snapshot.forEach(doc => {
          objects.push({nombre: doc.data().nombre, descripcion: doc.data().descripcion, proveedor: doc.data().proveedor,
            cantidad: doc.data().cantidad, precio: doc.data().precio, imagen: doc.data().imagen,
            fecha_creacion: doc.data().fecha_creacion});
        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
      console.log(objects);

    return objects;
  }

  constructor(private router: Router) {}
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.stocks = this.llenado();
  }

  anadir()
  {
    this.router.navigate(['/anadir']);
  }

  delete(producto, fecha_creacion)
  {
    var ref = firebase.firestore().collection('comida');
    ref.where('nombre','==',producto).get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }

        snapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
          
          if(fecha_creacion == doc.data().fecha_creacion)
          ref.doc(doc.id).delete();
        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
    this.stocks = this.llenado();
  }

  testClick(id,producto,cantidad,imagen)
  {
    console.log('Hola este es testClick ' + producto);
    firebase.database().ref('stock/').child(id).set({
      id: id,
      producto: producto,
      proveedor: 'Vacio',
      cantidad : cantidad,
      imagen: imagen
    });
  }
}