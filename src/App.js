import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Container } from 'react-bootstrap';
import AppContext from './AppContext';
import AddRow from './components/AddRow';
import RowsList from './components/RowsList';
import Results from './components/Results';

const App = () => {
  const [list, setList] = useState([]);
  const [result, setResult] = useState(0);

  const addRowToList = () => {
    setList([...list, {
      quantity: 0,
      operation: '+',
      disable: false,
    }]);
  };

  const updateResults = (payload) => {
    let quantity = parseFloat(payload.quantity);
    const reg = /^-?\d+\.?\d*$/;
    if (!reg.test(quantity)) {
      return;
    }
    let oldQuantity = -parseFloat(payload.row.quantity);
    if (payload.operation === '-') {
      quantity = -quantity;
    } else if (payload.operation === 'delete') {
      quantity = 0;
    }
    if (payload.row.operation === '-') {
      oldQuantity = -oldQuantity;
    }
    if (payload.row.disable !== payload.disable) {
      if (payload.disable) {
        setResult(parseFloat(Number(result + oldQuantity).toFixed(2)));
        return;
      }
      setResult(parseFloat(Number(result - oldQuantity).toFixed(2)));
      return;
    }

    if (payload.disable) {
      return;
    }

    setResult(parseFloat(Number(result + oldQuantity + quantity).toFixed(2)));
  };

  const updateRow = (id, row, quantity, operation, disable) => {
    const reg = /^-?\d+\.?\d*$/;
    if (!reg.test(quantity)) {
      return;
    }

    setList(
      list.map((item, index) => {
        if (index !== id) {
          // This isn't the item we care about - keep it as-is
          return item;
        }
        // Otherwise, this is the one we want - return an updated value
        return {
          ...item,
          ...{
            quantity: parseFloat(quantity),
            operation,
            disable,
          },
        };
      }),
    );

    updateResults({
      row,
      quantity,
      operation,
      disable,
    });
  };

  const removeRow = (id, row, quantity, operation, disable) => {
    setList([
      ...list.slice(0, id),
      ...list.slice(id + 1),
    ]);

    updateResults({
      row,
      quantity,
      operation,
      disable,
    });
  };

  return (
    <Jumbotron fluid>
      <Container>
        <h1 data-testid="h1">Welcome to the React Challenge</h1>
        <p className="small">
          Taken the html structure in the example below (index.html),
          <br />
          write a simple React calculator (adder)
          su that has the following mandatory functionalities:
        </p>
        <ul className="small">
          <li>rows can be added and removed</li>
          <li>each row have a sign (minus or plus)</li>
          <li>
            each row can be enabled or disabled by a dedicatedcontrol button.
            Disabled rows must be excluded from the addition.
          </li>
          <li>The result must be updated live while the user is writing</li>
        </ul>
        <p className="small">
          Feel free to add libraries if needed.
          <br />
          Structure and quality of the code, are matter of evaluation.
          <br />
          ES6+ Javascript knowledge is matter of evaluation.
          <br />
          Look and feel of the solution is a plus.
        </p>
        <AppContext.Provider
          value={{
            list,
            addRowToList,
            updateRow,
            removeRow,
          }}
        >
          <AddRow />
          <RowsList />
        </AppContext.Provider>
        <Results result={result} />
      </Container>
    </Jumbotron>
  );
};

export default App;
