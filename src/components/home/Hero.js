import React from 'react';
import { Button } from 'antd';

import { Carousel } from 'antd';

const items = [
  {
    key: '1',
    title: 'Web and mobile payment built for developers',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusamus earum iure illum deserunt quia, dolor et. Omnis recusandae soluta, aut ullam tempore molestiae veritatis dignissimos quos in laudantium qui.',
  },
  {
    key: '2',
    title: 'Work better together. Schedule meetings',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusamus earum iure illum deserunt quia, dolor et. Omnis recusandae soluta, aut ullam tempore molestiae veritatis dignissimos quos in laudantium qui.',
  },
  {
    key: '3',
    title: 'The best app to increase your productivity',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusamus earum iure illum deserunt quia, dolor et. Omnis recusandae soluta, aut ullam tempore molestiae veritatis dignissimos quos in laudantium qui.',
  },
]

function AppHero() {
  return (
    <div id="hero" className="heroBlock">
      <Carousel>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="btnHolder">
                  <Button type="primary" size="large">Learn More</Button>
                </div>
              </div>
            </div>  
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHero;