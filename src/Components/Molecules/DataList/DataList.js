
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DataContainer = styled.div`
    display:flex;
    flex-direction:column;
`;
const Data = styled.div`
    font-size:20px;
    padding-left:0.5rem;
    padding-bottom:1rem;
`;
const DataWrapper = styled.div`
  display:flex;
  flex-direction:row;
`;
class DataList extends React.Component {

  renderData = () => {
    return this.props.data.map((fact,index) => {
      return (
        <DataWrapper>
          <img 
            src={fact.logo}  
            height='30' 
            width='30'
            alt={fact.name}
            />
          <Data key={index+fact.name} >{fact.name}</Data>
        </DataWrapper>)
        } 
      )
  } 
  render() {
    return (
        <DataContainer>
            {this.renderData()}
        </DataContainer>
    );
  }
}
Data.propTypes = {
    data: PropTypes.array.isRequired
  }

export default DataList;
