import React, { Component } from 'react'
// 引入 高阶组件
import ProxyHoc from '../hocComponents/proxyHoc'


class MyProxyComponent extends Component {
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props.paramsa,666)
        return(
            <div>
                高阶组件===> 属性代理
            </div>
        )
    }
}

// 将MyProxyComponent组件作为参数传给ProxyHoc
export default ProxyHoc(MyProxyComponent)