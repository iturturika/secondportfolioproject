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
import illustration_8 from './images/illustration_8.svg';
import green_arrow from './images/arrow_icon.svg';
import Guide from './components/Guide/Guide';
import TeamMember from './components/TeamMember/TeamMember';
import profile_img_1 from './images/profile-picture_1.svg';
import profile_img_2 from './images/profile-picture_2.svg';
import profile_img_3 from './images/profile-picture_3.svg';
import profile_img_4 from './images/profile-picture_4.svg';
import profile_img_5 from './images/profile-picture_5.svg';
import profile_img_6 from './images/profile-picture_6.svg';
import Testimonial from './components/Testimonial/Testimonial';
import arrow_right from './images/arrow_right.svg';
import star from './images/star.svg';
import star_green from './images/star_green.svg';
import RadioButton from './components/RadioButton/RadioButton';
import FormInput from './components/FormInput/FormInput';
import logo_white from './images/logo_white.svg';
import linkedin2 from './images/linkedin2.svg';
import facebook from './images/facebook.svg';
import twitter from './images/twitter.svg';
import HeaderNav from './components/HeaderNav/HeaderNav';

function App() {
  const [testimonials, setTestimonials] = React.useState([
    {
      text: `We have been working with Positivus for the past year and have seen a significant
          increase in website traffic and leads as a result of their efforts. The team is
          professional, responsive, and truly cares about the success of our business. We highly
          recommend Positivus to any company looking to grow their online presence.`,
      name: 'John Smith',
      role: 'Marketing CEO Agent',
    },
    {
      text: `Get all have some text working with Positivus for the past year and have seen a significant
          increase in website traffic and leads as a result of their efforts. The team is
          professional, responsive, and truly cares about the success of our business. We highly
          recommend Positivus to any company looking to grow their online presence.`,
      name: 'Bob Smith',
      role: 'Marketing CEO Agent',
    },
    {
      text: `Some text have been working with Positivus for the past year and have seen a significant
          increase in website traffic and leads as a result of their efforts. The team is
          professional, responsive, and truly cares about the success of our business. We highly
          recommend Positivus to any company looking to grow their online presence.`,
      name: 'Jin Tiles',
      role: 'IT CEO Agent',
    },
    {
      text: `Another text for testimonial with Positivus for the past year and have seen a significant
          increase in website traffic and leads as a result of their efforts. The team is
          professional, responsive, and truly cares about the success of our business. We highly
          recommend Positivus to any company looking to grow their online presence.`,
      name: 'Alex Smith',
      role: 'Marketing CEO Agent',
    },
  ]);
  const [currentIndex, setCurrentIndex] = React.useState(1);
  const [onClickBurgerMenu, setOnClickBurgerMenu] = React.useState(false);

  return (
    <main className="wrap">
      <div
        className="burger-menu__overlay"
        style={onClickBurgerMenu ? { top: 0 } : { top: '-100vh' }}
      >
        <HeaderNav
          style={{ display: 'flex', flexDirection: 'column', rowGap: '20px' }}
          setOnClickBurgerMenu={setOnClickBurgerMenu}
        />
      </div>
      <Header setOnClickBurgerMenu={setOnClickBurgerMenu} onClickBurgerMenu={onClickBurgerMenu} />
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
      </article>
      <Heading
        title={'Team'}
        description={
          'Meet the skilled and experienced team behind our successful digital marketing strategies'
        }
      />
      <article className="team">
        <TeamMember
          img={profile_img_1}
          name={'John Smith'}
          role={'CEO and Founder'}
          description={
            '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'
          }
        />

        <TeamMember
          img={profile_img_2}
          name={'Jane Doe'}
          role={'Director of Operations'}
          description={
            '7+ years of experience in project management and team leadership. Strong organizational and communication skills'
          }
        />

        <TeamMember
          img={profile_img_3}
          name={'Michael Brown'}
          role={'Senior SEO Specialist'}
          description={
            '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization'
          }
        />

        <TeamMember
          img={profile_img_4}
          name={'Emily Johnson'}
          role={'PPC Manager'}
          description={
            '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis'
          }
        />

        <TeamMember
          img={profile_img_5}
          name={'Brian Williams'}
          role={'Social Media Specialist'}
          description={
            '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement'
          }
        />

        <TeamMember
          img={profile_img_6}
          name={'Sarah Kim'}
          role={'Content Creator'}
          description={
            '2+ years of experience in writing and editingilled in creating compelling, SEO-optimized content for various industries'
          }
        />
        <button className="team__button">See all team</button>
      </article>

      <Heading
        title={'Testimonials'}
        description={
          'Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services'
        }
      />

      <article className="testimonials">
        <div className="testimonial__scroll">
          <Testimonial
            text={testimonials[currentIndex].text}
            name={testimonials[currentIndex].name}
            role={testimonials[currentIndex].role}
          />
        </div>

        <div className="testimonial__slider">
          {0 !== currentIndex ? (
            <img
              src={arrow_right}
              alt="arrow_left"
              className="arrow__left"
              onClick={() => {
                setCurrentIndex(currentIndex - 1);
              }}
            />
          ) : (
            <span style={{ width: '24px' }} />
          )}
          <div className="testimomial__stars">
            {testimonials.map((item, index) => {
              return (
                <img
                  src={currentIndex === index ? star_green : star}
                  key={index}
                  alt="star"
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setCurrentIndex(index);
                  }}
                />
              );
            })}
          </div>
          {testimonials.length - 1 !== currentIndex ? (
            <img
              src={arrow_right}
              alt="arrow_right"
              className="arrow__right"
              onClick={() => {
                setCurrentIndex(currentIndex + 1);
              }}
            />
          ) : (
            <span style={{ width: '24px' }} />
          )}
        </div>
      </article>
      <Heading
        title={'Contact Us'}
        description={`Connect with Us: Let's Discuss Your Digital Marketing Needs`}
      />
      <article className="form">
        <form>
          <div className="radio-buttons">
            <RadioButton text={'Say Hi'} />
            <RadioButton text={'Get a Quote'} />
          </div>
          <FormInput label={'Name*'} placeholder={'Name'} />
          <FormInput label={'Email*'} placeholder={'Email'} />
          <FormInput label={'Message*'} placeholder={'Message'} height={'190px'} />
          <button className="form__button">Send Message</button>
        </form>
        <img src={illustration_8} alt="illustration" height={'100%'} style={{ margin: 0 }} />
      </article>

      <footer>
        <div className="footer__nav">
          <img src={logo_white} alt="logo_white" className="logo" />
          <div className="footer__nav__pages">
            <p>About us</p>
            <p>Services</p>
            <p>Use Cases</p>
            <p>Pricing</p>
            <p>Blog</p>
          </div>
          <div className="footer__nav__socials">
            <img src={linkedin2} alt="linkedin" />
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
          </div>
        </div>
        <div className="footer__second-section">
          <div className="footer__second-section__contacts">
            <h4>Contact us:</h4>
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
          </div>
          <div className="subscribe-to-news">
            <input placeholder="Email" className="subscribe-to-news__input" />
            <button className="subscribe-to-news__button">Subscribe to news</button>
          </div>
        </div>
        <span className="footer__separator" />
        <div className="footer__legal__info">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <a href="/">Privacy Policy</a>
        </div>
      </footer>
    </main>
  );
}

export default App;
