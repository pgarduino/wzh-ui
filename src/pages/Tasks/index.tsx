import React, { useEffect, useState } from 'react'
import { Table, Form, Input, Select, Checkbox, Divider } from 'antd';

import TaskI from '../../domain/Task'
import taskService from '../../services/Task'
import UserI from '../../domain/User'
import userService from '../../services/User'

const { Option } = Select;
const { Search } = Input;

export const Tasks: React.FC<{}> = () => {

    const [tasks, setTasks] = useState<TaskI[]>([])
    const [users, setUsers] = useState<UserI[]>([])
    const [userFilter, setUserFilter] = React.useState<UserI | number>()
    const [completedFilter, setCompletedFilter] = React.useState(false)
    const [titleFilter, setTitleFilter] = React.useState("")
    const findAllTasks = (filters: object) => {
        taskService.findAllBy(filters)
            .then((res) => {
                setTasks(res.data);
            });
    };
    const getUsers = () => {
        userService.getAll()
            .then((res) => {
                setUsers(res.data);
            });
    };
    useEffect(() => {
        const filters = {
            ...(titleFilter && {title: titleFilter}),
            completed: completedFilter,
            ...(userFilter && {user_id: userFilter})
        };
        findAllTasks(filters);
    }, [userFilter, completedFilter, titleFilter])

    useEffect(() => {
        getUsers();
    }, [])

    const handleFilterUser = (value: any) => {
        setUserFilter(value)
    };

    const handleFilterTitle = (value: any) => {
        setTitleFilter(value)
    };

    const handleFilterCompleted = (event: any) => {
        setCompletedFilter(event.target.checked)
    };

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Completed',
            dataIndex: 'completed',
            key: 'completed',
            render : (value: boolean) => String(value),
        },
        {
            title: 'User Id',
            dataIndex: 'user_id',
            key: 'user_id',
        },
    ];

    return (
        <div>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                autoComplete="off"
                layout="inline"
            >
                <Form.Item label="Username" name="username">
                    <Select allowClear onChange={handleFilterUser} style={{ width: 200 }}>
                        {
                            users?.map((user : UserI) => (
                                <Option key={user.id} value={user.id}> {user.id} - {user.username}</Option>
                            ))
                        }
                    </Select>
                </Form.Item>
                <Form.Item label="Title" name="title" style={{ width: 300 }}>
                    <Search placeholder="input search text" onSearch={handleFilterTitle} />
                </Form.Item>
                <Form.Item label="Completed" name="completed" style={{ width: 200 }} valuePropName="checked" >
                    <Checkbox onChange={handleFilterCompleted} />
                </Form.Item>
            </Form>
            <Divider />
            <Table dataSource={tasks} columns={columns} />
        </div>
    )
}