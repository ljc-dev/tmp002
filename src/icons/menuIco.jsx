const MenuIco = ({ isActive }) => {
  return (
    <div className="relative" style={{ width: "24px", height: "16px", }}>
      <div className="absolute" style={{ width: "24px", height: "2px", backgroundColor: "black", top: "8px", transform: isActive ? "translate3d(0, 0, 0)" : "translate3d(0, -8px, 0)", transition: "transform 0.3s" }}></div>
      <div className="absolute" style={{ width: "24px", height: "2px", backgroundColor: "black", top: "8px", transform: "translate3d(0, 0, 0)" }}></div>
      <div className="absolute" style={{ width: "12px", height: "2px", backgroundColor: "black", top: "8px", transform: isActive ? "translate3d(0, 0, 0)" : "translate3d(0, 8px, 0)", transition: "transform 0.3s" }}></div>
    </div>
  )
}

export default MenuIco