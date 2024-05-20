import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AppHeader from "../appHeader/AppHeader";
import {CharacterPage, ComicsPage, Page404, SingleComicsPage} from '../pages';

const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Routes>
                        <Route path="/" element={<CharacterPage/>}>
                        </Route>
                        <Route path="/comics" element={<ComicsPage/>}>
                        </Route>
                        <Route path="/comics/:comicsId" element={<SingleComicsPage/>}>
                        </Route>
                        <Route path='*' element={<Page404/>}>
                        </Route>
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App;