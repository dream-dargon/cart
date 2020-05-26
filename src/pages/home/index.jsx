import React from 'react'
import { connect } from 'react-redux'
import './styles.less'
import Homehead from '@@/Homehead'
import Swip from '@@/Swip'
import Homenavs from '@@/Homenavs'
import Recommend from '@@/Recommend'
import { getSwiper, getNavs, getRecommend } from '@/actions/home'
export default @connect(state => {
  return {}
}, {
    getSwiper,
    getNavs,
    getRecommend
})
class Home extends React.Component {
  componentDidMount() {
    this.props.getSwiper()
    this.props.getNavs()
    this.props.getRecommend()
  }
  render () {
    return (
      <div className="pages-home">
        <Homehead />
        <Swip />
        <Homenavs />
        <Recommend />
      </div>
    )
  }
}
