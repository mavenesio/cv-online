import React from 'react';
import styled from 'styled-components';
import Card from '../../Atoms/Card/Card';
import ExperienceList from '../../Molecules/Experience/ExperienceList';
import * as constants from '../../../constants/es-ES';


const SecondaryColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    flex-basis: 50vw;
    margin-right: 4vw;
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

const Paragraph = styled.div`
    text-align:start;
`;

const renderExtraData = ()=>{
    return constants.secondColumnData.map( section => {
            return (
                <Row key={section.title}>
                    <Card title={section.title} titleColor={section.titleColor}>
                        <ExperienceList experiences={section.data}/>
                    </Card>
                </Row>
            )
        }
    );
}

const RightColumn = ({props}) => {
        return (
            <SecondaryColumn>
                <Row> 
                    <Card title={constants.description.title} titleColor={constants.description.titleColor}>
                        <Paragraph>{constants.description.copy}</Paragraph>
                    </Card>
                </Row>
                {renderExtraData()}
            </SecondaryColumn>
        );
}
export default RightColumn;
