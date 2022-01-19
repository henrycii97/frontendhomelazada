import React, { Component } from 'react'

export default class Ads extends Component {
    render() {
        return (
          <div className="ads item-1">
          <div className="banner-ads " style={{background: 'url(images/ads1.jpg)'}}>
            <div className="icon">
              <ion-icon name="close-outline" />
            </div>
          </div>
        </div>
        )
    }
}
