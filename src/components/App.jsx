import React from "react";
import Entry from './Entry';
import emojipedia from '../emojipedia';

function createEntry(item){
  return (
    <Entry emoji = {item.emoji}
           name = {item.name}
           meaning= {item.meaning}   
    
    />    
  );
}

function App() {
  return (
    <div>
    <h1>
    <span>emojipedia</span>
  </h1>
 { emojipedia.map(createEntry) }
  </div>
  );
}

export default App;
