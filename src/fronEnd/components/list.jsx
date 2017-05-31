import React from 'react';

const List = ({drop,water,shelters,youth,log,dropMarkers}) => {
  const dropItems = drop.map((item) => {
    return (
      <li key = {item.properties.OBJECTID} className="item" onMouseEnter = {() =>
          {
            log();
          }
        }>
        <h3>{item.properties.Address}</h3>
        <h4>{item.properties.NAME}</h4>
      </li>
    );
  });
  const sheltersItem = shelters.map((item) => {
    return (
      <li value = {item.properties.OBJECTID} key = {item.properties.OBJECTID}  className="item" onMouseEnter = {() => {
        log();
      }
    }>
        <h3>{item.properties.ADDRESS_FU}</h3>
        <h4>{item.properties.TYPE2}</h4>
      </li>
    );
  });
  const youthItem = youth.map((item) => {
    return (
      <li key = {item.properties.OBJECTID}  className="item" onMouseEnter = {() => {
        log();
      }
    }>
        <h3>{item.properties.AGENCY_NAM}</h3>
        <h4>{item.properties.HOURS}</h4>
        <h4>{item.properties.ACCESSIBIL}</h4>
      </li>
    );
  });
  const waterItem = water.map((item) => {
    return (
      <li key = {item.properties.OBJECTID} className="item" onMouseEnter = {() => {
        log();
      }
    }>
        <h3>{item.properties.Address}</h3>
        <h4>{item.properties.NAME}</h4>
      </li>
    );
  });
  return (
    <ul className="item-wrp">
      {dropItems}
      {sheltersItem}
      {youthItem}
      {waterItem}
    </ul>
  );
}

export default List;
