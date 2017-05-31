import React from 'react';

const List = ({drop,water,shelters,youth,matchMarker}) => {
  const dropItems = drop.map((item) => {
    return (
      <li key = {item.properties.OBJECTID} className="item" onMouseEnter = {() =>
          {
            matchMarker(item.geometry.coordinates[1],item.geometry.coordinates[0]);
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
        matchMarker(item.geometry.coordinates[1],item.geometry.coordinates[0]);
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
        matchMarker(item.geometry.coordinates[1],item.geometry.coordinates[0]);
      }
    }>
        <h3>{item.properties.AGENCY_NAM}</h3>
        <h4>{item.properties.HOURS}</h4>
        <h4>{item.properties.ACCESSIBIL}</h4>
      </li>
    );
  });
// const waterItem = water.map((item) => {
//   return (
//     <li key = {item.properties.OBJECTID} className="item" onMouseEnter = {() => {
//       matchMarker(item.geometry.coordinates[1],item.geometry.coordinates[0]);
//     }
//   }>
//       <h3>{item.properties.ASSET_TYPE}</h3>
//       <h4>{item.properties.ASSET_NAME}</h4>
//     </li>
//   );
// });
  return (
    <ul className="item-wrp">
      {dropItems}
      {sheltersItem}
      {youthItem}
      
    </ul>
  );
}

export default List;
