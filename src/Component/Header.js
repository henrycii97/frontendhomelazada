import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="header item-1">
        <div className="header-content ">
          <div className="link-all-header">
            <ul className="link-header container-full">
              <li className="app"><span>TIẾT KIỆM HƠN VỚI ỨNG DỤNG</span></li>
              <li className="sales-together"><a href>BÁN HÀNG CÙNG LAZADA</a></li>
              <li className="customer-carer"><span>CHĂM SÓC KHÁCH HÀNG</span></li>
              <li className="order-check"><span>KIỂM TRA ĐƠN HÀNG</span></li>
              <li className="login"><a href>ĐĂNG NHẬP</a></li>
              <li className="signup"><a href>ĐĂNG KÝ</a></li>
              <li className="language"><span>CHANGE LANGUAGE</span></li>
            </ul>
          </div>
          {/* end link-header */}
          <div className="content-link-header">
            <div className="content-app-all">
              <h2>Tải ứng dụng để có trải nghiệm tốt nhất</h2>
              <div className="content-app">
                <div className="qr"><img src="images/qr.png" alt="" /></div>  
                <div className="text-app">
                  <a href> Mua sắm thông qua ứng <br /> dụng của chúng tôi để được:</a>
                  <ul>
                    <li><a href> Voucher độc quyền</a></li>
                    <li><a href> Deal tốt hơn</a></li>
                    <li><a href> Các khuyến mãi chỉ dành cho bạn</a></li>
                    <li><a href>  Luôn cập nhật đầu tiên </a></li>
                  </ul>
                </div>
              </div>
              <div className="type-app">
                <input type="text" placeholder="eg.0123456789" />
                <div className="icon-type">
                  <ion-icon name="chevron-forward-outline" />
                </div>
              </div>
              <div className="app-img">
                <a href><img src="images/ios.png" alt="" /></a>
                <a href><img src="images/androi.png" alt="" /></a>
              </div>
            </div> 
            {/* end-app */}
            <div className="customer-care mp">
              <div className="content-customer">
                <div className="icon-customer"><ion-icon name="person-circle-outline" /></div>
                <div className="text-customer"><a href>Trung tâm hỗ trợ</a></div>
              </div> 
              <div className="content-customer">
                <div className="icon-customer"><ion-icon name="card-outline" /></div>
                <div className="text-customer"><a href>Đơn hàng &amp; thanh toán</a></div>
              </div> 
              <div className="content-customer">
                <div className="icon-customer"> <i className="fas fa-shipping-fast" /></div>
                <div className="text-customer"><a href>Giao hàng &amp; nhận hàng</a></div>
              </div> 
              <div className="content-customer">
                <div className="icon-customer"><i className="fas fa-box-open" /></div>
                <div className="text-customer"><a href>Đổi trả hàng &amp; Hoàn tiền</a></div>
              </div> 
              <div className="content-customer">
                <div className="icon-customer"><ion-icon name="person-circle-outline" /></div>
                <div className="text-customer"><a href>Liên hệ với lazada</a></div>
              </div> 
            </div>  
            {/* end customer */}
            <div className="content-order-check">
              <h2> Kiểm tra đơn hàng</h2>
              <div className="enter-order-check">
                <div className="enter-address">
                  <div className="title-ars">Vui lòng nhập địa chỉ email:</div> 
                  <input type="text" />
                </div>
                <div className="tenter-item-code">
                  <div className="title-icode">Vui lòng nhập mã đơn hàng:</div> 
                  <div className="type-order">
                    <input type="text" placeholder="eg.0123456789" />
                    <div className="icon-order">
                      <ion-icon name="chevron-forward-outline" />
                    </div>
                  </div>
                </div>
                <div className="click-pleale">
                  Nếu bạn có thắc mắc nào khác,<a href> Nhấn <br /> vào đây</a>
                </div>
              </div>
            </div>
            {/* end order-check */}
            <div className="content-link-language">
              <div className="content-language">
                <img src alt="" />
                <div className="text-language">VN/ <br /> Vietnamese </div>
              </div>
              <div className="content-language">
                <img src alt="" />
                <div className="text-language">EN/ <br /> English </div>
              </div>
            </div>
            {/* end language */}
          </div>
        </div>
        <div className="navbar item-1">
          <div className="nav-bar-menu  container-full">
            <a href><div className="logo">
                <img src="images/logolazada.png" alt="" />
              </div>
            </a> 
            <div className="search-all">
              <input type="text" placeholder="Tìm kiếm trên lazada" />
              <a href><div className="icon-search">
                  <ion-icon name="search-outline" />
                </div>
              </a>
            </div>
            <a href> <div className="cart">
                <ion-icon name="cart-outline" />
              </div>
            </a>
            <a href> <div className="sale-bar">
                <img src="images/sale-bar.png" alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
        )
    }
}
