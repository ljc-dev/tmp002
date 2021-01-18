import { HiOutlineChevronUp } from 'react-icons/hi'
import { IconContext } from 'react-icons/lib'

const UpIco = ({ classes = "" }) => {
  return (
    <IconContext.Provider value={{
      className: classes,
    }}>
      <HiOutlineChevronUp aria-hidden="true" />
    </IconContext.Provider>
  );
}

export default UpIco;