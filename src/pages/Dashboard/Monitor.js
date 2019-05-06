import React, { Component } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { Row, Col, Card, Tooltip } from 'antd';
import { Pie, WaterWave, Gauge, TagCloud, GaugeTick, RealtimeLine } from '@/components/Charts';
import NumberInfo from '@/components/NumberInfo';
import CountDown from '@/components/CountDown';
import ActiveChart from '@/components/ActiveChart';
import numeral from 'numeral';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import Authorized from '@/utils/Authorized';
import styles from './Monitor.less';
import Websocket from 'react-websocket';
import { routerRedux } from 'dva/router';
import { isEmpty } from 'lodash';

const { Secured } = Authorized;

const targetTime = new Date().getTime() + 3900000;

// use permission as a parameter
const havePermissionAsync = new Promise(resolve => {
  // Call resolve on behalf of passed
  setTimeout(() => resolve(), 300);
});

@Secured(havePermissionAsync)
@connect(({ monitor, loading }) => ({
  monitor,
  loading: loading.models.monitor,
}))
class Monitor extends Component {
  constructor(props) {
    super(props);
    this.state = { current: null, voltage: null };
    const { dispatch } = this.props;
    dispatch({
      type: 'monitor/fetchThings',
    });
    dispatch({
      type: 'monitor/fetchChannels',
    });
  }

  componentDidMount() {}

  handleData = data => {
    let result = JSON.parse(data);
    const timestamp = new Date(result[0].bt);
    const voltage = { x: timestamp, y: result[0].v };
    const current = { x: timestamp, y: result[1].v };
    this.setState({ voltage: voltage, current: current });
  };

  render() {
    const { monitor, loading } = this.props;
    const { things, channels } = monitor;

    let ws;
    if (!isEmpty(things) && !isEmpty(channels)) {
      const channelId = channels.channels[0].id;
      const thingKey = things.things[1].key;
      const url =
        'ws://dashboard.bengyun.io/ws/channels/' +
        channelId +
        '/messages?authorization=' +
        thingKey;
      ws = <Websocket url={url} onMessage={this.handleData} />;
    }

    return (
      <GridContent>
        {ws}
        <Row gutter={24}>
          <Col xl={6} lg={24} md={24} sm={24} xs={24}>
            <Row>
              <Card
                title={
                  <FormattedMessage
                    id="app.monitor.activity-forecast"
                    defaultMessage="Activity forecast"
                  />
                }
                style={{ marginBottom: 24 }}
                bordered={false}
              />
            </Row>
            <Row>
              <Card
                title={
                  <FormattedMessage
                    id="app.monitor.popular-searches"
                    defaultMessage="Popular Searches"
                  />
                }
                loading={loading}
                bordered={false}
                bodyStyle={{ overflow: 'hidden' }}
              >
                <Gauge
                  title={formatMessage({ id: 'app.monitor.ratio', defaultMessage: 'Ratio' })}
                  height={161}
                  percent={30}
                />
              </Card>
            </Row>
          </Col>
          <Col xl={9} lg={12} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card
              title={
                <FormattedMessage
                  id="app.monitor.popular-searches"
                  defaultMessage="Popular Searches"
                />
              }
              loading={loading}
              bordered={false}
              bodyStyle={{ overflow: 'hidden' }}
            >
              <RealtimeLine newValue={this.state.voltage} minY={0} maxY={2} />
            </Card>
          </Col>
          <Col xl={9} lg={12} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card
              title={
                <FormattedMessage
                  id="app.monitor.popular-searches"
                  defaultMessage="Popular Searches"
                />
              }
              loading={loading}
              bordered={false}
              bodyStyle={{ overflow: 'hidden' }}
            >
              <RealtimeLine newValue={this.state.current} minY={0} maxY={2} />
            </Card>
          </Col>
        </Row>
      </GridContent>
    );
  }
}

export default Monitor;
