import { useState, useEffect, memo } from "react";

// Custom Hook to solve the unique ID issue. Gets Max ID + 1.
const useId = (tab) => {
  const [id, setId] = useState(_maxIds(tab.map((val) => val.id)));

  console.log(
    "Ids : ",
    tab.map((val) => val.id)
  );
  function getUniqueId() {
    setId(id + 1);
    return id + 1;
  }

  function currentId() {
    return _maxIds(tab.map((val) => val.id));
  }

  function _maxIds(IDs) {
    return IDs.reduce((max, val) => (max > val ? max : val),0);
  }

  return [currentId, getUniqueId];
};

export default useId;
