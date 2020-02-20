import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AddRow from './AddRow';
import RowsList from './RowsList';
import AppContext from '../AppContext';

describe('RowsList component', () => {
  it('Count Rows', () => 
  {
    const { getByTestId, debug } = render(
      <AppContext.Provider
      value={{
        list: [{
          quantity: 0,
          operation: '+',
          disable: false
        },
        {
          quantity: 0,
          operation: '+',
          disable: false
        }],
      }}
    >
      <RowsList/>
    </AppContext.Provider>);
    debug();
    const list = getByTestId('listGroup');
    expect(list).toHaveClass("list-group");
    expect(list.querySelectorAll(".list-group-item").length).toBe(2);
  });
});

