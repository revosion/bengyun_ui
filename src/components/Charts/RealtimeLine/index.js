import React, { Component } from 'react';
import * as time from 'd3-time';
import { timeFormat } from 'd3-time-format';
import range from 'lodash/range';
import last from 'lodash/last';
import { Line } from '@nivo/line';
import { conditionalExpression } from '@babel/types';

class RealtimeLine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  static getDerivedStateFromProps(props, current_state) {
    const { newValue } = props;
    if (newValue) {
      let { data } = current_state;
      if (data.length >= 50) {
        data = data.slice(1);
      }
      data.push(newValue);

      //return { data: data };
      return null;
    }
    return null;
  }

  render() {
    const { data } = this.state;
    const { minY, maxY } = this.props;
    console.log(data);
    if (data.length >= 100) {
      return (
        <Line
          width={600}
          height={400}
          margin={{ top: 5, right: 40, bottom: 30, left: 40 }}
          data={[{ id: 'value', data: data }]}
          xScale={{ type: 'time', format: 'native' }}
          yScale={{ type: 'linear', min: minY, max: 'auto' }}
          axisBottom={{
            format: '%H:%M:%S',
            tickValue: 5,
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
    return null;
  }
}

export default RealtimeLine;
