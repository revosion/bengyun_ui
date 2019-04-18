import React, { Component } from 'react';
import * as time from 'd3-time';
import { timeFormat } from 'd3-time-format';
import range from 'lodash/range';
import last from 'lodash/last';
import { Line } from '@nivo/line';

class RealtimeLine extends Component {
  constructor(props) {
    super(props);

    const date = new Date();
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);

    this.state = {
      data: [{
        x: time.timeMinute.offset(date, 30),
        y: null,
      }],
    };

    this.formatTime = timeFormat('%Y %b %d');
  }

  static getDerivedStateFromProps(props, current_state) {
    const { newValue } = props;
    if (newValue) {
      let data = current_state.data;
      if (data.length >= 50) {
        data = data.slice(1);
      }
      data.push(newValue);
      return { data: data };
    }
  }

  render() {
    const { data } = this.state;
    const { minY, maxY } = this.props;

    return (
      <Line
        width={600}
        height={400}
        margin={{ top: 5, right: 40, bottom: 30, left: 40 }}
        data={[{ id: 'value', data: data }]}
        xScale={{ type: 'time', format: 'native' }}
        yScale={{ type: 'linear', min: minY, max: maxY }}
        axisBottom={{
          format: '%H:%M',
          //legend: `${this.formatTime(data[0].x)} ——— ${this.formatTime(last(data).x)}`,
          legendPosition: 'middle',
          legendOffset: 46,
        }}
        enableDots={true}
        enableGridX={true}
        curve="monotoneX"
        animate={true}
        isInteractive={true}
        theme={{
          axis: { ticks: { text: { fontSize: 14 } } },
          grid: { line: { stroke: '#ddd', strokeDasharray: '1 2' } },
        }}
        lineWidth={2}
        colors="dark2"
        dotSize={8}
        dotColor="inherit:darker(0.3)"
        dotBorderWidth={2}
        dotBorderColor="#ffffff"
      />
    );
  }
}

export default RealtimeLine;