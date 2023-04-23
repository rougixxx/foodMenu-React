import { Card, Row, Col } from "react-bootstrap"
import {Zoom} from 'react-reveal'

export const ItemsList = ({ itemsData }) => {
  return (
    <Row>
      <Zoom left>
      {
        itemsData.length >= 1 ? (itemsData.map((item) => {
          
          return (
          
            <Col key={item.id} sm="12" className="mb-3">
              <Card className="d-flex flex-row" style={{ backgroundColo: "#F8F8F8" }}>
                <div>
                  <Card.Img src={item.imgUrl} className="img-item" />
                </div>
                <Card.Body >
                  <Card.Title className="d-flex justify-content-between">
                    <div className="item-title">{item.title}</div>
                    <div className="item-price">{item.price} </div>
                  </Card.Title>
                  <Card.Text className="py-2">
                    <div className="item-description"> {item.description} </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )
        })): <h3 className="text-center">لا يوجد اصناف</h3>
          }
    </Zoom>
    </Row>

  )
}