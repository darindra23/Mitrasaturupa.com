import React, { Component } from "react";
import { Line } from "rc-progress";

export default class Progressbar extends Component {
  render() {
    return (
      <div className="progressbar-wrap">
        <div className="progressbar-item">
          <h3>Layanan.</h3>
          <Line
            strokeLinecap="round"
            gapPosition="top"
            percent="95"
            trailWidth="3"
            trailColor="#EEEEEE"
            strokeWidth="1.5"
            strokeColor="#F66B5D"
          />
        </div>
        <div className="progressbar-item">
          <h3>Ketepatan Waktu Pengerjaan.</h3>
          <Line
            strokeLinecap="round"
            gapPosition="top"
            percent="90"
            trailWidth="3"
            trailColor="#EEEEEE"
            strokeWidth="1.5"
            strokeColor="#F66B5D"
          />
        </div>
        <div className="progressbar-item">
          <h3>Harga.</h3>
          <Line
            strokeLinecap="round"
            gapPosition="top"
            percent="40"
            trailWidth="3"
            trailColor="#EEEEEE"
            strokeWidth="1.5"
            strokeColor="#F66B5D"
          />
        </div>
      </div>
    );
  }
}
