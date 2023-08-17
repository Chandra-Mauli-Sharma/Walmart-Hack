/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import mockStores from "../variables/stores";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import StoreDropdown2 from "../components/Dropdown/storeDropdown2";

function DemandPrediction() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h2 className="title" align="center">
                  Demand Prediction
                </h2>
              </CardHeader>
              <CardBody className="all-icons">
                <StoreDropdown2 />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default DemandPrediction;
