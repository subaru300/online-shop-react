import { Route, Routes } from 'react-router-dom';
import ErrorPage from './Error/error';
import Main from '../Main/Main';
import HomePage from './Home/HomePage';
import Details from './Details/Details';

const RouterView = () => {
    return (
        <Routes>
            <Route path="/online-shop-react" element={<HomePage />} />
            <Route path="/catalogue" element={<Main />} />
            <Route path='/:name/details' element={<Details />}/>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
};

export default RouterView;
