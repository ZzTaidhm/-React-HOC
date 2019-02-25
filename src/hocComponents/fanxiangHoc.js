

// 高阶组件：反向继承
const MyContainer = (WrappedComponent) => {
    return class extends WrappedComponent {
        render(){
            return super.render()
        }
    }
}

export default MyContainer;