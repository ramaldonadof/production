import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs/operators';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-anadir',
  templateUrl: './anadir.page.html',
  styleUrls: ['./anadir.page.scss'],
})
export class AnadirPage implements OnInit {
  constructor(private router: Router) { }

  public stock = [];

  public sucu = {id:'a', name:'b', set setId(newId)
    {
      this.id = newId;
    },
    get getId()
    {
      return this.id;
    }};

  ngOnInit() {
  }


  async saveNewDates(nombre, descripcion, cantidad, precio, imagen) {
    var f= new Date();
    var fecha_creacion = (f.getDate() + '_' + f.getMonth()+'_'+f.getFullYear()+'_'+f.getHours()+'_'+f.getMinutes()+'_'+f.getMilliseconds());
    console.log(nombre, descripcion, cantidad,' ',fecha_creacion),
    console.log('clicked!')

    var fire = firebase.firestore();

    const aux = await fire.collection('Comida').add({
      nombre: nombre,
      descripcion: descripcion,
      cantidad: parseInt(cantidad),
      precio: parseFloat(precio),
      imagen: imagen,
      fecha_creacion: fecha_creacion,
      promocion: false,
      rating: 0,
      descuento: 0,
      sucursal: "Sucursal 1"
    });

    let sfRef = fire.collection('Sucursales');
    sfRef.get().then(collections => {
    collections.forEach(collection => {
      if(collection.data().name == "Sucursal 1")
      {
        console.log('Found subcollection with id:', collection.id);
        fire.collection('Inventario').doc(collection.id).collection('comida').doc(aux.id).set({
          nombre: nombre,
          descripcion: descripcion,
          cantidad: parseInt(cantidad),
          precio: parseFloat(precio),
          imagen: imagen,
          fecha_creacion: fecha_creacion,
          promocion: false,
          rating: 0,
          descuento: 0,
          sucursal: "Sucursal 1"
        });
      }
    });
    });
    
    sfRef.get().then(collections => {
    collections.forEach(collection => {
      if(collection.data().name == "Sucursal 1")
      {
        console.log('Found subcollection with id:', collection.id);
        fire.collection('Inventario').doc('comida').collection(collection.id).doc(aux.id).set({
          nombre: nombre,
          descripcion: descripcion,
          cantidad: parseInt(cantidad),
          precio: parseFloat(precio),
          imagen: imagen,
          fecha_creacion: fecha_creacion,
          promocion: false,
          rating: 0,
          descuento: 0,
          sucursal: "Sucursal 1"
        });
      }
    });
    });
  }

  listaSucursales(nombre_Sucursal)
  {
    var sucu; /*= {id:'a',name:'b', set setId(newId)
    {
      this.id = newId;
    },
    get getId()
    {
      return this.id;
    }};*/

    const aux = Object.create(sucu);
    var object = [];
    let ref = firebase.firestore().collection('Sucursales');
    ref.get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          
          if(doc.data().name == nombre_Sucursal)
          {
            aux.id = doc.id;
            object.push({id: doc.id, nombre: doc.data().name});
            aux.name = doc.data().name;
          }
        });
      });
      return aux;
  }
  
  listaComida(fecha_creacion)
  {
    var objects;
    let ref = firebase.firestore().collection('Comida');
    ref.get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }

        snapshot.forEach(doc => {
          if(fecha_creacion == doc.data().fecha_creacion)
          {
            objects = doc.id;
          }
        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
      console.log(objects);

    return objects;
  }
  }


