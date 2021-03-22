import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchArt } from "../../reducers/slideContent";

function ReadMore({ children, maxCharacterCount = 100 }) {
  const text = children;
  const [isTruncated, setIsTruncated] = useState(true);
  const resultString = isTruncated ? text.slice(0, 100) : text;

  return (
    <p className="has-text-left">
      {resultString}
      <span className="tag is-info is-small">Read More</span>
    </p>
  );
}
