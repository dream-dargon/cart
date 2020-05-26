import React from 'react';
import Swiper from 'swiper';
import { connect } from 'react-redux'
import 'swiper/js/swiper.min.js'
import 'swiper/css/swiper.min.css'
import './style.less'
export default @connect(state => {
  return {
    imgs : state.home.swiperImgs
  }
})
class index extends React.Component {
  componentDidMount() {
    new Swiper('.swiper-container',{
      loop: true, 
      autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
          },
      pagination: {
          el: '.swiper-pagination',
          clickable :true,
      },
  });
<<<<<<< HEAD
=======

>>>>>>> 6708b6c3a6fb9a5ceb479c8fba7e5720c16fd68b
}
  render() {
    const { imgs } = this.props;
    return <div className='swip'>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {
            imgs.map((v,i)=>{
<<<<<<< HEAD
              return <div className="swiper-slide" key={i}><img src={v.image} alt="" /></div>
=======
              return <div className="swiper-slide" key={i}><img src={v.image} alt=''/></div>
>>>>>>> 6708b6c3a6fb9a5ceb479c8fba7e5720c16fd68b
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>;
  }
}


