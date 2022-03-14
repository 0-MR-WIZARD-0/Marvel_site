import { Route, Routes, Outlet } from "react-router-dom";
import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";
import {Helmet} from 'react-helmet';
import SingleComicPage from "./singleComicPage/SingleComicPage";

const ComicsPage = () => {
  return (
    <>
        <Helmet>
            <meta
                name="description"
                content="Page with list of our comics"
            />
            <title>Comics page</title>
        </Helmet>
        <AppBanner/>
        <ComicsList/>
        {/* <Routes>
          <Route>
            <Route path=":id" element={<SingleComicPage/>}/>
            <Route path="/" element={<ComicsList/>}/>
          </Route>

        </Routes> */}
    </>
  )
}

export default ComicsPage