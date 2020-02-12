
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DataContainer = styled.div`
    display:flex;
    flex-direction:column;
    color: ${props=> props.theme.colors.font.primary};
`;
const DataName = styled.div`
    font-size:${props=> props.theme.colors.font.normal};;
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
        <DataWrapper key={index+fact.name}>
          <img 
            src={fact.logo}  
            height='30' 
            width='30'
            alt={fact.name}
            />
          <DataName>{fact.name}</DataName>
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
DataList.propTypes = {
    data: PropTypes.array.isRequired
  }

export default DataList;
