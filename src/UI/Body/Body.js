import classes from "../Body/Body.module.css";
function Body() {
  return (
    <main>
      <div className={classes.body}>
        <div className={classes.bar1}>
          <div className={classes.Favorite}>
            <div className={classes.titleFavorite}>Tuyến đường phổ biến</div>
            <br />
            <div className={classes.partFavorite}>
              <div className={classes.Favorite1}>
                <div>
                  <img
                    className={classes.logoFavorite1}
                    src={require("../../image/favorite1.png")}
                    alt=""
                  />
                </div>
                <div className={classes.themeFavorite1}>
                  <div className={classes.titleFavorite1}>Sài Gòn - Đà Lạt</div>
                  <div className={classes.discountFavorite1}>
                    Từ 130.000đ
                    <div>&nbsp;</div>
                    <div className={classes.costFavorite1}>260.000đ</div>
                  </div>
                </div>
              </div>
              <div className={classes.Favorite2}>
                <div>
                  <img
                    className={classes.logoFavorite2}
                    src={require("../../image/favorite2.png")}
                    alt=""
                  />
                </div>
                <div className={classes.themeFavorite2}>
                  <div className={classes.titleFavorite2}>
                    Sài Gòn - Nha Trang
                  </div>
                  <div className={classes.discountFavorite2}>
                    Từ 130.000đ
                    <div>&nbsp;</div>
                    <div className={classes.costFavorite2}>260.000đ</div>
                  </div>
                </div>
              </div>
              <div className={classes.Favorite3}>
                <div>
                  <img
                    className={classes.logoFavorite3}
                    src={require("../../image/favorite3.png")}
                    alt=""
                  />
                </div>
                <div className={classes.themeFavorite3}>
                  <div className={classes.titleFavorite3}>
                    Sài Gòn - Phan Thiết
                  </div>
                  <div className={classes.discountFavorite3}>
                    Từ 90.000đ
                    <div>&nbsp;</div>
                    <div className={classes.costFavorite3}>180.000đ</div>
                  </div>
                </div>
              </div>
              <div className={classes.Favorite4}>
                <div>
                  <img
                    className={classes.logoFavorite4}
                    src={require("../../image/favorite4.png")}
                    alt=""
                  />
                </div>
                <div className={classes.themeFavorite4}>
                  <div className={classes.titleFavorite4}>
                    Nha Trang - Sài Gòn
                  </div>
                  <div className={classes.discountFavorite4}>Từ 230.000đ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className={classes.bar2}></div>
        <br />
        <div className={classes.bar3}></div>
        <br />
        <div className={classes.bar4}></div>
        <br />
        <div className={classes.bar5}></div>
        <br />
        <div className={classes.bar6}></div>
        <br />
        <div className={classes.bar7}></div>
        <br />
        <div className={classes.bar8}></div>
        <br />
        <div className={classes.bar9}></div>
      </div>
    </main>
  );
}

export default Body;
