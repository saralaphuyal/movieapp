import React, { useContext } from 'react'
import { AppContext,useGlobalContext } from './Context'
import { useActionData } from 'react-router-dom';
import Search from './Search';
import Movies from './Movies';

const Home = () => {
  // const name = useGlobalContext();
  return (
   <>
   <Search/>
   <Movies/>
   </>
  )
}

export default Home