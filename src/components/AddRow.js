import React from 'react';
import { Button } from 'react-bootstrap';
import AppContext from '../AppContext';

const AddRow = () => (
  <AppContext.Consumer>
    {(action) => (
      <Button onClick={action.addRowToList} variant="outline-primary" className="mb-3">Add Row</Button>
    )}
  </AppContext.Consumer>
);

export default AddRow;
