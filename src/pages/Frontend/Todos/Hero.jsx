import React, { useState, useEffect } from 'react';
import { Table, Card, Typography, Button, message, Tag, Modal, Form, Input } from 'antd';
import { DeleteOutlined, EnvironmentOutlined, EditOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { TextArea } = Input;
const { Item } = Form;

const Hero = () => {
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editTodo, setEditTodo] = useState(null);
    const [form] = Form.useForm();


    // get todos
    const getTodos = () => {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        setData(todos);
    };

    useEffect(() => {
        getTodos();
    }, []);


    // delete todo

    const handleDelete = (id) => {
        const currentTodos = JSON.parse(localStorage.getItem('todos')) || [];
        const filteredTodos = currentTodos.filter(item => item.id !== id);
        localStorage.setItem('todos', JSON.stringify(filteredTodos));
        setData(filteredTodos);
        message.success('Task deleted successfully');
    };



    const showEditModal = (record) => {
        setEditTodo(record);
        form.setFieldsValue(record);
        setIsModalOpen(true);
    };


    //  update todo

    const handleUpdate = () => {
        form.validateFields().then((values) => {
            const currentTodos = JSON.parse(localStorage.getItem('todos')) || [];

            const updatedTodos = currentTodos.map((item) =>
                item.id === editTodo.id ? { ...item, ...values } : item
            );

            localStorage.setItem('todos', JSON.stringify(updatedTodos));
            setData(updatedTodos);
            setIsModalOpen(false);
            message.success('Task updated successfully');
        });
    };





    const columns = [
        {
            title: 'Task Title',
            dataIndex: 'title',
            key: 'title',
            render: (text) => <span className="font-semibold text-blue-600">{text}</span>,
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
            render: (text) => (
                <span>
                    <EnvironmentOutlined className="mr-1 text-red-400" />
                    {text}
                </span>
            ),
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            render: (text) => text || <i className="text-gray-400">No description</i>,
        },
        {
            title: 'Action',
            key: 'action',
            width: 150,
            render: (_, record) => (
                <div className="flex gap-2">
                    <Button
                        type="text"
                        className="text-orange-500 hover:text-orange-600"
                        icon={<EditOutlined />}
                        onClick={() => showEditModal(record)}
                    />
                    <Button
                        danger
                        type="text"
                        icon={<DeleteOutlined />}
                        onClick={() => handleDelete(record.id)}
                    />
                </div>
            ),
        },
    ];

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <Card className="shadow-md rounded-xl" variant="borderless">
                <div className="flex justify-between items-center mb-6">
                    <Title level={2}>My Todo List</Title>
                    <Tag color="blue">Total Task : {data.length} </Tag>
                </div>

                <Table
                    columns={columns}
                    dataSource={data}
                    rowKey="id"
                    pagination={{ pageSize: 5 }}
                    locale={{ emptyText: 'No tasks found!' }}
                />
            </Card>

            { /* Edit Task Modal */}
            <Modal
                title="Edit Task"
                open={isModalOpen}
                onOk={handleUpdate}
                onCancel={() => setIsModalOpen(false)}
                okText="Update Todo"
                okButtonProps={{ className: "bg-blue-600" }}
            >
                <Form form={form} layout="vertical" className="mt-4">
                    <Item name="title" label="Title" rules={[{ required: true }]}>
                        <Input />
                    </Item>
                    <Item name="location" label="Location" rules={[{ required: true }]}>
                        <Input />
                    </Item>
                    <Item name="description" label="Description">
                        <TextArea rows={3} />
                    </Item>
                </Form>
            </Modal>
        </div>
    );
};

export default Hero;