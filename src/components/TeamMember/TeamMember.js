import React from 'react';
import './TeamMember.scss';
import linkedin from '../../images/linkedin.svg';

const TeamMember = ({ img, name, role, description }) => {
  return (
    <div className="team__member">
      <div className="team__member__info">
        <img src={img} alt="profile_img_1" />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <h4>{name}</h4>
          <p>{role}</p>
        </div>
        <img src={linkedin} alt="linkedin" style={{ marginTop: 0, marginBottom: 'auto' }} />
      </div>
      <span className="team__member__separator" />
      <p>{description}</p>
    </div>
  );
};

export default TeamMember;
