import { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/Spinner';

const Page404 = lazy(() => import('../pages/404'));
const CharacterPage = lazy(() => import('../pages/CharacterPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComics = lazy(() => import('../pages/singleComics/SingleComics'));
const SingleCharacter = lazy(() => import('../pages/singleCharacter/SingleCharacter'));
const SinglePage = lazy(() => import('../pages/SinglePage'));


const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route path="/" element={<CharacterPage/>}/>
                            <Route path="/comics" element={<ComicsPage/>}/>
                            <Route path="/comics/:id" element={<SinglePage Component={SingleComics} dataType='comics'/>}/>
                            <Route path="/characters/:id" element={<SinglePage Component={SingleCharacter} dataType='character'/>}/>
                            <Route path='*' element={<Page404/>}/>
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
}

export default App;