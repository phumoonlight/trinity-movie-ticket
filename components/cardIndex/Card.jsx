import React, { Component } from 'react'
import {
  Card, Row, Col,
} from 'antd'

export default class Cards extends Component {
  render() {
    return (
      <div className="content">

        <div className="gutter-example">
          <Row gutter={16}>
            <Col span={6}>
              <Card>
                <div className="custom-image">
                  <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                </div>
                <div className="custom-card">
                  <h3>เรื่องที่1</h3>

                </div>
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <div className="custom-image">
                  <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                </div>
                <div className="custom-card">
                  <h3>เรื่องที่2</h3>

                </div>
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <div className="custom-image">
                  <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                </div>
                <div className="custom-card">
                  <h3>เรื่องที่3</h3>

                </div>
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <div className="custom-image">
                  <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                </div>
                <div className="custom-card">
                  <h3>เรื่องที่4</h3>

                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
