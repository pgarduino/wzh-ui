import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'antd'
import { ZoomInOutlined } from '@ant-design/icons';

import UserI from '../../domain/User'
import userService from '../../services/User'

export const Users: React.FC<{}> = () => {

    const [users, setUsers] = useState<UserI[]>([])
    const getUsers = () => {
        userService.getAll()
            .then((res) => {
                setUsers(res.data);
            });
    }
    useEffect(() => {
        getUsers();
    }, [])

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (value: any) => <Link to={`/users/${value.id}`}><ZoomInOutlined /></Link>,
        },
    ];

    return (
        <div>
            <Table dataSource={users} columns={columns} />
        </div>
    )
}