import React from 'react';
import renderer from 'react-test-renderer';
import Row from './Row';
import AppContext from '../AppContext';

describe('Row component', () => {
  it('Renders correctly', () => 
  {
    const updateRow = jest.fn();
    const removeRow = jest.fn();
    const index = 1;
    const tree = renderer
      .create(
        <AppContext.Provider
          value={{
            updateRow,
            removeRow
          }}
        >
          <Row index={index} />
        </AppContext.Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
