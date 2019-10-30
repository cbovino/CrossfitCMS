import React from 'react';

/* This component variables is just a brief descript of the application.
Its rendered in both the login and registration pages.  */

export const Opener = props => {
  return(
      <div>
        <h1> Welcome to Bunker</h1>
          <p>
          Bunker is a simple Crossfit Gym Management system. The application simulates a content
          management systems for a Crossfit Gym and is not being used by a specific gym at the time.
          </p>
          <p> Feel free to create an account of your own to interact with application or use these credential to view the services
          provided within the application.
          </p>
  
      </div>
    );
  }
