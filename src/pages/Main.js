import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from "../redux/actions/repos.actions";
import { setCurrentPage } from "../redux/reducers/repos.reducer";
import * as reposSelector from "../redux/selectors";
import { createPages } from "../utils/pagesCreator";

export const Main = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const dispatch = useDispatch();
  const items = useSelector(reposSelector.repos);
  const currentPage = useSelector(reposSelector.currentPage);
  const perPage = useSelector(reposSelector.perPage);
  const isFetching = useSelector(reposSelector.isFetching);
  const totalCount = useSelector(reposSelector.totalCount);
  const pagesCount = Math.ceil(totalCount / perPage);

  const pages = [];
  createPages(pages, pagesCount, currentPage);

  React.useEffect(() => {
    dispatch(getRepos(searchValue, currentPage, perPage));
  }, [dispatch, currentPage, perPage]);

  return (
    <div>
      <ul>
        {isFetching ? (
          <p>Loading</p>
        ) : (
          items.map((item, index) => <li key={index}>{item.name}</li>)
        )}
      </ul>
      <div>
        {pages.map((page, index) => (
          <span onClick={() => dispatch(setCurrentPage(page))} key={index}>
            {page}
          </span>
        ))}
      </div>
    </div>
  );
};
