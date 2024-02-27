import { useState } from "react";
import './stats.scss';

const Stats = (prop) => {
  const { data } = prop;

  const [active, setActive] = useState(false);
  const [select, setSelect] = useState("بالشهر");

  const onSelect = (e) => {
    e.preventDefault();
    setSelect(e.target.innerText);
    setActive(false);
  }

  return (
    <div className="stats">
      <div className="stats-head">
        <div className="title">
          <img src={ "../users-stats.svg" } alt="الحجوزات" />
          <span>الحجوزات</span>
        </div>
          <div className="dropdown-select">
            <div className="dropdown">
              <div className="dropdown-btn" onClick={ (e) => { setActive(!active); e.preventDefault(); } }>
                <span>{ select }</span>
                <img src="/arrow-down.svg" alt="arrow down" />
              </div>
              {
                active &&
                <div className="dropdown-content">

                  <div className="dropdown-item"
                    key={ 0 }
                    onClick={ev => onSelect(ev) }
                  >
                    باليوم
                  </div>
                  <div className="dropdown-item"
                    key={ 1 }
                    onClick={ev => onSelect(ev) }
                  >
                    بالاسبوع
                  </div>
                  <div className="dropdown-item"
                    key={ 2 }
                    onClick={ev => onSelect(ev) }
                  >
                    بالشهر
                  </div>
                </div>
              }
            </div>
          </div>
      </div>
      <div className="stats-numbers">
          <div className="stats-item" >
            <p className="title" style={ { color: "#8B8D97" } }>عدد الحجوزات</p>
            <p className="number" style={ { color:  "#45464E" } }>100</p>
          </div>
          <div className="stats-item" >
            <p className="title" style={ { color: "#00D015" } }>الحجوزات المكتملة</p>
            <p className="number" style={ { color:  "#00D015" } }>120</p>
          </div>
          <div className="stats-item" >
            <p className="title" style={ { color: "#FF2619" } }>الحجوزات الغير مكتملة</p>
            <p className="number" style={ { color:  "#FF2619" } }>50</p>
          </div>
      </div>
    </div>
  )
};

export default Stats;