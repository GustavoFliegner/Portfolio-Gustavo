import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./view/Home";
import NotFound from "./view/NotFound";

const AppRouter = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
};

export default AppRouter;
