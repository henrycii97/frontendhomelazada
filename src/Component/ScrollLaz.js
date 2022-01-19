import React, { Component } from 'react'

export default class ScrollLaz extends Component {
    render() {
        return (
            <div className="scroll-laz">
            <div className="scroll-laz-icon icon-scroll-top "><div className="icon "><ion-icon name="chevron-up-outline" /></div> </div>
            <div className="scroll-laz-icon icon-scroll-flashdeal"><div className="icon "><i className="fab fa-gripfire" /></div><span className="scr flashdeal-csr">Deal chớp nhoáng</span></div>
            <div className="scroll-laz-icon icon-scroll-popular-search"><div className="icon "><i className="far fa-clock" /></div><span className="scr search-csr">Tìm kiếm phổ biến</span></div>
            <div className="scroll-laz-icon icon-scroll-lazmall"><div className="icon "><i className="far fa-envelope" /></div><span className="scr lazmall-csr">LazMall</span></div>
            <div className="scroll-laz-icon icon-scroll-menu"><div className="icon "><ion-icon name="apps-outline" /></div><span className="scr menu-csr">Danh mục ngành hàng</span></div>
            <div className="scroll-laz-icon icon-scroll-user"><div className="icon "><ion-icon name="person-add-outline" /></div><span className="scr user-scr">Dành riêng cho bạn </span></div>
          </div>
        )
    }
}
