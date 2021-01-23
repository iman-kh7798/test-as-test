import React, {Component} from 'react';

const NotFoundPage =({staticContext={}})=> {
    staticContext.notFound=true;
        return (
            <div>
                <h1>the page you look for is unavailable</h1>
            </div>
        );
}

export default {component:NotFoundPage}