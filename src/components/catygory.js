
import { Row, Col} from "react-bootstrap"
import { Roll } from "react-reveal"
export const Category = ({filterByCategory, allCategory}) => {

    const onFilter = (cat) => {
        filterByCategory(cat)
        
    }
    return (
        <Row className="my-2 mb-5">
            <Col className="d-flex justify-content-center">
                
                <div>
                <Roll left>
              {
                allCategory.length >= 1 ? (allCategory.map( (cat) => {
                    return (
                    
                        <button onClick={() => onFilter(cat)} style={{border: "1px solid #b45b35"}} className="btn mx-2">{cat}</button>
                    )
                })) : <h4>there is nothing</h4>
              }
              </Roll>
              </div>
              
            </Col>


        </Row>
    )
}