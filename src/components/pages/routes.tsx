import { Route, Routes } from 'react-router-dom';
import ErrorPage from './Error/error';
import Main from '../Main/Main';
import HomePage from './Home/HomePage';
import Details from './Details/Details';
import ForClients from './ForClients/ForClients';
import ForPartners from './ForPartners/ForPartners';
import Sale from './Sale/Sale';
import News from './News/News';
import Contacts from './Contacts/Contacts';

const RouterView = () => {
    return (
        <Routes>
            <Route path="/online-shop-react" element={<HomePage />} />
            <Route path="/catalogue" element={<Main />} />
            <Route path='/:name/details' element={<Details />}/>
            <Route path='/clients' element={<ForClients />}/>
            <Route path='/partners' element={<ForPartners />}/>
            <Route path='/sale' element={<Sale />}/>
            <Route path='/news' element={<News />}/>
            <Route path='/contacts' element={<Contacts />}/>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
};

export default RouterView;
