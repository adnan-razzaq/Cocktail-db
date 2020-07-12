import React, { useRef } from "react";

export default function SearchForm({ setsearchterm }) {
  const searchvalue = useRef("");
  const handlesubmit = (e) => {
    e.preventDefault();
  };
  const handlechange = (e) => {
    setsearchterm(searchvalue.current.value);
  };
  return (
    <section className="section">
      <h2 className="section-title">Search cocktails</h2>
      <form className="form search-form" onSubmit={handlesubmit}>
        <div className="form-control">
          <label htmlFor="name">Search your favourite drink</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handlechange}
            ref={searchvalue}
          />
        </div>
      </form>
    </section>
  );
}
