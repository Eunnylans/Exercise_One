import { Injectable } from '@angular/core';

@Injectable(

)
export class BooksService {

  constructor() { }

  getBooks(){
    return[
      {
        name: 'clean code',
        author: 'robert c martin',
        image: 'https://m.media-amazon.com/images/I/41EYLUDaF8L._SL500_.jpg',
        amount: 700,
      },
      {
        name: 'pragmatic programmer',
        author: 'david thomas',
        image:
          'https://images-eu.ssl-images-amazon.com/images/I/51W1sBPO7tL._SX198_BO1,204,203,200_QL40_ML2_.jpg',
        amount: 800,
      },

      {
        name: 'art of computer programming',
        author: 'donald e knuth',
        image: 'https://i.ebayimg.com/images/g/BooAAOSw6Xli4q1U/s-l500.jpg',
        amount: 18800,
      },

      {
        name: 'introduction to algorithms',
        author: 't cormen',
        image: 'https://i.ebayimg.com/images/g/ahEAAOSwzGNgfWUT/s-l500.jpg',
        amount: 1400,
      },

      {
        name: 'things fall apart',
        author: 'chunua achibe',
        image: 'https://upload.wikimedia.org/wikipedia/en/6/65/ThingsFallApart.jpg',
        amount: 900,
      },

      {
        name: 'half of a yellow sun',
        author: 'chimamanda ngozi adichie',
        image: 'https://upload.wikimedia.org/wikipedia/en/f/f1/HalfYellowSun.JPG',
        amount: 1400,
      },

      {
        name: 'convenant wealth',
        author: 'bishop david oyedepo',
        image: 'https://i.ebayimg.com/images/g/ahEAAOSwzGNgfWUT/s-l500.jpg',
        amount: 100,
      },

      {
        name: 'introduction to algorithms',
        author: 't cormen',
        image: 'https://i.ebayimg.com/images/g/ahEAAOSwzGNgfWUT/s-l500.jpg',
        amount: 1400,
      },

      {
        name: 'introduction to algorithms',
        author: 't cormen',
        image: 'https://i.ebayimg.com/images/g/ahEAAOSwzGNgfWUT/s-l500.jpg',
        amount: 1400,
      },

      {
        name: 'introduction to algorithms',
        author: 't cormen',
        image: 'https://i.ebayimg.com/images/g/ahEAAOSwzGNgfWUT/s-l500.jpg',
        amount: 1400,
      },

      {
        name: 'introduction to algorithms',
        author: 't cormen',
        image: 'https://i.ebayimg.com/images/g/ahEAAOSwzGNgfWUT/s-l500.jpg',
        amount: 1400,
      },

      {
        name: 'introduction to algorithms',
        author: 't cormen',
        image: 'https://i.ebayimg.com/images/g/ahEAAOSwzGNgfWUT/s-l500.jpg',
        amount: 1400,
      },

      {
        name: 'introduction to algorithms',
        author: 't cormen',
        image: 'https://i.ebayimg.com/images/g/ahEAAOSwzGNgfWUT/s-l500.jpg',
        amount: 1400,
      },

      {
        name: 'introduction to algorithms',
        author: 't cormen',
        image: 'https://i.ebayimg.com/images/g/ahEAAOSwzGNgfWUT/s-l500.jpg',
        amount: 1400,
      },


    ]
  }
}
