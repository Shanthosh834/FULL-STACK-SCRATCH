import { useState } from 'react';
import Number from './Hooks/1 - useState Number';
import Words from './Hooks/2 - useState String';
import Bool from './Hooks/3 - useState Boolean';
import Arr from './Hooks/4 - useState Array';
import Obj from './Hooks/5 - useState Object';

// Basic UseState
function State() {
  return (
    <div>
      <p> 1. Number UseState </p>
      <Number /><br />

      <p> 2. String UseState </p>
      <Words /><br />

      <p> 3. Boolean UseState </p>
      <Bool /><br />

      <p> 4. Array UseState </p>
      <Arr /><br />

      <p> 5. Object UseState </p>
      <Obj /><br />
    </div>
  );
};
export default State;