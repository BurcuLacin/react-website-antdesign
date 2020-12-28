import React from "react";
import { Row, Col } from "antd";

function About() {

    const items = [
        {
          key: '1',
          icon:<i class="fas fa-truck"></i>,
          title: 'High Performance',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velitnecessitatibus officiis repudiandae est deserunt delectus.',
        },
        {
          key: '2',
          icon:<i class="fas fa-money-bill-alt"></i>,
          title: 'Flat Design',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velitnecessitatibus officiis repudiandae est deserunt delectus.',
        },
        {
          key: '3',
          icon: <i class="far fa-life-ring"></i>,
          title: 'Simplified Workflow',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velitnecessitatibus officiis repudiandae est deserunt delectus.',
        },
      ];
  return (
    <div>
      <div id="about" className="block aboutBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
          <div className="contentHolder">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
              necessitatibus officiis repudiandae est deserunt delectus dolorem
              iure porro distinctio fuga, nostrum doloremque. Facilis porro in
              laborum dolor amet ratione hic? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Magnam aut a porro, adipisci quidem
              sint enim pariatur ducimus, saepe voluptatibus inventore commodi!
              Quis, explicabo molestias libero tenetur temporibus perspiciatis
              deserunt.
            </p>
          </div>
          <Row gutter={[16, 16]}>   
          {items.map((item) =>(
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            )
          )}
        </Row>
        </div>
      </div>
    </div>
  );
}

export default About;

