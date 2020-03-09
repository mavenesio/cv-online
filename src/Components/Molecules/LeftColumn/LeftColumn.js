import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DataList from '../../Molecules/DataList/DataList';
import Card from '../../Atoms/Card/Card';

const Image = styled.img`
    width:100%;
    height:100%;
    display:flex;
`;
const ImageCard = styled.div`
    box-shadow: 4px 20px 20px 4px rgba(0,0,0,0.7);
    grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
    background: rgba(0,0,0,0.4);
    display: flex;
    padding: 1rem 2rem 0rem 2rem;
    width:100%;
    min-width:250px;
    align-items:flex-end;
    overflow:hidden;
    border-radius:10px;
`;
const PrimaryColumn = styled.div `
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    flex-basis: 15vw;
    margin-left: 4vw;
    @media (max-width: 1225px) {
        flex-basis: 50vw;
        margin-left: 10vw;
        margin-right: 10vw;
    }
    padding: 0rem 1rem 0rem 1rem;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 1rem;
`;
const renderExtraData = (data)=>{
    return data.map( section => {
            return (
                <Row key={section.title}>
                    <Card title={section.title}>
                        <DataList data={section.data}/>
                    </Card>
                </Row>
            )
        }
    );
}
const LeftColumn = (props) => {
    return (
        <PrimaryColumn>
            {
                props.profilePicture &&
                <Row>
                    <ImageCard>
                        <Image src={props.profilePicture}/>
                    </ImageCard>
                </Row>
            }
            {props.data && renderExtraData(props.data)}
        </PrimaryColumn>
    );
}
LeftColumn.propTypes = {
    data: PropTypes.array,
    profilePicture: PropTypes.string,
}
export default LeftColumn;