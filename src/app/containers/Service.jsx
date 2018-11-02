import React, { Component } from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map'

import './service.scss';

import { fetch } from '../actions/services';

import Base from './Base';

class Service extends Component {

  componentDidMount() {
    const API_URL = '/api/services/';

    setTimeout(() => { this.props.fetchServices(API_URL); }, 1000);
  }

  render() {
    const { loading, services = [] } = this.props;
    if (loading) {
      return (
        <div>
          <h1>LOADING...</h1>
        </div>
      );
    }

    return (
      <div className="service">
        <h1>Services</h1>
        {services.length !== 0 && map(services, service => {
          return (
            <div key={service._id}>
              <p>{service.name}</p>
            </div>
          );
        })}
      </div>
    );
  };
}

function mapStateToProps(state, ownProps) {
  return {
    services: state.services,
    loading: state.loadServices,
  };
}

// anything returned from here will end up in the props
const mapDispatchToProps = dispatch => ({
  // Our thunk will be mapped to this.props.fetch
  fetchServices: (url) => dispatch(fetch(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Service);
