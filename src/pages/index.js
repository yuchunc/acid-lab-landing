import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/rusty-sign.jpg';
import pic2 from '../assets/images/acid_efkt.jpg';
import pic3 from '../assets/images/drum-lesson.jpg';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="about" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            ABOUT
            <br />
            A.C.I.D LAB 岸汐職⼈聚落
          </h2>
          <p>
            以服飾、⽪件、銀飾⼯藝為主軸的共同⼯作空間
            <br />
            結合多個台灣獨⽴設計品牌，提供場地出租、
            展演活動、地⽅創⽣、⼿作課程、職⼈育成的服務
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="services" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            Rental Space
            <br />
            空間出租
          </h2>
          <p>
            獨⽴空間/共同空間 機台共享 ⼯業⽤縫紉機
            <br />
            （⾼頭⾞/平⾞、削⽪機、拋光機、砂輪機、分條機、壓底機)
            <br />
            ⼯作室有⾃⼰的花園/咖啡廳 ⾃由之丘 CCIP & CAFE
            <br />
            累了可以躺在⽊椅或草坪上，在充分放鬆的環境找尋靈感來源
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Handmade Course
            <br />
            ⼿作教室
          </h2>
          <p>
            ⽬前已和許多不同⾯向的品牌開設課程
            <br />
            （sine. 天⿎、〖⽉升】、Jimmy Calligraphy、甲蟲仙⽣-製⾰室
            KAZUO CRAFT等）
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Activities/ Exhibition
            <br />
            活動展演
          </h2>
          <p>
            <ul style={{listStyleType: "none", paddingLeft: "0px"}}>
              <li style={{paddingLeft: "0px"}}> ⼿作⾳樂祭/市集 </li>
              <ul style={{listStyleType: "none"}}>
                <li> 2018.6 ACID EFKT Festival 岸汐效應⼿作⾳樂祭 </li>
                <li> 2016.6 ⼀⽇職⼈市集 </li>
              </ul>
              <li style={{paddingLeft: "0px"}}> ⾳樂藝術派對 </li>
              <ul style={{listStyleType: "none"}}>
                <li> 2019.6 Acid Kitchen Presents : 13th Chamber </li>
                <li> 2018.8  BeatWave Taipei x ACID LAB </li>
              </ul>
              <li style={{paddingLeft: "0px"}}> 藝術展覽 </li>
              <ul style={{listStyleType: "none"}}>
                <li> 2018.10 舊書改造 ⽇本紙藝達⼈-OruFun </li>
                <li> 2017.12 景美⽂藝復興節 </li>
                <li> 2017.12 《景美・散策・写真展》 in ACID 140 </li>
              </ul>
            </ul>
          </p>
        </div>
      </section>
    </section>

    <section id="brands" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Accumsan mus tortor nunc aliquet</h2>
          <p>
            RESIDENT MANUFACTURER
            <br />
            進駐廠商
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>T. Sung</h3>
            <p>
              為什麼是陶？ 陶藝是一種煉金術 把土變成石和璃
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>VOLT Silver</h3>
            <p>
              提供獨特且平價的銀飾 不拘泥於任何形式的作品  
              並且持續發展銀飾的可能性
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Kazuo Craft</h3>
            <p>
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>TaigaStudio 針⽪⼿創</h3>
            <p>
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>-DJ RichCut</h3>
            <p>
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>Wen Irene Jewelry</h3>
            <p>
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>⾃由之丘 CCIP</h3>
            <p>
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header style={{width: "100%"}}>
          <h2>Contact Us</h2>
          <p>
            <ul style={{listStyleType: "none", paddingLeft: 0}}>
              <li> 02-2234-2968 </li>
              <li>0937-054-708 漢堡</li>
              <li>0916-031-630 EJ So</li>
            </ul>
          </p>
        </header>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
