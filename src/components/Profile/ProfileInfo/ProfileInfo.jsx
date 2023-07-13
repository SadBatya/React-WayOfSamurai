import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src='https://avatars.mds.yandex.net/i?id=82d52578bffc1969311dca4c1f601dd2b6fb2354-8497406-images-thumbs&n=13' alt='' />
      </div>
      <div className={classes.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo
