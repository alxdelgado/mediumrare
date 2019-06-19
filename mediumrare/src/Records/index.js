import React, {Component} from 'react';
// Functional component
// Displays all of our records

const findRecords = (record) => {
   console.log(record)
   return (
      <div>
         <li>
            {record.record.title}
         </li>
      </div>
   )
};

export default findRecords;

// Use discogs api for images. Store images on the backend.
