import Title from "/images/logo.svg"
import "./Header.css";
function Header() {
    return (
        <header className="header">
            <h1 className="header-h1" aria-label="page-title : Spliter">
                <img className="header-image" src={Title} alt="Title" />
            </h1>
        </header>
      );
}

export default Header;