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


  saveNewDates(codigo, producto, proveedor, cantidad, imagen) {

    console.log(codigo, producto, proveedor, cantidad),
    console.log('clicked!')
    firebase.firestore().collection('comida').add({
      id: codigo,
      producto: producto,
      proveedor: proveedor,
      cantidad : cantidad,
      imagen: imagen
    });
  }
    
  }


