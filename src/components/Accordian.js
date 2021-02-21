import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import "./Accordian.css";

const Accordian = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      <Container
        style={{ border: "1px solid grey", padding: "10px", margin: "10px" }}
        key={item.title}
      >
        <div>
          <div
            className={`title ${active}`}
            style={{
              cursor: "pointer",
              marginBottom: "10px",
              fontWeight: "600"
            }}
            onClick={() => onTitleClick(index)}
          >
            <i style={{ marginRight: "7px" }} className="fas fa-caret-down"></i>

            {item.title}
          </div>
        </div>

        <div className={`content_displayitem${active}`}>
          <p>{item.content}</p>
        </div>
      </Container>
    );
  });

  return (
    <Container
      style={{
        backgroundColor: "lightblue",
        border: "1.4px solid black",
        margin: "5px",
        padding: "5px"
      }}
    >
      {renderedItems}
      {activeIndex}
    </Container>
  );
};

export default Accordian;
