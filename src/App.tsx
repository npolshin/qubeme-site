import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScanPage from './components/pages/ScanPage';
import './index.css';
import Header from './components/organisms/Header/index';
import styled from 'styled-components';
function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <div style={{ alignItems: 'center', justifyContent: 'center', flex: 1, display: 'flex', padding: 50 }}>
                <h1>Work in progress. Stay tuned.</h1>
              </div>
            </Route>
            <Route path="/scan">
              <ScanPage></ScanPage>
            </Route>
          </Switch>
        </div>
      </Router>
      <AppLinksContainer>
        <a style={{ width: 150 }} href="https://apps.apple.com/kz/app/cardsimply/id1500798180?mt=8">
          <img
            style={{ maxWidth: '100%', height: 'auto', margin: '6%', width: '88%' }}
            src="https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2020-03-05&kind=iossoftware&bubble=apple_music"
            alt="app store"></img>
        </a>
        <a
          style={{ width: 150 }}
          href="https://play.google.com/store/apps/details?id=com.issataymassalin.business_card_proj&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
          <img
            style={{ maxWidth: '100%', height: 'auto' }}
            alt="Get it on Google Play"
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          />
        </a>
      </AppLinksContainer>
    </div>
  );
}

const AppLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
