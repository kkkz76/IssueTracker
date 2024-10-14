"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("../components/HeavyComponent"), {
  ssr: false,
  loading: () => <p>Loading..............</p>,
});

const Page: React.FC = () => {
  const [isVisible, setVisible] = useState(false);

  return (
    <>
      <button onClick={() => setVisible(true)}>Show</button>
      {isVisible && <HeavyComponent />}
    </>
  );
};

export default Page;
