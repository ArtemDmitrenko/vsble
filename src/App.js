import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from 'components/Header/Header';
import Home from 'pages/home/home';
import PublicInfo from 'pages/creator/public-info/public-info';
import Custom404 from 'pages/404/404';
import SignUp from 'pages/sign-up/sign-up';
import SignIn from 'pages/sign-in/sign-in';
import OtherProfile from 'pages/creator/other-profile/other-profile';
import FileInfoFromOtherProfile from 'pages/creator/other-profile/file-info-other/file-info-other';
import FileInfoFromCreator from 'pages/creator/file-info-creator/file-info-creator';
import FileInfoFromArtbuyer from 'pages/artbuyer/creator-profile-artbuyer/file-info-artbuyer/file-info-artbuyer';
import CreatorProfile from 'pages/creator/creator-profile/creator-profile';
import CreatorProfileFromArtbuyer from 'pages/artbuyer/creator-profile-artbuyer/creator-profile-artbuyer';
import ShowAll from 'pages/artbuyer/creator-profile-artbuyer/show-all/show-all';
import Favourites from 'pages/artbuyer/favourites/favourites';
import Settings from 'pages/creator/settings/settings';
import Showroom from 'pages/artbuyer/showroom/showroom';

import ScrollToTop from 'hoc/ScrollToTop';
import RequireAuth from 'hoc/RequireAuth';
import AuthProvider from 'hoc/AuthProvider';

import './App.scss';
import SearchProvider from 'hoc/SearchProvider';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <SearchProvider>
            <ScrollToTop>
              <Routes>
                <Route path="*" element={<Custom404 />} />
                <Route path="/" element={<Header />}>
                  <Route index element={<Home />} />
                  <Route path="sign-up" element={<SignUp />} />
                  <Route path="sign-in" element={<SignIn />} />
                  <Route
                    path="creator/profile"
                    element={
                      <RequireAuth>
                        <CreatorProfile />
                      </RequireAuth>
                    }
                  />
                  <Route
                    path="creator/public-info"
                    element={
                      <RequireAuth>
                        <PublicInfo />
                      </RequireAuth>
                    }
                  />
                  <Route
                    path="creator/settings"
                    element={
                      <RequireAuth>
                        <Settings />
                      </RequireAuth>
                    }
                  />

                  <Route
                    path="creator/other-profile"
                    element={
                      <RequireAuth>
                        <OtherProfile />
                      </RequireAuth>
                    }
                  />

                  <Route
                    path="artbuyer/showroom"
                    element={
                      <RequireAuth>
                        <Showroom />
                      </RequireAuth>
                    }
                  />
                  <Route
                    path="artbuyer/favourites"
                    element={
                      <RequireAuth>
                        <Favourites />
                      </RequireAuth>
                    }
                  />
                  <Route
                    path="artbuyer/creator-profile"
                    element={
                      <RequireAuth>
                        <CreatorProfileFromArtbuyer />
                      </RequireAuth>
                    }
                  />
                  <Route
                    path="artbuyer/creator-profile/show-all"
                    element={
                      <RequireAuth>
                        <ShowAll />
                      </RequireAuth>
                    }
                  />
                </Route>
                <Route
                  path="creator/file-info"
                  element={
                    <RequireAuth>
                      <FileInfoFromCreator />
                    </RequireAuth>
                  }
                />
                <Route
                  path="creator/other-profile/file-info"
                  element={
                    <RequireAuth>
                      <FileInfoFromOtherProfile />
                    </RequireAuth>
                  }
                />
                <Route
                  path="artbuyer/creator-profile/file-info"
                  element={
                    <RequireAuth>
                      <FileInfoFromArtbuyer />
                    </RequireAuth>
                  }
                />
              </Routes>
            </ScrollToTop>
          </SearchProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
