import classes from "../Footer/Footer.module.css";
function Footer() {
  return (
    <main>
      <div className={classes.body}>
        <div className={classes.bar1}>
          <div className={classes.News}>
            <div className={classes.titleNews}>Tin tức</div>
            <div>Xe giường nằm Limousine: đỉnh cao mới của ngành xe khách</div>
            <div>
              Xe limousine đi Vũng Tàu: Tổng hợp top 6 xe chất lượng cao
            </div>
            <div>Review xe limousine đi Đà Lạt: những câu hỏi thường gặp</div>
            <div>
              Xe limousine đi Sapa: Tổng hợp top các hãng xe chất lượng cao
            </div>
          </div>

          <div className={classes.Route}>
            <div className={classes.titleRoute}>Tuyến đường</div>
            <div>Xe đi Buôn Mê Thuột từ Sài Gòn</div>
            <div>Xe đi Vũng Tàu từ Sài Gòn</div>
            <div>Xe đi Nha Trang từ Sài Gòn</div>
            <div>Xe đi Đà Lạt từ Sài Gòn</div>
            <div>Xe đi Sapa từ Hà Nội</div>
            <div>Xe đi Hải Phòng từ Hà Nội</div>
            <div>Xe đi Vinh từ Hà Nội</div>
          </div>

          <div className={classes.Limousine}>
            <div className={classes.titleLimousine}>Tuyến đường</div>
            <div>Xe Limousine đi Đà Lạt từ Sài Gòn</div>
            <div>Xe Limousine đi Vũng Tàu từ Sài Gòn</div>
            <div>Xe Limousine đi Nha Trang từ Sài Gòn</div>
            <div>Xe Limousine đi Hải Phòng từ Hà Nội</div>
            <div>Xe Limousine đi Hạ Long từ Hà Nội</div>
            <div>Xe Limousine đi Sapa Từ Hà Nội</div>
            <div>Xe Limousine đi Quảng Ninh từ Hà Nội</div>
          </div>
        </div>
        <div className={classes.bar2}>
          <div className={classes.Station}>
            <div className={classes.titleStation}>Bến xe</div>
            <div>Bến xe Miền Đông</div>
            <div>Bến xe Trung tâm Đà Nẵng</div>
            <div>Bến xe Gia Lâm</div>
            <div>Bến xe Mỹ Đình</div>
            <div>Bến xe An Sương</div>
            <div>Bến xe Nước Ngầm</div>
            <div>Bến xe Miền Tây</div>
          </div>

          <div className={classes.Station}>
            <div className={classes.titleStation}>Nhà xe</div>
            <div>Xe Sao Việt</div>
            <div>Xe Taxi Hoa Mai</div>
            <div>Xe Hạ Long Travel</div>
            <div>Xe Quốc Đạt</div>
            <div>Xe Thanh Bình Xanh</div>
            <div>Xe Thiện Thành limousine</div>
            <div>Xe Hồng Sơn Phú Yên</div>
            <div>Xe Tiến Oanh</div>
          </div>

          <div className={classes.Station1}>
            <div className={classes.titleStation1}></div>
            <div>Xe Hải Âu</div>
            <div>Xe Queen Cafe</div>
            <div>Xe Hưng Long</div>
            <div>Xe Xuân Tráng Limousine</div>
            <div>Xe Nam Á Châu</div>
            <div>Xe Khanh Phong</div>
            <div>Xe An Anh (Quê Hương)</div>
            <div>Xe Minh Quốc</div>
          </div>

          <div className={classes.Station2}>
            <div className={classes.titleStation2}></div>
            <div>Xe Văn Minh</div>
            <div>Xe Quang Nghị</div>
            <div>Xe Xuân Trường</div>
            <div>Xe Hạnh Cafe</div>
            <div>Xe Trọng Minh</div>
            <div>Xe Ngọc Ánh Sài Gòn</div>
            <div>Xe Hoa Mai</div>
            <div>Xe Thuận Tiến</div>
          </div>
        </div>
        <div className={classes.bar3}>
          <div className={classes.About}>
            <div className={classes.titleAbout}>Về chúng tôi</div>
            <div>Phần mềm đại lý</div>
            <div>Giới Thiệu GrabStar.com</div>
            <div>Tuyển dụng</div>
            <div>Tin tức</div>
            <div>Liên hệ</div>
          </div>

          <div className={classes.Support}>
            <div className={classes.titleSupport}>Hỗ trợ</div>
            <div>Hướng dẫn thanh toán</div>
            <div>Quy chế GrabStar.com</div>
            <div>Chính sách bảo mật thông tin</div>
            <div>Chính sách bảo vệ thanh toán</div>
            <div>Chính sách và quy trình giải quyết tranh chấp, khiếu nại</div>
            <div>Câu hỏi thường gặp</div>
            <div>Tra cứu đơn hàng</div>
          </div>
        </div>
        <div className={classes.bar4}></div>
      </div>
    </main>
  );
}

export default Footer;
