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
              Danh m???c 
              <span className="ionic-cts">
                <ion-icon name="chevron-down-outline" />
              </span>
            </div>
            <div className="categorys-1">
              <ul>
                <li className="electronic-device">
                  <a href>
                    <span>
                      Thi???t B??? ??i???n T???
                    </span>
                    <div className="icon-nav">
                      <ion-icon name="chevron-forward-outline" />
                    </div>
                  </a>
                  <div className="catetory-2 electronic-device-item">
                    <ul>
                      <li>
                        <a href>??i???n tho???i di ?????ng </a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                      </li>
                      <li>
                        <a href>M??y t??nh b???ng</a>
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
                            <li><a href>Laptop c?? b???n </a></li>
                            <li><a href>Laptop ch??i game </a></li>
                            <li><a href>D??ng 2 trong 1</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Desktop-computer">
                        <a href>M??y t??nh ????? b??n</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Desktop-computer-item">
                          <ul>
                            <li><a href>M??y t??nh nguy??n b??? </a></li>
                            <li><a href>M??y t??nh ????? b??n ch??i game</a></li>
                            <li><a href>M??y t??nh t??? r??p</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Sound">
                        <a href>??m thanh</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3  Sound-item">
                          <ul>
                            <li><a href>C??c lo???i t???i nghe</a></li>
                            <li><a href>Loa di ?????ng </a></li>
                            <li><a href>??m thanh t???i nh??</a></li>
                            <li><a href>Thi???t b??? Audio chuy??n nghi???p </a></li>
                            <li><a href>Thi???t b??? DJ</a></li>
                            <li><a href>M??y ?????c ????a than</a></li>
                            <li><a href>Ph??? ki???n tai nghe</a></li>
                            <li><a href>Ph??? ki???n loa di ?????ng </a></li>
                            <li><a href>Ph??? ki???n ??m thanh t???i nh??</a></li>
                            <li><a href>Ph??? ki???n ??m thanh chuy??n nghi???p </a></li>
                            <li><a href>Thi???t b??? ??m thanh di ?????ng </a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Surveillance-camera">
                        <a href>Camera gi??m s??t</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Surveillance-camera-item">
                          <ul>
                            <li><a href>Camera IP k???t n???i internet</a></li>
                            <li><a href>Camera an ninh CCTV</a></li>
                            <li><a href>H??? th???ng an ninh IP</a></li>
                            <li><a href>H??? th???ng an ninh CCTV</a></li>
                            <li><a href>Camera ch???ng ch???m</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Digital-camera">
                        <a href>M??y ???nh k??? thu???t s???</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Digital-camera-item">
                          <ul>
                            <li><a href>M??y ???nh DSLR</a></li>
                            <li><a href>M??y ???nh kh??ng g????ng l???t</a></li>
                            <li><a href>M??y ???nh du l???ch </a></li>
                            <li><a href>M??y ???nh si??u zoom</a></li>
                            <li><a href>M??y bay camera</a></li>
                            <li><a href>M??y ch???p l???y ngay &amp; ph??? ki???n</a></li>
                            <li><a href>???ng k??nh</a></li>
                            <li><a href>???ng nh??m </a></li>
                            <li><a href>C??c lo???i m??y ???nh kh??c, Ph??? ki???n, Camera Mini kh??ng d??y Joshe live</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Camcorders-Video-Cameras">
                        <a href>M??y quay phim &amp; M??y quay</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Camcorders-Video-Cameras-item">
                          <ul>
                            <li><a href>Camera th??? thao &amp; H??nh ?????ng </a></li>
                            <li><a href>M??y quay phim</a></li>
                            <li><a href>M??y quay phim chuy??n nghi???p </a></li>
                            <li><a href>Camera 360 </a></li>
                            <li><a href>M??y quay d?????i n?????c</a></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href>M??n h??nh vi t??nh</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                      </li>
                      <li className="Printer">
                        <a href>M??y in</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Printer-item">
                          <ul>
                            <li><a href>M??y in</a></li>
                            <li><a href>M??y Scan</a></li>
                            <li><a href>M??y fax</a></li>
                            <li><a href>M??y in 3D</a></li>
                            <li><a href>M???c m??y in</a></li>
                            <li><a href>B??? nh??? m??y in</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Smart-watch">
                        <a href>?????ng h??? th??ng minh</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Smart-watch-item">
                          <ul>
                            <li><a href>?????ng h??? th??ng minh</a></li>
                            <li><a href>?????ng h??? th??ng minh tr??? em</a></li>
                            <li><a href>?????ng h??? th??ng minh thi???t k???</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Game-machine">
                        <a href>M??y ch??i game</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Game-machine-item">
                          <ul>
                            <li><a href>M??y ch??i game</a></li>
                            <li><a href>Tr?? ch??i m??y console</a></li>
                            <li><a href>Tay nghe ch??i game</a></li>
                            <li><a href>???p l??ng &amp; Bao da m??y t??nh b???ng</a></li>
                            <li><a href>Mi???ng d??n m??n h??nh ??i???n tho???i</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* end catetory-2 */}
                </li>
                <li className="electronic-accessories"> <a href>
                    <span>Ph??? Ki???n ??i???n T???</span>
                    <div className="icon-nav">
                      <ion-icon name="chevron-forward-outline" />
                    </div>
                  </a>
                  <div className="catetory-2 electronic-accessories-item">
                    <ul>
                      <li className="Mobile-accessories">
                        <a href>Ph??? ki???n di ?????ng </a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Mobile-accessories-item">
                          <ul>
                            <li><a href>Pin s???c d??? ph??ng </a></li>
                            <li><a href>C??p &amp; Dock s???c </a></li>
                            <li><a href>B??? s???c c?? d??y</a></li>
                            <li><a href>B??? s???c kh??ng d??y </a></li>
                            <li><a href>???p l??ng &amp; Bao da ??i???n tho???i</a></li>
                            <li><a href>???p l??ng &amp; Bao da m??y t??nh b???ng </a></li>
                            <li><a href>Mi???ng d??n m??n h??nh ??i???n tho???i </a></li>
                            <li><a href>G???y ch???p ???nh</a></li>
                            <li><a href>S???c tr??n xe h??i</a></li>
                            <li><a href>Sim &amp; Th??? c??o</a></li>
                            <li><a href>Dock s???c &amp; Gi?? ?????</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Smart-device">
                        <a href>Thi???t b??? th??ng minh</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Smart-device-item">
                          <ul>
                            <li><a href>?????ng h??? th??ng minh v?? ph??? ki???n</a></li>
                            <li><a href>Thi???t b??? theo d??i v???n ?????ng &amp; Ph??? ki???n</a></li>
                            <li><a href>Loa th??ng minh</a></li>
                            <li><a href>C??ng t???c th??ng minh </a></li>
                            <li><a href>M???t k??nh th??ng minh </a></li>
                            <li><a href>Nh???n th??ng minh</a></li>
                            <li><a href>Ph??? ki???n thi???t b??? th???c t??? ???o </a></li>
                            <li><a href>Thi???t b??? th???c t??? ???o </a></li>
                            <li><a href>Thi???t b??? ??i???u khi???n qua c??? ch???</a></li>
                            <li><a href>Thi???t b??? gi??m s??t th??ng minh</a></li>
                            <li><a href>Thi???t b??? streaming</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Digital-device">
                        <a href>Thi???t b??? s???</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Digital-device-item">
                          <ul>
                            <li><a href>B??t laser</a></li>
                            <li><a href>M??y do kim lo???i</a></li>
                            <li><a href>Kim t??? ??i???n &amp; M??y th??ng d???ch</a></li>
                            <li><a href>B??? s???c ??a n??ng</a></li>
                            <li><a href>B???ng v??? </a></li>
                            <li><a href>B??? ????m</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Camera-accessories">
                        <a href>Ph??? ki???n M??y ???nh</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Camera-accessories-item">
                          <ul>
                            <li><a href>Balo m??y ???nh</a></li>
                            <li><a href>Pin m??y ???nh</a></li>
                            <li><a href>S???c pin m??y ???nh</a></li>
                            <li><a href>Tay c???m ch???ng rung</a></li>
                            <li><a href>TriPods &amp; MonoPods</a></li>
                            <li><a href>B??? s???c </a></li>
                            <li><a href>D??y ??eo</a></li>
                            <li><a href>????n flash</a></li>
                            <li><a href>H???p ch???ng ???m</a></li>
                            <li><a href>K??nh l???c m??y ???nh</a></li>
                            <li><a href>Micro quay phim</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Camera-aircraft-accessories">
                        <a href>Ph??? ki???n m??y bay camera</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Camera-aircraft-accessories-item"> 
                          <ul>
                            <li><a href>T??i ?????ng m??y bay Camera</a></li>
                            <li><a href>Pin m??y bay Camera</a></li>
                            <li><a href>??i???u khi???n t??? xa</a></li>
                            <li><a href>C??nh v?? c??c b??? ph???n kh??c</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Storage-device">
                        <a href>Thi???t b??? l??u tr???</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Storage-device-item"> 
                          <ul>
                            <li><a href>??? c???ng g???n trong</a></li>
                            <li><a href>??? c???ng g???n ngo??i</a></li>
                            <li><a href>Th??? nh???</a></li>
                            <li><a href>Thi???t b??? l??u tr??? m???ng NAS</a></li>
                            <li><a href>USB UTG</a></li>
                            <li><a href>USB</a></li>
                            <li><a href>B??? nh??? ngo??i Macbook</a></li>
                            <li><a href>??? c???ng SSD g???n trong</a></li>
                            <li><a href>??? c???ng SSD g???n ngo??i</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Computer-accessories">
                        <a href>Ph??? ki???n m??y t??nh</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Computer-accessories-item"> 
                          <ul>
                            <li><a href>Ph??? ki???n Macbook</a></li>
                            <li><a href>B??n ph??m</a></li>
                            <li><a href>Chu???t</a></li>
                            <li><a href>Wedcam</a></li>
                            <li><a href>????? t???n nhi???t</a></li>
                            <li><a href>??? ????a r???i</a></li>
                            <li><a href>Pin laptop</a></li>
                            <li><a href>Ph???n m???m</a></li>
                            <li><a href>Mi???ng l??t chu???t</a></li>
                            <li><a href>Decal d??n</a></li>
                            <li><a href>USB hub</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="PC-accessories">
                        <a href>Linh ki???n m??y t??nh</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 PC-accessories-item">
                          <ul>
                            <li><a href>Bo m???ch ch???</a></li>
                            <li><a href>B??? vi x??? l??</a></li>
                            <li><a href>Card ??m thanh</a></li>
                            <li><a href>Card ????? h???a</a></li>
                            <li><a href>RAM m??y t??nh</a></li>
                            <li><a href>Case m??y t??nh</a></li>
                            <li><a href>H??? Th???ng L??m M??t B???ng N?????c</a></li>
                            <li><a href>M??y t??nh m???t Board</a></li>
                            <li><a href>Ngu???n m??y t??nh</a></li>
                            <li><a href>??? ????a quang</a></li>
                            <li><a href>Qu???t (cho Case)</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Lens-Accessories">
                        <a href>Ph??? ki???n ???ng k??nh</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Lens-Accessories-item">
                          <ul>
                            <li><a href>Loa che n???ng</a></li>
                            <li><a href>Thi???t b??? v??? sinh ???ng k??nh</a></li>
                            <li><a href>N???p ???ng k??nh</a></li>
                            <li><a href>K??nh l???c</a></li>
                            <li><a href>T??i ?????ng ???ng k??nh</a></li>
                            <li><a href>B??? chuy???n ?????i</a></li>
                            <li><a href>V??ng h??? tr??? l???y n??t</a></li>
                            <li><a href>H???p che n???ng ???ng k??nh</a></li>
                            <li><a href>???ng t??ng ti??u c???</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Network-equipment">
                        <a href>Thi???t b??? m???ng </a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Network-equipment-item">
                          <ul>
                            <li><a href>Router</a></li>
                            <li><a href>??i???m truy c???p m???ng</a></li>
                            <li><a href>Switch</a></li>
                            <li><a href>Card m???ng</a></li>
                            <li><a href>B??? thu s??ng Wifi</a></li>
                            <li><a href>Modems</a></li>
                            <li><a href>B??? khu???ch ?????i wifi</a></li>
                            <li><a href>Wifi Modems</a></li>
                            <li><a href>Modem USB</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Gaming-accessories">
                        <a href>Ph??? ki???n ch??i game </a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Gaming-accessories-item">
                          <ul>
                            <li><a href>Tay c???m ch??i game</a></li>
                            <li><a href>???p l??ng &amp; bao da m??y t??nh b???ng</a></li>
                            <li><a href>K??? treo &amp; Ch??n ?????</a></li>
                            <li><a href>C??p &amp; B??? s???c</a></li>
                            <li><a href>M?? h??nh t????ng t??c ch??i game</a></li>
                            <li><a href>Mi???ng d??n m??n h??nh ??i???n tho???i</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* end catetory-2 */}
                </li>
                <li className="TVs-Household-Electrical-Appliances"><a href>
                    <span>TV &amp; Thi???t B??? ??i???n Gia D???ng</span>
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
                            <li><a href>Tivi th??ng minh</a></li>
                            <li><a href>Tivi k??? thu???t s???</a></li>
                            <li><a href>Tivi Analog</a></li>
                            <li><a href>Video</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Small-household-electricity">
                        <a href>??i???n gia d???ng nh???</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Small-household-electricity-item">
                          <ul>
                            <li><a href>Thi???t b??? l??m m??t</a></li>
                            <li><a href>????? gia d???ng nh???</a></li>
                            <li><a href>????? gia d???ng nh?? b???p</a></li>
                            <li><a href>Ph??? ki???n ????? gia d???ng</a></li>
                            <li><a href>????? gia d???ng ch??m s??c c?? nh??n</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Large-household-electricity">
                        <a href>??i???n gia d???ng l???n</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Large-household-electricity-item">
                          <ul>
                            <li><a href>M??y l???nh</a></li>
                            <li><a href>T??? l???nh</a></li>
                            <li><a href>T??? ????ng</a></li>
                            <li><a href>M??y r???a ch??n</a></li>
                            <li><a href>M??y s???y ch??n d??a</a></li>
                            <li><a href>B???p ??i???n</a></li>
                            <li><a href>C??y n?????c n??ng l???nh</a></li>
                            <li><a href>H??? th???ng l???c n?????c u???ng</a></li>
                            <li><a href>M??y gi???t</a></li>
                            <li><a href>M??y s???y</a></li>
                            <li><a href>M??y gi???t - s???y</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="TV-accessories">
                        <a href>Ph??? ki???n tivi</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* end catetory-2 */}
                </li>
                <li className="Health-Beauty"><a href>
                    <span>S???c Kh???e &amp; L??m ?????p</span>
                    <div className="icon-nav">
                      <ion-icon name="chevron-forward-outline" />
                    </div>
                  </a>
                  <div className="catetory-2 Health-Beauty-item">
                    <ul>
                      <li className="Skin-Care">
                        <a href>Ch??m s??c da</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Skin-Care-item">
                          <ul>
                            <li><a href>D?????ng Da Chuy??n S??u</a></li>
                            <li><a href>M???t N??? L???t &amp; T???y T??? B??o</a></li>
                            <li><a href>S???a R???a M???t</a></li>
                            <li><a href>N?????c Hoa H???ng</a></li>
                            <li><a href>Tinh Ch???t D?????ng Da Chuy??n S??u</a></li>
                            <li><a href>Tinh Ch???t D?????ng Da</a></li>
                            <li><a href>Kem D?????ng ???m </a></li>
                            <li><a href>D?????ng M??i</a></li>
                            <li><a href>??i???u Tr??? M???n</a></li>
                            <li><a href>Kem M???t</a></li>
                            <li><a href>Kem Ch???ng N???ng</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Make-up">
                        <a href>Trang ??i???m</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Make-up-item ">
                          <ul>
                            <li><a href>M???t</a></li>
                            <li><a href>Mascara</a></li>
                            <li><a href>M???t</a></li>
                            <li><a href>Kem N???n BB</a></li>
                            <li><a href>Kem N???n Trang ??i???m</a></li>
                            <li><a href>Ph???n Ph???</a></li>
                            <li><a href>Ph???n M??</a></li>
                            <li><a href>M??i</a></li>
                            <li><a href>Ph??? Ki???n Trang ??i???m</a></li>
                            <li><a href>T???y Trang</a></li>
                            <li><a href>S??n M??ng Tay</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Beauty-instruments">
                        <a href>D???ng c??? l??m ?????p</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Beauty-instruments-item">
                          <ul>
                            <li><a href>M??y Gi???m C??n</a></li>
                            <li><a href>D???ng C??? M??t Xa Ch??n</a></li>
                            <li><a href>D???ng C??? T???y L??ng/T??c</a></li>
                            <li><a href>S???n Ph???m Spa</a></li>
                            <li><a href>D???ng C??? Ch??m S??c C?? Th???</a></li>
                            <li><a href>Ch??m S??c M???t</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Body-care">
                        <a href>Ch??m s??c c?? th???</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Body-care-item">
                          <ul>
                            <li><a href>S???a T???m</a></li>
                            <li><a href>Mu???i T???m &amp; S???a T???m T???o B???t</a></li>
                            <li><a href>T???y T??? B??o Ch???t</a></li>
                            <li><a href>S???a D?????ng Th???</a></li>
                            <li><a href>Ph??? Ki???n Ph??ng T???m</a></li>
                            <li><a href>C???i Thi???n &amp; Ch??m S??c C?? Th???</a></li>
                            <li><a href>Tinh D???u T???m</a></li>
                            <li><a href>Ch??m S??c Ng???c</a></li>
                            <li><a href>Ch??m S??c Tay</a></li>
                            <li><a href>Ch??m S??c Ch??n</a></li>
                            <li><a href>T???y L??ng</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Hair-care">
                        <a href>Ch??m s??c t??c</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Hair-care-item">
                          <ul>
                            <li><a href>D???u G???i</a></li>
                            <li><a href>D???u X???</a></li>
                            <li><a href>Ch??m S??c T??c Chuy??n S??u</a></li>
                            <li><a href>T???o Ki???u T??c</a></li>
                            <li><a href>Thu???c Nhu???m T??c</a></li>
                            <li><a href>Ph??? Ki???n Ch??m S??c T??c</a></li>
                            <li><a href>G??i Khuy???n M??i</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Personal-care">
                        <a href>Ch??m s??c c?? nh??n</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Personal-care-item">
                          <ul>
                            <li><a href>Kh??? M??i</a></li>
                            <li><a href>Ch??m S??c R??ng Mi???ng</a></li>
                            <li><a href>V??? Sinh Ph??? N???</a></li>
                            <li><a href>Ch??m S??c Cho Ng?????i Cao Tu???i</a></li>
                            <li><a href>B???o V??? An To??n</a></li>
                            <li><a href>Ch??m S??c M???t</a></li>
                            <li><a href>Ch???ng C??n Tr??ng</a></li>
                            <li><a href>N?????c S??c Mi???ng</a></li>
                            <li><a href>L??m Tr???ng R??ng</a></li>
                            <li><a href>Kem ????nh R??ng</a></li>
                            <li><a href>N?????c R???a Ph??? Khoa</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="For-men">
                        <a href>D??nh cho nam gi???i</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 For-men-item">
                          <ul>
                            <li><a href>T???m &amp; Ch??m S??c C?? Th???</a></li>
                            <li><a href>Kh??? M??i</a></li>
                            <li><a href>Ch??m S??c T??c</a></li>
                            <li><a href>C???o R??u V?? Ch??m S??c</a></li>
                            <li><a href>Ch??m S??c Da M???t</a></li>
                            <li><a href>T???o Ki???u T??c</a></li>
                            <li><a href>Dao C???o</a></li>
                            <li><a href>S???a R???a M???t</a></li>
                            <li><a href>Kem D?????ng ???m Nam</a></li>
                            <li><a href>Tinh Ch???t D?????ng Da</a></li>
                            <li><a href>N?????c Hoa H???ng &amp; X???t Kho??ng</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Perfume">
                        <a href>N?????c hoa</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Perfume-item">
                          <ul>
                            <li><a href>Nam</a></li>
                            <li><a href>N???</a></li>
                            <li><a href>Unisex</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Functional-foods">
                        <a href>Th???c ph???m ch???c n??ng</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Functional-foods-item">
                          <ul>
                            <li><a href>Th???c Ph???m S???c ?????p</a></li>
                            <li><a href>Dinh D?????ng Th??? Thao</a></li>
                            <li><a href>Ki???m So??t C??n N???ng</a></li>
                            <li><a href>Ch??m S??c S???c Kh???e</a></li>
                            <li><a href>Tr???ng Da</a></li>
                            <li><a href>Ch??m S??c Da M???n</a></li>
                            <li><a href>S???c Kh???e Ph??i Nam</a></li>
                            <li><a href>T??ng C??</a></li>
                            <li><a href>Ki???m So??t &amp; ?????t M???</a></li>
                            <li><a href>Tr?? Gi???m C??n</a></li>
                            <li><a href>H??? Tr??? X????ng Kh???p</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Food-for-beauty">
                        <a href>Th???c ph???m cho s???c ?????p</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Food-for-beauty-item">
                          <ul>
                            <li><a href>Kem Ng???c</a></li>
                            <li><a href>G??i Khuy???n M??i</a></li>
                            <li><a href>T??c &amp; M??ng</a></li>
                            <li><a href>D?????ng Da</a></li>
                            <li><a href>Tr???ng da</a></li>
                            <li><a href>Ch??m s??c da m???n</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Sexual-health">
                        <a href>S???c kh???e t??nh d???c</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Sexual-health-item">
                          <ul>
                            <li><a href>Bao Cao Su</a></li>
                            <li><a href>Ch???t B??i Tr??n</a></li>
                            <li><a href>????? Ch??i T??nh D???c</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Medical-equipment">
                        <a href>Thi???t b??? y t???</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Medical-equipment-item">
                          <ul>
                            <li><a href>D???ng C??? S?? C???u</a></li>
                            <li><a href>D???ng C??? Ch??m S??c S???c Kh???e</a></li>
                            <li><a href>C??n &amp; Ph??n T??ch L?????ng M??? C?? Th???</a></li>
                            <li><a href>Thi???t B??? Theo D??i S???c Kh???e</a></li>
                            <li><a href>Ch??m S??c Ch???n Th????ng</a></li>
                            <li><a href>C??c X??t Nghi???m Y T???</a></li>
                            <li><a href>M??y X??ng M??i H???ng</a></li>
                            <li><a href>Thu???c M??? &amp; Kem</a></li>
                            <li><a href>M??y ??o B?????c</a></li>
                            <li><a href>???ng Nghe</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* end catetory-2 */}
                </li>
                <li className="Mother-Baby-Toys">
                  <a href>
                    <span>H??ng M???, B?? &amp; ????? Ch??i</span>
                    <div className="icon-nav">
                      <ion-icon name="chevron-forward-outline" />
                    </div>
                  </a>
                  <div className="catetory-2 Mother-Baby-Toys-item">
                    <ul>
                      <li className="Diapers-Hygiene-Supplies">
                        <a href>T?? b???m &amp; D???ng c??? v??? sinh</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Diapers-Hygiene-Supplies-item">
                          <ul>
                            <li><a href>T?? gi???y</a></li>
                            <li><a href>T?? v???i cho b??</a></li>
                            <li><a href>Kh??n ?????t</a></li>
                            <li><a href>Ch??m s??c thay t??</a></li>
                            <li><a href>Kem v?? d???u thoa</a></li>
                            <li><a href>T??i ?????ng t?? cho b??</a></li>
                            <li><a href>B??n thay t?? cho tr??? s?? sinh</a></li>
                            <li><a href>Mi???ng l??t ch???ng th???m</a></li>
                            <li><a href>Mi???ng l??t t??</a></li>
                            <li><a href>Gh??? ng???i ??i v??? sinh</a></li>
                            <li><a href>Thang b???c cho tr???</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Milk-Baby-Food">
                        <a href>S???a b??? &amp; Th???c ??n cho b??</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Milk-Baby-Food-item">
                          <ul>
                            <li><a href>S???n ph???m s???a cho m???</a></li>
                            <li><a href>S???a cho b?? s?? sinh</a></li>
                            <li><a href>S???a cho tr??? 6-12 th??ng tu???i</a></li>
                            <li><a href>S???a cho tr??? t???p ??i t??? 1-3 tu???i</a></li>
                            <li><a href>S???a cho tr??? t??? 1-3 tu???i</a></li>
                            <li><a href>S???a dinh d?????ng</a></li>
                            <li><a href>S???n ph???m ????? u???ng cho b??</a></li>
                            <li><a href>Ng?? c???c cho b??</a></li>
                            <li><a href>B??nh quy cho b??</a></li>
                            <li><a href>Th???c ??n d???m cho b??</a></li>
                            <li><a href>B???t ??n d???m</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Kid-fashion">
                        <a href>Th???i trang cho b??</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Kid-fashion-item">
                          <ul>
                            <li><a href>B??? ??o qu???n cho tr??? s?? sinh</a></li>
                            <li><a href>??o li???n qu???n cho tr??? s?? sinh</a></li>
                            <li><a href>Ph??? ki???n cho tr??? s?? sinh</a></li>
                            <li><a href>Qu???n ??o b?? g??i</a></li>
                            <li><a href>?????m b?? g??i</a></li>
                            <li><a href>Gi??y d??p b?? g??i</a></li>
                            <li><a href>Ph??? ki???n b?? g??i</a></li>
                            <li><a href>????? ??i b??i b?? g??i</a></li>
                            <li><a href>Qu???n ??o b?? trai</a></li>
                            <li><a href>Gi??y d??p c???a b?? trai</a></li>
                            <li><a href>Ph??? ki???n b?? trai</a></li>
                            <li><a href>????? b??i b?? trai</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Weaning-Breastfeeding-Supplies">
                        <a href>????? d??ng ??n d???m &amp; B?? s???a</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Weaning-Breastfeeding-Supplies-item">
                          <ul>
                            <li><a href>B??nh s???a ph??? ki???n</a></li>
                            <li><a href>B??nh s???a</a></li>
                            <li><a href>N??m ty</a></li>
                            <li><a href>M??y ti???t tr??ng ??? b??nh s???a</a></li>
                            <li><a href>D???ng c??? h??t s???a</a></li>
                            <li><a href>Ph??? ki???n m??y h??t s???a</a></li>
                            <li><a href>Ch??m s??c n??m v??</a></li>
                            <li><a href>G???i v?? gh??? ????n</a></li>
                            <li><a href>Gh?? ng???i ??n cho b??</a></li>
                            <li><a href>D???ng c??? ch??? bi???n th???c ??n</a></li>
                            <li><a href>????? d??ng ??n d???m cho b??</a></li>
                            <li><a href>Ch??n t???p ??n</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Cars-Seats-Belts">
                        <a href>Xe, gh??? &amp; ??ai ?????u</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Cars-Seats-Belts-item">
                          <ul>
                            <li><a href>?????u d???ng v??ng</a></li>
                            <li><a href>?????u m???m cho b??</a></li>
                            <li><a href>Xe ?????y cao c???p</a></li>
                            <li><a href>Gh??? ng???i ?? t??</a></li>
                            <li><a href>N??i ch??i</a></li>
                            <li><a href>D???ng c??? t???p ??i - gh??? rung</a></li>
                            <li><a href>Khung t???p ??i cho b??</a></li>
                            <li><a href>Gh??? xe ?????p r?? mo??c em b??</a></li>
                            <li><a href>T??i cho b??</a></li>
                            <li><a href>H??nh l?? cho b??</a></li>
                            <li><a href>D??y ??ai an to??n cho b??</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Bedroom-furniture">
                        <a href>????? d??ng ph??ng ng???</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Bedroom-furniture-item">
                          <ul>
                            <li><a href>n???m cho tr???</a></li>
                            <li><a href>ch??n cho b??</a></li>
                            <li><a href>????? d??ng cho n??i</a></li>
                            <li><a href>????? d??ng ??i ng???</a></li>
                            <li><a href>ch??n b??ng ra gi?????ng cho tr???</a></li>
                            <li><a href>ph??? ki???n ph??ng ng??? tr??? s?? sinh</a></li>
                            <li><a href>n???i th???t ph??ng ng??? cho b??</a></li>
                            <li><a href>s???n ph???m c??i b?? s?? sinh</a></li>
                            <li><a href>n??i tr??? s?? sinh</a></li>
                            <li><a href>r????ng t??? ng??n k??o</a></li>
                            <li><a href>????? d??ng s???p x???p</a></li>
                            <li><a href>trang tr?? ph??ng cho tr???</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Bath-Body-Care">
                        <a href>T???m g???i &amp; Ch??m s??c c?? th??? </a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Bath-Body-Care-item">
                          <ul>
                            <li><a href>D?????ng da cho b?? s?? sinh</a></li>
                            <li><a href>D???u g???i tr??? s?? sinh</a></li>
                            <li><a href>X?? ph??ng s???a r???a m???t cho b??</a></li>
                            <li><a href>S???n ph???m ch??m s??c r??ng mi???ng b?? s?? sinh</a></li>
                            <li><a href>Ch???u t???m ph??? ki???n</a></li>
                            <li><a href>Kh??n t???m - kh??n cho??ng</a></li>
                            <li><a href>Ch???ng n???ng cho tr???</a></li>
                            <li><a href>Tinh d???u t???m</a></li>
                            <li><a href>D???ng c??? ch??m s??c c?? th??? tr??? em</a></li>
                            <li><a href>Th???m t???m ch???ng tr?????t cho b??</a></li>
                            <li><a href>Bong b??ng t???m cho b??</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Baby-toys">
                        <a href>????? ch??i cho b??</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Baby-toys-item">
                          <ul>
                            <li><a href>????? ch??i b??? s??u t???p nh??n v???t</a></li>
                            <li><a href>B??? s??u t???p nh??n v???t</a></li>
                            <li><a href>M?? h??nh mini cho b??</a></li>
                            <li><a href>Th??? c??ng ngh??? thu???t</a></li>
                            <li><a href>????? ch??i l???p r??p x??y d???ng</a></li>
                            <li><a href>B??p b?? nh?? b??p b??</a></li>
                            <li><a href>????? ch??i h??a trang</a></li>
                            <li><a href>????? ch??i gi??o d???c tr??? em</a></li>
                            <li><a href>Tr?? ch??i truy???n th???ng</a></li>
                            <li><a href>S??? th??ch &amp; Gi???i tr??</a></li>
                            <li><a href>????? ch??i nh???i b??ng</a></li>
                            <li><a href>????? d??ng ti???c cho b??</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Electronic-Toys-Remote-Controls">
                        <a href>????? ch??i ??i???n t??? &amp; ??i???u khi???n t??? xa</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Electronic-Toys-Remote-Controls-item">
                          <ul>
                            <li><a href>Gi???i tr?? video game</a></li>
                            <li><a href>B??? m?? h??nh xe l???a ???????ng ray</a></li>
                            <li><a href>M??y bay drone tr???c th??ng 4 c??nh</a></li>
                            <li><a href>Xe m?? h??nh die-cast</a></li>
                            <li><a href>Xe m?? h??nh ??i???u khi???n t??? xa</a></li>
                            <li><a href>Xe m?? h??nh ??i???u khi???n t??? xa pin</a></li>
                            <li><a href>Robot nh??n v???t m?? h??nh ??i???u khi???n</a></li>
                            <li><a href>M??y bay tr???c th??ng</a></li>
                            <li><a href>B??? ????m cho b??</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Sports-outdoor-toys">
                        <a href>????? ch??i th??? thao v?? ngo??i tr???i</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Sports-outdoor-toys-item">
                          <ul>
                            <li><a href>????? ch??i h??? b??i</a></li>
                            <li><a href>tr?? ch??i th??? thao cho b??</a></li>
                            <li><a href>????? ch??i ngo??i tr???i cho b??</a></li>
                            <li><a href>????? ch??i b???n s??ng</a></li>
                            <li><a href>nh?? banh ph??? ki???n</a></li>
                            <li><a href>????? ch??i tr??n kh??ng</a></li>
                            <li><a href>di???u chong ch??ng</a></li>
                            <li><a href>nh?? h??i</a></li>
                            <li><a href>yoyo &amp; kendama</a></li>
                            <li><a href>b??? ????? ch??i v?? thi???t b??? cho s??n ch??i</a></li>
                            <li><a href>l???u cho b??</a></li>
                            <li><a href>nh?? ch??i cho b??</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Toys-retarded-babies">
                        <a href>????? ch??i cho b?? ch???m ch???ng</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Toys-retarded-babies-item">
                          <ul>
                            <li><a href>Th???m ch??i cho tr???</a></li>
                            <li><a href>????? ch??i x???p kh???i</a></li>
                            <li><a href>????? ch??i b???n t???m cho b??</a></li>
                            <li><a href>????? ch??i treo c??i cho b??</a></li>
                            <li><a href>????? ch??i gi??o d???c</a></li>
                            <li><a href>????? ch??i ??m thanh cho b??</a></li>
                            <li><a href>????? ch??i k??o ?????y d??y c??t</a></li>
                            <li><a href>????? ch??i th??? h??nh kh???i</a></li>
                            <li><a href>????? ch??i l??c l???c x??c x???c</a></li>
                            <li><a href>B??? ????? ch??i v???n ?????ng trong nh??</a></li>
                            <li><a href>????? ch??i nh??n v?? b???p b??nh trong nh?? cho b??</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Educational-toys">
                        <a href>????? ch??i gi??o d???c</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Educational-toys-item">
                          <ul>
                            <li><a href>m??y t??nh gi??o d???c</a></li>
                            <li><a href>????? ch??i k??? n??ng c?? b???n</a></li>
                            <li><a href>flash cards cho b??</a></li>
                            <li><a href>?????a l?? cho b??</a></li>
                            <li><a href>????? ch??i ?????c vi???t</a></li>
                            <li><a href>m?? h??nh h??? m???t tr???i</a></li>
                            <li><a href>????? ch??i g??? h???c t???p</a></li>
                            <li><a href>????? ch??i nghi??n c???u khoa h???c</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* end catetory-2 */}
                </li>
                <li className="Supermarket-Grocery"><a href>
                    <span>Si??u Th??? T???p H??a</span>
                    <div className="icon-nav">
                      <ion-icon name="chevron-forward-outline" />
                    </div>
                  </a>
                  <div className="catetory-2 Supermarket-Grocery-item">
                    <ul>
                      <li className="Pasteurized-Milk-Milk-Powder">
                        <a href>S???a ti???t tr??ng &amp; S???a b???t </a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Pasteurized-Milk-Milk-Powder-item">
                          <ul>
                            <li><a href>S???a ti???t tr??ng</a></li>
                            <li><a href>S???a b???t</a></li>
                            <li><a href>S???a ?????c</a></li>
                            <li><a href>B???t kem</a></li>
                            <li><a href>S???a H????ng V???</a></li>
                            <li><a href>S???a ?????u n??nh</a></li>
                            <li><a href>S???a ?????u N??nh Ti???t Tr??ng</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Drinks-Beer-Alcohol">
                        <a href>????? u???ng,Bia,R?????u</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Drinks-Beer-Alcohol-item">
                          <ul>
                            <li><a href>Bia</a></li>
                            <li><a href>Cider</a></li>
                            <li><a href>N?????c t??ng l???c, th??? thao</a></li>
                            <li><a href>N?????c ng???t</a></li>
                            <li><a href>C?? ph??</a></li>
                            <li><a href>Tr??</a></li>
                            <li><a href>B???t socola</a></li>
                            <li><a href>????? u???ng kh??c</a></li>
                            <li><a href>N?????c</a></li>
                            <li><a href>N?????c Tr??i C??y</a></li>
                            <li><a href>B???t pha n?????c tr??i c??y</a></li>
                            <li><a href>Siro</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Dairy-Food-Cold-Food">
                        <a href>Th???c ph???m t??? s???a &amp; ????? l???nh</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Dairy-Food-Cold-Food-item">
                          <ul>
                            <li><a href>B??, B?? th???c v???t &amp; B?? ph???t</a></li>
                            <li><a href>Ph?? mai</a></li>
                            <li><a href>S???a chua</a></li>
                            <li><a href>Nguy??n li???u n???u ??n</a></li>
                            <li><a href>M??n tr??ng mi???ng l???nh</a></li>
                            <li><a href>N?????c ??p &amp; Th???c u???ng l??m l???nh</a></li>
                            <li><a href>Kem t????i</a></li>
                            <li><a href>Kim chi, D??a chua &amp; Chutney</a></li>
                            <li><a href>Th???c ph???m ch??? bi???n s???n</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Canned-Packaged-Dried-Food">
                        <a href>????? h???p, Th???c ph???m ????ng g??i &amp; S???y kh??</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Canned-Packaged-Dried-Food-item">
                          <ul>
                            <li><a href>Th???c Ph???m ????ng H???p</a></li>
                            <li><a href>M?? ??n li???n</a></li>
                            <li><a href>M?? ??</a></li>
                            <li><a href>Th???c Ph???m Ch??? Bi???n S???n</a></li>
                            <li><a href>?????u v?? C??c Lo???i Ng?? C???c</a></li>
                            <li><a href>N??ng Ph???m Kh??</a></li>
                            <li><a href>Th???c ph???m ????ng l???</a></li>
                            <li><a href>????? ??n s???n</a></li>
                            <li><a href>C??c lo???i h???t</a></li>
                            <li><a href>N?????c s???t c??c lo???i</a></li>
                            <li><a href>Gia v??? &amp; Rau th??m s???y kh??</a></li>
                            <li><a href>T????ng ???t</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Candy-Chocolate-Snacks">
                        <a href>K???o &amp; Socola &amp; ????? ??n v???t</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Candy-Chocolate-Snacks-item">
                          <ul>
                            <li><a href>Socola vi??n &amp; Socola h???p</a></li>
                            <li><a href>K???o b???c h??</a></li>
                            <li><a href>K???o</a></li>
                            <li><a href>B??nh quy</a></li>
                            <li><a href>B??nh crackers</a></li>
                            <li><a href>B??nh cookies</a></li>
                            <li><a href>Khoai t??y chi??n</a></li>
                            <li><a href>C??c lo???i h???t &amp; Tr??i c??y kh??</a></li>
                            <li><a href>Tr??i c??y v?? rau c??? s???y</a></li>
                            <li><a href>Snack b???p</a></li>
                            <li><a href>Snack m???n v?? b??nh xo???n</a></li>
                            <li><a href>Snack rong bi???n</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Cooking-baking-ingredients">
                        <a href>Nguy??n li???u n???u ??n &amp; l??m b??nh</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Cooking-baking-ingredients-item">
                          <ul>
                            <li><a href>???????ng v?? nguy??n li???u l??m b??nh</a></li>
                            <li><a href>M???t ong</a></li>
                            <li><a href>Th???c Ph???m ????ng H???p</a></li>
                            <li><a href>Ng?? c???c ??n s??ng &amp; B??nh m?? ph???t</a></li>
                            <li><a href>D???u ??n</a></li>
                            <li><a href>G???o</a></li>
                            <li><a href>Th???c ph???m ??n li???n</a></li>
                            <li><a href>M?? v?? b??n</a></li>
                            <li><a href>Mu???i v?? gia v???</a></li>
                            <li><a href>Gia v??? v?? s???t ??n li???n</a></li>
                            <li><a href>S???t n???u ??n v?? ph??? gia</a></li>
                            <li><a href>Nguy??n li???u kh??c</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Paper-house-cleaning">
                        <a href>Gi???y &amp; v??? sinh nh?? c???a</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Paper-house-cleaning-item">
                          <ul>
                            <li><a href>Gi???y v??? sinh</a></li>
                            <li><a href>Kh??n gi???y</a></li>
                            <li><a href>N?????c lau s??n</a></li>
                            <li><a href>N?????c v?? d???ng c??? lau b???p</a></li>
                            <li><a href>Kh??? m??i v?? x???t th??m ph??ng</a></li>
                            <li><a href>Ch???t t???y ph??ng t???m</a></li>
                            <li><a href>Ch???t t???y tr???ng v?? kh??? tr??ng</a></li>
                            <li><a href>D???ng c??? l??m s???ch</a></li>
                            <li><a href>Ch???t th??ng t???c c???ng, ???ng n?????c</a></li>
                            <li><a href>Ch???t t???y ??a n??ng</a></li>
                            <li><a href>V??? sinh c???a s??? c???a k??nh</a></li>
                            <li><a href>Di???t c??n tr??ng</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Kitchen-cleaning">
                        <a href>Lau ch??i v??? sinh nh?? b???p</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Kitchen-cleaning-item">
                          <ul>
                            <li><a href>N?????c r???a ch??n cho m??y</a></li>
                            <li><a href>N?????c r???a ch??n b???ng tay</a></li>
                            <li><a href>Di??m-h???p qu???t</a></li>
                            <li><a href>Bao ?????ng r??c</a></li>
                            <li><a href>Ch??n d??a d??ng m???t l???n</a></li>
                            <li><a href>Gi???y b??ng, Gi???y b???c, Gi???y n?????ng b??nh</a></li>
                            <li><a href>T??i ?????ng th???c ph???m</a></li>
                            <li><a href>H???p ?????ng th???c ph???m</a></li>
                            <li><a href>Pin</a></li>
                            <li><a href>B??ng ????n</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Laundry-utensils">
                        <a href>????? d??ng gi???t gi??</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Laundry-utensils-item">
                          <ul>
                            <li><a href>N?????c gi???t</a></li>
                            <li><a href>B???t gi???t</a></li>
                            <li><a href>N?????c x???</a></li>
                            <li><a href>Ch???t t???y</a></li>
                            <li><a href>Ch???t t???y v???t b???n</a></li>
                            <li><a href>N?????c l??m th??m, n?????c ???i qu???n ??o</a></li>
                            <li><a href>Ch??m s??c ?????c bi???t</a></li>
                            <li><a href>N?????c r???a m??y gi???t</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Pet-accessories">
                        <a href>Ph??? ki???n th?? c??ng</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Pet-accessories-item">
                          <ul>
                            <li><a href>Thi???t b??? h??? c??</a></li>
                            <li><a href>N???m ng???, Th???m &amp; Nh?? th?? c??ng</a></li>
                            <li><a href>L???ng, c??i, c???a nh?? cho th?? c??ng</a></li>
                            <li><a href>Nh?? c??y, b??n c??o m??ng cho m??o</a></li>
                            <li><a href>D???ng c??? ?????ng th???c ??n th?? c??ng</a></li>
                            <li><a href>D???ng c??? v???n chuy???n v?? balo du l???ch</a></li>
                            <li><a href>Ph??? ki???n l??m ?????p</a></li>
                            <li><a href>D??y d???t,v??ng c??? &amp; r??? m??m</a></li>
                            <li><a href>C??t v?? d???ng c??? v??? sinh</a></li>
                            <li><a href>????? ch??i</a></li>
                            <li><a href>H??? tr??? hu???n luy???n ch??</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Food-pet-care">
                        <a href>Th???c ??n v?? ch??m s??c th?? c??ng</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Food-pet-care-item">
                          <ul>
                            <li><a href>Th???c ??n cho m??o</a></li>
                            <li><a href>Th???c ??n cho ch??</a></li>
                            <li><a href>Th???c ??n cho c??</a></li>
                            <li><a href>Th???c ??n cho chim</a></li>
                            <li><a href>Th???c ??n cho b?? s??t</a></li>
                            <li><a href>Th???c ??n cho th?? nh???</a></li>
                            <li><a href>Ch??m s??c r??ng mi???ng v?? s???c kh???e</a></li>
                            <li><a href>Tr??? ve r???n, b??? ch??t</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Fresh-produce">
                        <a href>S???n ph???m t????i s???ng</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Fresh-produce-item">
                          <ul>
                            <li><a href>Rau c??? t????i</a></li>
                            <li><a href>Tr??i C??y</a></li>
                            <li><a href>Th???t T????i S???ng</a></li>
                            <li><a href>H???i S???n T????i S???ng</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* end catetory-2 */}
                </li>
                <li className="Household-Life-Goods"><a href>
                    <span>H??ng Gia d???ng &amp; ?????i s???ng</span>
                    <div className="icon-nav">
                      <ion-icon name="chevron-forward-outline" />
                    </div>
                  </a>
                  <div className="catetory-2 Household-Life-Goods-item">
                    <ul>
                      <li className="Kitchen-Dining-Room">
                        <a href>B???p &amp; Ph??ng ??n</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Kitchen-Dining-Room-item">
                          <ul>
                            <li><a href>N???i &amp; Ch???o</a></li>
                            <li><a href>B??nh n?????c</a></li>
                            <li><a href>B??nh gi??? nhi???t</a></li>
                            <li><a href>Ch???a ????? nh?? b???p &amp; ph??? ki???n</a></li>
                            <li><a href>Dao b???p v?? ph??? ki???n</a></li>
                            <li><a href>????? d??ng u???ng n?????c</a></li>
                            <li><a href>????? d??ng nh?? b???p ?????c bi???t</a></li>
                            <li><a href>D???ng c??? l??m b??nh</a></li>
                            <li><a href>????? d??ng u???ng tr?? &amp; caf??</a></li>
                            <li><a href>D???ng c??? n???u ??n</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="House-repairs">
                        <a href>S???a ch???a nh?? c???a</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 House-repairs-item">
                          <ul>
                            <li><a href>Thi???t b??? ??i???n</a></li>
                            <li><a href>????? d??ng l??m v?????n</a></li>
                            <li><a href>????? kim kh??</a></li>
                            <li><a href>B???o v??? nh?? c???a</a></li>
                            <li><a href>D???ng c??? an to??n lao ?????ng</a></li>
                            <li><a href>S??n &amp; trang tr?? nh??</a></li>
                            <li><a href>D???ng c??? ??i???n ngo??i tr???i &amp; l??m v?????n</a></li>
                            <li><a href>??? c???m ??i???n</a></li>
                            <li><a href>H??? th???ng t?????i n?????c</a></li>
                            <li><a href>H???t gi???ng hoa qu???</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Electric-tools">
                        <a href>D???ng c??? ??i???n</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Electric-tools-item">
                          <ul>
                            <li><a href>M??y khoan</a></li>
                            <li><a href>M??y khoan c???t ??a n??ng</a></li>
                            <li><a href>B??? d???ng c??? c???m tay</a></li>
                            <li><a href>M??y khoan c???t b?? t??ng</a></li>
                            <li><a href>M??y c???m tay ??a n??ng</a></li>
                            <li><a href>M??y m??i</a></li>
                            <li><a href>M??y c??a</a></li>
                            <li><a href>M??y b??o</a></li>
                            <li><a href>S??ng h??i</a></li>
                            <li><a href>M??y b???n ??inh &amp; ghim</a></li>
                            <li><a href>D???ng c??? h??n ti???n</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Hand-tools">
                        <a href>D???ng c??? c???m tay</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Hand-tools-item">
                          <ul>
                            <li><a href>S??ng b???n keo</a></li>
                            <li><a href>Dao &amp; d???ng c??? ??a n??ng</a></li>
                            <li><a href>D???ng c??? lau ch??i</a></li>
                            <li><a href>K??m</a></li>
                            <li><a href>M??y v???n ???c</a></li>
                            <li><a href>M??i, d??a</a></li>
                            <li><a href>B??a</a></li>
                            <li><a href>Ph??? ki???n d???ng c??? c???m tay</a></li>
                            <li><a href>Kho?? l???c gi??c</a></li>
                            <li><a href>B??? tu??p</a></li>
                            <li><a href>C??a</a></li>
                            <li><a href>??ai, keo &amp; h??n</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Bedroom">
                        <a href>Ph??ng ng???</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Bedroom-item">
                          <ul>
                            <li><a href>B??? ch??n ga g???i</a></li>
                            <li><a href>Ga gi?????ng</a></li>
                            <li><a href>G???i</a></li>
                            <li><a href>Ch??n m???n</a></li>
                            <li><a href>Ch??n ch???n g??n</a></li>
                            <li><a href>Ch??n ??i???n</a></li>
                            <li><a href>Ph??? ki???n gi?????ng ng???</a></li>
                            <li><a href>V??? g???i</a></li>
                            <li><a href>Ren ga gi?????ng ch???ng tr?????t</a></li>
                            <li><a href>V??? l??t b???o v??? n???m</a></li>
                            <li><a href>T???m tr???i n???m</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Bathroom">
                        <a href>Ph??ng t???m</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Bathroom-item">
                          <ul>
                            <li><a href>Kh??n t???m</a></li>
                            <li><a href>K??? ph??ng t???m</a></li>
                            <li><a href>Thi????t bi?? pho??ng t????m</a></li>
                            <li><a href>H???p ?????ng gi???y v??? sinh</a></li>
                            <li><a href>Gi?? treo kh??n</a></li>
                            <li><a href>C??n s???c kho???</a></li>
                            <li><a href>Th???m ph??ng t???m</a></li>
                            <li><a href>G????ng ph??ng t???m</a></li>
                            <li><a href>??o cho??ng t???m</a></li>
                            <li><a href>R??m ph??ng t???m</a></li>
                            <li><a href>Ph??? b???n c???u</a></li>
                            <li><a href>Gi?? treo v??i sen</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Lights-Lighting-Equipment">
                        <a href>????n &amp; Thi???t b??? ????n</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Lights-Lighting-Equipment-item">
                          <ul>
                            <li><a href>B??ng ????n</a></li>
                            <li><a href>????n tr???n</a></li>
                            <li><a href>????n t?????ng</a></li>
                            <li><a href>????n b??n</a></li>
                            <li><a href>????n ngo??i tr???i</a></li>
                            <li><a href>????n trang tr??</a></li>
                            <li><a href>Ch???p ????n</a></li>
                            <li><a href>Linh ki???n ????n</a></li>
                            <li><a href>????n chuy??n d???ng</a></li>
                            <li><a href>????n ?????ng</a></li>
                            <li><a href>????n pin &amp; ????n flash</a></li>
                            <li><a href>????n trang tr?? ph??ng t???m</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Home-decoration">
                        <a href>Trang tr?? nh?? c???a</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Home-decoration-item">
                          <ul>
                            <li><a href>Gi???y d??n t?????ng, decal</a></li>
                            <li><a href>Trang tr?? t?????ng</a></li>
                            <li><a href>Ph??? ki???n l??m th??m ph??ng</a></li>
                            <li><a href>Th???m</a></li>
                            <li><a href>?????ng h???</a></li>
                            <li><a href>R??m &amp; M??n c???a</a></li>
                            <li><a href>Tranh &amp; khung ???nh</a></li>
                            <li><a href>C??y &amp; hoa gi???</a></li>
                            <li><a href>L??? &amp; B??nh trang tr??</a></li>
                            <li><a href>??i???m nh???n trang tr??</a></li>
                            <li><a href>B??? n???n trang tr??</a></li>
                            <li><a href>G????ng</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Furniture">
                        <a href>????? n???i th???t</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Furniture-item">
                          <ul>
                            <li><a href>N???m</a></li>
                            <li><a href>T??? qu???n ??o</a></li>
                            <li><a href>B??n l??m vi???c</a></li>
                            <li><a href>T??? s???p x???p gi??y</a></li>
                            <li><a href>N???i th???t ph??ng ng???</a></li>
                            <li><a href>N???i th???t ph??ng kh??ch</a></li>
                            <li><a href>N???i th???t ph??ng l??m vi???c</a></li>
                            <li><a href>N???i th???t b???p &amp; ph??ng ??n</a></li>
                            <li><a href>N???i th???t ph??ng gi???i tr??</a></li>
                            <li><a href>N???i th???t ngo??i tr???i</a></li>
                            <li><a href>N???i th???t h??nh lang &amp; l???i v??o</a></li>
                            <li><a href>T??? ch???a &amp; S???p x???p ?????</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Stationery-crafts">
                        <a href>V??n ph??ng ph???m &amp; th??? c??ng</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Stationery-crafts-item">
                          <ul>
                            <li><a href>Ph??? ki???n tr?????ng h???c &amp; v??n ph??ng</a></li>
                            <li><a href>M??y t??nh h???c sinh</a></li>
                            <li><a href>B??? d???ng c??? h???c t???p</a></li>
                            <li><a href>B??t vi???t c??c lo???i</a></li>
                            <li><a href>Qu?? t???ng &amp; ????? d??ng g??i qu??</a></li>
                            <li><a href>????? th??? c??ng</a></li>
                            <li><a href>D???ng c??? v???</a></li>
                            <li><a href>D???ng c??? may v??</a></li>
                            <li><a href>S???n ph???m t??? gi???y</a></li>
                            <li><a href>Qu?? l??u ni???m</a></li>
                            <li><a href>Gi???y in c??c lo???i</a></li>
                            <li><a href>Th??ng carton</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Books-Musical-Instruments">
                        <a href>S??ch &amp; Nh???c c???</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Books-Musical-Instruments-item">
                          <ul>
                            <li><a href>????n guitar</a></li>
                            <li><a href>Piano &amp; organ di ?????ng</a></li>
                            <li><a href>Ph??? ki???n ??m nh???c</a></li>
                            <li><a href>Nh???c c??? truy???n th???ng</a></li>
                            <li><a href>Tr???ng v?? b??? g??</a></li>
                            <li><a href>S??o c??c lo???i</a></li>
                            <li><a href>Ngh??? thu???t s???ng</a></li>
                            <li><a href>V??n h???c</a></li>
                            <li><a href>Kinh t???</a></li>
                            <li><a href>S??ch Ng??n ng??? h???c &amp; K??? n??ng vi???t</a></li>
                            <li><a href>Th?????ng th???c ?????i s???ng</a></li>
                            <li><a href>S??ch cho cha m???</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Washing-Charging-Equipment">
                        <a href>Thi???t b??? gi???t &amp; l??m s???ch</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Washing-Charging-Equipment-item">
                          <ul>
                            <li><a href>Th??ng r??c &amp; Th??ng t??i ch???</a></li>
                            <li><a href>X?? Nh???a</a></li>
                            <li><a href>Ch???i &amp; C??y lau nh??</a></li>
                            <li><a href>D???ng c??? gi???t ???i</a></li>
                            <li><a href>Gi??? gi???t ???i</a></li>
                            <li><a href>Gi?? ph??i qu???n ??o</a></li>
                            <li><a href>M??c treo &amp; K???p qu???n ??o</a></li>
                            <li><a href>C???u l?? qu???n ??o</a></li>
                            <li><a href>T??i Gi???t &amp; b??ng gi???t</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* end catetory-2 */}
                </li>
                <li className="Womens-Fashion"><a href> 
                    <span>Th???i Trang N???</span>
                    <div className="icon-nav">
                      <ion-icon name="chevron-forward-outline" />
                    </div>
                  </a>
                  <div className="catetory-2 Womens-Fashion-item">
                    <ul>
                      <li>
                        <a href>?????m n???</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                      </li>
                      <li className="Pants-skirts">
                        <a href>Qu???n v?? ch??n v??y</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Pants-skirts-item">
                          <ul>
                            <li><a href>Qu???n d??i v?? qu???n b??</a></li>
                            <li><a href>Jeans</a></li>
                            <li><a href>Ch??n v??y</a></li>
                            <li><a href>Qu???n short</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Womens-shirt">
                        <a href>??o n???</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Womens-shirt-item">
                          <ul>
                            <li><a href>??o kho??c</a></li>
                            <li><a href>??o hoodies</a></li>
                            <li><a href>??o len v?? ??o cardigan</a></li>
                            <li><a href>??o s?? mi</a></li>
                            <li><a href>??o polo</a></li>
                            <li><a href>??o s?? mi ki???u</a></li>
                            <li><a href>??o thun</a></li>
                            <li><a href>??o hai d??y</a></li>
                            <li><a href>??o ki???u n???</a></li>
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
                        <a href>????? ????i v?? gia ????nh</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                      </li>
                      <li className="Pajamas-lingerie">
                        <a href>????? ng??? v?? n???i y</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Pajamas-lingerie-item">
                          <ul>
                            <li><a href>????? ng??? n???</a></li>
                            <li><a href>Qu???n l??t n???</a></li>
                            <li><a href>??o ng???c</a></li>
                            <li><a href>????? l??t ?????nh h??nh</a></li>
                            <li><a href>B??? ????? l??t n???</a></li>
                            <li><a href>Ph??? ki???n ????? l??t</a></li>
                            <li><a href>??o l??t hai d??y</a></li>
                            <li><a href>??o cho??ng n???</a></li>
                            <li><a href>????? l??t g???i c???m</a></li>
                            <li><a href>????? b??i m???t m???nh</a></li>
                            <li><a href>Bikini</a></li>
                            <li><a href>Ph??? ki???n ????? l??t v?? ????? b??i n???</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Womens-Accessories">
                        <a href>Ph??? ki???n n???</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Womens-Accessories-item">
                          <ul>
                            <li><a href>V??? v?? qu???n v??? n???</a></li>
                            <li><a href>Ph??? ki???n t??c n???</a></li>
                            <li><a href>N??n th???i trang n???</a></li>
                            <li><a href>D?? n???</a></li>
                            <li><a href>Th???t l??ng n???</a></li>
                            <li><a href>Ph??? ki???n th???i trang kh??c</a></li>
                            <li><a href>Kh??n cho??ng th???i trang</a></li>
                            <li><a href>G??ng tay n???</a></li>
                            <li><a href>Kh???u trang v???i</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Womens-shoes">
                        <a href>Gi??y n???</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Womens-shoes-item">
                          <ul>
                            <li><a href>Sneakers</a></li>
                            <li><a href>Gi??y cao g??t</a></li>
                            <li><a href>D??p</a></li>
                            <li><a href>Sandals</a></li>
                            <li><a href>Gi??y ????? b???ng</a></li>
                            <li><a href>Gi??y ????? xu???ng</a></li>
                            <li><a href>Gi??y b???t</a></li>
                            <li><a href>Ph??? ki???n gi??y</a></li>
                            <li><a href>Mules</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Baby-girl-costume">
                        <a href>Trang ph???c b?? g??i</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Baby-girl-costume-item">
                          <ul>
                            <li><a href>?????m b?? g??i</a></li>
                            <li><a href>????? l??t &amp; ????? ng???</a></li>
                            <li><a href>Ph??? ki???n t??c</a></li>
                            <li><a href>??o b?? g??i</a></li>
                            <li><a href>Qu???n &amp; Ch??n v??y</a></li>
                            <li><a href>??o kho??c</a></li>
                            <li><a href>N??n</a></li>
                            <li><a href>V??? &amp; Qu???n v???</a></li>
                            <li><a href>D??</a></li>
                            <li><a href>G??ng tay, Kh??n cho??ng, Ph??? ki???n</a></li>
                            <li><a href>Kh???u trang b?? g??i</a></li>
                            <li><a href>??o Hoodies</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Girls-shoes">
                        <a href>Gi??y b?? g??i</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Girls-shoes-item">
                          <ul>
                            <li><a href>D??p &amp;?? Sandals</a></li>
                            <li><a href>Sneakers</a></li>
                            <li><a href>Gi??y ????? b???ng</a></li>
                            <li><a href>Gi??y ??i h???c</a></li>
                            <li><a href>Gi??y b???t</a></li>
                            <li><a href>Ph??? ki???n gi??y</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* end catetory-2 */}
                </li>
                <li className="Mens-clothing"><a href>
                    <span>Th???i Trang Nam</span>
                    <div className="icon-nav">
                      <ion-icon name="chevron-forward-outline" />
                    </div>
                  </a>
                  <div className="catetory-2 Mens-clothing-item">
                    <ul>
                      <li className="Mens-clothing">
                        <a href>Trang ph???c nam</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Mens-clothing-item">
                          <ul>
                            <li><a href>??o thun nam</a></li>
                            <li><a href>??o s?? mi nam</a></li>
                            <li><a href>??o polo nam</a></li>
                            <li><a href>??o kho??c nam</a></li>
                            <li><a href>Qu???n jean nam</a></li>
                            <li><a href>Qu???n d??i nam</a></li>
                            <li><a href>Qu???n short nam</a></li>
                            <li><a href>????? vest nam</a></li>
                            <li><a href>??o hoodie nam</a></li>
                            <li><a href>??o tr??m ?????u &amp; cardigan nam</a></li>
                            <li><a href>????? b??i nam</a></li>
                            <li><a href>Trang ph???c H???i Gi??o</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Mens-shoes">
                        <a href>Gi??y d??p nam</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Mens-shoes-item">
                          <ul>
                            <li><a href>Gi??y sneaker</a></li>
                            <li><a href>D??p &amp; sandal</a></li>
                            <li><a href>Gi??y l?????i</a></li>
                            <li><a href>Gi??y c??ng s???</a></li>
                            <li><a href>Gi??y b???t</a></li>
                            <li><a href>Ph??? ki???n gi??y d??p</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Mens-underwear">
                        <a href>????? l??t nam</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Mens-underwear-item">
                          <ul>
                            <li><a href>Qu???n l??t boxer nam</a></li>
                            <li><a href>Qu???n l??t tam gi??c nam</a></li>
                            <li><a href>????? m???c ng??? nam</a></li>
                            <li><a href>Qu???n l???t khe</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Mens-fashion-accessories">
                        <a href>Ph??? ki???n th???i trang nam</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Mens-fashion-accessories-item">
                          <ul>
                            <li><a href>N??n m?? nam</a></li>
                            <li><a href>Th???t l??ng nam</a></li>
                            <li><a href>T???t v??? nam</a></li>
                            <li><a href>Kh???u trang v???i</a></li>
                            <li><a href>G??ng tay nam</a></li>
                            <li><a href>D??y ??ai qu???n nam</a></li>
                            <li><a href>C?? v???t</a></li>
                            <li><a href>Kh??n cho??ng nam</a></li>
                            <li><a href>?? d??</a></li>
                            <li><a href>N?? th???i trang</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Baby-boy-costume">
                        <a href>Trang ph???c b?? trai</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Baby-boy-costume-item">
                          <ul>
                            <li><a href>??o thun b?? trai</a></li>
                            <li><a href>????? b??i b?? trai</a></li>
                            <li><a href>????? ng??? b?? trai</a></li>
                            <li><a href>Qu???n ????i b?? trai</a></li>
                            <li><a href>??o kho??c b?? trai</a></li>
                            <li><a href>Qu???n d??i b?? trai</a></li>
                            <li><a href>N??n b?? trai</a></li>
                            <li><a href>Qu???n l??t b?? trai</a></li>
                            <li><a href>T???t b?? trai</a></li>
                            <li><a href>??o m??a b?? trai</a></li>
                            <li><a href>??o hoodie b?? trai</a></li>
                            <li><a href>G??ng tay, kh??n cho??ng b?? trai</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Boys-shoes">
                        <a href>Gi??y b?? trai</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Boys-shoes-item">
                          <ul>
                            <li><a href>D??p &amp; sandal b?? trai</a></li>
                            <li><a href>Gi??y sneaker b?? trai</a></li>
                            <li><a href>Gi??y l?????i b?? trai</a></li>
                            <li><a href>Gi??y b???t b?? trai</a></li>
                            <li><a href>Gi??y ??i h???c b?? trai</a></li>
                            <li><a href>Ph??? ki???n gi??y b?? trai</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* end catetory-2 */}
                </li>
                <li className="Fashion-accessories"><a href>
                    <span>Ph??? Ki???n Th???i Trang</span>
                    <div className="icon-nav">
                      <ion-icon name="chevron-forward-outline" />
                    </div>
                  </a>
                  <div className="catetory-2 Fashion-accessories-item">
                    <ul>
                      <li className="Womens-Watch"> 
                        <a href>?????ng H??? N???</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Womens-Watch-item">
                          <ul>
                            <li><a href>?????ng H??? ??i Ch??i</a></li>
                            <li><a href>?????ng H??? ??i L??m</a></li>
                            <li><a href>?????ng H??? Th??? Thao</a></li>
                            <li><a href>?????ng H??? ???? Qua S??? D???ng</a></li>
                            <li><a href>?????ng H??? Cao C???p</a></li>
                            <li><a href>Ph??? Ki???n ?????ng H???</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Womens-Jewelry">
                        <a href>Trang S???c N???</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Womens-Jewelry-item">
                          <ul>
                            <li><a href>Trang S???c Th???i Trang</a></li>
                            <li><a href>V??ng Tay Th???i Trang</a></li>
                            <li><a href>V??ng C??? Th???i Trang</a></li>
                            <li><a href>B??ng Tay Th???i Trang</a></li>
                            <li><a href>Nh???n Th???i Trang</a></li>
                            <li><a href>Trang S???c ????nh H??n</a></li>
                            <li><a href>Trang S???c Cao C???p</a></li>
                            <li><a href>Trang S???c Kim C????ng</a></li>
                            <li><a href>Trang S???c Ng???c B??ch</a></li>
                            <li><a href>V??ng Nguy??n Ch???t</a></li>
                            <li><a href>???? Qu??</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Sunglasses">
                        <a href>K??nh M??t</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Sunglasses-item">
                          <ul>
                            <li><a href>K??nh M??t Nam</a></li>
                            <li><a href>K??nh M??t N???</a></li>
                            <li><a href>K??nh M??t Tr??? Em</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Fashion-glasses">
                        <a href>K??nh Th???i Trang</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Fashion-glasses-item">
                          <ul>
                            <li> <a href>K??nh C???n Nam</a> </li>
                            <li><a href>K??nh C???n N???</a> </li>
                            <li><a href> K??nh C???n Tr??? Em</a></li>
                            <li><a href>Ph??? Ki???n ?????ng H???</a> </li>
                          </ul>
                        </div>
                      </li>
                      <li className="Womens-handbags">
                        <a href>T??i X??ch N???</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Womens-handbags-item">
                          <ul>
                            <li><a href>T??i ??eo Ch??o</a></li>
                            <li><a href>T??i X??ch</a></li>
                            <li><a href>V?? D??? Ti???c</a></li>
                            <li><a href>T??i Tote</a></li>
                            <li><a href>V?? &amp; Ph??? Ki???n</a></li>
                            <li><a href>T??i ??eo Tay</a></li>
                            <li><a href>Charm Ph??? Ki???n G???n T??i</a></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href>Ba L?? N???</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                      </li>
                      <li className="Mens-watch">
                        <a href>?????ng H??? Nam</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Mens-watch-item">
                          <ul>
                            <li><a href>?????ng H??? ??i Ch??i</a></li>
                            <li><a href>?????ng H??? ??i L??m</a></li>
                            <li><a href>?????ng H??? Th??? Thao</a></li>
                            <li><a href>?????ng H??? ???? Qua S??? D???ng</a></li>
                            <li><a href>?????ng H??? Cao C???p</a></li>
                            <li><a href>Ph??? Ki???n ?????ng H???</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Mens-Jewelry">
                        <a href>Trang S???c Nam</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Mens-Jewelry-item">
                          <ul>
                            <li><a href>Trang S???c ????nh H??n</a></li>
                            <li><a href>Trang S???c Th???i Trang</a></li>
                            <li><a href>Nh???n Nam</a></li>
                            <li><a href>V??ng Tay Nam</a></li>
                            <li><a href>M???t D??y Chuy???n Nam</a></li>
                            <li><a href>B??ng Tai Cho Nam</a></li>
                            <li><a href>Trang S???c Cao C???p</a></li>
                            <li><a href>Ph??? Ki???n Trang Ph???c Nam</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Mens-bags">
                        <a href>T??i X??ch Nam</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Mens-bag-item">
                          <ul>
                            <li><a href>Ba L?? Nam</a></li>
                            <li><a href>C???p X??ch C??ng S???</a></li>
                            <li><a href>T??i Messenger</a></li>
                            <li><a href>T??i ??eo Nam</a></li>
                            <li><a href>V?? Nam</a></li>
                            <li><a href>T??i ??eo H??ng</a></li>
                            <li><a href>V?? ?????ng Th??? Cho Nam</a></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href>T??i ??eo Ch??o Nam</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                      </li>
                      <li className="Suitcases-Travel-Bags">
                        <a href>Vali &amp; T??i Du L???ch</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Suitcases-Travel-Bags-item">
                          <ul>
                            <li><a href>Ba L?? &amp; T??i Laptop</a></li>
                            <li><a href>Vali Du L???ch</a></li>
                            <li><a href>Ph??? Ki???n Du L???ch</a></li>
                            <li><a href>T??i Du L???ch</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Baby-Bags">
                        <a href>T??i Tr??? Em</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Baby-Bags-item">
                          <ul>
                            <li><a href>Ba L?? K??o Tr??? Em</a></li>
                            <li><a href>Ba L?? Tr??? Em</a></li>
                            <li><a href>T??i Tr??? Em</a></li>
                            <li><a href>Ph??? Ki???n T??i Tr??? Em</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* end catetory-2 */}
                </li>
                <li className="Sports-Travel"><a href>
                    <span>Th??? Thao &amp; Du L???ch</span>
                    <div className="icon-nav">
                      <ion-icon name="chevron-forward-outline" />
                    </div>
                  </a>
                  <div className="catetory-2 Sports-Travel-item">
                    <ul>
                      <li className="Mens-Sports-Shoes">
                        <a href>Gi??y Th??? Thao Nam</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Mens-Sports-Shoes-item">
                          <ul>
                            <li><a href>Gi??y ch???y b???</a></li>
                            <li><a href>Gi??y ???? b??ng</a></li>
                            <li><a href>Gi??y tennis nam</a></li>
                            <li><a href>Gi??y c???u l??ng nam</a></li>
                            <li><a href>Gi??y th??? thao sneakers nam</a></li>
                            <li><a href>Gi??y ch??i b??ng r???</a></li>
                            <li><a href>Gi??y leo n??i</a></li>
                            <li><a href>Sandal th??? thao nam</a></li>
                            <li><a href>Gi??y ch??i th??? thao d?????i n?????c</a></li>
                            <li><a href>Gi??y ?????p xe</a></li>
                            <li><a href>Gi??y t???p golf</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Mens-Outfits">
                        <a href>Trang Ph???c Nam</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Mens-Outfits-item">
                          <ul>
                            <li><a href>??o thun th??? thao</a></li>
                            <li><a href>Qu???n d??i th??? thao nam</a></li>
                            <li><a href>Qu???n shorts th??? thao nam</a></li>
                            <li><a href>??o kho??c th??? thao nam</a></li>
                            <li><a href>????? b??i</a></li>
                            <li><a href>??o Jersey</a></li>
                            <li><a href>T??i th??? thao</a></li>
                            <li><a href>Ph??? ki???n th??? thao</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Womens-sports-shoes">
                        <a href>Gi??y Th??? Thao N???</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Womens-sports-shoes-item">
                          <ul>
                            <li><a href>Gi??y ch???y b???</a></li>
                            <li><a href>Gi??y th??? thao sneakers n???</a></li>
                            <li><a href>Gi??y ch??i b??ng r???</a></li>
                            <li><a href>Gi??y ???? b??ng</a></li>
                            <li><a href>Gi??y leo n??i</a></li>
                            <li><a href>Gi??y c???u l??ng n???</a></li>
                            <li><a href>Sandal th??? thao n???</a></li>
                            <li><a href>Gi??y ch??i th??? thao d?????i n?????c</a></li>
                            <li><a href>Gi??y ?????p xe</a></li>
                            <li><a href>Gi??y t???p golf</a></li>
                            <li><a href>Gi??y tennis n???</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Womens-Outfits">
                        <a href>Trang Ph???c N???</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Womens-Outfits-item">
                          <ul>
                            <li><a href>??o thun th??? thao</a></li>
                            <li><a href>Qu???n d??i th??? thao </a></li>
                            <li><a href>Qu???n shorts th??? thao </a></li>
                            <li><a href>??o l??t th??? thao </a></li>
                            <li><a href>??o kho??c th??? thao</a></li>
                            <li><a href>????? b??i</a></li>
                            <li><a href>T??i th??? thao</a></li>
                            <li><a href>Ph??? ki???n th??? thao</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Suitcases-Travel-Bag">
                        <a href>Vali &amp; T??i Du L???ch</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Suitcases-Travel-Bag-item">
                          <ul>
                            <li><a href>Ba L?? &amp; T??i Laptop</a></li>
                            <li><a href>Vali Du L???ch</a></li>
                            <li><a href>Ph??? Ki???n Du L???ch</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Picnic-Activities">
                        <a href>Ho???t ?????ng D?? Ngo???i</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Picnic-Activities-item">
                          <ul>
                            <li><a href>?????p Xe</a></li>
                            <li><a href>C??u C??</a></li>
                            <li><a href>D?? Ngo???i &amp; ??i B??? ???????ng Tr?????ng</a></li>
                            <li><a href>Leo N??i</a></li>
                            <li><a href>Golf</a></li>
                            <li><a href>Tr?????t Patin</a></li>
                            <li><a href>Tr?????t V??n</a></li>
                            <li><a href>Xe Scooter</a></li>
                            <li><a href>B???n S??ng</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Sports-Fitness">
                        <a href>Th??? Thao &amp; Th??? H??nh</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Sports-Fitness-item">
                          <ul>
                            <li><a href>M??y T???p Th??? H??nh</a></li>
                            <li><a href>M??y T???p Th??? L???c</a></li>
                            <li><a href>T???</a></li>
                            <li><a href>Yoga</a></li>
                            <li><a href>Pilates</a></li>
                            <li><a href>Ch???y B???</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Racquet-Sports">
                        <a href>Th??? Thao D??ng V???t</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Racquet-Sports-item">
                          <ul>
                            <li><a href>V???t C???u L??ng</a></li>
                            <li><a href>V???t B??ng B??n</a></li>
                            <li><a href>V???t Tennis</a></li>
                            <li><a href>Qu??? C???u L??ng</a></li>
                            <li><a href>B??ng B??n</a></li>
                            <li><a href>B??ng Tennis</a></li>
                            <li><a href>B??ng Qu???n</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Team-sport">
                        <a href>Th??? Thao ?????ng ?????i</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Team-sport-item">
                          <ul>
                            <li><a href>B??ng R???</a></li>
                            <li><a href>B??ng Chuy???n</a></li>
                            <li><a href>B??ng ????</a></li>
                            <li><a href>B??ng Ch??y</a></li>
                            <li><a href>B??ng B???u D???c</a></li>
                            <li><a href>C???u M??y</a></li>
                            <li><a href>C??? ?????ng</a></li>
                            <li><a href>Cricket</a></li>
                            <li><a href>Kh??c C??n C???u</a></li>
                            <li><a href>Th??? D???c D???ng C???</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Boxing-Martial-Arts">
                        <a href>?????m B???c &amp; V?? Thu???t</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Boxing-Martial-Arts-item">
                          <ul>
                            <li><a href>Thi???t B??? T???p V?? Thu???t</a></li>
                            <li><a href>Thi???t B??? T???p ?????m B???c</a></li>
                            <li><a href>Bao C??t &amp; Ph??? Ki???n</a></li>
                            <li><a href>Bao Tay</a></li>
                            <li><a href>????ch ????</a></li>
                            <li><a href>?????ng Ph???c V?? Thu???t</a></li>
                            <li><a href>D???ng C??? B???o H???</a></li>
                            <li><a href>G??ng Tay ?????m B???c</a></li>
                            <li><a href>G??ng Tay MMA</a></li>
                            <li><a href>T???m L??t ?????m B???c</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Water-sport">
                        <a href>Th??? Thao D?????i N?????c</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Water-sport-item">
                          <ul>
                            <li><a href>B??i L???i</a></li>
                            <li><a href>Ch??o Thuy???n</a></li>
                            <li><a href>L???n &amp; L???n D??ng ???ng Th???</a></li>
                            <li><a href>L?????t V??n</a></li>
                            <li><a href>Phao Tr?????t</a></li>
                            <li><a href>??o C???u H???</a></li>
                            <li><a href>T??i Ch???ng N?????c</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Sports-Accessories">
                        <a href>Ph??? Ki???n Th??? Thao</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Sports-Accessories-item">
                          <ul>
                            <li><a href>B??nh N?????c Th??? Thao</a></li>
                            <li><a href>???ng B??m</a></li>
                            <li><a href>N???p &amp; H??? Tr???</a></li>
                            <li><a href>T??i Y T???</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* end catetory-2 */}
                </li>
                <li className="Cars-Motorcycles-Navigation-Devices"><a href>
                    <span>??t??, Xe M??y &amp; Thi???t B??? ?????nh V???</span>
                    <div className="icon-nav">
                      <ion-icon name="chevron-forward-outline" />
                    </div>
                  </a>
                  <div className="catetory-2 Cars-Motorcycles-Navigation-Devices-item">
                    <ul>
                      <li className="Motorcycle">
                        <a href>Xe m??y</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Motorcycle-item">
                          <ul>
                            <li><a href>Xe tay ga</a></li>
                            <li><a href>Xe c??n tay</a></li>
                            <li><a href>Xe s???</a></li>
                            <li><a href>Xe m??y ??i???n</a></li>
                            <li><a href>Xe 50cc</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Car-care">
                        <a href>Ch??m s??c ?? t??</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Car-care-item">
                          <ul>
                            <li><a href>N???i th???t ?? t??</a></li>
                            <li><a href>G??i ch??m s??c xe</a></li>
                            <li><a href>M??y b??m l???p</a></li>
                            <li><a href>M??y h??t b???i ?? t??</a></li>
                            <li><a href>X???t kh??? m??i d??nh cho ?? t??</a></li>
                            <li><a href>B??? s???n ph???m v??? sinh n???i th???t</a></li>
                            <li><a href>Ch???t l??m m??? v???t x?????c</a></li>
                            <li><a href>B??? s???n ph???m v??? sinh xe</a></li>
                            <li><a href>D???ng c??? l??m s???ch n?????c</a></li>
                            <li><a href>X???t ch???ng r??? s??t g???m ?? t??</a></li>
                            <li><a href>N?????c lau ki???ng xe</a></li>
                            <li><a href>X???t b???o d?????ng v??? &amp; m??m xe</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Car-interior-decoration">
                        <a href>Trang tr?? n???i th???t ?? t??</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Car-interior-decoration-item">
                          <ul>
                            <li><a href>X???t th??m xe</a></li>
                            <li><a href>L??t s??n ?? t??</a></li>
                            <li><a href>G???t t??n ?? t??</a></li>
                            <li><a href>B???c v?? l??ng xe h??i</a></li>
                            <li><a href>Bao gh??? &amp; ph??? ki???n</a></li>
                            <li><a href>M??c kh??a ?? t??</a></li>
                            <li><a href>T???m che n???ng k??nh ch???n gi??</a></li>
                            <li><a href>B???c c???n s???</a></li>
                            <li><a href>D???ng c??? tho??t hi???m</a></li>
                            <li><a href>L???c kh??ng kh?? ?? t??</a></li>
                            <li><a href>B??? d???ng c??? s?? c???u</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Car-exterior-decoration">
                        <a href>Trang tr?? ngo???i th???t ?? t??</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Car-exterior-decoration-item">
                          <ul>
                            <li><a href>Decal v?? trang tr?? ?? t??</a></li>
                            <li><a href>V???t d???ng s???p x???p h??ng h??a</a></li>
                            <li><a href>Ph??? ki???n trang tr?? ??ng ten xe h??i</a></li>
                            <li><a href>Decal nam ch??m</a></li>
                            <li><a href>Khung b???c bi???n s???</a></li>
                            <li><a href>Ch???n m??a ?? t??</a></li>
                            <li><a href>Ch???n b??n xe h??i</a></li>
                            <li><a href>C??i ?? t??</a></li>
                            <li><a href>???p crom xe h??i</a></li>
                            <li><a href>Logo xe h??i</a></li>
                            <li><a href>Vi???n carbon xe ?? t??</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Auto-Parts-Accessories">
                        <a href>Ph??? t??ng &amp; ph??? ki???n ?? t??</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Auto-Parts-Accessories-item">
                          <ul>
                            <li><a href>????n tr??? s??ng ?? t??</a></li>
                            <li><a href>???c quy xe h??i</a></li>
                            <li><a href>Body b???o v??? xe h??i</a></li>
                            <li><a href>N???p ch???p trang tr?? ?? t??</a></li>
                            <li><a href>H??? th???ng phanh xe</a></li>
                            <li><a href>??i???u h??a xe h??i</a></li>
                            <li><a href>Thi???t b??? l???c nhi??n li???u</a></li>
                            <li><a href>Thi???t b??? l???c nh???t</a></li>
                            <li><a href>Bugi xe h??i</a></li>
                            <li><a href>B??? ????nh l???a xe ?? t??</a></li>
                            <li><a href>H??? th???ng ?????nh v???</a></li>
                            <li><a href>B??? d???ng c??? s???a ch???a</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Automotive-electronics">
                        <a href>????? ??i???n t??? d??nh cho ?? t??</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Automotive-electronics-item">
                          <ul>
                            <li><a href>Camera xe h??i</a></li>
                            <li><a href>Thi???t b??? ?????nh v??? GPS</a></li>
                            <li><a href>Ph??? ki???n ??i???n t??? xe h??i</a></li>
                            <li><a href>B??? chuy???n ?????i ??m thanh</a></li>
                            <li><a href>Thi???t b??? k??? thu???t s??? xe h??i</a></li>
                            <li><a href>Camera h??nh tr??nh</a></li>
                            <li><a href>B??? khu???ch ?????i ??m thanh</a></li>
                            <li><a href>Camera l??i</a></li>
                            <li><a href>Ph??? ki???n ??m thanh &amp; h??nh ???nh</a></li>
                            <li><a href>Ph??? ki???n ??i???n tho???i tr??n xe</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Automotive-lubricants-additives">
                        <a href>D???u nh???t &amp; ph??? gia ?? t??</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Automotive-lubricants-additives-item">
                          <ul>
                            <li><a href>D???u nh???t ?????ng c??</a></li>
                            <li><a href>N?????c m??t</a></li>
                            <li><a href>N?????c v??? sinh k??nh ch???n gi??</a></li>
                            <li><a href>N?????c l??m s???ch ?????ng c??</a></li>
                            <li><a href>Ch???t ph??? gia ?????ng c??</a></li>
                            <li><a href>D???u phanh</a></li>
                            <li><a href>N?????c x??? cho xe</a></li>
                            <li><a href>M??? &amp; d???u nh???n</a></li>
                            <li><a href>Nh???t h???p s???</a></li>
                            <li><a href>Thi???t b??? ??o nh???t</a></li>
                            <li><a href>Ch???t v??? sinh m??y l???nh</a></li>
                            <li><a href>Keo chuy??n d???ng</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Motobike-accessories">
                        <a href>Ph??? t??ng xe m??y</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Motobike-accessories-item">
                          <ul>
                            <li><a href>????n xe m??y</a></li>
                            <li><a href>Khung b???o v??? xe m??y</a></li>
                            <li><a href>G????ng xe</a></li>
                            <li><a href>Ch??n ch???ng &amp; ph??? ki???n</a></li>
                            <li><a href>L???c gi?? v?? nhi??n li???u</a></li>
                            <li><a href>Khung &amp; th??n xe m??y</a></li>
                            <li><a href>Phu???c nh??n</a></li>
                            <li><a href>???c quy xe m??y</a></li>
                            <li><a href>????n led xe m??y</a></li>
                            <li><a href>????n tr??? s??ng</a></li>
                            <li><a href>P?? xe</a></li>
                            <li><a href>L???c gi?? xe m??y</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Protective-gear-riding-motorbike">
                        <a href>????? b???o h??? khi ??i xe m??y</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Protective-gear-riding-motorbike-item">
                          <ul>
                            <li><a href>M?? b???o hi???m</a></li>
                            <li><a href>??o m??a</a></li>
                            <li><a href>Ph??? ki???n m?? b???o hi???m</a></li>
                            <li><a href>N??n b???o hi???m full face</a></li>
                            <li><a href>G??ng tay l??i xe</a></li>
                            <li><a href>Gi???y ??i xe m??y</a></li>
                            <li><a href>??o kho??t chuy??n d???ng</a></li>
                            <li><a href>Kh???u trang</a></li>
                            <li><a href>B???o v??? c???</a></li>
                            <li><a href>??o gi??p</a></li>
                            <li><a href>B???o v??? ?????u g???i</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Motorcycle-accessories-toys">
                        <a href>Ph??? ki???n &amp; ????? ch??i xe m??y</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Motorcycle-accessories-toys-item">
                          <ul>
                            <li><a href>Decal trang tr?? xe m??y</a></li>
                            <li><a href>B???c y??n xe m??y</a></li>
                            <li><a href>Khung bi???n s??? xe m??y</a></li>
                            <li><a href>Baga xe m??y</a></li>
                            <li><a href>B???t tr??m xe m??y</a></li>
                            <li><a href>K??nh ch???n gi?? xe m??y</a></li>
                            <li><a href>???c v??t &amp; ph??? ki???n trang tr?? xe m??y</a></li>
                            <li><a href>Baga h??nh l?? xe m??y</a></li>
                            <li><a href>Y??n xe m??y</a></li>
                            <li><a href>T???a l??ng xe m??y</a></li>
                            <li><a href>Kh??a b???o v??? xe m??y</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Motorcycle-lubricants-additives">
                        <a href>D???u nh???t &amp; ph??? gia xe m??y</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Motorcycle-lubricants-additives-item">
                          <ul>
                            <li><a href>D???u ?????ng c??</a></li>
                            <li><a href>D???u h???p s???</a></li>
                            <li><a href>N?????c l??m m??t</a></li>
                            <li><a href>D???u b??i tr??n dung m??i</a></li>
                            <li><a href>M??? b??i tr??n</a></li>
                            <li><a href>D???u th???ng</a></li>
                            <li><a href>Ch???t t???y r???a xe</a></li>
                            <li><a href>D???u nh???t phu???c nh??n</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="Motorcycle-wheel-cover-Wheels">
                        <a href>V??? ru???t b??nh xe m??y &amp; M??m xe</a>
                        <div className="icon-nav2">
                          <ion-icon name="chevron-forward-outline" />
                        </div>
                        <div className="catetory-3 Motorcycle-wheel-cover-Wheels-item">
                          <ul>
                            <li><a href>L???p &amp; Ru???t xe m??y</a></li>
                            <li><a href>B??? b??nh, l???p xe m??y</a></li>
                            <li><a href>M??m, v??nh xe m??y</a></li>
                            <li><a href>????m xe m??y</a></li>
                            <li><a href>D??n v??nh &amp; Trang tr?? b??nh</a></li>
                            <li><a href>Ph??? ki???n b??nh xe m??y</a></li>
                            <li><a href>V??t l???p xe</a></li>
                            <li><a href>N???p van xe</a></li>
                            <li><a href>V??ng bi ?????m l???p xe</a></li>
                            <li><a href>Tr???c &amp; ?????m phu???c xe m??y</a></li>
                            <li><a href>B??? ph???n kh??c cho l???p &amp; m??m xe</a></li>
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
