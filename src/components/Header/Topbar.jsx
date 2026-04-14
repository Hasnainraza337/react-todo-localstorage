import { Col, Row, Typography } from "antd"
const { Paragraph } = Typography;

const Topbar = () => {
    return (
        <header className="bg-amber-200 py-1">
            <div className="container">
                <Row>
                    <Col span={24}>
                        <Paragraph className="text-center mb-0! ">
                            A simple primary alert—check it out!
                        </Paragraph>
                    </Col>
                </Row>
            </div>
        </header>
    )
}

export default Topbar