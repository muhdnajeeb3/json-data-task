import React, { useState, useEffect } from "react";
import "./First.css";
import Records from "../records.json";
import Dropdown from "react-bootstrap/Dropdown";

function First() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSelectAllPractitioners, setIsSelectAllPractitioners] = useState(false)
  const [practionerList, setPractionerList] = useState(Records)

  const onSelctAllPractClick = () => {
    setIsSelectAllPractitioners(!isSelectAllPractitioners)

  }

  useEffect(() => {
    if (isSelectAllPractitioners) {
      setPractionerList(prevState => {
        // Loop over your list
        return prevState.map((item) => {
          return { ...item, selected: true }
        })
      })
    }
    else {
      setPractionerList(prevState => {
        // Loop over your list
        return prevState.map((item) => {
          return { ...item, selected: false }
        })
      })
    }


  }, [isSelectAllPractitioners])

  return (
    <div className="container">
      
      <Dropdown>
        <Dropdown.Toggle className="tog" id="dropdown-basic">
          <span className="heading"> {practionerList.length}  Select employee</span>
        </Dropdown.Toggle>

        <Dropdown.Menu className="drop">

          <div className="inputWithIcon">
            <input
              type="text"
              placeholder="Search employe..."
              className="input"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />

          </div>
          
          <input type="checkbox" className="check1" />

          <lablel>
            <span className="name1">
              {practionerList.length}   All employee</span>
          </lablel>
          <hr className="hr" />
          <input type="checkbox" className="check2" />
          <lablel>
            <span className="prac1">Dr.Siegfried Tausend</span>
          </lablel>
          <br />
          <hr className="hr" />


          <input
            type="checkbox"
            className="check1"
            checked={isSelectAllPractitioners}
            onChange={onSelctAllPractClick}
          />
          <lablel>
            <span className="prac">All practitioners </span>
          </lablel>
          <Dropdown.Item href="">
            {practionerList &&
              practionerList.filter((record) => {
                if (searchTerm === "") {
                  return record;
                } else if (
                  record.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return record;
                }
              }).map((record) => {
                return (
                  <div className="card1" key={record.id}>
                    {/* <h4 className='name'>{record.name}</h4> */}

                    <input
                      type="checkbox"
                      className="check"
                      marginleft="auto"
                      checked={record.selected}

                    />

                    <lablel>
                      <span className="name">{record.name}</span>
                    </lablel>
                  </div>
                );
              })}
          </Dropdown.Item>
          <hr className="hr" />
          <input type="checkbox" className="check1" />

          <lablel>
            <span className="prac">All assistance </span>
          </lablel>
        </Dropdown.Menu>
      </Dropdown>



    </div>
  );
}

export default First;
