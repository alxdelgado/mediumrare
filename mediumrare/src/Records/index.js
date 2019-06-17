import React, {Component} from 'react';
// Functional component
// Fetches all of our records

const Record = (record) => {
   console.log(record)
      return(
         <li>
            {record.record.title}
            {record.record.artist}
         </li>
      )
}


export default Record;

// Use discogs api for images. Store images on the backend.
