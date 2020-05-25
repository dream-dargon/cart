import React from 'react';
import { connect } from 'react-redux'
import Header from '@@/Header'
export default @connect( state => {
  return {
    logindata : state.login.data
  }
},)
class index extends React.Component {
  componentDidMount() {
    const { logindata } = this.props
    if (logindata === false) {
       this.props.history.push('/login')
    }
  }
  render() {
    return <div>
      <Header name = "会员中心"/>
    </div>;
  }
}

