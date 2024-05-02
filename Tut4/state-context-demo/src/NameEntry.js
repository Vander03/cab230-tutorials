import { useState, useContext } from 'react';
import MyCtx from './MyCtx';

export function NameEntry(props) {
    const [ name, setName ] = useState("");
    const update = useContext(MyCtx);
  
    return (
      <form method="POST" onSubmit={
        e => {
          e.preventDefault();
          update(name);
        }
      }>
        <input type="text" name="name" value={name} onChange={
          e => {
            setName(e.target.value);
          }
        } />
        <input type="submit" value="Click me" />
      </form>
    );
  }
