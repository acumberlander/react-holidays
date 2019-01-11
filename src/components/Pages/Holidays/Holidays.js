import React from 'react';
import './Holidays.scss';

class Holidays extends React.Component {
  changeView = (e) => {
    const view = e.currentTarget.id;
    this.props.history.push(`/${view}`);
  }
  
render() {
    return (
      <div className='Holidays mx-auto'>
        <div className="card-deck mt-5">
          <div className="card border-dark" id="holidays/12345" onClick={this.changeView}>
            <div className="card-body text-center">
              <h4 className="card-title"><i className="fas fa-tree fa-7x"></i></h4>
              <h6 className="card-subtitle mb-2 text-muted">Holidays</h6>
              <p className="card-text">Days Off</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Holidays;
