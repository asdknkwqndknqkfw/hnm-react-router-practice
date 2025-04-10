import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const menuList = ["여성", "Divided", "남성", "신생아/유아", "아동", "H&M Home", "Sale", "지속가능성"]
  const navigate = useNavigate();

  const search = (e) => {
    if (e.key === "Enter") {
      navigate(`/?q=${e.target.value}`);
    }
  }

  return (
    <div>
      <div className="login-button" onClick={() => navigate("/login")}>
        <FontAwesomeIcon icon={faUser} />
        <div>로그인</div>
      </div>

      <div className="nav-section">
        <img width={100} height={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/800px-H%26M-Logo.svg.png" />
      </div>
      
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
        
        <div className="search-area">
          <input 
            className="search-input" 
            type="text" 
            placeholder="제품검색" 
            onKeyUp={search}
          />
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
    </div>
  )
}

export default Navbar