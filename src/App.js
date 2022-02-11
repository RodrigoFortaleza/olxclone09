import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import Routes from './Routes';
import { Template } from './components/MainComponents';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

const Page = (props) => {
  return (
    <BrowserRouter>

      <Template>

        <Header />

        <Routes />

        <Footer />

      </Template>

    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
}

const mapDispatchToPage = (dispatch) => {
  return (
    <div></div>
  );
}


export default connect(mapStateToProps, mapDispatchToPage)(Page);
