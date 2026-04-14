import { Col, Row, Typography } from "antd"
const { Paragraph } = Typography;

const Copyrights = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="bg-gray-50  py-3">
            <div className="container">
                <Row>
                    <Col span={24}>
                        <Paragraph className="text-center mb-0!">&copy; {year}.All Rights Reserved.</Paragraph>
                    </Col>
                </Row>
            </div>
        </footer>
    )
}

export default Copyrights