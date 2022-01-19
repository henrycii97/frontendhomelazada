import React, { Component } from 'react'

export default class SlideBanner extends Component {
    render() {
        return (
            <div className="slide-banner-laz item-1">
        <header className="slide_banner_top item-1">
          <div className="slides">
            <div className="slide  active" style={{backgroundColor: '#0515c3'}}>
              <a href><div className="bg-slide" style={{backgroundImage: 'url("images/slide1.jpg")'}} /></a>
            </div>
            <div className="slide" style={{backgroundColor: '#0073ff'}}>
              <a href><div className="bg-slide" style={{backgroundImage: 'url("images/slide2.jpg")'}} /></a>
            </div>
            <div className="slide" style={{backgroundColor: '#ff0052'}}>
              <a href><div className="bg-slide" style={{backgroundImage: 'url("images/slide3.jpg")'}} /></a>
            </div>
            <div className="slide" style={{backgroundColor: '#02b36b'}}>
              <a href> <div className="bg-slide" style={{backgroundImage: 'url("images/slide4.jpg")'}} /></a>
            </div>
            <div className="slide" style={{backgroundColor: '#c71110'}}>
              <a href>  <div className="bg-slide" style={{backgroundImage: 'url("images/slide5.jpg")'}} /></a>
            </div>
            <div className="slide" style={{backgroundColor: '#dd0000'}}>
              <a href> <div className="bg-slide" style={{backgroundImage: 'url("images/slide6.jpg")'}} /></a>
            </div>
            <div className="slide" style={{backgroundColor: '#ffa401'}}>
              <a href> <div className="bg-slide" style={{backgroundImage: 'url("images/slide7.jpg")'}} /></a>
            </div>
            <div className="slide" style={{backgroundColor: '#ff009a'}}>
              <a href> <div className="bg-slide" style={{backgroundImage: 'url("images/slide8.jpg")'}} /></a>
            </div>
            <div className="slide" style={{backgroundColor: '#0199fe'}}>
              <a href><div className="bg-slide" style={{backgroundImage: 'url("images/slide9.jpg")'}} /></a>
            </div>
            <div className="slide" style={{backgroundColor: '#ff4960'}}>
              <a href><div className="bg-slide" style={{backgroundImage: 'url("images/slide10.jpg")'}} /></a>
            </div>
            <div className="slide" style={{backgroundColor: '#ff475f'}}>
              <a href><div className="bg-slide" style={{backgroundImage: 'url("images/slide11.jpg")'}} /></a>
            </div>
            <div className="slide" style={{backgroundColor: '#ba24ff'}}>
              <a href> <div className="bg-slide" style={{backgroundImage: 'url("images/slide12.jpg")'}} /></a>
            </div>
          </div>
          <div className="button">
            <div className="next" style={{display: 'none'}}><ion-icon name="chevron-forward-outline" /></div>
            <div className="prev" style={{display: 'none'}}><ion-icon name="chevron-back-outline" /></div>
          </div>
          <div className="button-center">
            <ul>
              <li className="active_button">1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>10</li>
              <li>11</li>
              <li>12</li>
            </ul>
          </div>
        </header>
        <div className="menu-laz">
          <div className="category-laz">
            <div className="categorys-title">
              Danh mục 
              <span className="ionic-cts">
                <ion-icon name="chevron-down-outline" />
              </span>
            </div>
            <div className="categorys-1">
              <ul>
                <li className="electronic-device">
                  <a href>
                    <span>
                      Thiết Bị Điện Tử
                    </span>
                    <div className="icon-nav">
                      <ion-icon name="chevron-forward-outline" />
                    </div>
                  </a>
                  <div className="catetory-2 electronic-device-item">
                    <ul>
                      <li>
                        <a href>Điện thoại di động </a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                      </li>
                      <li>
                        <a href>Máy tính bảng</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                      </li>
                      <li className="laptop">
                        <a href>laptop</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 laptop-item">
                          <ul>
                            <li><a href>Laptop cơ bản </a></li>
                            <li><a href>Laptop chơi game </a></li>
                            <li><a href>Dòng 2 trong 1</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Desktop-computer">
                        <a href>Máy tính để bàn</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Desktop-computer-item">
                          <ul>
                            <li><a href>Máy tính nguyên bộ </a></li>
                            <li><a href>Máy tính để bàn chơi game</a></li>
                            <li><a href>Máy tính tự ráp</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Sound">
                        <a href>Âm thanh</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3  Sound-item">
                          <ul>
                            <li><a href>Các loại tại nghe</a></li>
                            <li><a href>Loa di động </a></li>
                            <li><a href>Âm thanh tại nhà</a></li>
                            <li><a href>Thiết bị Audio chuyên nghiệp </a></li>
                            <li><a href>Thiệt bị DJ</a></li>
                            <li><a href>Máy đọc đĩa than</a></li>
                            <li><a href>Phụ kiện tai nghe</a></li>
                            <li><a href>Phụ kiện loa di động </a></li>
                            <li><a href>Phụ kiện âm thanh tại nhà</a></li>
                            <li><a href>Phụ kiện âm thanh chuyên nghiệp </a></li>
                            <li><a href>Thiết bị âm thanh di động </a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Surveillance-camera">
                        <a href>Camera giám sát</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Surveillance-camera-item">
                          <ul>
                            <li><a href>Camera IP kết nối internet</a></li>
                            <li><a href>Camera an ninh CCTV</a></li>
                            <li><a href>Hệ thống an ninh IP</a></li>
                            <li><a href>Hệ thống an ninh CCTV</a></li>
                            <li><a href>Camera chống chộm</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Digital-camera">
                        <a href>Máy ảnh kỹ thuật số</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Digital-camera-item">
                          <ul>
                            <li><a href>Máy ảnh DSLR</a></li>
                            <li><a href>Máy ảnh không gương lật</a></li>
                            <li><a href>Máy ảnh du lịch </a></li>
                            <li><a href>Máy ảnh siêu zoom</a></li>
                            <li><a href>Máy bay camera</a></li>
                            <li><a href>Máy chụp lấy ngay &amp; phụ kiện</a></li>
                            <li><a href>Ống kính</a></li>
                            <li><a href>Ống nhòm </a></li>
                            <li><a href>Các loại máy ảnh khác, Phụ kiện, Camera Mini không dây Joshe live</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Camcorders-Video-Cameras">
                        <a href>Máy quay phim &amp; Máy quay</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Camcorders-Video-Cameras-item">
                          <ul>
                            <li><a href>Camera thể thao &amp; Hành động </a></li>
                            <li><a href>Máy quay phim</a></li>
                            <li><a href>Máy quay phim chuyên nghiệp </a></li>
                            <li><a href>Camera 360 </a></li>
                            <li><a href>Máy quay dưới nước</a></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href>Màn hình vi tính</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                      </li>
                      <li className="Printer">
                        <a href>Máy in</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Printer-item">
                          <ul>
                            <li><a href>Máy in</a></li>
                            <li><a href>Máy Scan</a></li>
                            <li><a href>Máy fax</a></li>
                            <li><a href>Máy in 3D</a></li>
                            <li><a href>Mực máy in</a></li>
                            <li><a href>Bộ nhớ máy in</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Smart-watch">
                        <a href>Đồng hồ thông minh</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Smart-watch-item">
                          <ul>
                            <li><a href>Đồng hồ thông minh</a></li>
                            <li><a href>Đồng hồ thông minh trẻ em</a></li>
                            <li><a href>Đồng hồ thông minh thiết kế</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Game-machine">
                        <a href>Máy chơi game</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Game-machine-item">
                          <ul>
                            <li><a href>Máy chơi game</a></li>
                            <li><a href>Trò chơi máy console</a></li>
                            <li><a href>Tay nghe chơi game</a></li>
                            <li><a href>Ốp lưng &amp; Bao da máy tính bảng</a></li>
                            <li><a href>Miếng dán màn hình điện thoại</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* end catetory-2 */}
                </li>
                <li className="electronic-accessories"> <a href>
                    <span>Phụ Kiện Điện Tử</span>
                    <div className="icon-nav">
                      <ion-icon name="chevron-forward-outline" />
                    </div>
                  </a>
                  <div className="catetory-2 electronic-accessories-item">
                    <ul>
                      <li className="Mobile-accessories">
                        <a href>Phụ kiện di động </a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Mobile-accessories-item">
                          <ul>
                            <li><a href>Pin sạc dự phòng </a></li>
                            <li><a href>Cáp &amp; Dock sạc </a></li>
                            <li><a href>Bộ sạc có dây</a></li>
                            <li><a href>Bộ sạc không dây </a></li>
                            <li><a href>Ốp lưng &amp; Bao da điện thoại</a></li>
                            <li><a href>Ốp lưng &amp; Bao da máy tính bảng </a></li>
                            <li><a href>Miếng dán màn hình điện thoại </a></li>
                            <li><a href>Gậy chụp ảnh</a></li>
                            <li><a href>Sạc trên xe hơi</a></li>
                            <li><a href>Sim &amp; Thẻ cào</a></li>
                            <li><a href>Dock sạc &amp; Giá đỡ</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Smart-device">
                        <a href>Thiết bị thông minh</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Smart-device-item">
                          <ul>
                            <li><a href>Đồng hồ thông minh và phụ kiện</a></li>
                            <li><a href>Thiết bị theo dõi vận động &amp; Phụ kiện</a></li>
                            <li><a href>Loa thông minh</a></li>
                            <li><a href>Công tắc thông minh </a></li>
                            <li><a href>Mắt kính thông minh </a></li>
                            <li><a href>Nhẫn thông minh</a></li>
                            <li><a href>Phụ kiện thiết bị thực tế ảo </a></li>
                            <li><a href>Thiết bị thực tế ảo </a></li>
                            <li><a href>Thiết bị điều khiển qua cử chỉ</a></li>
                            <li><a href>Thiết bị giám sát thông minh</a></li>
                            <li><a href>Thiết bị streaming</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Digital-device">
                        <a href>Thiết bị số</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Digital-device-item">
                          <ul>
                            <li><a href>Bút laser</a></li>
                            <li><a href>Máy do kim loại</a></li>
                            <li><a href>Kim tự điển &amp; Máy thông dịch</a></li>
                            <li><a href>Bộ sạc đa năng</a></li>
                            <li><a href>Bảng vẽ </a></li>
                            <li><a href>Bộ đàm</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Camera-accessories">
                        <a href>Phụ kiện Máy ảnh</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Camera-accessories-item">
                          <ul>
                            <li><a href>Balo máy ảnh</a></li>
                            <li><a href>Pin máy ảnh</a></li>
                            <li><a href>Sạc pin máy ảnh</a></li>
                            <li><a href>Tay cầm chống rung</a></li>
                            <li><a href>TriPods &amp; MonoPods</a></li>
                            <li><a href>Bộ sạc </a></li>
                            <li><a href>Dây đeo</a></li>
                            <li><a href>Đèn flash</a></li>
                            <li><a href>Hộp chống ẩm</a></li>
                            <li><a href>Kính lọc máy ảnh</a></li>
                            <li><a href>Micro quay phim</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Camera-aircraft-accessories">
                        <a href>Phụ kiện máy bay camera</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Camera-aircraft-accessories-item"> 
                          <ul>
                            <li><a href>Túi đựng máy bay Camera</a></li>
                            <li><a href>Pin máy bay Camera</a></li>
                            <li><a href>Điều khiển từ xa</a></li>
                            <li><a href>Cánh và các bộ phận khác</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Storage-device">
                        <a href>Thiết bị lưu trữ</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Storage-device-item"> 
                          <ul>
                            <li><a href>Ổ cứng gắn trong</a></li>
                            <li><a href>Ổ cứng gắn ngoài</a></li>
                            <li><a href>Thẻ nhớ</a></li>
                            <li><a href>Thiết bị lưu trữ mạng NAS</a></li>
                            <li><a href>USB UTG</a></li>
                            <li><a href>USB</a></li>
                            <li><a href>Bộ nhớ ngoài Macbook</a></li>
                            <li><a href>Ổ cứng SSD gắn trong</a></li>
                            <li><a href>Ổ cứng SSD gắn ngoài</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Computer-accessories">
                        <a href>Phụ kiện máy tính</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Computer-accessories-item"> 
                          <ul>
                            <li><a href>Phụ kiện Macbook</a></li>
                            <li><a href>Bàn phím</a></li>
                            <li><a href>Chuột</a></li>
                            <li><a href>Wedcam</a></li>
                            <li><a href>Đế tản nhiệt</a></li>
                            <li><a href>Ổ đĩa rời</a></li>
                            <li><a href>Pin laptop</a></li>
                            <li><a href>Phần mềm</a></li>
                            <li><a href>Miếng lót chuột</a></li>
                            <li><a href>Decal dán</a></li>
                            <li><a href>USB hub</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="PC-accessories">
                        <a href>Linh kiện máy tính</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 PC-accessories-item">
                          <ul>
                            <li><a href>Bo mạch chủ</a></li>
                            <li><a href>Bộ vi xử lý</a></li>
                            <li><a href>Card âm thanh</a></li>
                            <li><a href>Card đồ họa</a></li>
                            <li><a href>RAM máy tính</a></li>
                            <li><a href>Case máy tính</a></li>
                            <li><a href>Hệ Thống Làm Mát Bằng Nước</a></li>
                            <li><a href>Máy tính một Board</a></li>
                            <li><a href>Nguồn máy tính</a></li>
                            <li><a href>Ổ đĩa quang</a></li>
                            <li><a href>Quạt (cho Case)</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Lens-Accessories">
                        <a href>Phụ kiện ống kính</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Lens-Accessories-item">
                          <ul>
                            <li><a href>Loa che nắng</a></li>
                            <li><a href>Thiết bị vệ sinh ống kính</a></li>
                            <li><a href>Nắp ống kính</a></li>
                            <li><a href>Kính lọc</a></li>
                            <li><a href>Túi đựng ống kính</a></li>
                            <li><a href>Bộ chuyển đổi</a></li>
                            <li><a href>Vòng hỗ trợ lấy nét</a></li>
                            <li><a href>Hộp che nắng ống kính</a></li>
                            <li><a href>Ống tăng tiêu cự</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Network-equipment">
                        <a href>Thiết bị mạng </a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Network-equipment-item">
                          <ul>
                            <li><a href>Router</a></li>
                            <li><a href>Điểm truy cập mạng</a></li>
                            <li><a href>Switch</a></li>
                            <li><a href>Card mạng</a></li>
                            <li><a href>Bộ thu sóng Wifi</a></li>
                            <li><a href>Modems</a></li>
                            <li><a href>Bộ khuếch đại wifi</a></li>
                            <li><a href>Wifi Modems</a></li>
                            <li><a href>Modem USB</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Gaming-accessories">
                        <a href>Phụ kiện chơi game </a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Gaming-accessories-item">
                          <ul>
                            <li><a href>Tay cầm chơi game</a></li>
                            <li><a href>Ốp lưng &amp; bao da máy tính bảng</a></li>
                            <li><a href>Kệ treo &amp; Chân đế</a></li>
                            <li><a href>Cáp &amp; Bộ sạc</a></li>
                            <li><a href>Mô hình tương tác chơi game</a></li>
                            <li><a href>Miếng dán màn hình điện thoại</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* end catetory-2 */}
                </li>
                <li className="TVs-Household-Electrical-Appliances"><a href>
                    <span>TV &amp; Thiết Bị Điện Gia Dụng</span>
                    <div className="icon-nav">
                      <ion-icon name="chevron-forward-outline" />
                    </div>
                  </a>
                  <div className="catetory-2 TVs-Household-Electrical-Appliances-item">
                    <ul>
                      <li className="TV-Video">
                        <a href>Tivi &amp; Video</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 TV-Video-item">
                          <ul>
                            <li><a href>Tivi thông minh</a></li>
                            <li><a href>Tivi kỹ thuật số</a></li>
                            <li><a href>Tivi Analog</a></li>
                            <li><a href>Video</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Small-household-electricity">
                        <a href>Điện gia dụng nhỏ</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Small-household-electricity-item">
                          <ul>
                            <li><a href>Thiết bị làm mát</a></li>
                            <li><a href>Đồ gia dụng nhỏ</a></li>
                            <li><a href>Đồ gia dụng nhà bếp</a></li>
                            <li><a href>Phụ kiện đồ gia dụng</a></li>
                            <li><a href>Đồ gia dụng chăm sóc cá nhân</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Large-household-electricity">
                        <a href>Điện gia dụng lớn</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Large-household-electricity-item">
                          <ul>
                            <li><a href>Máy lạnh</a></li>
                            <li><a href>Tủ lạnh</a></li>
                            <li><a href>Tủ đông</a></li>
                            <li><a href>Máy rửa chén</a></li>
                            <li><a href>Máy sấy chén dĩa</a></li>
                            <li><a href>Bếp điện</a></li>
                            <li><a href>Cây nước nóng lạnh</a></li>
                            <li><a href>Hệ thống lọc nước uống</a></li>
                            <li><a href>Máy giặt</a></li>
                            <li><a href>Máy sấy</a></li>
                            <li><a href>Máy giặt - sấy</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="TV-accessories">
                        <a href>Phụ kiện tivi</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* end catetory-2 */}
                </li>
                <li className="Health-Beauty"><a href>
                    <span>Sức Khỏe &amp; Làm Đẹp</span>
                    <div className="icon-nav">
                      <ion-icon name="chevron-forward-outline" />
                    </div>
                  </a>
                  <div className="catetory-2 Health-Beauty-item">
                    <ul>
                      <li className="Skin-Care">
                        <a href>Chăm sóc da</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Skin-Care-item">
                          <ul>
                            <li><a href>Dưỡng Da Chuyên Sâu</a></li>
                            <li><a href>Mặt Nạ Lột &amp; Tẩy Tế Bào</a></li>
                            <li><a href>Sữa Rửa Mặt</a></li>
                            <li><a href>Nước Hoa Hồng</a></li>
                            <li><a href>Tinh Chất Dưỡng Da Chuyên Sâu</a></li>
                            <li><a href>Tinh Chất Dưỡng Da</a></li>
                            <li><a href>Kem Dưỡng Ẩm </a></li>
                            <li><a href>Dưỡng Môi</a></li>
                            <li><a href>Điều Trị Mụn</a></li>
                            <li><a href>Kem Mắt</a></li>
                            <li><a href>Kem Chống Nắng</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Make-up">
                        <a href>Trang điểm</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Make-up-item ">
                          <ul>
                            <li><a href>Mắt</a></li>
                            <li><a href>Mascara</a></li>
                            <li><a href>Mặt</a></li>
                            <li><a href>Kem Nền BB</a></li>
                            <li><a href>Kem Nền Trang Điểm</a></li>
                            <li><a href>Phấn Phủ</a></li>
                            <li><a href>Phấn Má</a></li>
                            <li><a href>Môi</a></li>
                            <li><a href>Phụ Kiện Trang Điểm</a></li>
                            <li><a href>Tẩy Trang</a></li>
                            <li><a href>Sơn Móng Tay</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Beauty-instruments">
                        <a href>Dụng cụ làm đẹp</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Beauty-instruments-item">
                          <ul>
                            <li><a href>Máy Giảm Cân</a></li>
                            <li><a href>Dụng Cụ Mát Xa Chân</a></li>
                            <li><a href>Dụng Cụ Tẩy Lông/Tóc</a></li>
                            <li><a href>Sản Phẩm Spa</a></li>
                            <li><a href>Dụng Cụ Chăm Sóc Cơ Thể</a></li>
                            <li><a href>Chăm Sóc Mặt</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Body-care">
                        <a href>Chăm sóc cơ thể</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Body-care-item">
                          <ul>
                            <li><a href>Sữa Tắm</a></li>
                            <li><a href>Muối Tắm &amp; Sữa Tắm Tạo Bọt</a></li>
                            <li><a href>Tẩy Tế Bào Chết</a></li>
                            <li><a href>Sữa Dưỡng Thể</a></li>
                            <li><a href>Phụ Kiện Phòng Tắm</a></li>
                            <li><a href>Cải Thiện &amp; Chăm Sóc Cơ Thể</a></li>
                            <li><a href>Tinh Dầu Tắm</a></li>
                            <li><a href>Chăm Sóc Ngực</a></li>
                            <li><a href>Chăm Sóc Tay</a></li>
                            <li><a href>Chăm Sóc Chân</a></li>
                            <li><a href>Tẩy Lông</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Hair-care">
                        <a href>Chăm sóc tóc</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Hair-care-item">
                          <ul>
                            <li><a href>Dầu Gội</a></li>
                            <li><a href>Dầu Xả</a></li>
                            <li><a href>Chăm Sóc Tóc Chuyên Sâu</a></li>
                            <li><a href>Tạo Kiểu Tóc</a></li>
                            <li><a href>Thuốc Nhuộm Tóc</a></li>
                            <li><a href>Phụ Kiện Chăm Sóc Tóc</a></li>
                            <li><a href>Gói Khuyến Mãi</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Personal-care">
                        <a href>Chăm sóc cá nhân</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Personal-care-item">
                          <ul>
                            <li><a href>Khử Mùi</a></li>
                            <li><a href>Chăm Sóc Răng Miệng</a></li>
                            <li><a href>Vệ Sinh Phụ Nữ</a></li>
                            <li><a href>Chăm Sóc Cho Người Cao Tuổi</a></li>
                            <li><a href>Bảo Vệ An Toàn</a></li>
                            <li><a href>Chăm Sóc Mắt</a></li>
                            <li><a href>Chống Côn Trùng</a></li>
                            <li><a href>Nước Súc Miệng</a></li>
                            <li><a href>Làm Trắng Răng</a></li>
                            <li><a href>Kem Đánh Răng</a></li>
                            <li><a href>Nước Rửa Phụ Khoa</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="For-men">
                        <a href>Dành cho nam giới</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 For-men-item">
                          <ul>
                            <li><a href>Tắm &amp; Chăm Sóc Cơ Thể</a></li>
                            <li><a href>Khử Mùi</a></li>
                            <li><a href>Chăm Sóc Tóc</a></li>
                            <li><a href>Cạo Râu Và Chăm Sóc</a></li>
                            <li><a href>Chăm Sóc Da Mặt</a></li>
                            <li><a href>Tạo Kiểu Tóc</a></li>
                            <li><a href>Dao Cạo</a></li>
                            <li><a href>Sữa Rửa Mặt</a></li>
                            <li><a href>Kem Dưỡng Ẩm Nam</a></li>
                            <li><a href>Tinh Chất Dưỡng Da</a></li>
                            <li><a href>Nước Hoa Hồng &amp; Xịt Khoáng</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Perfume">
                        <a href>Nước hoa</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Perfume-item">
                          <ul>
                            <li><a href>Nam</a></li>
                            <li><a href>Nữ</a></li>
                            <li><a href>Unisex</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Functional-foods">
                        <a href>Thực phẩm chức năng</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Functional-foods-item">
                          <ul>
                            <li><a href>Thực Phẩm Sắc Đẹp</a></li>
                            <li><a href>Dinh Dưỡng Thể Thao</a></li>
                            <li><a href>Kiểm Soát Cân Nặng</a></li>
                            <li><a href>Chăm Sóc Sức Khỏe</a></li>
                            <li><a href>Trắng Da</a></li>
                            <li><a href>Chăm Sóc Da Mụn</a></li>
                            <li><a href>Sức Khỏe Phái Nam</a></li>
                            <li><a href>Tăng Cơ</a></li>
                            <li><a href>Kiểm Soát &amp; Đốt Mỡ</a></li>
                            <li><a href>Trà Giảm Cân</a></li>
                            <li><a href>Hỗ Trợ Xương Khớp</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Food-for-beauty">
                        <a href>Thực phẩm cho sắc đẹp</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Food-for-beauty-item">
                          <ul>
                            <li><a href>Kem Ngực</a></li>
                            <li><a href>Gói Khuyến Mãi</a></li>
                            <li><a href>Tóc &amp; Móng</a></li>
                            <li><a href>Dưỡng Da</a></li>
                            <li><a href>Trắng da</a></li>
                            <li><a href>Chăm sóc da mụn</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Sexual-health">
                        <a href>Sức khỏe tình dục</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Sexual-health-item">
                          <ul>
                            <li><a href>Bao Cao Su</a></li>
                            <li><a href>Chất Bôi Trơn</a></li>
                            <li><a href>Đồ Chơi Tình Dục</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Medical-equipment">
                        <a href>Thiết bị y tế</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Medical-equipment-item">
                          <ul>
                            <li><a href>Dụng Cụ Sơ Cứu</a></li>
                            <li><a href>Dụng Cụ Chăm Sóc Sức Khỏe</a></li>
                            <li><a href>Cân &amp; Phân Tích Lượng Mỡ Cơ Thể</a></li>
                            <li><a href>Thiết Bị Theo Dõi Sức Khỏe</a></li>
                            <li><a href>Chăm Sóc Chấn Thương</a></li>
                            <li><a href>Các Xét Nghiệm Y Tế</a></li>
                            <li><a href>Máy Xông Mũi Họng</a></li>
                            <li><a href>Thuốc Mỡ &amp; Kem</a></li>
                            <li><a href>Máy Đo Bước</a></li>
                            <li><a href>Ống Nghe</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* end catetory-2 */}
                </li>
                <li className="Mother-Baby-Toys">
                  <a href>
                    <span>Hàng Mẹ, Bé &amp; Đồ Chơi</span>
                    <div className="icon-nav">
                      <ion-icon name="chevron-forward-outline" />
                    </div>
                  </a>
                  <div className="catetory-2 Mother-Baby-Toys-item">
                    <ul>
                      <li className="Diapers-Hygiene-Supplies">
                        <a href>Tã bỉm &amp; Dụng cụ vệ sinh</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Diapers-Hygiene-Supplies-item">
                          <ul>
                            <li><a href>Tã giấy</a></li>
                            <li><a href>Tã vải cho bé</a></li>
                            <li><a href>Khăn ướt</a></li>
                            <li><a href>Chăm sóc thay tã</a></li>
                            <li><a href>Kem và dầu thoa</a></li>
                            <li><a href>Túi đựng tã cho bé</a></li>
                            <li><a href>Bàn thay tã cho trẻ sơ sinh</a></li>
                            <li><a href>Miếng lót chống thấm</a></li>
                            <li><a href>Miếng lót tã</a></li>
                            <li><a href>Ghế ngồi đi vệ sinh</a></li>
                            <li><a href>Thang bậc cho trẻ</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Milk-Baby-Food">
                        <a href>Sữa bộ &amp; Thức ăn cho bé</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Milk-Baby-Food-item">
                          <ul>
                            <li><a href>Sản phẩm sữa cho mẹ</a></li>
                            <li><a href>Sữa cho bé sơ sinh</a></li>
                            <li><a href>Sữa cho trẻ 6-12 tháng tuổi</a></li>
                            <li><a href>Sữa cho trẻ tập đi từ 1-3 tuổi</a></li>
                            <li><a href>Sữa cho trẻ từ 1-3 tuổi</a></li>
                            <li><a href>Sữa dinh dưỡng</a></li>
                            <li><a href>Sản phẩm đồ uống cho bé</a></li>
                            <li><a href>Ngũ cốc cho bé</a></li>
                            <li><a href>Bánh quy cho bé</a></li>
                            <li><a href>Thức ăn dặm cho bé</a></li>
                            <li><a href>Bột ăn dặm</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Kid-fashion">
                        <a href>Thời trang cho bé</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Kid-fashion-item">
                          <ul>
                            <li><a href>Bộ áo quần cho trẻ sơ sinh</a></li>
                            <li><a href>Áo liền quần cho trẻ sơ sinh</a></li>
                            <li><a href>Phụ kiện cho trẻ sơ sinh</a></li>
                            <li><a href>Quần áo bé gái</a></li>
                            <li><a href>Đầm bé gái</a></li>
                            <li><a href>Giày dép bé gái</a></li>
                            <li><a href>Phụ kiện bé gái</a></li>
                            <li><a href>Đồ đi bơi bé gái</a></li>
                            <li><a href>Quần áo bé trai</a></li>
                            <li><a href>Giày dép của bé trai</a></li>
                            <li><a href>Phụ kiện bé trai</a></li>
                            <li><a href>Đồ bơi bé trai</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Weaning-Breastfeeding-Supplies">
                        <a href>Đồ dùng ăn dặm &amp; Bú sữa</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Weaning-Breastfeeding-Supplies-item">
                          <ul>
                            <li><a href>Bình sữa phụ kiện</a></li>
                            <li><a href>Bình sữa</a></li>
                            <li><a href>Núm ty</a></li>
                            <li><a href>Máy tiệt trùng ủ bình sữa</a></li>
                            <li><a href>Dụng cụ hút sữa</a></li>
                            <li><a href>Phụ kiện máy hút sữa</a></li>
                            <li><a href>Chăm sóc núm vú</a></li>
                            <li><a href>Gối và ghế đòn</a></li>
                            <li><a href>Ghé ngồi ăn cho bé</a></li>
                            <li><a href>Dụng cụ chế biến thức ăn</a></li>
                            <li><a href>Đồ dùng ăn dặm cho bé</a></li>
                            <li><a href>Chén tập ăn</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Cars-Seats-Belts">
                        <a href>Xe, ghế &amp; Đai địu</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Cars-Seats-Belts-item">
                          <ul>
                            <li><a href>Địu dạng võng</a></li>
                            <li><a href>Địu mềm cho bé</a></li>
                            <li><a href>Xe đẩy cao cấp</a></li>
                            <li><a href>Ghế ngồi ô tô</a></li>
                            <li><a href>Nôi chơi</a></li>
                            <li><a href>Dụng cụ tập đi - ghế rung</a></li>
                            <li><a href>Khung tập đi cho bé</a></li>
                            <li><a href>Ghế xe đạp rơ moóc em bé</a></li>
                            <li><a href>Túi cho bé</a></li>
                            <li><a href>Hành lý cho bé</a></li>
                            <li><a href>Dây đai an toàn cho bé</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Bedroom-furniture">
                        <a href>Đồ dùng phòng ngủ</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Bedroom-furniture-item">
                          <ul>
                            <li><a href>nệm cho trẻ</a></li>
                            <li><a href>chăn cho bé</a></li>
                            <li><a href>đồ dùng cho nôi</a></li>
                            <li><a href>đồ dùng đi ngủ</a></li>
                            <li><a href>chăn bông ra giường cho trẻ</a></li>
                            <li><a href>phụ kiện phòng ngủ trẻ sơ sinh</a></li>
                            <li><a href>nội thất phòng ngủ cho bé</a></li>
                            <li><a href>sản phẩm cũi bé sơ sinh</a></li>
                            <li><a href>nôi trẻ sơ sinh</a></li>
                            <li><a href>rương tủ ngăn kéo</a></li>
                            <li><a href>đồ dùng sắp xếp</a></li>
                            <li><a href>trang trí phòng cho trẻ</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Bath-Body-Care">
                        <a href>Tắm gội &amp; Chăm sóc cơ thể </a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Bath-Body-Care-item">
                          <ul>
                            <li><a href>Dưỡng da cho bé sơ sinh</a></li>
                            <li><a href>Dầu gội trẻ sơ sinh</a></li>
                            <li><a href>Xà phòng sữa rửa mặt cho bé</a></li>
                            <li><a href>Sản phẩm chăm sóc răng miệng bé sơ sinh</a></li>
                            <li><a href>Chậu tắm phụ kiện</a></li>
                            <li><a href>Khăn tắm - khăn choàng</a></li>
                            <li><a href>Chống nắng cho trẻ</a></li>
                            <li><a href>Tinh dầu tắm</a></li>
                            <li><a href>Dụng cụ chăm sóc cơ thể trẻ em</a></li>
                            <li><a href>Thảm tắm chống trượt cho bé</a></li>
                            <li><a href>Bong bóng tắm cho bé</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Baby-toys">
                        <a href>Đồ chơi cho bé</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Baby-toys-item">
                          <ul>
                            <li><a href>Đồ chơi bộ sưu tập nhân vật</a></li>
                            <li><a href>Bộ sưu tập nhân vật</a></li>
                            <li><a href>Mô hình mini cho bé</a></li>
                            <li><a href>Thủ công nghệ thuật</a></li>
                            <li><a href>Đồ chơi lắp ráp xây dựng</a></li>
                            <li><a href>Búp bê nhà búp bê</a></li>
                            <li><a href>Đồ chơi hóa trang</a></li>
                            <li><a href>Đồ chơi giáo dục trẻ em</a></li>
                            <li><a href>Trò chơi truyền thống</a></li>
                            <li><a href>Sở thích &amp; Giải trí</a></li>
                            <li><a href>Đồ chơi nhồi bông</a></li>
                            <li><a href>Đồ dùng tiệc cho bé</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Electronic-Toys-Remote-Controls">
                        <a href>Đồ chơi điện tử &amp; Điều khiển từ xa</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Electronic-Toys-Remote-Controls-item">
                          <ul>
                            <li><a href>Giải trí video game</a></li>
                            <li><a href>Bộ mô hình xe lửa đường ray</a></li>
                            <li><a href>Máy bay drone trực thăng 4 cánh</a></li>
                            <li><a href>Xe mô hình die-cast</a></li>
                            <li><a href>Xe mô hình điều khiển từ xa</a></li>
                            <li><a href>Xe mô hình điều khiển từ xa pin</a></li>
                            <li><a href>Robot nhân vật mô hình điều khiển</a></li>
                            <li><a href>Máy bay trực thăng</a></li>
                            <li><a href>Bộ đàm cho bé</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Sports-outdoor-toys">
                        <a href>Đồ chơi thể thao và ngoài trời</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Sports-outdoor-toys-item">
                          <ul>
                            <li><a href>đồ chơi hồ bơi</a></li>
                            <li><a href>trò chơi thể thao cho bé</a></li>
                            <li><a href>đồ chơi ngoài trời cho bé</a></li>
                            <li><a href>đồ chơi bắn súng</a></li>
                            <li><a href>nhà banh phụ kiện</a></li>
                            <li><a href>đồ chơi trên không</a></li>
                            <li><a href>diều chong chóng</a></li>
                            <li><a href>nhà hơi</a></li>
                            <li><a href>yoyo &amp; kendama</a></li>
                            <li><a href>bộ đồ chơi và thiết bị cho sân chơi</a></li>
                            <li><a href>lều cho bé</a></li>
                            <li><a href>nhà chơi cho bé</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Toys-retarded-babies">
                        <a href>Đồ chơi cho bé chậm chững</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Toys-retarded-babies-item">
                          <ul>
                            <li><a href>Thảm chơi cho trẻ</a></li>
                            <li><a href>Đồ chơi xếp khối</a></li>
                            <li><a href>Đồ chơi bồn tắm cho bé</a></li>
                            <li><a href>Đồ chơi treo cũi cho bé</a></li>
                            <li><a href>Đồ chơi giáo dục</a></li>
                            <li><a href>Đồ chơi âm thanh cho bé</a></li>
                            <li><a href>Đồ chơi kéo đẩy dây cót</a></li>
                            <li><a href>Đồ chơi thả hình khối</a></li>
                            <li><a href>Đồ chơi lúc lắc xúc xắc</a></li>
                            <li><a href>Bộ đồ chơi vận động trong nhà</a></li>
                            <li><a href>Đồ chơi nhún và bập bênh trong nhà cho bé</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Educational-toys">
                        <a href>Đồ chơi giáo dục</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Educational-toys-item">
                          <ul>
                            <li><a href>máy tính giáo dục</a></li>
                            <li><a href>đồ chơi kỹ năng cơ bản</a></li>
                            <li><a href>flash cards cho bé</a></li>
                            <li><a href>địa lý cho bé</a></li>
                            <li><a href>đồ chơi đọc viết</a></li>
                            <li><a href>mô hình hệ mặt trời</a></li>
                            <li><a href>đồ chơi gỗ học tập</a></li>
                            <li><a href>đồ chơi nghiên cứu khoa học</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* end catetory-2 */}
                </li>
                <li className="Supermarket-Grocery"><a href>
                    <span>Siêu Thị Tạp Hóa</span>
                    <div className="icon-nav">
                      <ion-icon name="chevron-forward-outline" />
                    </div>
                  </a>
                  <div className="catetory-2 Supermarket-Grocery-item">
                    <ul>
                      <li className="Pasteurized-Milk-Milk-Powder">
                        <a href>Sữa tiệt trùng &amp; Sữa bột </a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Pasteurized-Milk-Milk-Powder-item">
                          <ul>
                            <li><a href>Sữa tiệt trùng</a></li>
                            <li><a href>Sữa bột</a></li>
                            <li><a href>Sữa Đặc</a></li>
                            <li><a href>Bột kem</a></li>
                            <li><a href>Sữa Hương Vị</a></li>
                            <li><a href>Sữa đậu nành</a></li>
                            <li><a href>Sữa Đậu Nành Tiệt Trùng</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Drinks-Beer-Alcohol">
                        <a href>Đồ uống,Bia,Rượu</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Drinks-Beer-Alcohol-item">
                          <ul>
                            <li><a href>Bia</a></li>
                            <li><a href>Cider</a></li>
                            <li><a href>Nước tăng lực, thể thao</a></li>
                            <li><a href>Nước ngọt</a></li>
                            <li><a href>Cà phê</a></li>
                            <li><a href>Trà</a></li>
                            <li><a href>Bột socola</a></li>
                            <li><a href>Đồ uống khác</a></li>
                            <li><a href>Nước</a></li>
                            <li><a href>Nước Trái Cây</a></li>
                            <li><a href>Bột pha nước trái cây</a></li>
                            <li><a href>Siro</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Dairy-Food-Cold-Food">
                        <a href>Thực phẩm từ sữa &amp; Đồ lạnh</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Dairy-Food-Cold-Food-item">
                          <ul>
                            <li><a href>Bơ, Bơ thực vật &amp; Bơ phết</a></li>
                            <li><a href>Phô mai</a></li>
                            <li><a href>Sữa chua</a></li>
                            <li><a href>Nguyên liệu nấu ăn</a></li>
                            <li><a href>Món tráng miệng lạnh</a></li>
                            <li><a href>Nước ép &amp; Thức uống làm lạnh</a></li>
                            <li><a href>Kem tươi</a></li>
                            <li><a href>Kim chi, Dưa chua &amp; Chutney</a></li>
                            <li><a href>Thực phẩm chế biến sẵn</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Canned-Packaged-Dried-Food">
                        <a href>Đồ hộp, Thực phẩm đóng gói &amp; Sấy khô</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Canned-Packaged-Dried-Food-item">
                          <ul>
                            <li><a href>Thực Phẩm Đóng Hộp</a></li>
                            <li><a href>Mì ăn liền</a></li>
                            <li><a href>Mì Ý</a></li>
                            <li><a href>Thực Phẩm Chế Biến Sẳn</a></li>
                            <li><a href>Đậu và Các Loại Ngũ Cốc</a></li>
                            <li><a href>Nông Phẩm Khô</a></li>
                            <li><a href>Thực phẩm đóng lọ</a></li>
                            <li><a href>Đồ ăn sẵn</a></li>
                            <li><a href>Các loại hạt</a></li>
                            <li><a href>Nước sốt các loại</a></li>
                            <li><a href>Gia vị &amp; Rau thơm sấy khô</a></li>
                            <li><a href>Tương ớt</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Candy-Chocolate-Snacks">
                        <a href>Kẹo &amp; Socola &amp; Đồ ăn vặt</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Candy-Chocolate-Snacks-item">
                          <ul>
                            <li><a href>Socola viên &amp; Socola hộp</a></li>
                            <li><a href>Kẹo bạc hà</a></li>
                            <li><a href>Kẹo</a></li>
                            <li><a href>Bánh quy</a></li>
                            <li><a href>Bánh crackers</a></li>
                            <li><a href>Bánh cookies</a></li>
                            <li><a href>Khoai tây chiên</a></li>
                            <li><a href>Các loại hạt &amp; Trái cây khô</a></li>
                            <li><a href>Trái cây và rau củ sấy</a></li>
                            <li><a href>Snack bắp</a></li>
                            <li><a href>Snack mặn và bánh xoắn</a></li>
                            <li><a href>Snack rong biển</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Cooking-baking-ingredients">
                        <a href>Nguyên liệu nấu ăn &amp; làm bánh</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Cooking-baking-ingredients-item">
                          <ul>
                            <li><a href>Đường và nguyên liệu làm bánh</a></li>
                            <li><a href>Mật ong</a></li>
                            <li><a href>Thực Phẩm Đóng Hộp</a></li>
                            <li><a href>Ngũ cốc ăn sáng &amp; Bánh mì phết</a></li>
                            <li><a href>Dầu ăn</a></li>
                            <li><a href>Gạo</a></li>
                            <li><a href>Thực phẩm ăn liền</a></li>
                            <li><a href>Mì và bún</a></li>
                            <li><a href>Muối và gia vị</a></li>
                            <li><a href>Gia vị và sốt ăn liền</a></li>
                            <li><a href>Sốt nấu ăn và phụ gia</a></li>
                            <li><a href>Nguyên liệu khác</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Paper-house-cleaning">
                        <a href>Giấy &amp; vệ sinh nhà cửa</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Paper-house-cleaning-item">
                          <ul>
                            <li><a href>Giấy vệ sinh</a></li>
                            <li><a href>Khăn giấy</a></li>
                            <li><a href>Nước lau sàn</a></li>
                            <li><a href>Nước và dụng cụ lau bếp</a></li>
                            <li><a href>Khử mùi và xịt thơm phòng</a></li>
                            <li><a href>Chất tẩy phòng tắm</a></li>
                            <li><a href>Chất tẩy trắng và khử trùng</a></li>
                            <li><a href>Dụng cụ làm sạch</a></li>
                            <li><a href>Chất thông tắc cống, ống nước</a></li>
                            <li><a href>Chất tẩy đa năng</a></li>
                            <li><a href>Vệ sinh cửa sổ cửa kính</a></li>
                            <li><a href>Diệt côn trùng</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Kitchen-cleaning">
                        <a href>Lau chùi vệ sinh nhà bếp</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Kitchen-cleaning-item">
                          <ul>
                            <li><a href>Nước rửa chén cho máy</a></li>
                            <li><a href>Nước rửa chén bằng tay</a></li>
                            <li><a href>Diêm-hộp quẹt</a></li>
                            <li><a href>Bao đựng rác</a></li>
                            <li><a href>Chén dĩa dùng một lần</a></li>
                            <li><a href>Giấy bóng, Giấy bạc, Giấy nướng bánh</a></li>
                            <li><a href>Túi đựng thực phẩm</a></li>
                            <li><a href>Hộp đựng thực phẩm</a></li>
                            <li><a href>Pin</a></li>
                            <li><a href>Bóng đèn</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Laundry-utensils">
                        <a href>Đồ dùng giặt giũ</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Laundry-utensils-item">
                          <ul>
                            <li><a href>Nước giặt</a></li>
                            <li><a href>Bột giặt</a></li>
                            <li><a href>Nước xả</a></li>
                            <li><a href>Chất tẩy</a></li>
                            <li><a href>Chất tẩy vết bẩn</a></li>
                            <li><a href>Nước làm thơm, nước ủi quần áo</a></li>
                            <li><a href>Chăm sóc đặc biệt</a></li>
                            <li><a href>Nước rửa máy giặt</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Pet-accessories">
                        <a href>Phụ kiện thú cưng</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Pet-accessories-item">
                          <ul>
                            <li><a href>Thiết bị hồ cá</a></li>
                            <li><a href>Nệm ngủ, Thảm &amp; Nhà thú cưng</a></li>
                            <li><a href>Lồng, cũi, cửa nhà cho thú cưng</a></li>
                            <li><a href>Nhà cây, bàn cào móng cho mèo</a></li>
                            <li><a href>Dụng cụ đựng thức ăn thú cưng</a></li>
                            <li><a href>Dụng cụ vận chuyển và balo du lịch</a></li>
                            <li><a href>Phụ kiện làm đẹp</a></li>
                            <li><a href>Dây dắt,vòng cổ &amp; rọ mõm</a></li>
                            <li><a href>Cát và dụng cụ vệ sinh</a></li>
                            <li><a href>Đồ chơi</a></li>
                            <li><a href>Hỗ trợ huấn luyện chó</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Food-pet-care">
                        <a href>Thức ăn và chăm sóc thú cưng</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Food-pet-care-item">
                          <ul>
                            <li><a href>Thức ăn cho mèo</a></li>
                            <li><a href>Thức ăn cho chó</a></li>
                            <li><a href>Thức ăn cho cá</a></li>
                            <li><a href>Thức ăn cho chim</a></li>
                            <li><a href>Thức ăn cho bò sát</a></li>
                            <li><a href>Thức ăn cho thú nhỏ</a></li>
                            <li><a href>Chăm sóc răng miệng và sức khỏe</a></li>
                            <li><a href>Trị ve rận, bọ chét</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Fresh-produce">
                        <a href>Sản phẩm tươi sống</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Fresh-produce-item">
                          <ul>
                            <li><a href>Rau củ tươi</a></li>
                            <li><a href>Trái Cây</a></li>
                            <li><a href>Thịt Tươi Sống</a></li>
                            <li><a href>Hải Sản Tươi Sống</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* end catetory-2 */}
                </li>
                <li className="Household-Life-Goods"><a href>
                    <span>Hàng Gia dụng &amp; Đời sống</span>
                    <div className="icon-nav">
                      <ion-icon name="chevron-forward-outline" />
                    </div>
                  </a>
                  <div className="catetory-2 Household-Life-Goods-item">
                    <ul>
                      <li className="Kitchen-Dining-Room">
                        <a href>Bếp &amp; Phòng Ăn</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Kitchen-Dining-Room-item">
                          <ul>
                            <li><a href>Nồi &amp; Chảo</a></li>
                            <li><a href>Bình nước</a></li>
                            <li><a href>Bình giữ nhiệt</a></li>
                            <li><a href>Chứa đồ nhà bếp &amp; phụ kiện</a></li>
                            <li><a href>Dao bếp và phụ kiện</a></li>
                            <li><a href>Đồ dùng uống nước</a></li>
                            <li><a href>Đồ dùng nhà bếp đặc biệt</a></li>
                            <li><a href>Dụng cụ làm bánh</a></li>
                            <li><a href>Đồ dùng uống trà &amp; café</a></li>
                            <li><a href>Dụng cụ nấu ăn</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="House-repairs">
                        <a href>Sửa chữa nhà cửa</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 House-repairs-item">
                          <ul>
                            <li><a href>Thiết bị điện</a></li>
                            <li><a href>Đồ dùng làm vườn</a></li>
                            <li><a href>Đồ kim khí</a></li>
                            <li><a href>Bảo vệ nhà cửa</a></li>
                            <li><a href>Dụng cụ an toàn lao động</a></li>
                            <li><a href>Sơn &amp; trang trí nhà</a></li>
                            <li><a href>Dụng cụ điện ngoài trời &amp; làm vườn</a></li>
                            <li><a href>Ổ cắm điện</a></li>
                            <li><a href>Hệ thống tưới nước</a></li>
                            <li><a href>Hạt giống hoa quả</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Electric-tools">
                        <a href>Dụng cụ điện</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Electric-tools-item">
                          <ul>
                            <li><a href>Máy khoan</a></li>
                            <li><a href>Máy khoan cắt đa năng</a></li>
                            <li><a href>Bộ dụng cụ cầm tay</a></li>
                            <li><a href>Máy khoan cắt bê tông</a></li>
                            <li><a href>Máy cầm tay đa năng</a></li>
                            <li><a href>Máy mài</a></li>
                            <li><a href>Máy cưa</a></li>
                            <li><a href>Máy bào</a></li>
                            <li><a href>Súng hơi</a></li>
                            <li><a href>Máy bắn đinh &amp; ghim</a></li>
                            <li><a href>Dụng cụ hàn tiện</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Hand-tools">
                        <a href>Dụng cụ cầm tay</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Hand-tools-item">
                          <ul>
                            <li><a href>Súng bắn keo</a></li>
                            <li><a href>Dao &amp; dụng cụ đa năng</a></li>
                            <li><a href>Dụng cụ lau chùi</a></li>
                            <li><a href>Kìm</a></li>
                            <li><a href>Máy vặn ốc</a></li>
                            <li><a href>Mài, dũa</a></li>
                            <li><a href>Búa</a></li>
                            <li><a href>Phụ kiện dụng cụ cầm tay</a></li>
                            <li><a href>Khoá lục giác</a></li>
                            <li><a href>Bộ tuýp</a></li>
                            <li><a href>Cưa</a></li>
                            <li><a href>Đai, keo &amp; hàn</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Bedroom">
                        <a href>Phòng ngủ</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Bedroom-item">
                          <ul>
                            <li><a href>Bộ chăn ga gối</a></li>
                            <li><a href>Ga giường</a></li>
                            <li><a href>Gối</a></li>
                            <li><a href>Chăn mền</a></li>
                            <li><a href>Chăn chần gòn</a></li>
                            <li><a href>Chăn điện</a></li>
                            <li><a href>Phụ kiện giường ngủ</a></li>
                            <li><a href>Vỏ gối</a></li>
                            <li><a href>Ren ga giường chống trượt</a></li>
                            <li><a href>Vỏ lót bảo vệ nệm</a></li>
                            <li><a href>Tấm trải nệm</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Bathroom">
                        <a href>Phòng tắm</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Bathroom-item">
                          <ul>
                            <li><a href>Khăn tắm</a></li>
                            <li><a href>Kệ phòng tắm</a></li>
                            <li><a href>Thiết bị phòng tắm</a></li>
                            <li><a href>Hộp đựng giấy vệ sinh</a></li>
                            <li><a href>Giá treo khăn</a></li>
                            <li><a href>Cân sức khoẻ</a></li>
                            <li><a href>Thảm phòng tắm</a></li>
                            <li><a href>Gương phòng tắm</a></li>
                            <li><a href>Áo choàng tắm</a></li>
                            <li><a href>Rèm phòng tắm</a></li>
                            <li><a href>Phủ bồn cầu</a></li>
                            <li><a href>Giá treo vòi sen</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Lights-Lighting-Equipment">
                        <a href>Đèn &amp; Thiết bị đèn</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Lights-Lighting-Equipment-item">
                          <ul>
                            <li><a href>Bóng đèn</a></li>
                            <li><a href>Đèn trần</a></li>
                            <li><a href>Đèn tường</a></li>
                            <li><a href>Đèn bàn</a></li>
                            <li><a href>Đèn ngoài trời</a></li>
                            <li><a href>Đèn trang trí</a></li>
                            <li><a href>Chụp đèn</a></li>
                            <li><a href>Linh kiện đèn</a></li>
                            <li><a href>Đèn chuyên dụng</a></li>
                            <li><a href>Đèn đứng</a></li>
                            <li><a href>Đèn pin &amp; Đèn flash</a></li>
                            <li><a href>Đèn trang trí phòng tắm</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Home-decoration">
                        <a href>Trang trí nhà cửa</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Home-decoration-item">
                          <ul>
                            <li><a href>Giấy dán tường, decal</a></li>
                            <li><a href>Trang trí tường</a></li>
                            <li><a href>Phụ kiện làm thơm phòng</a></li>
                            <li><a href>Thảm</a></li>
                            <li><a href>Đồng hồ</a></li>
                            <li><a href>Rèm &amp; Màn cửa</a></li>
                            <li><a href>Tranh &amp; khung ảnh</a></li>
                            <li><a href>Cây &amp; hoa giả</a></li>
                            <li><a href>Lọ &amp; Bình trang trí</a></li>
                            <li><a href>Điểm nhấn trang trí</a></li>
                            <li><a href>Bộ nến trang trí</a></li>
                            <li><a href>Gương</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Furniture">
                        <a href>Đồ nội thất</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Furniture-item">
                          <ul>
                            <li><a href>Nệm</a></li>
                            <li><a href>Tủ quần áo</a></li>
                            <li><a href>Bàn làm việc</a></li>
                            <li><a href>Tủ sắp xếp giày</a></li>
                            <li><a href>Nội thất phòng ngủ</a></li>
                            <li><a href>Nội thất phòng khách</a></li>
                            <li><a href>Nội thất phòng làm việc</a></li>
                            <li><a href>Nội thất bếp &amp; phòng ăn</a></li>
                            <li><a href>Nội thất phòng giải trí</a></li>
                            <li><a href>Nội thất ngoài trời</a></li>
                            <li><a href>Nội thất hành lang &amp; lối vào</a></li>
                            <li><a href>Tủ chứa &amp; Sắp xếp đồ</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Stationery-crafts">
                        <a href>Văn phòng phẩm &amp; thủ công</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Stationery-crafts-item">
                          <ul>
                            <li><a href>Phụ kiện trường học &amp; văn phòng</a></li>
                            <li><a href>Máy tính học sinh</a></li>
                            <li><a href>Bộ dụng cụ học tập</a></li>
                            <li><a href>Bút viết các loại</a></li>
                            <li><a href>Quà tặng &amp; Đồ dùng gói quà</a></li>
                            <li><a href>Đồ thủ công</a></li>
                            <li><a href>Dụng cụ vẽ</a></li>
                            <li><a href>Dụng cụ may vá</a></li>
                            <li><a href>Sản phẩm từ giấy</a></li>
                            <li><a href>Quà lưu niệm</a></li>
                            <li><a href>Giấy in các loại</a></li>
                            <li><a href>Thùng carton</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Books-Musical-Instruments">
                        <a href>Sách &amp; Nhạc cụ</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Books-Musical-Instruments-item">
                          <ul>
                            <li><a href>Đàn guitar</a></li>
                            <li><a href>Piano &amp; organ di động</a></li>
                            <li><a href>Phụ kiện âm nhạc</a></li>
                            <li><a href>Nhạc cụ truyền thống</a></li>
                            <li><a href>Trống và bộ gõ</a></li>
                            <li><a href>Sáo các loại</a></li>
                            <li><a href>Nghệ thuật sống</a></li>
                            <li><a href>Văn học</a></li>
                            <li><a href>Kinh tế</a></li>
                            <li><a href>Sách Ngôn ngữ học &amp; Kỹ năng viết</a></li>
                            <li><a href>Thường thức đời sống</a></li>
                            <li><a href>Sách cho cha mẹ</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Washing-Charging-Equipment">
                        <a href>Thiết bị giặt &amp; làm sạch</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Washing-Charging-Equipment-item">
                          <ul>
                            <li><a href>Thùng rác &amp; Thùng tái chế</a></li>
                            <li><a href>Xô Nhựa</a></li>
                            <li><a href>Chổi &amp; Cây lau nhà</a></li>
                            <li><a href>Dụng cụ giặt ủi</a></li>
                            <li><a href>Giỏ giặt ủi</a></li>
                            <li><a href>Giá phơi quần áo</a></li>
                            <li><a href>Móc treo &amp; Kẹp quần áo</a></li>
                            <li><a href>Cầu là quần áo</a></li>
                            <li><a href>Túi Giặt &amp; bóng giặt</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* end catetory-2 */}
                </li>
                <li className="Womens-Fashion"><a href> 
                    <span>Thời Trang Nữ</span>
                    <div className="icon-nav">
                      <ion-icon name="chevron-forward-outline" />
                    </div>
                  </a>
                  <div className="catetory-2 Womens-Fashion-item">
                    <ul>
                      <li>
                        <a href>Đầm nữ</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                      </li>
                      <li className="Pants-skirts">
                        <a href>Quần và chân váy</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Pants-skirts-item">
                          <ul>
                            <li><a href>Quần dài và quần bó</a></li>
                            <li><a href>Jeans</a></li>
                            <li><a href>Chân váy</a></li>
                            <li><a href>Quần short</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Womens-shirt">
                        <a href>Áo nữ</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Womens-shirt-item">
                          <ul>
                            <li><a href>Áo khoác</a></li>
                            <li><a href>Áo hoodies</a></li>
                            <li><a href>Áo len và áo cardigan</a></li>
                            <li><a href>Áo sơ mi</a></li>
                            <li><a href>Áo polo</a></li>
                            <li><a href>Áo sơ mi kiểu</a></li>
                            <li><a href>Áo thun</a></li>
                            <li><a href>Áo hai dây</a></li>
                            <li><a href>Áo kiểu nữ</a></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href>Jumpsuits</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                      </li>
                      <li>
                        <a href>Đồ đôi và gia đình</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                      </li>
                      <li className="Pajamas-lingerie">
                        <a href>Đồ ngủ và nội y</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Pajamas-lingerie-item">
                          <ul>
                            <li><a href>Đồ ngủ nữ</a></li>
                            <li><a href>Quần lót nữ</a></li>
                            <li><a href>Áo ngực</a></li>
                            <li><a href>Đồ lót định hình</a></li>
                            <li><a href>Bộ đồ lót nữ</a></li>
                            <li><a href>Phụ kiện đồ lót</a></li>
                            <li><a href>Áo lót hai dây</a></li>
                            <li><a href>Áo choàng nữ</a></li>
                            <li><a href>Đồ lót gợi cảm</a></li>
                            <li><a href>Đồ bơi một mảnh</a></li>
                            <li><a href>Bikini</a></li>
                            <li><a href>Phụ kiện đồ lót và đồ bơi nữ</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Womens-Accessories">
                        <a href>Phụ kiện nữ</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Womens-Accessories-item">
                          <ul>
                            <li><a href>Vớ và quần vớ nữ</a></li>
                            <li><a href>Phụ kiện tóc nữ</a></li>
                            <li><a href>Nón thời trang nữ</a></li>
                            <li><a href>Dù nữ</a></li>
                            <li><a href>Thắt lưng nữ</a></li>
                            <li><a href>Phụ kiện thời trang khác</a></li>
                            <li><a href>Khăn choàng thời trang</a></li>
                            <li><a href>Găng tay nữ</a></li>
                            <li><a href>Khẩu trang vải</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Womens-shoes">
                        <a href>Giày nữ</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Womens-shoes-item">
                          <ul>
                            <li><a href>Sneakers</a></li>
                            <li><a href>Giày cao gót</a></li>
                            <li><a href>Dép</a></li>
                            <li><a href>Sandals</a></li>
                            <li><a href>Giày đế bằng</a></li>
                            <li><a href>Giày đế xuồng</a></li>
                            <li><a href>Giày bốt</a></li>
                            <li><a href>Phụ kiện giày</a></li>
                            <li><a href>Mules</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Baby-girl-costume">
                        <a href>Trang phục bé gái</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Baby-girl-costume-item">
                          <ul>
                            <li><a href>Đầm bé gái</a></li>
                            <li><a href>Đồ lót &amp; Đồ ngủ</a></li>
                            <li><a href>Phụ kiện tóc</a></li>
                            <li><a href>Áo bé gái</a></li>
                            <li><a href>Quần &amp; Chân váy</a></li>
                            <li><a href>Áo khoác</a></li>
                            <li><a href>Nón</a></li>
                            <li><a href>Vớ &amp; Quần vớ</a></li>
                            <li><a href>Dù</a></li>
                            <li><a href>Găng tay, Khăn choàng, Phụ kiện</a></li>
                            <li><a href>Khẩu trang bé gái</a></li>
                            <li><a href>Áo Hoodies</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Girls-shoes">
                        <a href>Giày bé gái</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Girls-shoes-item">
                          <ul>
                            <li><a href>Dép &amp;à Sandals</a></li>
                            <li><a href>Sneakers</a></li>
                            <li><a href>Giày đế bằng</a></li>
                            <li><a href>Giày đi học</a></li>
                            <li><a href>Giày bốt</a></li>
                            <li><a href>Phụ kiện giày</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* end catetory-2 */}
                </li>
                <li className="Mens-clothing"><a href>
                    <span>Thời Trang Nam</span>
                    <div className="icon-nav">
                      <ion-icon name="chevron-forward-outline" />
                    </div>
                  </a>
                  <div className="catetory-2 Mens-clothing-item">
                    <ul>
                      <li className="Mens-clothing">
                        <a href>Trang phục nam</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Mens-clothing-item">
                          <ul>
                            <li><a href>Áo thun nam</a></li>
                            <li><a href>Áo sơ mi nam</a></li>
                            <li><a href>Áo polo nam</a></li>
                            <li><a href>Áo khoác nam</a></li>
                            <li><a href>Quần jean nam</a></li>
                            <li><a href>Quần dài nam</a></li>
                            <li><a href>Quần short nam</a></li>
                            <li><a href>Đồ vest nam</a></li>
                            <li><a href>Áo hoodie nam</a></li>
                            <li><a href>Áo trùm đầu &amp; cardigan nam</a></li>
                            <li><a href>Đồ bơi nam</a></li>
                            <li><a href>Trang phục Hồi Giáo</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Mens-shoes">
                        <a href>Giày dép nam</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Mens-shoes-item">
                          <ul>
                            <li><a href>Giày sneaker</a></li>
                            <li><a href>Dép &amp; sandal</a></li>
                            <li><a href>Giày lười</a></li>
                            <li><a href>Giày công sở</a></li>
                            <li><a href>Giày bốt</a></li>
                            <li><a href>Phụ kiện giày dép</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Mens-underwear">
                        <a href>Đồ lót nam</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Mens-underwear-item">
                          <ul>
                            <li><a href>Quần lót boxer nam</a></li>
                            <li><a href>Quần lót tam giác nam</a></li>
                            <li><a href>Đồ mặc ngủ nam</a></li>
                            <li><a href>Quần lọt khe</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Mens-fashion-accessories">
                        <a href>Phụ kiện thời trang nam</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Mens-fashion-accessories-item">
                          <ul>
                            <li><a href>Nón mũ nam</a></li>
                            <li><a href>Thắt lưng nam</a></li>
                            <li><a href>Tất vớ nam</a></li>
                            <li><a href>Khẩu trang vải</a></li>
                            <li><a href>Găng tay nam</a></li>
                            <li><a href>Dây đai quần nam</a></li>
                            <li><a href>Cà vạt</a></li>
                            <li><a href>Khăn choàng nam</a></li>
                            <li><a href>Ô dù</a></li>
                            <li><a href>Nơ thời trang</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Baby-boy-costume">
                        <a href>Trang phục bé trai</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Baby-boy-costume-item">
                          <ul>
                            <li><a href>Áo thun bé trai</a></li>
                            <li><a href>Đồ bơi bé trai</a></li>
                            <li><a href>Đồ ngủ bé trai</a></li>
                            <li><a href>Quần đùi bé trai</a></li>
                            <li><a href>Áo khoác bé trai</a></li>
                            <li><a href>Quần dài bé trai</a></li>
                            <li><a href>Nón bé trai</a></li>
                            <li><a href>Quần lót bé trai</a></li>
                            <li><a href>Tất bé trai</a></li>
                            <li><a href>Áo mưa bé trai</a></li>
                            <li><a href>Áo hoodie bé trai</a></li>
                            <li><a href>Găng tay, khăn choàng bé trai</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Boys-shoes">
                        <a href>Giày bé trai</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Boys-shoes-item">
                          <ul>
                            <li><a href>Dép &amp; sandal bé trai</a></li>
                            <li><a href>Giày sneaker bé trai</a></li>
                            <li><a href>Giày lười bé trai</a></li>
                            <li><a href>Giày bốt bé trai</a></li>
                            <li><a href>Giày đi học bé trai</a></li>
                            <li><a href>Phụ kiện giày bé trai</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* end catetory-2 */}
                </li>
                <li className="Fashion-accessories"><a href>
                    <span>Phụ Kiện Thời Trang</span>
                    <div className="icon-nav">
                      <ion-icon name="chevron-forward-outline" />
                    </div>
                  </a>
                  <div className="catetory-2 Fashion-accessories-item">
                    <ul>
                      <li className="Womens-Watch"> 
                        <a href>Đồng Hồ Nữ</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Womens-Watch-item">
                          <ul>
                            <li><a href>Đồng Hồ Đi Chơi</a></li>
                            <li><a href>Đồng Hồ Đi Làm</a></li>
                            <li><a href>Đồng Hồ Thể Thao</a></li>
                            <li><a href>Đồng Hồ Đã Qua Sử Dụng</a></li>
                            <li><a href>Đồng Hồ Cao Cấp</a></li>
                            <li><a href>Phụ Kiện Đồng Hồ</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Womens-Jewelry">
                        <a href>Trang Sức Nữ</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Womens-Jewelry-item">
                          <ul>
                            <li><a href>Trang Sức Thời Trang</a></li>
                            <li><a href>Vòng Tay Thời Trang</a></li>
                            <li><a href>Vòng Cổ Thời Trang</a></li>
                            <li><a href>Bông Tay Thời Trang</a></li>
                            <li><a href>Nhẫn Thời Trang</a></li>
                            <li><a href>Trang Sức Đính Hôn</a></li>
                            <li><a href>Trang Sức Cao Cấp</a></li>
                            <li><a href>Trang Sức Kim Cương</a></li>
                            <li><a href>Trang Sức Ngọc Bích</a></li>
                            <li><a href>Vàng Nguyên Chất</a></li>
                            <li><a href>Đá Quý</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Sunglasses">
                        <a href>Kính Mát</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Sunglasses-item">
                          <ul>
                            <li><a href>Kính Mát Nam</a></li>
                            <li><a href>Kính Mát Nữ</a></li>
                            <li><a href>Kính Mát Trẻ Em</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Fashion-glasses">
                        <a href>Kính Thời Trang</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Fashion-glasses-item">
                          <ul>
                            <li> <a href>Kính Cận Nam</a> </li>
                            <li><a href>Kính Cận Nữ</a> </li>
                            <li><a href> Kính Cận Trẻ Em</a></li>
                            <li><a href>Phụ Kiện Đồng Hồ</a> </li>
                          </ul>
                        </div>
                      </li>
                      <li className="Womens-handbags">
                        <a href>Túi Xách Nữ</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Womens-handbags-item">
                          <ul>
                            <li><a href>Túi Đeo Chéo</a></li>
                            <li><a href>Túi Xách</a></li>
                            <li><a href>Ví Dự Tiệc</a></li>
                            <li><a href>Túi Tote</a></li>
                            <li><a href>Ví &amp; Phụ Kiện</a></li>
                            <li><a href>Túi Đeo Tay</a></li>
                            <li><a href>Charm Phụ Kiện Gắn Túi</a></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href>Ba Lô Nữ</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                      </li>
                      <li className="Mens-watch">
                        <a href>Đồng Hồ Nam</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Mens-watch-item">
                          <ul>
                            <li><a href>Đồng Hồ Đi Chơi</a></li>
                            <li><a href>Đồng Hồ Đi Làm</a></li>
                            <li><a href>Đồng Hồ Thể Thao</a></li>
                            <li><a href>Đồng Hồ Đã Qua Sử Dụng</a></li>
                            <li><a href>Đồng Hồ Cao Cấp</a></li>
                            <li><a href>Phụ Kiện Đồng Hồ</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Mens-Jewelry">
                        <a href>Trang Sức Nam</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Mens-Jewelry-item">
                          <ul>
                            <li><a href>Trang Sức Đính Hôn</a></li>
                            <li><a href>Trang Sức Thời Trang</a></li>
                            <li><a href>Nhẫn Nam</a></li>
                            <li><a href>Vòng Tay Nam</a></li>
                            <li><a href>Mặt Dây Chuyền Nam</a></li>
                            <li><a href>Bông Tai Cho Nam</a></li>
                            <li><a href>Trang Sức Cao Cấp</a></li>
                            <li><a href>Phụ Kiện Trang Phục Nam</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Mens-bags">
                        <a href>Túi Xách Nam</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Mens-bag-item">
                          <ul>
                            <li><a href>Ba Lô Nam</a></li>
                            <li><a href>Cặp Xách Công Sở</a></li>
                            <li><a href>Túi Messenger</a></li>
                            <li><a href>Túi Đeo Nam</a></li>
                            <li><a href>Ví Nam</a></li>
                            <li><a href>Túi Đeo Hông</a></li>
                            <li><a href>Ví Đựng Thẻ Cho Nam</a></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href>Túi Đeo Chéo Nam</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                      </li>
                      <li className="Suitcases-Travel-Bags">
                        <a href>Vali &amp; Túi Du Lịch</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Suitcases-Travel-Bags-item">
                          <ul>
                            <li><a href>Ba Lô &amp; Túi Laptop</a></li>
                            <li><a href>Vali Du Lịch</a></li>
                            <li><a href>Phụ Kiện Du Lịch</a></li>
                            <li><a href>Túi Du Lịch</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Baby-Bags">
                        <a href>Túi Trẻ Em</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Baby-Bags-item">
                          <ul>
                            <li><a href>Ba Lô Kéo Trẻ Em</a></li>
                            <li><a href>Ba Lô Trẻ Em</a></li>
                            <li><a href>Túi Trẻ Em</a></li>
                            <li><a href>Phụ Kiện Túi Trẻ Em</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* end catetory-2 */}
                </li>
                <li className="Sports-Travel"><a href>
                    <span>Thể Thao &amp; Du Lịch</span>
                    <div className="icon-nav">
                      <ion-icon name="chevron-forward-outline" />
                    </div>
                  </a>
                  <div className="catetory-2 Sports-Travel-item">
                    <ul>
                      <li className="Mens-Sports-Shoes">
                        <a href>Giày Thể Thao Nam</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Mens-Sports-Shoes-item">
                          <ul>
                            <li><a href>Giày chạy bộ</a></li>
                            <li><a href>Giày đá bóng</a></li>
                            <li><a href>Giày tennis nam</a></li>
                            <li><a href>Giày cầu lông nam</a></li>
                            <li><a href>Giày thể thao sneakers nam</a></li>
                            <li><a href>Giày chơi bóng rổ</a></li>
                            <li><a href>Giày leo núi</a></li>
                            <li><a href>Sandal thể thao nam</a></li>
                            <li><a href>Giày chơi thể thao dưới nước</a></li>
                            <li><a href>Giày đạp xe</a></li>
                            <li><a href>Giày tập golf</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Mens-Outfits">
                        <a href>Trang Phục Nam</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Mens-Outfits-item">
                          <ul>
                            <li><a href>Áo thun thể thao</a></li>
                            <li><a href>Quần dài thể thao nam</a></li>
                            <li><a href>Quần shorts thể thao nam</a></li>
                            <li><a href>Áo khoác thể thao nam</a></li>
                            <li><a href>Đồ bơi</a></li>
                            <li><a href>Áo Jersey</a></li>
                            <li><a href>Túi thể thao</a></li>
                            <li><a href>Phụ kiện thể thao</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Womens-sports-shoes">
                        <a href>Giày Thể Thao Nữ</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Womens-sports-shoes-item">
                          <ul>
                            <li><a href>Giày chạy bộ</a></li>
                            <li><a href>Giày thể thao sneakers nữ</a></li>
                            <li><a href>Giày chơi bóng rổ</a></li>
                            <li><a href>Giày đá bóng</a></li>
                            <li><a href>Giày leo núi</a></li>
                            <li><a href>Giày cầu lông nữ</a></li>
                            <li><a href>Sandal thể thao nữ</a></li>
                            <li><a href>Giày chơi thể thao dưới nước</a></li>
                            <li><a href>Giày đạp xe</a></li>
                            <li><a href>Giày tập golf</a></li>
                            <li><a href>Giày tennis nữ</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Womens-Outfits">
                        <a href>Trang Phục Nữ</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Womens-Outfits-item">
                          <ul>
                            <li><a href>Áo thun thể thao</a></li>
                            <li><a href>Quần dài thể thao </a></li>
                            <li><a href>Quần shorts thể thao </a></li>
                            <li><a href>Áo lót thể thao </a></li>
                            <li><a href>Áo khoác thể thao</a></li>
                            <li><a href>Đồ bơi</a></li>
                            <li><a href>Túi thể thao</a></li>
                            <li><a href>Phụ kiện thể thao</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Suitcases-Travel-Bag">
                        <a href>Vali &amp; Túi Du Lịch</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Suitcases-Travel-Bag-item">
                          <ul>
                            <li><a href>Ba Lô &amp; Túi Laptop</a></li>
                            <li><a href>Vali Du Lịch</a></li>
                            <li><a href>Phụ Kiện Du Lịch</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Picnic-Activities">
                        <a href>Hoạt Động Dã Ngoại</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Picnic-Activities-item">
                          <ul>
                            <li><a href>Đạp Xe</a></li>
                            <li><a href>Câu Cá</a></li>
                            <li><a href>Dã Ngoại &amp; Đi Bộ Đường Trường</a></li>
                            <li><a href>Leo Núi</a></li>
                            <li><a href>Golf</a></li>
                            <li><a href>Trượt Patin</a></li>
                            <li><a href>Trượt Ván</a></li>
                            <li><a href>Xe Scooter</a></li>
                            <li><a href>Bắn Súng</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Sports-Fitness">
                        <a href>Thể Thao &amp; Thể Hình</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Sports-Fitness-item">
                          <ul>
                            <li><a href>Máy Tập Thể Hình</a></li>
                            <li><a href>Máy Tập Thể Lực</a></li>
                            <li><a href>Tạ</a></li>
                            <li><a href>Yoga</a></li>
                            <li><a href>Pilates</a></li>
                            <li><a href>Chạy Bộ</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Racquet-Sports">
                        <a href>Thể Thao Dùng Vợt</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Racquet-Sports-item">
                          <ul>
                            <li><a href>Vợt Cầu Lông</a></li>
                            <li><a href>Vợt Bóng Bàn</a></li>
                            <li><a href>Vợt Tennis</a></li>
                            <li><a href>Quả Cầu Lông</a></li>
                            <li><a href>Bóng Bàn</a></li>
                            <li><a href>Bóng Tennis</a></li>
                            <li><a href>Bóng Quần</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Team-sport">
                        <a href>Thể Thao Đồng Đội</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Team-sport-item">
                          <ul>
                            <li><a href>Bóng Rổ</a></li>
                            <li><a href>Bóng Chuyền</a></li>
                            <li><a href>Bóng Đá</a></li>
                            <li><a href>Bóng Chày</a></li>
                            <li><a href>Bóng Bầu Dục</a></li>
                            <li><a href>Cầu Mây</a></li>
                            <li><a href>Cổ Động</a></li>
                            <li><a href>Cricket</a></li>
                            <li><a href>Khúc Côn Cầu</a></li>
                            <li><a href>Thể Dục Dụng Cụ</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Boxing-Martial-Arts">
                        <a href>Đấm Bốc &amp; Võ Thuật</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Boxing-Martial-Arts-item">
                          <ul>
                            <li><a href>Thiết Bị Tập Võ Thuật</a></li>
                            <li><a href>Thiết Bị Tập Đấm Bốc</a></li>
                            <li><a href>Bao Cát &amp; Phụ Kiện</a></li>
                            <li><a href>Bao Tay</a></li>
                            <li><a href>Đích Đá</a></li>
                            <li><a href>Đồng Phục Võ Thuật</a></li>
                            <li><a href>Dụng Cụ Bảo Hộ</a></li>
                            <li><a href>Găng Tay Đấm Bốc</a></li>
                            <li><a href>Găng Tay MMA</a></li>
                            <li><a href>Tấm Lót Đấm Bốc</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Water-sport">
                        <a href>Thể Thao Dưới Nước</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Water-sport-item">
                          <ul>
                            <li><a href>Bơi Lội</a></li>
                            <li><a href>Chèo Thuyền</a></li>
                            <li><a href>Lặn &amp; Lặn Dùng Ống Thở</a></li>
                            <li><a href>Lướt Ván</a></li>
                            <li><a href>Phao Trượt</a></li>
                            <li><a href>Áo Cứu Hộ</a></li>
                            <li><a href>Túi Chống Nước</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Sports-Accessories">
                        <a href>Phụ Kiện Thể Thao</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Sports-Accessories-item">
                          <ul>
                            <li><a href>Bình Nước Thể Thao</a></li>
                            <li><a href>Ống Bơm</a></li>
                            <li><a href>Nẹp &amp; Hỗ Trợ</a></li>
                            <li><a href>Túi Y Tế</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* end catetory-2 */}
                </li>
                <li className="Cars-Motorcycles-Navigation-Devices"><a href>
                    <span>Ôtô, Xe Máy &amp; Thiết Bị Định Vị</span>
                    <div className="icon-nav">
                      <ion-icon name="chevron-forward-outline" />
                    </div>
                  </a>
                  <div className="catetory-2 Cars-Motorcycles-Navigation-Devices-item">
                    <ul>
                      <li className="Motorcycle">
                        <a href>Xe máy</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Motorcycle-item">
                          <ul>
                            <li><a href>Xe tay ga</a></li>
                            <li><a href>Xe côn tay</a></li>
                            <li><a href>Xe số</a></li>
                            <li><a href>Xe máy điện</a></li>
                            <li><a href>Xe 50cc</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Car-care">
                        <a href>Chăm sóc ô tô</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Car-care-item">
                          <ul>
                            <li><a href>Nội thất ô tô</a></li>
                            <li><a href>Gói chăm sóc xe</a></li>
                            <li><a href>Máy bơm lốp</a></li>
                            <li><a href>Máy hút bụi ô tô</a></li>
                            <li><a href>Xịt khử mùi dành cho ô tô</a></li>
                            <li><a href>Bộ sản phẩm vệ sinh nội thất</a></li>
                            <li><a href>Chất làm mờ vết xước</a></li>
                            <li><a href>Bộ sản phẩm vệ sinh xe</a></li>
                            <li><a href>Dụng cụ làm sạch nước</a></li>
                            <li><a href>Xịt chống rỉ sét gầm ô tô</a></li>
                            <li><a href>Nước lau kiếng xe</a></li>
                            <li><a href>Xịt bảo dưỡng vỏ &amp; mâm xe</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Car-interior-decoration">
                        <a href>Trang trí nội thất ô tô</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Car-interior-decoration-item">
                          <ul>
                            <li><a href>Xịt thơm xe</a></li>
                            <li><a href>Lót sàn ô tô</a></li>
                            <li><a href>Gạt tàn ô tô</a></li>
                            <li><a href>Bọc vô lăng xe hơi</a></li>
                            <li><a href>Bao ghế &amp; phụ kiện</a></li>
                            <li><a href>Móc khóa ô tô</a></li>
                            <li><a href>Tấm che nắng kính chắn gió</a></li>
                            <li><a href>Bọc cần số</a></li>
                            <li><a href>Dụng cụ thoát hiểm</a></li>
                            <li><a href>Lọc không khí ô tô</a></li>
                            <li><a href>Bộ dụng cụ sơ cứu</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Car-exterior-decoration">
                        <a href>Trang trí ngoại thất ô tô</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Car-exterior-decoration-item">
                          <ul>
                            <li><a href>Decal và trang trí ô tô</a></li>
                            <li><a href>Vật dụng sắp xếp hàng hóa</a></li>
                            <li><a href>Phụ kiện trang trí ăng ten xe hơi</a></li>
                            <li><a href>Decal nam châm</a></li>
                            <li><a href>Khung bọc biển số</a></li>
                            <li><a href>Chắn mưa ô tô</a></li>
                            <li><a href>Chắn bùn xe hơi</a></li>
                            <li><a href>Còi ô tô</a></li>
                            <li><a href>Ốp crom xe hơi</a></li>
                            <li><a href>Logo xe hơi</a></li>
                            <li><a href>Viền carbon xe ô tô</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Auto-Parts-Accessories">
                        <a href>Phụ tùng &amp; phụ kiện ô tô</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Auto-Parts-Accessories-item">
                          <ul>
                            <li><a href>Đèn trợ sáng ô tô</a></li>
                            <li><a href>Ắc quy xe hơi</a></li>
                            <li><a href>Body bảo vệ xe hơi</a></li>
                            <li><a href>Nắp chụp trang trí ô tô</a></li>
                            <li><a href>Hệ thống phanh xe</a></li>
                            <li><a href>Điều hòa xe hơi</a></li>
                            <li><a href>Thiết bị lọc nhiên liệu</a></li>
                            <li><a href>Thiết bị lọc nhớt</a></li>
                            <li><a href>Bugi xe hơi</a></li>
                            <li><a href>Bộ đánh lửa xe ô tô</a></li>
                            <li><a href>Hệ thống định vị</a></li>
                            <li><a href>Bộ dụng cụ sữa chữa</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Automotive-electronics">
                        <a href>Đồ điện tử dành cho ô tô</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Automotive-electronics-item">
                          <ul>
                            <li><a href>Camera xe hơi</a></li>
                            <li><a href>Thiết bị định vị GPS</a></li>
                            <li><a href>Phụ kiện điện tử xe hơi</a></li>
                            <li><a href>Bộ chuyển đổi âm thanh</a></li>
                            <li><a href>Thiết bị kỹ thuật số xe hơi</a></li>
                            <li><a href>Camera hành trình</a></li>
                            <li><a href>Bộ khuếch đại âm thanh</a></li>
                            <li><a href>Camera lùi</a></li>
                            <li><a href>Phụ kiện âm thanh &amp; hình ảnh</a></li>
                            <li><a href>Phụ kiện điện thoại trên xe</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Automotive-lubricants-additives">
                        <a href>Dầu nhớt &amp; phụ gia ô tô</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Automotive-lubricants-additives-item">
                          <ul>
                            <li><a href>Dầu nhớt động cơ</a></li>
                            <li><a href>Nước mát</a></li>
                            <li><a href>Nước vệ sinh kính chắn gió</a></li>
                            <li><a href>Nước làm sạch động cơ</a></li>
                            <li><a href>Chất phụ gia động cơ</a></li>
                            <li><a href>Dầu phanh</a></li>
                            <li><a href>Nước xả cho xe</a></li>
                            <li><a href>Mỡ &amp; dầu nhờn</a></li>
                            <li><a href>Nhớt hộp số</a></li>
                            <li><a href>Thiết bị đo nhớt</a></li>
                            <li><a href>Chất vệ sinh máy lạnh</a></li>
                            <li><a href>Keo chuyên dụng</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Motobike-accessories">
                        <a href>Phụ tùng xe máy</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Motobike-accessories-item">
                          <ul>
                            <li><a href>Đèn xe máy</a></li>
                            <li><a href>Khung bảo vệ xe máy</a></li>
                            <li><a href>Gương xe</a></li>
                            <li><a href>Chân chống &amp; phụ kiện</a></li>
                            <li><a href>Lọc gió và nhiên liệu</a></li>
                            <li><a href>Khung &amp; thân xe máy</a></li>
                            <li><a href>Phuộc nhún</a></li>
                            <li><a href>Ắc quy xe máy</a></li>
                            <li><a href>Đèn led xe máy</a></li>
                            <li><a href>Đèn trợ sáng</a></li>
                            <li><a href>Pô xe</a></li>
                            <li><a href>Lọc gió xe máy</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Protective-gear-riding-motorbike">
                        <a href>Đồ bảo hộ khi đi xe máy</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Protective-gear-riding-motorbike-item">
                          <ul>
                            <li><a href>Mũ bảo hiểm</a></li>
                            <li><a href>Áo mưa</a></li>
                            <li><a href>Phụ kiện mũ bảo hiểm</a></li>
                            <li><a href>Nón bảo hiểm full face</a></li>
                            <li><a href>Găng tay lái xe</a></li>
                            <li><a href>Giầy đi xe máy</a></li>
                            <li><a href>Áo khoát chuyên dụng</a></li>
                            <li><a href>Khẩu trang</a></li>
                            <li><a href>Bảo vệ cổ</a></li>
                            <li><a href>Áo giáp</a></li>
                            <li><a href>Bảo vệ đầu gối</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Motorcycle-accessories-toys">
                        <a href>Phụ kiện &amp; đồ chơi xe máy</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Motorcycle-accessories-toys-item">
                          <ul>
                            <li><a href>Decal trang trí xe máy</a></li>
                            <li><a href>Bọc yên xe máy</a></li>
                            <li><a href>Khung biển số xe máy</a></li>
                            <li><a href>Baga xe máy</a></li>
                            <li><a href>Bạt trùm xe máy</a></li>
                            <li><a href>Kính chắn gió xe máy</a></li>
                            <li><a href>Ốc vít &amp; phụ kiện trang trí xe máy</a></li>
                            <li><a href>Baga hành lý xe máy</a></li>
                            <li><a href>Yên xe máy</a></li>
                            <li><a href>Tựa lưng xe máy</a></li>
                            <li><a href>Khóa bảo vệ xe máy</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Motorcycle-lubricants-additives">
                        <a href>Dầu nhớt &amp; phụ gia xe máy</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Motorcycle-lubricants-additives-item">
                          <ul>
                            <li><a href>Dầu động cơ</a></li>
                            <li><a href>Dầu hộp số</a></li>
                            <li><a href>Nước làm mát</a></li>
                            <li><a href>Dầu bôi trơn dung môi</a></li>
                            <li><a href>Mỡ bôi trơn</a></li>
                            <li><a href>Dầu thắng</a></li>
                            <li><a href>Chất tẩy rửa xe</a></li>
                            <li><a href>Dầu nhớt phuộc nhún</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Motorcycle-wheel-cover-Wheels">
                        <a href>Vỏ ruột bánh xe máy &amp; Mâm xe</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Motorcycle-wheel-cover-Wheels-item">
                          <ul>
                            <li><a href>Lốp &amp; Ruột xe máy</a></li>
                            <li><a href>Bộ bánh, lốp xe máy</a></li>
                            <li><a href>Mâm, vành xe máy</a></li>
                            <li><a href>Đùm xe máy</a></li>
                            <li><a href>Dán vành &amp; Trang trí bánh</a></li>
                            <li><a href>Phụ kiện bánh xe máy</a></li>
                            <li><a href>Vít lốp xe</a></li>
                            <li><a href>Nắp van xe</a></li>
                            <li><a href>Vòng bi đệm lốp xe</a></li>
                            <li><a href>Trục &amp; đệm phuộc xe máy</a></li>
                            <li><a href>Bộ phận khác cho lốp &amp; mâm xe</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* end catetory-2 */}
                </li>
              </ul>
            </div>
            {/* end catetorys-1 */}
          </div>
        </div>
      </div>
        )
    }
}