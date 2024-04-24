import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import { selectLoading, selectError } from "../../redux/contactsSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchContainer}>
      <p className={css.textSearch}>Find contacts by name</p>
      <input
        className={css.inputSearch}
        type="text"
        value={nameFilter}
        onChange={handleChange}
      />
      {isLoading && !error && <b>Please wait...</b>}
    </div>
  );
};

export default SearchBox;
