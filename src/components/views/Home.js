import React from 'react';

import AppAbout from '../home/About';
import AppContact from '../home/Contact';
import AppFeature from '../home/Feature';
import AppPricing from '../home/Pricing';
import AppFaq from '../home/Faq';
import AppHero from '../home/Hero';


function AppHome() {
  return (
    <div className="main">
      <AppHero/>
      <AppAbout/>
      <AppFeature/>
      <AppFaq/>
      <AppPricing/>
      <AppContact/>
    </div>
  );
}

export default AppHome;