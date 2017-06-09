import React from 'react';

const List = ({drop,water,shelters,matchMarker}) => {
  const dropItems = drop.map((item) => {
    return (
      <li key = {item.properties.OBJECTID} className="item" onMouseEnter = {() =>
          {
            matchMarker(item.properties.OBJECTID,item.properties.Address,item.properties.NAME);
          }
        }>
        <h3>{item.properties.Address}</h3>
        <h4>{item.properties.NAME}</h4>
      </li>
    );
  });
  const sheltersItem = shelters.map((item) => {
    return (
      <li key = {item.properties.OBJECTID}  className="item" onMouseEnter = {() => {
        matchMarker(item.properties.OBJECTID,item.properties.ADDRESS_FU,item.properties.TYPE2);
      }
    }>
        <h3>{item.properties.ADDRESS_FU}</h3>
        <h4>{item.properties.TYPE2}</h4>
      </li>
    );
  });

  return (
    <ul className="item-wrp">
      {dropItems}
      {sheltersItem}
    </ul>
  );
}

export default List;
