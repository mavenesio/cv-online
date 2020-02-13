
import React from 'react';
import styled from 'styled-components';
import Experience from '../../Molecules/Experience/Experience'
import PropTypes from 'prop-types';

const ExperienceContainer = styled.div`
`;
const renderExperiences = (experiences) => {
  return experiences.map(experience => 
    {
      return (
        <Experience
            key={`${experience.title}`}
            description={experience.description}
            subTitle={experience.subTitle}
            leftTitle={experience.leftTitle}
            from={experience.from}
            to={experience.to}
            title={experience.title}
        />
      )
    }
  )
}
const ExperienceList = (props) => {
  return (
      <ExperienceContainer>
          {renderExperiences(props.experiences)}
      </ExperienceContainer>
  );
}
ExperienceList.propTypes = {
  experiences: PropTypes.array.isRequired,
}

export default ExperienceList;
