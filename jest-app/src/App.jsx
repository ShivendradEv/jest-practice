import React from 'react'
import './App.css'
import ChangeEvent from './components/events/ChangeEvent';
import ClickEvent from './components/events/ClickEvent';
import FetchData from './components/api/FetchData';
import Element from './components/elements/Element';
import TestProps from './components/props/TestProps';

function App() {

  return (
    <>
      <Element />
      <ChangeEvent />
      <ClickEvent />
      <FetchData />
      <TestProps title={"Click me!"} />
    </>
  )

}

export default App
