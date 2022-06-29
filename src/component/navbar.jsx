import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Navbar = ({ auth, setAuth }) => {
  const navigate = useNavigate();
  const menuList = [
    "여성",
    "남성",
    "아동",
    "신생아/유아",
    "Sale",
    "H&M HOME",
    "지속가능성",
  ];
  const goToLogin = () => {
    navigate("/login");
  };
  const goToHome = () => {
    navigate("/");
  };
  const search = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;
      console.log(keyword);
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div>
      {auth ? (
        <div className="login-area" onClick={() => setAuth(false)}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그아웃</div>
        </div>
      ) : (
        <div className="login-area" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      )}

      <div className="logo-area">
        <img
          onClick={goToHome}
          width={100}
          src="data:image/png;base64,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"
        />
      </div>
      <div>
        <ul className="menu-list">
          {menuList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="search-area">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="상품 검색"
            onKeyPress={search}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
