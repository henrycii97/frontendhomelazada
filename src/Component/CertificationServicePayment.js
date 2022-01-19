import React, { Component } from 'react'

export default class CertificationServicePayment extends Component {
    render() {
        return (
            <div className="certification-service-payment">
        <div className="content-certification-service-payment">
          <div className="payment">
            <div className="title-payment">
              CÁCH THỨC THANH TOÁN
            </div>
            <div className="img-payment">
              <img src="images/visa.png" alt="" />
              <img src="images/mastercard.png" alt="" />
              <img src="images/jcb.png" alt="" />
              <img src="images/cardon.png" alt="" />
              <img src="images/napas.png" alt="" />
              <img src="images/card.png" alt="" />
              <img src="images/zalo-pay.png" alt="" />
              <img src="images/momo.png" alt="" className="momo" />
            </div>
          </div>
          <div className="service">
            <div className="title-service">
              DỊCH VỤ GIAO HÀNG
            </div>
            <div className="img-service">
              <div className="img-laz-service">
                <img src="images/lazada-logistics-logo.png" alt="" />
              </div>
              <div className="img-ship">
                <img src="images/ghn.png" alt="" className="ghn" />
                <img src="images/ninjavan.png" alt="" />
              </div>
              <div className="img-ship2">
                <img src="images/ship60.png" alt="" className="ship60" />
                <img src="images/best.png" alt="" />
              </div>
              <div className="img-express">
                <img src="images/ahamove.png" alt="" />
              </div>
              <div className="img-ahamove">
                <img src="images/J&xexpress.png" alt="" />
              </div>
            </div>
          </div>
          <div className="certification">
            <div className="title-certification">
              CHỨNG NHẬN
            </div>
            <div className="img-certification">
              <div className="img-certification-real">
                <img src="images/pcidss.png" alt="" className="pcids" />
                <img src="images/saynotofakes.png" className="saynotofakes" alt="" />
                <img src="images/bsi.png" alt="" className="bsi" />
              </div>
              <div className="img-certification-vn">
                <a href><img src="images/certification1.png" alt="" /></a>
                <a href><img src="images/certification2.png" alt="" /></a>
                <a href><img src="images/certification3.png" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
        )
    }
}
