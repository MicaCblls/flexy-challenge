import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.imgContainer}>
        <img src="/flexy.png" alt="Flexy" />
      </div>
    </header>
  );
};

export default Header;
