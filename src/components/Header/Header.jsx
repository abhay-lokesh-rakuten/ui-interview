import React from 'react';

const Header = ({header, handleClick}) => {
  const {label, img} = header;
  return(
    <>
    <span>{label}</span>
    {img && 
    <button onClick={handleClick}>
      <img src={img} style={{ height: '10px', width: '10px', marginLeft: '10px'}} alt="label" />
    </button>
   }
    </>
  )
}
export default Header;