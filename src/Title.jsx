import React, { useEffect } from "react";

const Title = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return children;
};

export default Title;
