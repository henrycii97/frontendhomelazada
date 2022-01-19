import './App.css';
import Ads from './Component/Ads';
import Header from './Component/Header';
import SlideBanner from './Component/SlideBanner';
import Flashdeal from './Component/Flashdeal';
import PopularSearch from './Component/PopularSearch';
import CollectionLaz from './Component/CollectionLaz';
import Lazmall from './Component/Lazmall';
import CategoryList from './Component/CategoryList';
import Exclusivelyforyou from './Component/Exclusivelyforyou';
import PartnersContacts from './Component/PartnersContacts';
import CertificationServicePayment from './Component/CertificationServicePayment';
import BannerIntroduce from './Component/BannerIntroduce';
import LazadaSoutheastAsia from './Component/LazadaSoutheastAsia';
import ScrollLaz from './Component/ScrollLaz';

function App() {
  return (
    <div className="App">
     <Ads/>
     <Header/>
     <SlideBanner/>
     <Flashdeal/>
     <PopularSearch/>
     <CollectionLaz/>
     <Lazmall/>
     <CategoryList/>
     <Exclusivelyforyou/>
     <PartnersContacts/>
     <CertificationServicePayment/>
     <BannerIntroduce/>
     <LazadaSoutheastAsia/>
     <ScrollLaz/>
    </div>
  );
}

export default App;
