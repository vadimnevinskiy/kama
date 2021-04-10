import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import AppMain from "./App";

test('renders learn react link', () => {
  const div = document.createElement('div');
  render(<AppMain />, div);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  ReactDOM.unmountComponentAtNode(div);
});
