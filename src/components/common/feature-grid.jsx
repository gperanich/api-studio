import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

class FeatureGrid extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={12} sm={12} md={12} >
                        <h4>Find a solution for...</h4>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={3}>
                        <h4>Test 1</h4>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <h4>Test2</h4>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <h4>Test 3</h4>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <h4>Test 4</h4>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default FeatureGrid;