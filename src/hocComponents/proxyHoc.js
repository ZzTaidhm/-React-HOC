// 高阶组件  属性代理
import React, { Component } from 'react';

const MyProxyHoc = (WrappedComponents) => {
    return class extends Component {
        constructor(props){
            super(props)
        }
        render(){
            console.log(this.props,9999)
            return <WrappedComponents {...this.props} />
        }
    }
}

export default MyProxyHoc;