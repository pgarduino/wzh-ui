import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Typography, Table, Divider } from 'antd';

import { UserViewInfo } from './components/Info'

import UserI from '../../domain/User'
import TaskI from '../../domain/Task'

import userService from '../../services/User'

const { Title } = Typography;

export const UserView: React.FC<{}> = () => {

    const { id } = useParams<any>();

    const [user, setUser] = React.useState<UserI>()
    const [userTasks, setUserTasks] = React.useState<TaskI[]>()

    React.useEffect(() => {
        userService.getById(id)
            .then(data => setUser(data))
        userService.getTasksById(id)
            .then(res => setUserTasks(res.data))
    }, []);

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
    ];

    return user ? (
        <div>
            <UserViewInfo user={user} />
            <Divider />
            <Title level={3}>Tasks</Title>
            <Table dataSource={userTasks} columns={columns} />
        </div>
    ) : <></>
}