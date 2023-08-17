import React from "react";
import mockStores from "../variables/stores";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import StoreDropdown from "../components/Dropdown/storeDropdown";

function SimilarProduct() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h2 className="title" align="center">
                  Store Associability
                </h2>
                <h4 className="title" align="left">
                  Items often bought together
                </h4>
              </CardHeader>
              <CardBody className="all-icons">
                <StoreDropdown />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default SimilarProduct;
