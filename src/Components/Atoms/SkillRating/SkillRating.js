import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Rating from 'react-rating';

const SkillRatingContainer = styled.div`
`;

const SkillRating = (props) => {
  return (
      <SkillRatingContainer>
        <div>
          {props.skill}
        </div>
        <div>
          <Rating 
            initialRating={props.skillLevel}
            readonly
              />
        </div>
      </SkillRatingContainer>
  );
}
SkillRating.propTypes = {
  skillLevel: PropTypes.number.isRequired,
  skill: PropTypes.string.isRequired,
  }

export default SkillRating;