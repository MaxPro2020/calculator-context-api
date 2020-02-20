import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AddRow from './AddRow';
import AppContext from '../AppContext';

describe('AddRow component', () => {
  it('Fires event', () => 
  {
    const addRowToList = jest.fn();
    const { getByText, debug } = render(
      <AppContext.Provider
      value={{
        addRowToList
      }}
    >
      <AddRow/>
    </AppContext.Provider>);
    debug();
    const button = getByText(/Add Row/i);
    fireEvent.click(button);
    expect(addRowToList).toHaveBeenCalledTimes(1);
  });
});

