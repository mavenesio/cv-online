
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SkillListContainer = styled.div`
    display:flex;
    flex-direction:column;
`;
const Data = styled.div`
    font-size:20px;
    padding-left:0.5rem;
    padding-bottom:1rem;
`;
const SkillContainer = styled.div`
  display:flex;
  flex-direction:row;
`;
class SkillList extends React.Component {

  renderData = () => {
    return this.props.data.map((skill,index) => {
      return (
        <SkillContainer>
          <img 
            src={skill.logo}  
            height='30' 
            width='30'
            alt={skill.name}
            />
          <Data key={index+skill.name} >{skill.name}</Data>
        </SkillContainer>)
        } 
      )
  } 
  render() {
    return (
        <SkillListContainer>
            {this.renderData()}
        </SkillListContainer>
    );
  }
}
SkillList.propTypes = {
    data: PropTypes.array.isRequired
  }

export default SkillList;
