import React from 'react'
import styles from './index.module.scss'
import pic1 from '../../../asserts/images/pic-1.webp'
import imgSrc1 from '../../../asserts/images/tab2.webp'
import { partOne } from '../../../utils/home'
import writes from '../../../utils/write'
const { footerTitle } = writes

const videoUrl =
  'http://26070311.s21v.faiusr.com/58/1/ABUIABA6GAAgyMrygAYo-MafpAE.mp4'

class Home extends React.Component {
  render() {
    return (
      <div className={styles.home}>
        {/* video播放区域 */}
        <div className="run-video">
          {/* <video src={videoUrl}></video> */}
          <video
            id="playChatVideo"
            width="100%"
            autoPlay
            preoad="true"
            controls
            muted
            playsInline
            loop
          >
            <source src={videoUrl} type="video/mp4"></source>
          </video>
        </div>

        {/* 内容区域 */}
        <div className="content">
          <div className="part-top">
            <div className="part-top-one">
              <div className="part-top-one-left">
                <h3>{partOne.title}</h3>
                <p>{partOne.body}</p>
              </div>
              <div className="part-top-one-right">
                <img src={pic1} alt="" />
              </div>
            </div>
            <div className="part-top-two"></div>
            <div className="part-top-three"></div>
          </div>
          <div className="part-bottom">
            {partOne.contentFooterList.map((item) => {
              return (
                <div className="item" key={item.id}>
                  <img src={imgSrc1} alt="" style={{ width: '64px' }} />
                  <div className="title">{item.title}</div>
                  <div className="text">{item.text}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* 底部 */}
        <div className="home-footer">
          {partOne.footerList.map((item) => {
            return (
              <div className="home-footer-item" key={item.id}>
                {item.name}
              </div>
            )
          })}
        </div>

        {/* 底部 */}
        <div className="footer">{footerTitle}</div>
      </div>
    )
  }
}

export default Home
