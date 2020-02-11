import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-weight: bolder;
    background: rgba(0,0,0,1);
    z-index: 1000;
`;
const HeaderName = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: center;
`;
const HeaderFirstname = styled.h1`
    margin:1rem 0rem 1rem 1rem;
    font-size: 4.5vw;
    font-weight:300;
    color: white;
`;
const HeaderLastname = styled.h1`
    margin:1rem 1rem 1rem 0rem;
    font-size: 4.5vw;
    font-weight:700;
    color: white;
`;

const HeaderSubtitle = styled.h3`
    font-size: 2.5vw;    
    margin-top: unset;   
    margin-bottom: unset;
    color:white;
`;

const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 200ms ease-in;
    position: unset;
  }
  .hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, -100%);
    position: fixed;
  }
`;

class Header extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            scrollPos: 0
        };
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    handleScroll = () => {
        const { scrollPos } = this.state;
        console.log(document.body.getBoundingClientRect());
        this.setState({
          scrollPos: document.body.getBoundingClientRect().top,
          show: document.body.getBoundingClientRect().top > scrollPos
        });
      }
    render() {
        const {firstName, lastName, subTitle} = this.props;
        return (
            <Transition>
                    <HeaderContainer className={this.state.show ? "active" : "hidden"}>
                        <HeaderName>
                            <HeaderFirstname>
                                {firstName},
                            </HeaderFirstname>
                            <HeaderLastname>
                                {lastName}
                            </HeaderLastname>
                        </HeaderName>
                        <HeaderSubtitle>
                                {subTitle}
                        </HeaderSubtitle>
                    </HeaderContainer>
            </Transition>
        );
    }
}
Header.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    subTitle: PropTypes.string,
  }

export default Header;