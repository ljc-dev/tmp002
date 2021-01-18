import { FaUserCircle } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

const UserIco = ({ classes = "" }) => {
  return (
    <IconContext.Provider value={{
      className: classes,
    }}>
      <FaUserCircle />
    </IconContext.Provider>
  );
}

export default UserIco;