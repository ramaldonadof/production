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
    firebase.database().ref('stock/').on('value', function(snapshot) {
      snapshot.forEach(function(object) {
        objects.push({ id: object.key, cantidad: object.child('cantidad').val(), producto: object.child('producto').val(),
        imagen: object.child('imagen').val()});
      });
      console.log(objects)
      //alert('There are '+objects.length+' votes');
    });
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

  delete(id, producto)
  {
    console.log('Hola este es testClick ' + producto);
    firebase.database().ref('stock/' + id+'/').remove();
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