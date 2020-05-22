import React from 'react';
import Homepage from "./Homepage/Hompage";
import "./style/landingpage.css";
import { Context } from '../Context/userContext';
import {useContext} from 'react';
import SpaceBlog from './SpaceBlog/SpaceBlog';


const LandingPage = () => {

  const  {homeOrSpaceblog} = useContext(Context)

  return (
    <div>
      {/* {homeOrSpaceblog ?
        <SpaceBlog />
:
        <Homepage />

      } */}
    </div>
  )
}

export default LandingPage;