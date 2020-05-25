import React from 'react'
import { connect } from 'react-redux'
import './styles.less'
import Homehead from '@@/Homehead'
import Swip from '@@/Swip'
import Homenavs from '@@/Homenavs'
import { getSwiper, getNavs } from '@/actions/home'
export default @connect(state => {
  return {}
}, {
    getSwiper,
    getNavs
})
class Home extends React.Component {
  componentDidMount() {
    this.props.getSwiper()
    this.props.getNavs()
  }
  render () {
    return (
      <div className="pages-home">
        <Homehead />
        <Swip />
        <Homenavs />
      </div>
    )
  }
}
