import { FaLinkedinIn } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

const LinkedInIco = ({ classes = "" }) => {
  return (
    <IconContext.Provider value={{
      className: classes,
    }}>
      <FaLinkedinIn aria-hidden="true" />
    </IconContext.Provider>
  );
}

export default LinkedInIco;