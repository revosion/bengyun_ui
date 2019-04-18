
import React, { Component } from 'react';
import { Map, Markers } from 'react-amap';
import styles from './index.less';

const randomPosition = () => ({
  longitude: 120.026208 + Math.random() * 0.02,
  latitude: 30.279212 + Math.random() * 0.02
});

class MapView extends Component {
  constructor() {
    super();
    var _this = this;
    // 随机生成 10 个标记点的原始数据
    this.mapCenter = { longitude: 120.026208, latitude: 30.279212 };
    this.markers = Array(50).fill(true).map(function (e, i) {
      var position = randomPosition();
      return {
        position,
        // 这个属性就可以用来确定点击的是哪个坐标点
        myIndex: i
      }
    });
    this.markersEvents = {
      click(e, marker) {
        // 通过高德原生提供的 getExtData 方法获取原始数据
        const extData = marker.getExtData();
        const index = extData.myIndex;
        alert(`点击的是第${index}号坐标点`);
        console.log(extData === _this.markers[index]);
      }
    }
    const markerStyle = {
      background: '#fff',
      padding: '8px',
      backgroundColor: '#000',
      color: '#fff',
      border: '1px solid #fff',
    };
    this.renderMarkerFn = (extData) => (
      <div style={markerStyle}>{extData.myIndex}</div>
    );
  }

  render() {
    return (
      <Map plugins={['ToolBar']} center={this.mapCenter} zoom={15}>
        <Markers
          render={this.renderMarkerFn}
          markers={this.markers}
          events={this.markersEvents}
          useCluster
        />
      </Map>
    );
  }
}

export default MapView