import { Button, Card, Col, Form, Input, message, Row, Typography } from 'antd'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const { Title } = Typography;

const initialState = { fullName: "", email: "", password: "", confirmPassword: "" }

const Register = () => {
    const [state, setState] = useState(initialState)
    const [isProcesing, setIsProcessing] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => setState(s => ({ ...s, [e.target.name]: e.target.value }))

    const handleSubmit = () => {

        const { fullName, email, password, confirmPassword } = state;

        if (fullName.length < 3) return message.error("Enter Your Name Correctly")
        if (!email) return message.error("Enter Your email")
        if (!password) return message.error("Enter Your Password")
        if (password !== confirmPassword) return message.error("password doesn't match")


        setIsProcessing(true)

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const isUserFound = users.find((user) => user.email === email);

        if (isUserFound) {
            setIsProcessing(false)
            return message.error("Email already registered");
        }

        const user = {
            fullName,
            email,
            password,
            status: "active",
            id: Math.random().toString(36).slice(2),
            createdAt: new Date().getTime()
        };

        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));

        setIsProcessing(false)
        message.success("A New User Registerd successfully!");

        navigate('/auth/login')
    }


    return (
        <main className='auth flex flex-col justify-center items-center'>
            <div className="container max-w-125">
                <Card>
                    <Row className='mb-5'>
                        <Col span={24}>
                            <Title level={1} className='text-center'>Register</Title>
                        </Col>
                    </Row>

                    <Form layout='vertical'>
                        <Row>
                            <Col span={24}>
                                <Form.Item label="Full Name">
                                    <Input size='large' placeholder='Enter Your FullName' name='fullName' onChange={handleChange} />
                                </Form.Item>
                            </Col>
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
                                <Form.Item label="Confirm Password">
                                    <Input.Password size='large' placeholder='Enter Your Password Again' name='confirmPassword' onChange={handleChange} />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Button size='large' type='primary' htmlType='submit' loading={isProcesing} block onClick={handleSubmit}>Register</Button>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </div>
        </main>
    )
}

export default Register