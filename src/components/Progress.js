import React from "react";

import ProgressBar from "@ramonak/react-progress-bar";

const Progress = ({value, styled}) => {
  return (
    <ProgressBar
      completed={value}
      maxCompleted={45}
      borderRadius="5px"
      bgColor="white"
      labelColor="#1c1b1b"
      className={`${styled} text-sm w-[500px] bg-transparent`}
    />
  );
};

export default Progress