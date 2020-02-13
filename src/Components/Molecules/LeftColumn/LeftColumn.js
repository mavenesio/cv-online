import React from 'react';
import styled from 'styled-components';
import DataList from '../../Molecules/DataList/DataList';
import Card from '../../Atoms/Card/Card';
import * as constants from '../../../constants/es-ES'


const Image = styled.img`
    height:auto;
    width:90%;
    border-radius:50%;
    border: black solid 2px;
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


const renderExtraData = ()=>{
    return constants.firstColumnData.map( section => {
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

const LeftColumn = ({props}) => {
        return (
            <PrimaryColumn>
                <Row>
                    <Image src={constants.profilePicture} />
                </Row>
                {renderExtraData()}
            </PrimaryColumn>
        );
}
export default LeftColumn;