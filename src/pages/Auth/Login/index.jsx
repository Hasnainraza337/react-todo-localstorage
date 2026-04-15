import { Button, Card, Col, Form, Input, message, Row, Typography } from 'antd'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const { Title } = Typography;

const initialState = { email: "", password: "", }

const Login = () => {
    const [state, setState] = useState(initialState)
    const [isProcesing, setIsProcessing] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => setState(s => ({ ...s, [e.target.name]: e.target.value }))

    const handleSubmit = () => {

        const { email, password, } = state;

        if (!email) return message.error("Enter Your email")
        if (!password) return message.error("Enter Your Password")


        setIsProcessing(true)

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const isUserFound = users.find((user) => user.email === email && user.password === password);

        if (!isUserFound) {
            setIsProcessing(false)
            return message.error("Invalid Crediential")
        }

        setIsProcessing(false)
        message.success("Login Successfully");
        localStorage.setItem("user", JSON.stringify(isUserFound));

        navigate('/')
    }


    return (
        <main className='auth flex flex-col justify-center items-center'>
            <div className="container max-w-125">
                <Card>
                    <Row className='mb-5'>
                        <Col span={24}>
                            <Title level={1} className='text-center'>Login</Title>
                        </Col>
                    </Row>

                    <Form layout='vertical'>
                        <Row>

                            <Col span={24}>
                                <Form.Item label="Email">
                                    <Input size='large' placeholder='Enter Your Email' name='email' onChange={handleChange} />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label="Password">
                                    <Input.Password size='large' placeholder='Enter Your Password' name='password' onChange={handleChange} />
                                </Form.Item>
                            </Col>

                            <Col span={24}>
                                <Button size='large' type='primary' htmlType='submit' loading={isProcesing} block onClick={handleSubmit}>Login</Button>
                            </Col>
                        </Row>

                    </Form>
                </Card>
            </div>
        </main>
    )
}

export default Login