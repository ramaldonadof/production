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
    var f= new Date();
    var fecha_creacion = (f.getDate() + '_' + f.getMonth()+1+'_'+f.getFullYear()+'_'+f.getHours()+'_'+f.getMinutes()+'_'+f.getMilliseconds());
    console.log(nombre, descripcion, cantidad,' ',fecha_creacion),
    console.log('clicked!')
    firebase.firestore().collection('comida').add({
      nombre: nombre,
      descripcion: descripcion,
      cantidad: parseInt(cantidad),
      precio: parseFloat(precio),
      imagen: imagen,
      fecha_creacion: fecha_creacion
    });
  }
    
  }


