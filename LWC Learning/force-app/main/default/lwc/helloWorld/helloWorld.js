 import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {

     fullName = "Shahil Sinha"
     title = "aura"

     address = {
       city: "Melbourne",
       postcode: 3008,
       country: "Australia"
     }

     changeHandler(event) {
        this.title = event.target.value;
     }

     trackHandler(event) {
      this.address = {...this.address, 'city': event.target.value};
     }

     users = ['user1', 'user2', 'user3'];

     get firstUSer () {
      return this.users[0].toUpperCase();
     }

     num1 = 10
     num2 = 20
     
     get sum() {
       return this.num1 + this.num2;
     }

} 