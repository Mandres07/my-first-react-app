import React from 'react';
import './UserOutput.css';

const UserOutput = ({ username }) => {
   return (
      <div className="UserOutput">
         <h2>Username: {username}</h2>
         <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
         </p>
         <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </div>
   );
}

export default UserOutput;