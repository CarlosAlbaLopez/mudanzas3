/* eslint-disable jsx-a11y/anchor-has-content */
import "./css/Header.css";
import Navigation from "./Navigation";
import NavBar from "./NavBar";

export default function Header() {
  let screenRes = window.innerWidth;
  return (
    <>
      <a id="linktohome" href></a>
      <div className="header-container">
        <img src="logo-completo.png" alt="logo" className="header-img"></img>
        {screenRes >= 1330 && <Navigation></Navigation>}
        {screenRes < 1330 && <NavBar></NavBar>}
      </div>
    </>
  );
}
