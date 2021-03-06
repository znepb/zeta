import ReactCanvasConfetti from "react-canvas-confetti";

const Counter = (props: any) => {
  return (
    <ReactCanvasConfetti
      refConfetti={props.confetti.getInstance}
      style={{
        width: "100%",
        height: "100vh",
        top: 0,
        left: 0,
        position: "absolute",
        pointerEvents: "none",
        zIndex: 100,
      }}
    />
  );
};

export default Counter;
