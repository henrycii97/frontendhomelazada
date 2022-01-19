import React, { Component } from 'react'

export default class PartnersContacts extends Component {
    render() {
        return (
            <div className="partners-contacts">
            <div className="content-partners-contacts">
              <div className="img-partners-contacts">
                <img src="images/nganhangvadoitac.png" alt="" className="Bank" />
                <img src="images/techcombank.png" alt="" className="techcombank" />
                <img src="images/lazada-platinum.png" alt="" className="lazada-platinum" />
              </div>
              <div className="contact-information-lazada">
                <div className="contact-lazada">
                  <div className="title-contact-lazada">
                    LIÊN HỆ VỚI LAZADA
                  </div>
                  <ul className="contact-lazada">
                    <li><a href>Hotline &amp; Chat trực tuyến (24/7)</a></li>
                    <li><a href>Trung tâm hỗ trợ</a></li>
                    <li><a href>Hướng dẫn đặt hàng</a></li>
                    <li><a href>Giao hàng &amp; Nhận hàng</a></li>
                    <li><a href>Chính sách hàng nhập khẩu</a></li>
                    <li><a href>Hướng dẫn đổi trả hàng</a></li>
                  </ul>
                </div>
                <div className="lazada-vietnam">
                  <div className="title-lazada-vietnam">
                    LAZADA VIỆT NAM
                  </div>
                  <ul className="lazada-vietnam">
                    <li><a href>Về Lazada Việt Nam</a></li>
                    <li><a href>Bán hàng cùng Lazada</a></li>
                    <li><a href>Chương trình Lazada Afﬁliate</a></li>
                    <li><a href>Tuyển dụng</a></li>
                    <li><a href>Điều khoản sử dụng</a></li>
                    <li><a href>Chính sách bảo mật</a></li>
                    <li><a href>Báo chí</a></li>
                    <li><a href>
                        Bảo vệ quyền sở hữu trí tuệ</a></li>
                    <li><a href>Quy chế hoạt động sàn Lazada</a></li>
                    <li><a href>Quy trình giải quyết tranh chấp, khiếu nại</a></li>
                  </ul>
                </div>
                <div className="download-lazada-app">
                  <div className="app-lazada-vn">
                    <span className="img-logo-laz-vn">
                      <img src="images/lazada-logo.png" alt="" />
                    </span>
                    <span className="title-app-laz-vn">
                      <div className="title-laz-vn">Go where your heart beats</div>
                      <div className="text-laz-vn">Tải App Lazada</div>
                    </span>
                    <span className="img-app-laz-vn">
                      <a href><img src="images/appstore2.png" alt="" className="app-laz" /></a>
                      <a href> <img src="images/androi2.png" alt="" /></a>
                    </span>
                  </div>
                  <div className="company">
                    CÔNG TY TNHH RECESS <br />
                    Giấy CNĐKDN: 0308808576 – Ngày cấp: 06/5/2009, được sửa đổi lần thứ 19 ngày 15/8/2019. <br />
                    Cơ quan cấp: Phòng Đăng ký kinh doanh – Sở kế hoạch và Đầu tư TP.HCM <br />
                    Địa chỉ đăng ký kinh doanh: Tầng 19, Tòa nhà Saigon Centre – Tháp 2, 67 Lê Lợi, Phường Bến Nghé, Quận 1, Tp. <br />
                    Hồ Chí Minh, Việt Nam
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
