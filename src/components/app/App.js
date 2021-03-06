import { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/Spinner';

const Page404 = lazy(()=> import('../pages/Page404'))
const MainPage = lazy(()=> import('../pages/MainPage'))
const ComicsPage = lazy(()=> import('../pages/ComicsPage'))
const SingleComicPage = lazy(()=> import('../pages/singleComicPage/SingleComicPage'))
const SingleCharPage = lazy(() => import('../pages/singleCharPage/SingleCharPage'));
const SinglePage = lazy(() => import('../pages/SinglePage'));

const App = () => {
    return (

        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Switch>
                            <Route exact path="/">
                                <MainPage/>
                            </Route>
                            <Route exact path="/comics">
                                <ComicsPage/>
                            </Route>
                            <Route exact path="/comics/:id">
                                <SinglePage Component={SingleComicPage} dataType='comic'/>
                            </Route>
                            <Route exact path="/characters/:id">
                                <SinglePage Component={SingleCharPage} dataType='character'/>
                            </Route>
                            <Route path="*">
                                <Page404/>
                            </Route>
                        </Switch>
                    </Suspense>
                </main>
            </div>
        </Router>

        // router v6

        // <Router>
        //     <div className="app">
        //         <AppHeader/>
        //         <main>
        //             <Suspense fallback={<Spinner/>}>
        //                 <Routes>
        //                     <Route path="/" element={<MainPage/>}/>
        //                     <Route path="/comics/*" element={<ComicsPage/>}/>
        //                     <Route path="/comics/:comicId" element={<SingleComicPage/>}/> 
        //                     <Route path='*' element={<Page404/>}/> 
        //                 </Routes> 
        //             </Suspense>
        //         </main>
        //     </div>
        // </Router> 
    )
}

export default App;