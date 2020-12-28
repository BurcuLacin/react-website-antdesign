import React from 'react';

import { Collapse, Button } from 'antd';

const { Panel } = Collapse;

function AppFaq() {
  return(
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Frequently Asked Questions</h2>
          <p>Quidem reiciendis iure, aperiam blanditiis. Alias esse, nam, ea quam</p>
        </div>
        <Collapse defaultActiveKey={['1']}>
          <Panel header="How to setup the theme?" key="1">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloremque assumenda repudiandae, iste atque facere tempore nulla optio unde, corporis harum exercitationem qui repellendus magnam veniam. Vitae dolorem facilis et cumque quae molestias iste harum sint accusamus necessitatibus. Debitis necessitatibus ab quo sequi voluptatem sapiente ipsa cum nobis enim cumque!</p>
          </Panel>
          <Panel header="Can I change plan or cancel at any time?" key="2">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloremque assumenda repudiandae, iste atque facere tempore nulla optio unde, corporis harum exercitationem qui repellendus magnam veniam. Vitae dolorem facilis et cumque quae molestias iste harum sint accusamus necessitatibus. Debitis necessitatibus ab quo sequi voluptatem sapiente ipsa cum nobis enim cumque!</p>
          </Panel>
          <Panel header="How to access through cloud?" key="3">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloremque assumenda repudiandae, iste atque facere tempore nulla optio unde, corporis harum exercitationem qui repellendus magnam veniam. Vitae dolorem facilis et cumque quae molestias iste harum sint accusamus necessitatibus. Debitis necessitatibus ab quo sequi voluptatem sapiente ipsa cum nobis enim cumque!</p>
          </Panel>
          <Panel header="Can I manage multiple task?" key="4">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloremque assumenda repudiandae, iste atque facere tempore nulla optio unde, corporis harum exercitationem qui repellendus magnam veniam. Vitae dolorem facilis et cumque quae molestias iste harum sint accusamus necessitatibus. Debitis necessitatibus ab quo sequi voluptatem sapiente ipsa cum nobis enim cumque!</p>
          </Panel>
          <Panel header="How can I change my password?" key="5">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloremque assumenda repudiandae, iste atque facere tempore nulla optio unde, corporis harum exercitationem qui repellendus magnam veniam. Vitae dolorem facilis et cumque quae molestias iste harum sint accusamus necessitatibus. Debitis necessitatibus ab quo sequi voluptatem sapiente ipsa cum nobis enim cumque!</p>
          </Panel>
          <Panel header="How to manage my account?" key="6">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloremque assumenda repudiandae, iste atque facere tempore nulla optio unde, corporis harum exercitationem qui repellendus magnam veniam. Vitae dolorem facilis et cumque quae molestias iste harum sint accusamus necessitatibus. Debitis necessitatibus ab quo sequi voluptatem sapiente ipsa cum nobis enim cumque!</p>
          </Panel>
        </Collapse>
        <div className="quickSupport">
          <h3>Want quick support?</h3>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloremque assumenda repudiandae, iste atque facere tempore nulla optio unde, corporis harum exercitationem qui repellendus magnam veniam. Vitae dolorem facilis et cumque quae molestias iste harum sint accusamus necessitatibus. Debitis necessitatibus ab quo sequi voluptatem sapiente ipsa cum nobis enim cumque!</p>
          <Button type="primary" size="large"><i className="fas fa-envelope"></i> Email your question</Button>
        </div>
      </div>
    </div>  
  );
}

export default AppFaq;