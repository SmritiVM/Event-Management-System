import {Link} from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap";
import {FaLinkedin, FaTwitter, FaInstagram} from "react-icons/fa";

import "./Footer.css";

export default function Footer(){
    let date = new Date();
    let year = date.getFullYear();

    return(
        <Container fluid className="footer">
            <Row>
                <Col md = "12" className="footer-copyright">
                    <h4>© {year}</h4>
                </Col>
            </Row>
            <Row>
                <Link to = "/"><h4>About</h4></Link>
            </Row>
            <Row>
                <Link to = "/contact"><h4>Contact Us</h4></Link>
            </Row>
            <Row>
                <Col md = "12" className="footer-body">
                    <div>
                        <a href = "#" target = "_blank" className="footer-icons"><FaLinkedin/></a>
                        <a href = "#" target = "_blank" className="footer-icons"><FaTwitter/></a>
                        <a href = "#" target = "_blank" className="footer-icons"><FaInstagram/></a>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
