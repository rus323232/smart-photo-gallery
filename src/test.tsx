import React = require('react');
import { hot } from 'react-hot-loader/root';
import Test from './test.1';

export interface HelloProps { compiler: string; framework: string; }

const Hello = (props: HelloProps) => <div><h1>Heddsввsslwsdsodd from {props.compiler} and {props.framework}!</h1><Test></Test></div> ;
export default hot(Hello)