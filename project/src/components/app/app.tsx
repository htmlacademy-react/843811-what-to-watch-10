import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import NotFoundScreen from '../../pages/404-not-found-screen/404-not-found-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import FilmDetailsScreen from '../../pages/film-details-screen/film-details-screen';
import PrivateRoute from '../private-route/private-route';

const App = () => (
  <BrowserRouter >
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<MainScreen />}
      />
      <Route
        path={AppRoute.SignIn}
        element={<SignInScreen />}
      />
      <Route
        path={AppRoute.Player}
        element={<PlayerScreen />}
      />
      <Route
        path={AppRoute.MyList}
        element={
          <PrivateRoute
            authorizationStatus={AuthorizationStatus.NoAuth}
          >
            <MyListScreen />
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.Film}
        element={<FilmDetailsScreen />}
      />
      <Route
        path={AppRoute.AddReview}
        element={<AddReviewScreen />}
      />
      <Route
        path='*'
        element={<NotFoundScreen />}
      />
    </Routes>
  </BrowserRouter >
);

export default App;
