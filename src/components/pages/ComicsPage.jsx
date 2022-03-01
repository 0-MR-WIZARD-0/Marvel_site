import { Route, Routes, Outlet } from "react-router-dom";
import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";
import SingleComicPage from "./singleComicPage/SingleComicPage";

const ComicsPage = () => {
  return (
    <>
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