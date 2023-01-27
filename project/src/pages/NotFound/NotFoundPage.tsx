import Header from '../../components/Header/Header';
import NotFound from '../../components/NotFound/NotFound';
import {Helmet} from 'react-helmet-async';

function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 Страница не найдена</title>
      </Helmet>
      <Header />
      <NotFound />
    </>
  );
}

export default NotFoundPage;