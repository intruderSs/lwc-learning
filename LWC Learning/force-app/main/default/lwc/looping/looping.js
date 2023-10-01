import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {

  carList = ['Ford', 'Audi', 'Maruti', 'Tata'];

  ceoList = [
    {
        id: 1,
        company: 'Google',
        name: 'Sundar Pichi'
    },
    {
        id: 2,
        company: 'Apple Inc.',
        name: 'Tim Cook'
    },
    {
        id: 1,
        company: 'Facbook',
        name: 'Mark Zukerberg'
    },
    {
        id: 1,
        company: 'Amazon',
        name: 'Jeff Bezos'
    },
  ]

}