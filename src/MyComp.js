import React, { useEffect, useState } from "react";

const MyComp = ({ s, C, P, ref }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`parrent-details ${hover && "hover"}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={"parrent-details-name"}>
        <div className={"name"}>{s}</div>
        <div className={"perpetual"}>perpetual</div>
      </div>
      <div className={"parrent-details-number"}>
        <div className={"number"}>{C}</div>
        <div className={`sub-number ${+P > 0 ? "green" : "red"}`}>
          {P > 0 ? `+${P}` : P}
        </div>
      </div>
      <div ref={ref} />
    </div>
  );
};

export default MyComp;
