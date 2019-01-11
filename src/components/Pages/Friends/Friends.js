import React from 'react';
import './Friends.scss';

class Friends extends React.Component {
  changeView = (e) => {
    const view = e.currentTarget.id;
    this.props.history.push(`/${view}`);
  }
  
render() {
    return (
      <div className='Friends mx-auto'>
        <div className="card-deck mt-5">
          <div className="card border-dark" id="friends/:id/edit" onClick={this.changeView}>
            <div className="card-body text-center">
              <h4 className="card-title"><i className="fas fa-user-friends fa-7x"></i></h4>
              <h6 className="card-subtitle mb-2 text-muted">Friends</h6>
              <p className="card-text">Peeeps</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Friends;
