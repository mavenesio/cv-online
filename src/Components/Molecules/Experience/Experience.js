
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ExperienceContainer = styled.div`
    display:flex;
    flex-direction: row;
    padding-bottom:2rem;
    padding-top:2rem;
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
    flex-basis: 100%;
    flex: 1;
`;
const ExperienceColumn = styled.div`
    text-align:left;
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    flex-basis: 100%;
    flex: 4;
`;

const ExperienceHeader = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    margin-bottom:1rem;
`;
const ExperienceTitle = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:100%;
`;
const CompanyNameTitle = styled.div`
    font-weight:700;
`;
const JobUbicationTitle = styled.div`
    color:gray;
`;

class Experience extends React.Component {

  render() {
    const {from, to, jobDescription, jobTitle, jobUbication,companyName} = this.props;
    return (
        <ExperienceContainer>
            
                <TimeColumn>
                        {from} - {to} 
                </TimeColumn>
                <ExperienceColumn>
                    <Row>
                        <ExperienceHeader>
                            <ExperienceTitle>
                                <CompanyNameTitle>{companyName}</CompanyNameTitle>
                                <JobUbicationTitle>{jobUbication}</JobUbicationTitle> 
                            </ExperienceTitle>
                            <div>
                                {jobTitle}
                            </div>
                        </ExperienceHeader>
                    </Row>
                    <Row>
                        {jobDescription}
                    </Row>
                </ExperienceColumn>
        </ExperienceContainer>
    );
  }
}
Experience.propTypes = {
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    jobDescription: PropTypes.string.isRequired,
    jobTitle:PropTypes.string.isRequired,
    jobUbication:PropTypes.string.isRequired,
    companyName:PropTypes.string.isRequired,
  }

export default Experience;
