import MyPosts from './MyPosts/MyPost'
import classes from './Profile.module.css'

const Profile = () => {
  return (
    <div className='content'>
      <div>
        ava + description
      </div>
      <MyPosts />
    </div>
  ) 
}

export default Profile