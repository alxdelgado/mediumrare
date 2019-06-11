import React, {Component} from 'react';
// This is our records component.
// Users will be able to view our available stock (records).


class Records extends Component {
   constructor(props){
      super();
      this.state = {
         title: [],
         artist: [],
         genre:[],
         price: [],
         condition: []
      }
   }

   // Making AJAX calls here
   componentDidMount() { //lifecycle hook
      console.log('COMPONENT HAS MOUNTED IN RECORDS');
      fetch('http://localhost:3001/mediumrare_database')
      .then(response => console.log(response));


   }


   render () {
      return (
         <div>
         <h2>Records</h2>
         </div>
      )
   }
}


export default Records;
