import React, { memo } from 'react';
import { Row, Col, Icon, Tooltip } from 'antd';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import styles from './Analysis.less';
import { ChartCard, MiniArea, MiniBar, MiniProgress, Field } from '@/components/Charts';
import Trend from '@/components/Trend';
import numeral from 'numeral';
import Yuan from '@/utils/Yuan';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 },
};

const IntroduceRow = memo(({ loading, visitData }) => (
  <Row gutter={24}>
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        title={<FormattedMessage id="app.overview.running-pumps" defaultMessage="Running Pumps" />}
        action={
          <Tooltip
            title={<FormattedMessage id="app.analysis.introduce" defaultMessage="Introduce" />}
          >
            <Icon type="info-circle-o" />
          </Tooltip>
        }
        loading={loading}
        total={() => '26/45'}
        footer={
          <Field
            label={
              <FormattedMessage
                id="app.overview.highest-running-pumps"
                defaultMessage="Highest Running Pumps"
              />
            }
            value={30}
          />
        }
        contentHeight={46}
      >
        <Trend flag="up" style={{ marginRight: 16 }}>
          <FormattedMessage id="app.analysis.week" defaultMessage="Weekly Changes" />
          <span className={styles.trendText}>12%</span>
        </Trend>
        <Trend flag="down">
          <FormattedMessage id="app.analysis.day" defaultMessage="Daily Changes" />
          <span className={styles.trendText}>11%</span>
        </Trend>
      </ChartCard>
    </Col>

    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        loading={loading}
        title={
          <FormattedMessage id="app.overview.operation-hours" defaultMessage="Opeartion Hours" />
        }
        action={
          <Tooltip
            title={<FormattedMessage id="app.analysis.introduce" defaultMessage="Introduce" />}
          >
            <Icon type="info-circle-o" />
          </Tooltip>
        }
        total={numeral(235.6).format('0,0') + 'Hours'}
        footer={
          <Field
            label={
              <FormattedMessage
                id="app.overview.daily-operation-hours"
                defaultMessage="Daily Operation Hours"
              />
            }
            value={numeral(34.2).format('0,0') + 'Hours'}
          />
        }
        contentHeight={46}
      >
        <MiniArea color="#975FE4" data={visitData} />
      </ChartCard>
    </Col>
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        loading={loading}
        title={<FormattedMessage id="app.overview.down-pumps" defaultMessage="Down Pumps" />}
        action={
          <Tooltip
            title={<FormattedMessage id="app.analysis.introduce" defaultMessage="Introduce" />}
          >
            <Icon type="info-circle-o" />
          </Tooltip>
        }
        total={numeral(2).format('0,0')}
        footer={
          <Field
            label={
              <FormattedMessage id="app.overview.down-pumps-rate" defaultMessage="Repair Rate" />
            }
            value="60%"
          />
        }
        contentHeight={46}
      >
        <MiniBar data={visitData} />
      </ChartCard>
    </Col>
    <Col {...topColResponsiveProps}>
      <ChartCard
        loading={loading}
        bordered={false}
        title={<FormattedMessage id="app.overview.health-index" defaultMessage="Health Index" />}
        action={
          <Tooltip
            title={<FormattedMessage id="app.analysis.introduce" defaultMessage="Introduce" />}
          >
            <Icon type="info-circle-o" />
          </Tooltip>
        }
        total="98%"
        footer={
          <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
            <Trend flag="up" style={{ marginRight: 16 }}>
              <FormattedMessage id="app.analysis.week" defaultMessage="Weekly Changes" />
              <span className={styles.trendText}>12%</span>
            </Trend>
            <Trend flag="down">
              <FormattedMessage id="app.analysis.day" defaultMessage="Weekly Changes" />
              <span className={styles.trendText}>11%</span>
            </Trend>
          </div>
        }
        contentHeight={46}
      >
        <MiniProgress
          percent={78}
          strokeWidth={8}
          target={80}
          targetLabel={`${formatMessage({ id: 'component.miniProgress.tooltipDefault' }).concat(
            ': '
          )}80%`}
          color="#13C2C2"
        />
      </ChartCard>
    </Col>
  </Row>
));

export default IntroduceRow;
