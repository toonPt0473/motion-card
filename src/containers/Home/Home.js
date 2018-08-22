import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { compose } from 'redux'
// import PropTypes from 'prop-types'
import Swiper from 'react-id-swiper'
import Card from '../../components/Card/Card'
import { mockupData } from './constants'

class Home extends Component {
  mockupCard = () => mockupData(10).map(data => (
    <div key={data.description} style={{ display: 'flex', justifyContent: 'center' }} >
      <Card {...data} />
    </div>
  ))

  render() {
    const params = {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 3,
      spaceBetween: 35,
      freeMode: true,
    }
    return (
      <div>
        <Swiper {...params}>
          {this.mockupCard()}
        </Swiper>
      </div>
    )
  }
}

Home.propTypes = {

}
Home.defaultProps = {

}
// const mapStateToProps = state => ({ // eslint-disable-line

// })
// const mapDispatchToProps = dispatch => { // eslint-disable-line

// }

// const withStore = connect(mapStateToProps, mapDispatchToProps)

// export default compose(withStore)(Home)

export default Home

