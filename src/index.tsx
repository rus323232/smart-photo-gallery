
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;

ReactDOM.render(
  <Hello compiler="ass" framework="aasdasdasdssss"></Hello>,
  document.getElementById('photo-app')
);