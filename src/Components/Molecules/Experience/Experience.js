
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ExperienceContainer = styled.div`
    display:flex;
    flex-direction: row;
    padding-bottom:2rem;
    padding-top:2rem;
    color: ${props=> props.theme.fontSizes.normal};
`;
const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`;

const TimeColumn = styled.div `
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    flex: 1;
`;
const ExperienceColumn = styled.div`
    text-align:left;
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    margin-left:0.5rem;
    flex: 5;
`;

const ExperienceHeader = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    margin-bottom:1rem;
`;
const ExperienceTitle = styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:space-between;
    width:100%;
`;
const TitleWrapper = styled.div`
    font-weight: ${props=> props.theme.fontWeight.bold};
`;
const LeftTitleWrapper = styled.div`
    color: ${props=> props.theme.colors.font.secondary};
`;
const TimeWrapper = styled.div`
    display:flex;
    align-self:flex-start;
`;

const Experience = (props) => {
    return (
        <ExperienceContainer>
                <TimeColumn>
                    <TimeWrapper>{`${props.to}`}</TimeWrapper>
                    <TimeWrapper>{`${props.from}`}</TimeWrapper>
                </TimeColumn>
                <ExperienceColumn>
                    <Row>
                        <ExperienceHeader>
                            <ExperienceTitle>
                                <TitleWrapper>{props.title}</TitleWrapper>
                                <LeftTitleWrapper>{props.leftTitle}</LeftTitleWrapper> 
                            </ExperienceTitle>
                            <div>
                                {props.subTitle}
                            </div>
                        </ExperienceHeader>
                    </Row>
                    <Row>
                        {props.description}
                    </Row>
                </ExperienceColumn>
        </ExperienceContainer>
    );
}
Experience.propTypes = {
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    subTitle:PropTypes.string.isRequired,
    leftTitle:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
  }

export default Experience;
