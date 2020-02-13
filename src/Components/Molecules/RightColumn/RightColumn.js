import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from '../../Atoms/Card/Card';
import ExperienceList from '../../Molecules/Experience/ExperienceList';

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
const renderExtraData = (data) => {
    return data.map( section => {
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
const RightColumn = (props) => {
    return (
        <SecondaryColumn>
            <Row> 
                <Card title={props.description.title} titleColor={props.description.titleColor}>
                    <Paragraph>{props.description.copy}</Paragraph>
                </Card>
            </Row>
            {renderExtraData(props.data)}
        </SecondaryColumn>
    );
}
RightColumn.propTypes = {
    data: PropTypes.array,
    description: PropTypes.object,
}
export default RightColumn;
