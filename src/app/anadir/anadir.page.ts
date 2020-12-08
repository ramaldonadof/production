import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anadir',
  templateUrl: './anadir.page.html',
  styleUrls: ['./anadir.page.scss'],
})
export class AnadirPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  saveNewDates(nombre, descripcion, cantidad, precio, imagen) {  
    var meses = new Array 
    ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    var f= new Date();
    var fecha_actual = (f.getDate() + ' de ' + meses[f.getMonth()]+' de '+f.getFullYear()+' a las '+f.getHours()+':'+f.getMinutes()+':'+f.getMilliseconds());
    console.log(nombre, descripcion, cantidad,' ',fecha_actual),
    console.log('clicked!')
    firebase.firestore().collection('comida').add({
      nombre: nombre,
      descripcion: descripcion,
      cantidad: parseInt(cantidad),
      precio: parseFloat(precio),
      imagen: imagen,
      fecha_creacion: fecha_actual
    });
  }
    
  }


