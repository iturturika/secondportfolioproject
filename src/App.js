import React from 'react';
import './scss/App.scss';
import Header from './components/Header/Header';
import cta_illustration from './images/illustration.svg';
import amazon_logo from './images/amazon.svg';
import dribble_logo from './images/dribble.svg';
import hubspot_logo from './images/hubspot.svg';
import notion_logo from './images/notion.svg';
import netflix_logo from './images/netflix.svg';
import zoom_logo from './images/zoom.svg';
import Heading from './components/Heading/Heading';
import Service from './components/Service/Service';
import illustration_1 from './images/illustration_1.svg';
import illustration_2 from './images/illustration_2.svg';
import illustration_3 from './images/illustration_3.svg';
import illustration_4 from './images/illustration_4.svg';
import illustration_5 from './images/illustration_5.svg';
import illustration_6 from './images/illustration_6.svg';
import illustration_7 from './images/illustration_7.svg';
import green_arrow from './images/arrow_icon.svg';
import Guide from './components/Guide/Guide';

function App() {
  return (
    <main className="wrap">
      <Header />
      <article className="cta">
        <div className="cta__text">
          <h1>Navigating the digital landscape for success</h1>
          <h4>
            Our digital marketing agency helps businesses grow and succeed online through a range of
            services including SEO, PPC, social media marketing, and content creation.
          </h4>
          <button className="cta__button">Book a consultation</button>
        </div>
        <img src={cta_illustration} alt="cta_illustration" className="cta__img" />
      </article>
      <article className="contributors">
        <img src={amazon_logo} alt="contributors__img" className="contributors__img" />
        <img src={dribble_logo} alt="contributors__img" className="contributors__img" />
        <img src={hubspot_logo} alt="contributors__img" className="contributors__img" />
        <img src={notion_logo} alt="contributors__img" className="contributors__img" />
        <img src={netflix_logo} alt="contributors__img" className="contributors__img" />
        <img src={zoom_logo} alt="contributors__img" className="contributors__img" />
      </article>
      <Heading
        title={'Services'}
        description={
          'At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:'
        }
      />

      <article className="services">
        <Service color={'gray'} img={illustration_1} title={'Search engine optimization'} />
        <Service color={'green'} img={illustration_2} title={'Pay-per-click advertising'} />
        <Service color={'dark'} img={illustration_3} title={'Social Media Marketing'} />
        <Service color={'gray'} img={illustration_4} title={'Email Marketing'} />
        <Service color={'green'} img={illustration_5} title={'Content Creation'} />
        <Service color={'dark'} img={illustration_6} title={'Analytics and Tracking'} />
      </article>

      <article className="offer">
        <div className="offer__text">
          <h3>Let’s make things happen</h3>
          <p>
            Contact us today to learn more about how our digital marketing services can help your
            business grow and succeed online.
          </p>
          <button className="offer__button">Get your free proposal</button>
        </div>
        <img src={illustration_7} alt="offer__img" className="offer__img" />
      </article>

      <Heading
        title={'Case Studies'}
        description={
          'Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies'
        }
      />

      <article className="examples">
        <div className="example">
          <p>
            For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50%
            increase in website traffic and a 25% increase in sales.
          </p>
          <div className="example__button">
            <h4>Learn more</h4>
            <img src={green_arrow} alt="green_arrow" />
          </div>
        </div>
        <span className="example__separator" />

        <div className="example">
          <p>
            For a B2B software company, we developed an SEO strategy that resulted in a first page
            ranking for key keywords and a 200% increase in organic traffic.
          </p>
          <div className="example__button">
            <h4>Learn more</h4>
            <img src={green_arrow} alt="green_arrow" />
          </div>
        </div>
        <span className="example__separator" />

        <div className="example">
          <p>
            For a national retail chain, we created a social media marketing campaign that increased
            followers by 25% and generated a 20% increase in online sales.
          </p>
          <div className="example__button">
            <h4>Learn more</h4>
            <img src={green_arrow} alt="green_arrow" />
          </div>
        </div>
      </article>

      <Heading
        title={'Our Working Process '}
        description={'Step-by-Step Guide to Achieving Your Business Goals'}
      />

      <article className="guides">
        <Guide
          number={'01'}
          heading={'Consultation'}
          description={
            'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
          }
        />

        <Guide
          number={'02'}
          heading={'Research and Strategy Development'}
          description={
            'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
          }
        />

        <Guide
          number={'03'}
          heading={'Implementation'}
          description={
            'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
          }
        />

        <Guide
          number={'04'}
          heading={'Monitoring and Optimization'}
          description={
            'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
          }
        />

        <Guide
          number={'05'}
          heading={'Reporting and Communication'}
          description={
            'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
          }
        />

        <Guide
          number={'06'}
          heading={'Continual Improvement'}
          description={
            'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
          }
        />

        <Heading
          title={'Team'}
          description={
            'Meet the skilled and experienced team behind our successful digital marketing strategies'
          }
        />
      </article>
    </main>
  );
}

export default App;
