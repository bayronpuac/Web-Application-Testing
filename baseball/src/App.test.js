import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from '@testing-library//react';
import Dashboard from './compoments/Dashboard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('play is found', () => {
  const {getByText} = render(<App />);
  getByText(/play/i);
});


test('ball is found', () => {
  const {getAllByText} = render(<App />);
  getAllByText(/ball/i);
});