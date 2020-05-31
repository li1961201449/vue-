import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import './login.less'
const Item = Form.Item;


export default class Login extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            username:'',
            password:'',
        }
    }
    onInputChange(e){
        let inputValue  = e.target.value,
            inputName   = e.target.name;
        this.setState({
            [inputName] : inputValue
        });
    }
    onInputKeyUp(e){
        if(e.keyCode === 13){
            this.onSubmit();
        }
    }
    onSubmit() {
        let loginInfo ={
            username: this.state.username,
            password:this.state.password,
        }
        console.log(loginInfo,'ddd')
        this.props.history.push('/admin');
        console.log(this.props)
        // this.props.history.replace({pathname:'/admin'})
    }
    render() {
        console.log("props",this.props);
        return (
            <div className="logins">
                <header className="login-header">
                    <h1>后台管理系统 </h1>
                </header>
                <section className="logn-contnet" >
                    <h2>用户登录</h2>
                    <div>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                        >
                            <Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Username!',
                                    },
                                ]}
                            >
                                      {/* <input type="text"
                                    name="username"
                                    className="form-control"
                                    placeholder="请输入用户名" 
                                    onKeyUp={e => this.onInputKeyUp(e)}
                                    onChange={e => this.onInputChange(e)}/> */}
                                <Input className="site-form-item-icon" name="username" placeholder="Username" onKeyUp = {e => this.onInputKeyUp(e)} onChange={e => this.onInputChange(e)} />
                            </Item>
                            <Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                ]}
                            >
                                <Input
                                    className="site-form-item-icon"
                                    type="password"   name="password"
                                    placeholder="Password"   onKeyUp = {e => this.onInputKeyUp(e)} onChange={e => this.onInputChange(e)} 
                                />
                                {/* <input type="password" 
                                    name="password"
                                    className="form-control" 
                                    placeholder="请输入密码" 
                                    onKeyUp={e => this.onInputKeyUp(e)}
                                    onChange={e => this.onInputChange(e)}/> */}
                            </Item>
                            <Item>
                                <Button onClick={e => {this.onSubmit(e)}}  type="primary" htmlType="submit" className="login-form-button">
                                    登录</Button>
                            </Item>
                        </Form>
                    </div>
                </section>
            </div>
        )
    }
}