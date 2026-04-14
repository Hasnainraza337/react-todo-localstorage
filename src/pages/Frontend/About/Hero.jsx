import { Col, Row, Typography } from 'antd'
const { Title } = Typography
const Hero = () => {
    return (
        <div className="container mt-7">
            <Row>
                <Col span={24}>
                    <Title level={1} className='text-center'>About - Hero</Title>
                </Col>
            </Row>
        </div>
    )
}

export default Hero