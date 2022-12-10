import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [userToggled, setUserToggled] = useState(false);

  if (
    window.location.pathname === "/Login" ||
    window.location.pathname === "/Signup"
  )
    return null;

  return (
    <HeaderBox isToggled={isToggled} userToggled={userToggled}>
      <div
        className="toggle"
        onClick={() => {
          setIsToggled(!isToggled);
        }}
      >
        <FontAwesomeIcon icon={!isToggled ? faBars : faTimes} />
      </div>

      <a href="/">
        <img className="logo" src="./logo.png" alt="logo" />
      </a>
      <div
        className="user"
        onClick={() => {
          setUserToggled(!userToggled);
        }}
      >
        <FontAwesomeIcon icon={!userToggled ? faUser : faTimes} />
      </div>

      <ul className="header__menulist">
        <li>
          <a href="/Movies">Movies</a>
        </li>
        <li>
          <a href="/Actors">Actors</a>
        </li>
        <li>
          <a href="/Directors">Directors</a>
        </li>
        <li>
          <a href="/Recommends">Recommends</a>
        </li>
      </ul>

      <ul className="header__right">
        <li>
          <a href="/Login">Login</a>
        </li>
        <li>
          <a href="/Signup">Register</a>
        </li>
      </ul>
    </HeaderBox>
  );
};

export default Header;

const HeaderBox = styled.div`
  max-width: 100%;
  position: fixed;
  width: 100%;
  height: 80px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: black;
  z-index: 10;

  .logo {
    width: 125px;
    object-fit: scale-down;
  }

  .header__menulist {
    list-style: none;
    display: flex;
    padding-top: 15px;
  }

  .header__left {
    display: flex;
  }

  a {
    text-decoration: none;
    color: white;

    &:hover {
      color: skyblue;
    }
  }

  li {
    padding: 0 1rem;
  }

  .header__right {
    list-style: none;
    display: flex;
    padding-top: 15px;
  }

  .header__right div {
    marigin: 0 1rem;
  }

  .toggle {
    display: none;
    font-size: 1.5rem;
    padding: 1rem 1rem;

    &:hover {
      cursor: pointer;
      color: skyblue;
    }
  }

  .user {
    display: none;
    font-size: 1.5rem;
    padding: 1rem 1rem;

    &:hover {
      cursor: pointer;
      color: skyblue;
    }
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    .header__right {
      display: ${(props) => (props.userToggled ? "flex" : "none")};
      flex-direction: column;
      width: 100%;
      background-color: black;
    }

    .header__menulist {
      display: ${(props) => (props.isToggled ? "flex" : "none")};
      flex-direction: column;
      width: 100%;
      background-color: black;
    }

    .header__menulist li,
    .header__right li {
      margin: 1rem 0;
      padding: 0;
    }

    .toggle {
      display: block;
    }

    .user {
      display: block;
    }
  }
`;
