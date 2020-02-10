
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SkillListContainer = styled.div`
    display:flex;
    flex-direction:column;
`;
const Data = styled.div`
    align-self:flex-end;
`;

class SkillList extends React.Component {

  renderData = () => {
    return this.props.data.map((skill,index) => {return <Data key={index+skill} >{skill}</Data>} )
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
