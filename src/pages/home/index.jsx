import React from 'react'
import { connect } from 'react-redux'
import './styles.less'
import Homehead from '@@/Homehead'
import Swip from '@@/Swip'
import Homenavs from '@@/Homenavs'
import Threegoods from '@@/Threegoods'
import { getSwiper} from '@/actions/home'
export default @connect(state => {
  return {}
}, {
    getSwiper
})
class Home extends React.Component {
  componentDidMount() {
    this.props.getSwiper()
  }
  render () {
    return (
      <div className="pages-home">
        <Homehead />
        <Swip />
        <Homenavs />
        <Threegoods />
      </div>
    )
  }
}
