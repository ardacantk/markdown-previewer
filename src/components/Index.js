import React from 'react';
import Header from './Header';
import Innput from './Innput';
import Output from './Output';

function Index() {
    return (
        <>
            <div id='header' className='mt-5 p-5'>
                <Header />
            </div>
            <div className="text-panels" >
                <Innput />
                <Output />
            </div>
        </>
    )
}

export default Index
