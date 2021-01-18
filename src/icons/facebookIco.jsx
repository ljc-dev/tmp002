import { FaFacebookF } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

const FacebookIco = ({ classes = "" }) => {
  return (
    <IconContext.Provider value={{
      className: classes,
    }}>
      <FaFacebookF />
    </IconContext.Provider>
  );
}

export default FacebookIco;