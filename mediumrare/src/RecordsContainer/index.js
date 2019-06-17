import React, {Component} from 'react';
import Records from '../Records';
import Record from '../Records/index.js'
// This is our records component.
// Users will be able to view our available stock (records).

class RecordsContainer extends Component {
   constructor(props) {
      super(props);
      this.state = {

      }
   }
   render() {
      console.log(this.props)
      console.log("INSIDE RECORD CONTAINER")
      return (
         <ul>
            {this.props.records.map((record, i) => {
               return (
                  <Record key={i} record={record} />
               )
            })}
         </ul>
      )
   }
}







export default RecordsContainer;
