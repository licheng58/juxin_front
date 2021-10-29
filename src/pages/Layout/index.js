import React from 'react'
import styles from './index.module.scss'
import writes from '../../utils/write'
import Home from './Home'
import Product from './Product'
import { Tabs } from 'antd'
import { Route, Switch, Redirect } from 'react-router-dom'
import logo from '../../asserts/images/logo3.png'
import { Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'

const { handerList, languages } = writes
const { TabPane } = Tabs

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentLanguage: { name: '中文', key: 1 },
      activeKey: handerList[0].key,
    }
  }

  render() {
    const { activeKey } = this.state

    return (
      <div className={styles.layout}>
        {/* 顶部 */}
        <div className="header">
          {/* logo */}
          <div className="left">
            <img src={logo} alt="" />
          </div>
          <div className="center">
            {/* tab栏 */}
            <Tabs activeKey={activeKey} onChange={this.onChange} centered>
              {handerList.map((item) => {
                return (
                  <TabPane tab={item.name} key={item.key}>
                    <div className="tab-item" id="tabItem">
                      {/* body部分 -- 路由切换*/}
                      <Switch>
                        <Route path="/layout/home" component={Home}></Route>
                        <Route
                          path="/layout/product"
                          component={Product}
                        ></Route>
                        <Redirect
                          exact
                          from="/layout"
                          to="/layout/home"
                        ></Redirect>
                        <Redirect from="*" to="/404"></Redirect>
                      </Switch>
                    </div>
                  </TabPane>
                )
              })}
            </Tabs>
          </div>
        </div>

        {/* 回到顶部 */}
        <div className="toTop" onClick={this.ScrollTo}>
          UP
        </div>
      </div>
    )
  }
  scrollHandler = this.handleScroll.bind(this)

  componentDidMount() {
    // console.log(this.props.history)
    this.setState({
      activeKey: this.props.history.location.pathname,
    })

    window.addEventListener('scroll', this.scrollHandler)
  }

  // 回到顶部
  ScrollTo = () => {
    console.log(document.screen.width)
    let scrollToptimer = setInterval(function () {
      var top = document.body.scrollTop || document.documentElement.scrollTop
      var speed = top / 30
      document.documentElement.scrollTop -= speed
      if (top === 0) {
        clearInterval(scrollToptimer)
      }
    }, 5)
  }

  handleScroll(event) {
    console.log(111)
    // let scrollTop = document.getElementById('tabItem').scrollTop
    // this._handleScroll(scrollTop)
  }

  _handleScroll(scrollTop) {
    console.log(scrollTop)
    //滚动条距离页面的高度
  }

  // 点击tab
  onChange = (activeKey) => {
    this.setState({ activeKey })
    let path = ''
    handerList.forEach((v) => {
      if (activeKey === v.key) {
        path = v.path
      }
    })
    this.props.history.push(path)
  }

  renderMuen = () => {
    const menu = (
      <Menu>
        {languages.map((item) => {
          return (
            <Menu.Item
              key={item.key}
              onClick={this.clickLanguage.bind(this, item)}
            >
              {item.name}
            </Menu.Item>
          )
        })}
      </Menu>
    )

    return (
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link">
          {this.state.currentLanguage.name} <DownOutlined />
        </a>
      </Dropdown>
    )
  }

  // 选择语言
  clickLanguage(item) {
    this.setState({
      currentLanguage: item,
    })
  }
}

export default Layout
