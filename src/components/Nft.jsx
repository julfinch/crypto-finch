import React, { useEffect, useState } from 'react';
import { Col, Row, Input, Tabs, Layout, Typography, Card, Button } from 'antd';
import { PlayCircleOutlined, FormOutlined } from '@ant-design/icons';
import na from "../images/NA.jpg";
import Loader from './Loader';
import { useGetNftsQuery } from '../services/nftApi';
import { useGetWebitQuery } from '../services/webitApi';
 
const { Header, Content } = Layout;
const { Search } = Input;

const Nft = () => {
    const { data: openseaList, isFetching } = useGetNftsQuery();
    const [opensea, setOpensea] = useState();
    console.log(openseaList);

    const [nftSearch, setNftSearch] = useState('');
    const { data: nftSearchResults } = useGetWebitQuery({ nftSearch });
    console.log(nftSearchResults);
    console.log(nftSearch);
    
    useEffect(() => {
        setOpensea(openseaList?.assets);;
      }, [openseaList]);

    if (isFetching) return <Loader />;

  return (
      <Layout className="homepage-container" style={{minHeight: '100vh',}}>
        {/* MAIN */}
        <Layout>
            <Header className="header-container">
                <Row >
                    <Col span={10} offset={7}>
                        <Search
                            placeholder="Search any NFTs..."
                            allowClear
                            size="small"
                            style={{width: '100%',}}
                            onChange={(e) => setNftSearch(e.target.value.toLowerCase())}
                        />
                    </Col>
                </Row>
            </Header>
          
          <Content className="main-container">
            <Row gutter={[15, 15]}>
              {/* MAIN - HEADER CARD */}
              <Card className="main-heading-card">
                <Row style={{display: 'flex', flexDirection: 'column'}}>
                  <Typography.Title level={3} className="main-heading-title">One Stop NFT Marketplace</Typography.Title>
                  <p style={{fontSize: '12px', color: '#fff', lineHeight: '1', marginTop: '-6px'}}>Discover limited-edition digital artwork</p>
                  <p style={{fontSize: '12px', color: '#fff', lineHeight: '1', marginTop: '-6px', marginBottom: '15px'}}>Create, sell and collect yours now!</p>
                  <Row>
                  <Button className="heading-explore-button" style={{ fontSize: '11px', color: '#fff',borderRadius: '6px', marginRight: '10px', border: '0px'}}><FormOutlined />Start Creating</Button>
                  <Button type="ghost" style={{ fontSize: '11px',borderRadius: '6px', color: '#fff'}}><PlayCircleOutlined />Learn How</Button>
                  </Row>
                </Row>
              </Card>
              {/* MAIN - NFT COLLECTION */}
              { !nftSearchResults.data ?
              <Col span={24} className="nft-collection-wrapper">
                <Typography.Title level={4} className="nft-title-heading">NFT Gallery</Typography.Title>
                <Tabs defaultActiveKey="1" className="nft-tabs">
                <Tabs.TabPane tab="OpenSea" key="1">
                    <Row gutter={[24, 24]}>
                      {opensea?.map((opensea) => (
                      <Col span={4} key={opensea.id}>
                        <Card className="my-nft-collection" hoverable style={{minWidth: 155, height: 220 }} cover={<img alt={opensea.image_url} src={opensea.image_url || na} style={{border: '1px solid transparent',borderRadius: '15px 15px 0 0', maxWidth: 170, maxHeight: 167,}}/>}>
                        <p style={{fontSize: '12px', fontWeight: '500', color: 'cyan'}}>{opensea.name || 'N/A'}</p>
                        <p style={{fontWeight: '200',marginTop: '-5px'}}>ID #: <span style={{fontWeight: '500'}}>{opensea.id}</span></p>
                        </Card>
                      </Col>
                      ))}
                    </Row>
                  </Tabs.TabPane>
                
                  <Tabs.TabPane tab="Binance" key="2">
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Solana" key="3">
                  </Tabs.TabPane>
                </Tabs>
              </Col>
              :
              <Col span={24} className="nft-collection-wrapper">
                    <Row gutter={[24, 24]}>
                      {nftSearchResults.data.results.map((webit) => (
                      <a href={webit.website} target="_blank" rel="noreferrer">
                        <Col span={4} key={webit.name}>
                            <Card className="my-nft-collection" hoverable style={{width: 187, height: 287 }} cover={<img alt={webit.name} src={webit.image || na} style={{border: '1px solid transparent',borderRadius: '15px 15px 0 0', maxWidth: 193, maxHeight: 171}}/>}>
                            <p style={{fontSize: '12px', fontWeight: '500', color: 'cyan'}}>{webit.name || 'N/A'}</p>
                            <p style={{fontWeight: '560',marginTop: '-5px', wordWrap: 'break-word'}}>ADDRESS: <span style={{fontWeight: '200'}}>{webit.address}</span></p>
                            <p style={{fontWeight: '560',marginTop: '-5px'}}>CHAIN: <span style={{fontWeight: '200'}}>{webit.chain}</span></p>
                            <p style={{fontWeight: '560',marginTop: '-5px', wordWrap: 'break-word'}}><span style={{fontWeight: '200'}}>{webit.website}</span></p>
                            </Card>
                        </Col>
                      </a>
                      ))}
                    </Row>
              </Col>
              }
              
            </Row>
          </Content>
        </Layout>
      </Layout>
  )
}

export default Nft