import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import mainImage from '../../assets/Rectangle.png';
import { useSearch } from '../../context/SearchContext';
import { Search } from '@material-ui/icons';
import Rectangle6 from '../../assets/Rectangle6.png';
import Rectangle7 from '../../assets/Rectangle7.png';
import Rectangle8 from '../../assets/Rectangle8.png';
import PlayerImage from '../../assets/PlayerImage.png';
import Rectangle12 from '../../assets/Rectangle12.png';
import Rectangle13 from '../../assets/Rectangle13.png';
import Rectangle14 from '../../assets/Rectangle14.png';
import Rectangle15 from '../../assets/Rectangle15.png';
import Rectangle16 from '../../assets/Rectangle16.png';
import Rectangle17 from '../../assets/Rectangle17.png';
import homeImg from '../../assets/homeImg.png';
import homeImg2 from '../../assets/homeImg2.png';
import homeImg3 from '../../assets/homeImg3.png';
import homeImg4 from '../../assets/homeImg4.png';
import standart2 from '../../assets/standart2.png';
import basic1 from '../../assets/basic1.png';
import basic2 from '../../assets/basic2.png';
import Premium1 from '../../assets/Premium1.png';
import Poster from '../../assets/Poster.png';
import exampleProfileImage from '../../assets/exampleProfileImage.png';
import Popup from 'reactjs-popup';
import { Player } from 'video-react';
import Slider from 'react-slick';
import './home.css';
import Footer from '../../components/footer/Footer';
import SocialFooter from '../../components/socialFooter/socialFooter';
import ENTopbar from '../../components/topbar/ENTopBar';

const ENHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    lazyLoad: true,
    speed: 750,
    slidesToShow: 1,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { searchText, setSearchText } = useSearch();
  return (
    <div>
      <ENTopbar />
      <div
        className="homeContainer"
        style={{
          backgroundImage: `url(${mainImage})`,
          width: '100%',
          height: '65vh',
          overflow: 'hidden',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="search-container">
        <div className="searchbar-container">
          <div className="searchbar searchbar-2">
            <input
              type="text"
              placeholder="Search for a deceased/organisation"
              className="SearchInput"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Search className="searchIcon" />
          </div>
        </div>
        <Sidebar> </Sidebar>
      </div>

      <div className="vid-text-container">
        <div className="vid-text-title">
          <h1>
            <strong>???? ?????? ?????????? ??????????.</strong>
          </h1>
          <h2 style={{ marginBottom: '3rem' }}>
            ???? ?????? ???????? ?????? ???????????? ???????? ???????? ?????????? ???????????? ??????
          </h2>
          <h2 style={{ color: '#ABC9DB', fontSize: '23px' }}>MOMENTS. LEGACY. COMMUNITY</h2>
        </div>
        <div className="text-section-container">
          <div className="top-image-container">
            <div className="top-image">
              <p className="text-container-home">
                ?????????? ???????? ???? ?????? ???????? ???????? ???????????? ???????????? ?????????????? ???????????? ???? ??????
                ??????????, ?????????? ????????????.<br></br>
                ???? ???????? ???? ?????? ????????????, ?????????? ???????? ???????? ????????.
              </p>
            </div>
          </div>
          <div className="bottom-image-container">
            <p className="text-container-home" style={{color: '#ffff', fontWeight: '900', fontSize: '35px'}}>
              ?????? ???????? ???????? ???? ?????????? ?????????? ???? ???????????? ???? ????????????
            </p>
            <Player
              poster={PlayerImage}
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              width="50%"
              height="50%"
              className="react-player"
              controls={false}
              playing
            />
          </div>
        </div>
      </div>

      <div className="popups-container">
        <h1 className="text-container-home" style={{width: '100%', textAlign: 'center', margin: '1rem'}}>
          ?????? ?????????? ???? Life Cloud ?????????? ?????? ???????????? ???? ??????????{' '}
          <strong>??????????????</strong>
        </h1>
      </div>
      <div className="imgs-container">
        <div>
          <Popup
            trigger={
              <div>
                <img className="img-300" src={Rectangle13} alt=""></img>
                <h1>?????????? ??????????????</h1>
                <p>+</p>
                <p className="button"> ?????? ?????? </p>
              </div>
            }
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> Social Media </div>
                <div className="content">
                  {' '}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, a nostrum. Dolorem, repellat quidem ut, minima sint vel
                  eveniet quibusdam voluptates delectus doloremque, explicabo
                  tempore dicta adipisci fugit amet dignissimos?
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequatur sit commodi beatae optio voluptatum sed eius
                  cumque, delectus saepe repudiandae explicabo nemo nam libero
                  ad, doloribus, voluptas rem alias. Vitae?
                </div>
                <div className="actions">
                  <button
                    className="button"
                    onClick={() => {
                      console.log('modal closed ');
                      close();
                    }}
                  >
                    ????????
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
        <div>
          <Popup
            trigger={
              <div>
                <img className="img-300" src={Rectangle14} alt=""></img>
                <h1>QR Code</h1>
                <p>+</p>
                <p>?????? ??????</p>{' '}
              </div>
            }
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> QR Code </div>
                <div className="content">
                  {' '}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, a nostrum. Dolorem, repellat quidem ut, minima sint vel
                  eveniet quibusdam voluptates delectus doloremque, explicabo
                  tempore dicta adipisci fugit amet dignissimos?
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequatur sit commodi beatae optio voluptatum sed eius
                  cumque, delectus saepe repudiandae explicabo nemo nam libero
                  ad, doloribus, voluptas rem alias. Vitae?
                </div>
                <div className="actions">
                  <button
                    className="button"
                    onClick={() => {
                      console.log('modal closed ');
                      close();
                    }}
                  >
                    ????????
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
        <div>
          <Popup
            trigger={
              <div>
                <img className="img-300" src={Rectangle12} alt=""></img>
                <h1>?????????? ???????????? ????????????????</h1>
                <p>+</p>
                <p>?????? ??????</p>{' '}
              </div>
            }
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> Saving photos&videos </div>
                <div className="content">
                  {' '}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, a nostrum. Dolorem, repellat quidem ut, minima sint vel
                  eveniet quibusdam voluptates delectus doloremque, explicabo
                  tempore dicta adipisci fugit amet dignissimos?
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequatur sit commodi beatae optio voluptatum sed eius
                  cumque, delectus saepe repudiandae explicabo nemo nam libero
                  ad, doloribus, voluptas rem alias. Vitae?
                </div>
                <div className="actions">
                  <button
                    className="button"
                    onClick={() => {
                      console.log('modal closed ');
                      close();
                    }}
                  >
                    ????????
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
      <div className="imgs-container">
        <div>
          <Popup
            trigger={
              <div>
                <img className="img-300" src={Rectangle16} alt=""></img>
                <h1>?????????? ????????????</h1>
                <p>+</p>
                <p>?????? ??????</p>
              </div>
            }
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> Wall management </div>
                <div className="content">
                  {' '}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, a nostrum. Dolorem, repellat quidem ut, minima sint vel
                  eveniet quibusdam voluptates delectus doloremque, explicabo
                  tempore dicta adipisci fugit amet dignissimos?
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequatur sit commodi beatae optio voluptatum sed eius
                  cumque, delectus saepe repudiandae explicabo nemo nam libero
                  ad, doloribus, voluptas rem alias. Vitae?
                </div>
                <div className="actions">
                  <button
                    className="button"
                    onClick={() => {
                      console.log('modal closed ');
                      close();
                    }}
                  >
                    ????????
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
        <div>
          <Popup
            trigger={
              <div>
                <img className="img-300" src={Rectangle17} alt=""></img>
                <h1>?????????? ?????? ??????</h1>
                <p>+</p>
                <p>?????? ??????</p>{' '}
              </div>
            }
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> Calendar managemen </div>
                <div className="content">
                  {' '}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, a nostrum. Dolorem, repellat quidem ut, minima sint vel
                  eveniet quibusdam voluptates delectus doloremque, explicabo
                  tempore dicta adipisci fugit amet dignissimos?
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequatur sit commodi beatae optio voluptatum sed eius
                  cumque, delectus saepe repudiandae explicabo nemo nam libero
                  ad, doloribus, voluptas rem alias. Vitae?
                </div>
                <div className="actions">
                  <button
                    className="button"
                    onClick={() => {
                      console.log('modal closed ');
                      close();
                    }}
                  >
                    ????????
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
        <div>
          <Popup
            trigger={
              <div>
                <img className="img-300" src={Rectangle15} alt=""></img>
                <h1>?????????? ????????</h1>
                <p>+</p>
                <p>?????? ??????</p>{' '}
              </div>
            }
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> Graves locations </div>
                <div className="content">
                  {' '}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, a nostrum. Dolorem, repellat quidem ut, minima sint vel
                  eveniet quibusdam voluptates delectus doloremque, explicabo
                  tempore dicta adipisci fugit amet dignissimos?
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequatur sit commodi beatae optio voluptatum sed eius
                  cumque, delectus saepe repudiandae explicabo nemo nam libero
                  ad, doloribus, voluptas rem alias. Vitae?
                </div>
                <div className="actions">
                  <button
                    className="button"
                    onClick={() => {
                      console.log('modal closed ');
                      close();
                    }}
                  >
                    ????????
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>

      <div className="example-profile">
        <Slider {...settings}>
          <a href="#">
            <div
              style={{ backgroundImage: `url(${exampleProfileImage})` }}
              className="example-profile-image"
            ></div>
          </a>
          <a href="#">
            <div
              style={{ backgroundImage: `url(${exampleProfileImage})` }}
              className="example-profile-image"
            ></div>
          </a>
          <a href="#">
            <div
              style={{ backgroundImage: `url(${exampleProfileImage})` }}
              className="example-profile-image"
            ></div>
          </a>
          <a href="#">
            <div
              style={{ backgroundImage: `url(${exampleProfileImage})` }}
              className="example-profile-image"
            ></div>
          </a>
        </Slider>
      </div>
      <a href="/createprofile" className="creation-btn">
        <div className="profile-div">+ ???????????? ?????????????? ????????????</div>
      </a>
      <a href="/createprofile" className="creation-btn">
        <div className="profile-div" style={{ backgroundColor: '#6097BF' }}>
          + ?????? ?????? ?????????? ????????????
        </div>
      </a>
      <a href="/createprofile" className="creation-btn">
        <div className="profile-div" style={{ backgroundColor: '#46779B' }}>
          + ?????????? ?????????????? ????????????
        </div>
      </a>
      <div className="testimonials">
        <Slider {...settings}>
          <div>
            <h3>
              ???????? ???????????? ?????????? ?????? ??????, ?????????????????? ?????????????????? ???????? ???????????? ??????????
            </h3>
            <h5>-???????? ??????-</h5>
          </div>
          <div>
            <h3>
              ???????? ???????????? ?????????? ?????? ??????, ?????????????????? ?????????????????? ???????? ???????????? ??????????
            </h3>
            <h5>-???????? ??????-</h5>
          </div>
          <div>
            <h3>
              ???????? ???????????? ?????????? ?????? ??????, ?????????????????? ?????????????????? ???????? ???????????? ??????????
            </h3>
            <h5>-???????? ??????-</h5>
          </div>
        </Slider>
      </div>

      {/* <div className="plans-section">
        <h1 className="plans-title">Plans and options for purchase</h1>
        <div className="plans-container">
          <div className="plan-container">
            <img src={basic1} alt=""></img>
            <h1 className="plan-title">LifePage</h1>
            <div className="plan-description">
              <h5>????????</h5>
              <a>+ ?????? ???????????? ????????????</a>
            </div>
          </div>
          <div className="plan-container">
            <img src={basic2} alt=""></img>
            <h1 className="plan-title">LifeBook</h1>
            <div className="plan-description">
              <h5>??????</h5>
              <a>+ ?????? ???????????? ????????????</a>
            </div>
          </div>
          <div className="plan-container">
            <img src={standart2} alt=""></img>
            <h1 className="plan-title">LifeBook</h1>
            <div className="plan-description">
              <h5>5 ????????</h5>
              <a>+ ?????? ???????????? ????????????</a>
            </div>
          </div>
          <div className="plan-container">
            <img src={Premium1} alt=""></img>
            <h1 className="plan-title">LifeBook</h1>
            <div className="plan-description">
              <h5>Organisation</h5>
              <a>+ ?????? ???????????? ????????????</a>
            </div>
          </div>
        </div>
        <div className="link-plans">+ To the plans and purchase page</div>
      </div> */}
      <SocialFooter />
      <Footer />
    </div>
  );
};

export default ENHome;
