import * as React from 'react';
import { hot } from 'react-hot-loader/root';

export interface HelloProps { compiler: string; framework: string; }

const Hello = (props: HelloProps) => (
  <div><h1>React with TS</h1></div>
);
export default hot(Hello);
