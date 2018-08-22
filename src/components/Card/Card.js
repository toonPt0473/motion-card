import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const transition = 'all 0.8s ease-in-out'

const Container = styled.div`
  position: relative;
  height: ${(props) => `${props.height}px`};
  /* width: ${(props) => `${props.width}px`}; */
  width: 100%;
  background-image: ${(props) => `url(${props.bg})`};
  background-position: center;
  background-size: cover;
  padding: ${(props) => {
    const paddingVertical = props.height * 10 / 100
    const paddingHorizontal = props.width * 8 / 100
    return `${paddingVertical}px ${paddingHorizontal}px`
  }};
  background-color: #909090;
  color: white;
  `
const ContentContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: inherit;
  width: 75%;
  `
const Title = styled.h1`
  font-weight: 500;
  margin: 0;
  `
const Description = styled.div`
  opacity:0;
  max-height: 0;
  overflow: hidden;
  transition: ${transition};
  font-size: 12px;
  ${Container}:hover & {
    opacity:1;
    max-height: 150px;
  }
  `
const PageIndexContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-weight: thin;
  `
const FrontLine = styled.div`
  border-top: 1px solid white;
  opacity: 0;
  width: 0px;
  height: 1px;
  margin-right: 0px;
  transition: ${transition};
  ${Container}:hover & {
    width: 30px;
    opacity: 1;
    margin-right: 10px;
  }
  `
const BackLine = styled.div`
border-top: 1px solid white;
opacity: 1;
width: 30px;
height: 1px;
margin-left: 10px;
transition: ${transition};
${Container}:hover & {
  width: 0px;
  opacity: 0;
}
  `

class Card extends Component {
  render() {
    return (
      <Container
        height={this.props.height}
        width={this.props.width}
        bg={this.props.bg}
      >
        <PageIndexContainer>
          <FrontLine />
          {this.props.index}
          <BackLine />
        </PageIndexContainer>
        <ContentContainer>
          <Title>{this.props.title}</Title>
          <Description>{this.props.description}</Description>
        </ContentContainer>
      </Container>
    )
  }
}

Card.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  index: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  bg: PropTypes.string,
}
Card.defaultProps = {
  height: 350,
  width: 320,
  index: 0,
  title: 'im Title',
  description: 'im Description',
  bg: '',
}

export default Card
