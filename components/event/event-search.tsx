import Button from "../../components/ui/Button";
import classes from "./event-search.module.scss";
import * as React from "react";

const EventSearch = ({ onSearch }: { onSearch: Function }) => {
  const yearInputRef = React.useRef<HTMLSelectElement>(null);
  const monthInputRef = React.useRef<HTMLSelectElement>(null);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (yearInputRef.current && monthInputRef.current) {
      const selectedYear = yearInputRef.current.value;
      const selectedMonth = monthInputRef.current.value;
      onSearch(selectedYear, selectedMonth);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year"></label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month"> </label>
          <select id="month" ref={monthInputRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">July</option>
            <option value="7">June</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <Button>search</Button>
      </div>
    </form>
  );
};

export default EventSearch;
