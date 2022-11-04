import classes from "../Header/Header.module.css";

function Header() {
  return (
    <main>
      <div className={classes.header}>
        <div className={classes.bar}>
          <div className={classes.bar_left}>
            <img
              className={classes.logo}
              src={require("../../image/logo.png")}
              alt=""
            />
            <div>StarGrab</div>
          </div>
          <div className={classes.bar_right}>
            <div className={classes.div1}>Thuê xe</div>
            <div className={classes.div2}>Quản lý đơn hàng</div>
            <div>Trở thành đối tác</div>
            <div className={classes.contact}>
              <img
                className={classes.logo1}
                src={require("../../image/contact.png")}
                alt=""
              />
              <div className={classes.hotline}>Hotline</div>
            </div>
            <div className={classes.telephone}>
              <img
                className={classes.logo1}
                src={require("../../image/login.png")}
                alt=""
              />
              <div className={classes.login}>Đăng nhập</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Header;
