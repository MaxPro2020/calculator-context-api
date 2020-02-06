import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Row, Col } from 'react-bootstrap';

const Results = ({ result }) => (
  <Alert variant="info" className="mt-3">
    <Row>
      <Col xs={2}><Alert.Heading>Result</Alert.Heading></Col>
      <Col xs={10}><Alert.Heading>{result}</Alert.Heading></Col>
    </Row>
  </Alert>
);

Results.defaultProps = {
  result: 0,
};

Results.propTypes = {
  result: PropTypes.number,
};

export default Results;
