import React from 'react';
import Forget from './Forget';
import Login from './login';
import Page404 from './page404';
import Resigter from './resigter';

const Mainpage = () => {
    return (
        <div>
            <Login/>
             <Forget/>
             <Resigter/>
             <Page404/>
            
        </div>
    );
}

export default Mainpage;
