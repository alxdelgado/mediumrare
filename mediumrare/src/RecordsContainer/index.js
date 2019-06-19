import React, {Component} from 'react';
import Records from '../Records';
import Record from '../Records/index.js'
// This is our records component.
// Users will be able to view our available stock (records).

// class RecordsContainer extends Component {
//    constructor(props) {
//       super(props);
//       this.state = {
//
//       }
//    }
//    render() {
//       console.log(this.props)
//       console.log("INSIDE RECORD CONTAINER")
//       return (
//          <div className="recordsWrapper">
//             <ul>
//                {this.props.records.map((record, i) => {
//                   return (
//                      <Record key={i} record={record} />
//                   )
//                })}
//             </ul>
//          </div>
//       )
//    }
// }
//
// export default RecordsContainer;

const Table = ({records}) => {
   console.log(records)
   return (
      <table>
         <thead>
            <tr>
               <th>Title</th>
               <th>Artist</th>
               <th>Price</th>
               <th>Genre</th>
               <th>Condition</th>
            </tr>
         </thead>
         <tbody>
            {(records.length > 0 ) ? records.map( (records, index) => {
               return (
                  <tr key={index}>
                     <td>{records.title}</td>
                     <td>{records.artist}</td>
                     <td>{records.price}</td>
                     <td>{records.genre}</td>
                     <td>{records.condition}</td>
                  </tr>
               )
            }) : <tr><td colSpan="5">Loading...</td></tr> }
         </tbody>
      </table>
   )
};

export default Table;
