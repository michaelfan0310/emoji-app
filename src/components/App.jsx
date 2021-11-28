import React from "react";
import Entry from './Entry';
import emojipedia from '../emojipedia';

function createEntry(item){
  return (
    <Entry emoji = {item.emoji}
           name = {item.name}
           meaning= {item.meaning.substring(0,200)+"..."}   
    
    />    
  );
}

function App() {
  return (
    <div>
    <h1>
    <span className="bannertop">emojipedia</span>
  </h1>
 { emojipedia.map(createEntry) }
  </div>
  );
}

export default App;
