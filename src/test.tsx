import * as React from 'react';
import { hot } from 'react-hot-loader/root'

export interface IHelloProps { compiler: string; framework: string; }

const Hello = (props: IHelloProps) => (
  <div><h1>React with TS3422</h1></div>
);
export default hot(Hello);
