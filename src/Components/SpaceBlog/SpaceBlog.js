import React from 'react';
import NavSpaceBlog from './NavSpaceBlog';
import "../style/spaceblog.css"
import SpaceblogHeder from './SpaceblogHeder';
import BlogCardContainer from './BlogCardContainer';

const SpaceBlog = () => {

    return (
        <div>
          <NavSpaceBlog/>
          <SpaceblogHeder/>
          <BlogCardContainer/>
        </div>
    )
}

export default SpaceBlog;