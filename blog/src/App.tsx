import { useState } from 'react';
import './App.less';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="box">
      <div className="meBox">
        <div className="headPhoto"></div>
        <div className="meBox-title">
          <p>戈嘉伦(Garron)</p>
          <div className="fg"></div>
        </div>
        <div className="meBox-text">
          <a href="https://www.gejialun.vip/" className="button">
            home
          </a>
          <a href="https://github.com/geallenboy" className="button">
            github
          </a>
          <a href="https://www.yuque.com/garronge" className="button">
            blog
          </a>
          <a className="button">works</a>
        </div>
      </div>
      <div className="cmdBox">
        <div className="cmd">
          <div className="click">
            <div className="red"></div>
            <div className="yellow"></div>
            <div className="green"></div>
          </div>
          <div className="title">
            <span>garron - bash</span>
          </div>
          <div className="cmdbox">
            <div className="box-shell">
              <p>
                <span className="color1">root@garron</span>
                <span className="color2">~</span>
                <span className="color3">cd info.md</span>
              </p>
              <p className="sh-p">EMALL: 15189748817@163.com</p>
            </div>
            <div className="box-shell">
              <p>
                <span className="color1">root@garron</span>
                <span className="color2">~</span>
                <span className="color3">cd code.md</span>
              </p>
              <p className="sh-p">1.常用utils包</p>
              <p className="sh-p">2.react组件</p>
            </div>
            <div className="box-shell">
              <p>
                <span className="color1">root@garron</span>
                <span className="color2">~</span>
                <span className="color3">sudo rm -rf /过去的自己/*</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
