import React, {FC} from 'react';

import {
    Route,
    Link,
    Redirect,
} from 'react-router-dom';

import { Users } from '../../pages/Users';
import { UserView } from '../../pages/UserView';
import { Tasks } from '../../pages/Tasks';

import './index.css';

import { Layout, Menu } from 'antd';
import { BranchesOutlined, UserOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;


const Navigation: FC = () => {
    return(
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
            >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        <Link to="/users">Users</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<BranchesOutlined />}>
                        <Link to="/tasks">Tasks</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <Route path="/users/:id" component={UserView} />
                        <Route exact path="/">
                            <Redirect to="/users" />
                        </Route>
                        <Route exact path="/users" component={Users} />
                        <Route exact path="/tasks" component={Tasks} />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>© Created by Wzh</Footer>
            </Layout>
        </Layout>
    );
};

export default Navigation;