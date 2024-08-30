import React, { useRef } from 'react'
import SearchBar from './SearchBar'
import HelpOptions from './HelpOptions'


function Home() {
 let SearchValue= useRef()
   
  return (
    <>

    <SearchBar searchVal={SearchValue}/>
   <HelpOptions searchVal={SearchValue}/>
    </>
  )
}

export default Home