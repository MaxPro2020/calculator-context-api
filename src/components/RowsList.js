import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Row from './Row';
import AppContext from '../AppContext';

const RowsList = () => (
  <AppContext.Consumer>
    {(data) => (
      <ListGroup>
        {data.list.map((row, index) => (
          <Row key={index.toString()} row={row} index={index} />
        ))}
      </ListGroup>
    )}
  </AppContext.Consumer>
);

export default RowsList;
