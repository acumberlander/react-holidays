import React from 'react';
import './HolidayDetail.scss';

class HolidayDetail extends React.Component {
  changeView = (e) => {
    const view = e.currentTarget.id;
    this.props.history.push(`/${view}`);
  }
  
render() {
    return (
      <div className='HolidayDetail mx-auto'>
        <div className="card-deck mt-5">
          <div className="card border-dark" id="holidays/:id" onClick={this.changeView}>
            <div className="card-body text-center">
              <h4 className="card-title">Holiday Detail Component</h4>
              <p className="card-text">Holidays and Friends!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HolidayDetail;
