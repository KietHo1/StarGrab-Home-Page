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
        <div className={classes.bar2}>
          <div className={classes.Outstanding}>
            <div className={classes.titleOutstanding}>Ưu đãi nổi bật</div>
            <br />
            <div className={classes.partOutstanding}>
              <div className={classes.Outstanding1}>
                <div>
                  <img
                    className={classes.logoOutstanding1}
                    src={require("../../image/Outstanding1.jpg")}
                    alt=""
                  />
                </div>
                <div className={classes.themeOutstanding1}>
                  <div className={classes.titleOutstanding1}>
                    Chọn Vé Xe Rẻ, về ngay với mẹ
                  </div>
                </div>
              </div>
              <div className={classes.Outstanding2}>
                <div>
                  <img
                    className={classes.logoOutstanding2}
                    src={require("../../image/Outstanding2.png")}
                    alt=""
                  />
                </div>
                <div className={classes.themeOutstanding2}>
                  <div className={classes.titleOutstanding2}>
                    <div>Tổng hợp chương trình khuyến</div>
                    <div>mãi trong tháng</div>
                  </div>
                </div>
              </div>
              <div className={classes.Outstanding3}>
                <div>
                  <img
                    className={classes.logoOutstanding3}
                    src={require("../../image/Outstanding3.png")}
                    alt=""
                  />
                </div>
                <div className={classes.themeOutstanding3}>
                  <div className={classes.titleOutstanding3}>
                    Ưu đãi bất ngờ khi đặt StarGrab
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className={classes.bar3}>
          <div className={classes.Partner}>
            <div className={classes.titlePartner}>
              Ưu đãi từ đối tác của StarGrab
            </div>
            <br />
            <div className={classes.partPartner}>
              <div className={classes.Partner1}>
                <div>
                  <img
                    className={classes.logoPartner1}
                    src={require("../../image/Partner1.jpg")}
                    alt=""
                  />
                </div>
                <div className={classes.themePartner1}>
                  <div className={classes.titlePartner1}>
                    <div>Giảm 10% tối đa 30K khi</div>
                    <div>thanh toán tại ví VNPay</div>
                  </div>
                </div>
              </div>
              <div className={classes.Partner2}>
                <div>
                  <img
                    className={classes.logoPartner2}
                    src={require("../../image/Partner2.jpg")}
                    alt=""
                  />
                </div>
                <div className={classes.themePartner2}>
                  <div className={classes.titlePartner2}>
                    <div>Giảm 50K cho đơn 250K khi</div>
                    <div>thanh toán bằng thẻ tín dụng</div>
                    <div>VPBank</div>
                  </div>
                </div>
              </div>
              <div className={classes.Partner3}>
                <div>
                  <img
                    className={classes.logoPartner3}
                    src={require("../../image/Partner3.png")}
                    alt=""
                  />
                </div>
                <div className={classes.themePartner3}>
                  <div className={classes.titlePartner3}>
                    <div>Nhận ưu đãi StarGrab lên đến</div>
                    <div>100K khi đăng ký mở tài</div>
                    <div>khoản OCB OMNI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className={classes.bar4}>
          <div className={classes.Service}>
            <div className={classes.titleService}>Dịch vụ nổi bật</div>
            <br />
            <div className={classes.partService}>
              <div className={classes.Service1}>
                <div>
                  <img
                    className={classes.logoService1}
                    src={require("../../image/Service1.png")}
                    alt=""
                  />
                </div>
                <div className={classes.themeService1}>
                  <div className={classes.titleService1}>
                    <div>Dịch vụ thuê xe tại StarGrab</div>
                  </div>
                </div>
              </div>
              <div className={classes.Service2}>
                <div>
                  <img
                    className={classes.logoService2}
                    src={require("../../image/Service2.png")}
                    alt=""
                  />
                </div>
                <div className={classes.themeService2}>
                  <div className={classes.titleService2}>
                    <div>Thuê xe máy Đà Lạt giá rẻ,</div>
                    <div>chất lượng tại StarGrab</div>
                  </div>
                </div>
              </div>
              <div className={classes.Service3}>
                <div>
                  <img
                    className={classes.logoService3}
                    src={require("../../image/Service3.png")}
                    alt=""
                  />
                </div>
                <div className={classes.themeService3}>
                  <div className={classes.titleService3}>
                    <div>Vé xe buýt Hop On Hop Off ở</div>
                    <div>Thành phố Hồ Chí Minh</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className={classes.bar5}>
          <div className={classes.Garage}>
            <div className={classes.titleGarage}>Dành cho Đối tác Nhà xe</div>
            <br />
            <div className={classes.partGarage}>
              <div className={classes.Garage1}>
                <div>
                  <img
                    className={classes.logoGarage1}
                    src={require("../../image/Garage1.png")}
                    alt=""
                  />
                </div>
                <div className={classes.themeGarage1}>
                  <div className={classes.titleGarage1}>
                    <div>Lợi ích khi sử dụng vé điện tử</div>
                    <div>cung cấp bởi StarGrab</div>
                  </div>
                </div>
              </div>
              <div className={classes.Garage2}>
                <div>
                  <img
                    className={classes.logoGarage2}
                    src={require("../../image/Garage2.png")}
                    alt=""
                  />
                </div>
                <div className={classes.themeGarage2}>
                  <div className={classes.titleGarage2}>
                    <div>Đăng ký mở bán vé tại</div>
                    <div>StarGrab.com</div>
                  </div>
                </div>
              </div>
              <div className={classes.Garage3}>
                <div>
                  <img
                    className={classes.logoGarage3}
                    src={require("../../image/Garage3.png")}
                    alt=""
                  />
                </div>
                <div className={classes.themeGarage3}>
                  <div className={classes.titleGarage3}>
                    <div>Ứng dụng Quản lý nhà xe của</div>
                    <div>StarGrab</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className={classes.bar6}>
          <div className={classes.News}>
            <div className={classes.titleNews}>Tin tức</div>
            <br />
            <div className={classes.partNews}>
              <div className={classes.News1}>
                <div>
                  <img
                    className={classes.logoNews1}
                    src={require("../../image/News1.png")}
                    alt=""
                  />
                </div>
                <div className={classes.themeNews1}>
                  <div className={classes.titleNews1}>
                    <div>Bộ Thông tin - Truyền thông</div>
                    <div>công nhận StarGrab là Nền tảng</div>
                    <div>số phục vụ người dân 2022</div>
                  </div>
                </div>
              </div>
              <div className={classes.News2}>
                <div>
                  <img
                    className={classes.logoNews2}
                    src={require("../../image/News2.png")}
                    alt=""
                  />
                </div>
                <div className={classes.themeNews2}>
                  <div className={classes.titleNews2}>
                    <div>[Phóng sự VTV9] Đặt vé xe</div>
                    <div>khách nhanh chóng, tiện lợi,</div>
                    <div>nhiều ưu đãi tại StarGrab</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className={classes.bar7}>
          <div className={classes.Connect}>
            <div className={classes.titleConnect}>
              Nền tảng kết nối người dùng và nhà xe
            </div>
            <br />
            <div className={classes.partConnect}>
              <div className={classes.Connect1}>
                <div className={classes.themeConnect1}>
                  <div>
                    <img
                      className={classes.logoConnect1}
                      src={require("../../image/Connect1.png")}
                      alt=""
                    />
                  </div>
                  <div>
                    <p>2000+ nhà xe chất lượng cao</p>
                    <p>
                      5000+ tuyến đường trên toàn quốc, chủ động và đa dạng lựa
                      chọn.
                    </p>
                  </div>
                </div>
              </div>

              <div className={classes.Connect2}>
                <div className={classes.themeConnect2}>
                  <div>
                    <img
                      className={classes.logoConnect2}
                      src={require("../../image/Connect2.png")}
                      alt=""
                    />
                  </div>
                  <div>
                    <p>Đặt vé dễ dàng</p>
                    <p>
                      Đặt vé chỉ với 60s. Chọn xe yêu thích cực nhanh và thuận
                      tiện.
                    </p>
                  </div>
                </div>
              </div>

              <div className={classes.Connect3}>
                <div className={classes.themeConnect3}>
                  <div>
                    <img
                      className={classes.logoConnect3}
                      src={require("../../image/Connect3.png")}
                      alt=""
                    />
                  </div>
                  <div>
                    <p>Đảm bảo có vé</p>
                    <p>
                      Hoàn ngay 150% nếu không có vé, mang đến hành trình trọn
                      vẹn.
                    </p>
                  </div>
                </div>
              </div>

              <div className={classes.Connect4}>
                <div className={classes.themeConnect4}>
                  <div>
                    <img
                      className={classes.logoConnect4}
                      src={require("../../image/Connect4.png")}
                      alt=""
                    />
                  </div>
                  <div>
                    <p>Nhiều ưu đãi</p>
                    <p>Hàng ngàn ưu đãi cực chất độc quyền tại VeXeRe.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className={classes.bar8}></div>
        <br />
        <div className={classes.bar9}></div>
      </div>
    </main>
  );
}

export default Body;
