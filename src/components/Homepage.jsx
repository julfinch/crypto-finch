import React from 'react';
import { Col, Row, Badge, Avatar,Input,Space, Image,Tabs, Layout, Typography, Card, Button } from 'antd';
import { NotificationOutlined, SettingOutlined, MessageOutlined, CreditCardOutlined } from '@ant-design/icons';
import avatar_bg from "../images/avatar_bg.svg";
import avatar_pic from "../images/avatar_pic.svg";
import { zodiacData, dawgzData, monkiesData, assetsData, topData } from "../images/dummy";
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  LineElement,
  Tooltip,
  Legend,
  Filler,
  } from 'chart.js';
  
  ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
  );

const { Meta } = Card;
const { Header, Content, Sider } = Layout;
const { Search } = Input;

const options = {
  responsive: true,
  scales: {
    y:
      {
        ticks: {
          beginAtZero: true
        },
      },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const data = {
  labels,
  datasets: [
    {
      label: 'YoY Capital Growth in USD',
      data: [{x: 'Jan', y:200},{x: 'Feb', y:400},{x: 'Mar', y:300},{x: 'Apr', y:100},{x: 'May', y:100},{x: 'Jun', y:300},{x: 'Jul', y:200},{x: 'Aug', y:400},{x: 'Sep', y:800},],
      borderColor:'rgb(132,22,233)',
      background: 'rgba(132,22,233,0.6)',
      fill: true,
      tension: 0.4,
    }
  ],
};

const donutData = {
  labels: ["Available Funds", "NFT", "BTC", "ETH", "LTC"],
  datasets: [
    {
      label: 'Investments',
      data: [10, 60, 15, 10, 5],
      borderColor: ["red", "blue", "pink", "purple", "cyan"],
      backgroundColor: ["red", "blue", "pink", "purple", "cyan"],
    }
  ],
};



const Homepage = () => {
  return (
      <Layout className="homepage-container" style={{minHeight: '100vh',}}>
        {/* MAIN */}
        <Layout>
          <Header className="header-container">
            <Row>
              <Space>
                <Col span={8}>
                  <Search
                    placeholder="Search cryptocurrency, auction, NFTs and more..."
                    allowClear
                    size="small"
                    style={{
                      width: 400,
                    }}
                  />
                </Col>
                <Col span={8} offset={8}></Col>
              </Space>
            </Row>
          </Header>
          
          <Content className="main-container">
            <Row gutter={[10, 10]}>
              {/* MAIN - HEADER CARD */}
              <Card className="main-heading-card">
                <Row style={{display: 'flex', flexDirection: 'column'}}>
                  <Typography.Title level={3} className="main-heading-title">Discover, Collect, and Sell</Typography.Title>
                  <Typography.Title level={3} className="main-heading-title">Extraordinary NFTs</Typography.Title>
                  <Row>
                  <Button type="default" style={{ fontSize: '11px',borderRadius: '6px', marginRight: '10px'}}>Explore More</Button>
                  <Button type="ghost" style={{ fontSize: '11px',borderRadius: '6px', color: '#fff'}}>Sell Artwork</Button>
                  </Row>
                </Row>
              </Card>
              {/* MAIN - NFT COLLECTION */}
              
              <Col span={24} className="nft-collection-wrapper">
                <Typography.Title level={5} className="nft-title-heading">My NFT Collections</Typography.Title>
                <Tabs defaultActiveKey="1" className="nft-tabs">
                <Tabs.TabPane tab="Top NFTs" key="1">
                    <Row gutter={164}>
                      {topData?.map((top) => (
                      <Col span={4} key={top.name}>
                        <Card className="my-nft-collection" hoverable style={{width: 140, height: 145,}} cover={<img alt={top.name} src={top.image} style={{borderRadius: '15px 15px 0 0'}}/>}>
                        <p style={{fontWeight: '500', color: 'cyan'}}>{top.name}</p>
                        <p style={{fontWeight: '200',marginTop: '-5px'}}>Current price: <span style={{fontWeight: '500'}}>{top.price}</span></p>
                        </Card>
                      </Col>
                      ))}
                    </Row>
                  </Tabs.TabPane>
                <Tabs.TabPane tab="Monkies Club" key="2">
                    <Row gutter={3}>
                      {monkiesData?.map((monkies) => (
                      <Col span={6} key={monkies.name}>
                        <Card className="my-nft-collection" hoverable style={{width: 141, height: 145,}} cover={<img alt={monkies.name} src={monkies.image} style={{borderRadius: '15px 15px 0 0'}}/>}>
                        <p style={{fontWeight: '500', color: 'cyan'}}>{monkies.name}</p>
                        <p style={{fontWeight: '200',marginTop: '-5px'}}>Current price: <span style={{fontWeight: '500'}}>{monkies.price}</span></p>
                        </Card>
                      </Col>
                      ))}
                    </Row>
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Zodiac Kingdom" key="3">
                    <Row gutter={3}>
                      {zodiacData?.map((zodiac) => (
                      <Col span={6} key={zodiac.name}>
                        <Card className="my-nft-collection" hoverable style={{width: 140, height: 145,}} cover={<img alt={zodiac.name} src={zodiac.image} style={{borderRadius: '15px 15px 0 0'}}/>}>
                        <p style={{fontWeight: '500', color: 'cyan'}}>{zodiac.name}</p>
                        <p style={{fontWeight: '200',marginTop: '-5px'}}>Current price: <span style={{fontWeight: '500'}}>{zodiac.price}</span></p>
                        </Card>
                      </Col>
                      ))}
                    </Row>
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Wave Dawgz" key="4">
                    <Row gutter={164}>
                        {dawgzData?.map((dawgz) => (
                        <Col span={4} key={dawgz.name}>
                          <Card className="my-nft-collection" hoverable style={{width: 140, height: 145,}} cover={<img alt={dawgz.name} src={dawgz.image} style={{borderRadius: '15px 15px 0 0'}}/>}>
                          <p style={{fontWeight: '500', color: 'cyan'}}>{dawgz.name}</p>
                          <p style={{fontWeight: '200',marginTop: '-5px'}}>Current price: <span style={{fontWeight: '500'}}>{dawgz.price}</span></p>
                          </Card>
                        </Col>
                        ))}
                      </Row>
                  </Tabs.TabPane>
                </Tabs>
              </Col>
              {/* MAIN - ASSET CHARTS */}
              
              <Row gutter={64}>
                <Col span={14}>
                  <Card className="home-chart-card" style={{width: '497px', height: '180px'}}>
                    <Line options={options} data={data}/>
                  </Card>
                </Col>
                <Col span={10}> {/* 
                  <Card className="home-chart-card" style={{width: '287px', height: '180px'}}>
                    <Doughnut data={donutData} options={options}/>
                  </Card> */}
                </Col>
              </Row>
            </Row>
          </Content>
        </Layout>

        {/* SIDEBAR */}
        <Sider className="sidebar-container">
          <Row className="sidebar-user" justify="space-between">
            <Col span={2}>
              <Badge dot><NotificationOutlined style={{fontSize: 19, color: 'gray'}}/></Badge>
            </Col>
            <Col span={2}>
              <Badge ><CreditCardOutlined style={{fontSize: 19, color: 'gray'}}/></Badge>
            </Col>
            <Col span={2}>
              <Badge dot><MessageOutlined style={{fontSize: 19, color: 'gray'}}/></Badge>
            </Col>
            <Col span={2}>
              <Badge ><SettingOutlined style={{fontSize: 19, color: 'gray'}}/></Badge>
            </Col>
          </Row>

          <Row className="sidebar-profile">
            <Col span={24} className="sidebar-user-right" style={{ position: 'relative'}}>
              <Image src={avatar_bg} style={{width: 246}}/>
              <Image src={avatar_pic} style={{ position: 'absolute', width: 125, left: '-186px', top: '-69px' }} />
              <Meta className="sidebar-profile-name" title="Ivonne Turner" description="@degen_ape01" style={{ color: '#fff', position: 'absolute', bottom: '-1px'}}/>
            </Col>
          </Row>               

          <Typography.Title level={5} className="coin-details-heading" style={{padding: '0 10px'}}>My Assets</Typography.Title>
          <Row gutter={[10, 10]} className="sidebar-assets">
            {assetsData?.map((assets) => (
              <Col span={24} className="assets-card-container" key={assets.coin}>
                  <div className="assets-card">
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '2px'}}>
                      <p><span style={{fontSize: '19px'}}>{assets.value}</span>  {assets.coin}</p>
                      <p>PROFITS: <span style={{color: 'green'}}>{assets.profit}</span></p>
                    </div>
                    <div>
                      <img className="assets-image" src={assets.logo} />
                    </div>
                  </div>
              </Col>
            ))}
          </Row>
          <Row className="sidebard-transactions">
            <Col span={24}>col-12</Col>
          </Row>
        </Sider>
      </Layout>
  )
}

export default Homepage