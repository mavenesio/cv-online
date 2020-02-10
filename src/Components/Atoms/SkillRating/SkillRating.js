import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Rating from 'react-rating';

const SkillRatingContainer = styled.div`
`;

class SkillRating extends React.Component {
  render() {
    const {skillLevel, skill} = this.props;
    return (
        <SkillRatingContainer>
          <div>
            {skill}
          </div>
          <div>
            <Rating 
              initialRating={skillLevel}
              readonly
                />
          </div>
        </SkillRatingContainer>
    );
  }
}
SkillRating.propTypes = {
  skillLevel: PropTypes.number.isRequired,
  skill: PropTypes.string.isRequired,
  }

export default SkillRating;