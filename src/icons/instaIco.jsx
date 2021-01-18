import { AiOutlineInstagram } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'

const InstaIco = ({ classes = "" }) => {
  return (
    <IconContext.Provider value={{
      className: classes,
    }}>
      <AiOutlineInstagram />
    </IconContext.Provider>
  );
}

export default InstaIco;