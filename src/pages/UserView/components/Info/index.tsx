import React, { useEffect, useState } from 'react'

import { Descriptions } from 'antd';

import UserI from '../../../../domain/User'

interface UserViewInfoProps {
    user: UserI
}

export const UserViewInfo: React.FunctionComponent<UserViewInfoProps> = (props) => {
    const user = props.user;
    return props.user ? (
        <div>
            <Descriptions title="User Info">
                <Descriptions.Item label="Id">{user.id}</Descriptions.Item>
                <Descriptions.Item label="Name">{user.name}</Descriptions.Item>
                <Descriptions.Item label="UserName">{user.username}</Descriptions.Item>
                <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
                <Descriptions.Item label="Address">
                    street: {user.address.street}<br />
                    city: {user.address.city}<br />
                    zipcode: {user.address.zipcode}<br />
                    street: {user.address.street}<br />
                    geo: {user.address.geo.lat} {user.address.geo.lng}
                </Descriptions.Item>
                <Descriptions.Item label="Phone">{user.phone}</Descriptions.Item>
                <Descriptions.Item label="Website">{user.website}</Descriptions.Item>
                <Descriptions.Item label="Company">
                    name: {user.company.name}<br />
                    catchPhrase: {user.company.catchPhrase}<br />
                    bs: {user.company.bs}
                </Descriptions.Item>
            </Descriptions>
        </div>
    ) : <></>
}