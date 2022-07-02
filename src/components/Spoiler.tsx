import { useState } from "react";

interface Spoiler {
  text: string;
}

export default function Spoiler({ text }: Spoiler) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span
      onMouseDown={() => {
        setIsVisible(!isVisible);
      }}
    >
      {isVisible ? text : "Spoilers! Click to view."}
    </span>
  );
}
