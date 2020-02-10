
import React from 'react';
import styled from 'styled-components';
import Experience from '../../Molecules/Experience/Experience'
import PropTypes from 'prop-types';

const ExperienceContainer = styled.div`
`;

class ExperienceList extends React.Component {
    
    renderExperiences = (experiences) => {
        return experiences.map(experience => {
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
        })
    }
  render() {
    const {experiences} = this.props;
    return (
        <ExperienceContainer>
            {this.renderExperiences(experiences)}
        </ExperienceContainer>
    );
  }
}
ExperienceList.propTypes = {
    experiences: PropTypes.array.isRequired,
  }

export default ExperienceList;
