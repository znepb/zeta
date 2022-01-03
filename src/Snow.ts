import React, { Component } from "react";
import { CreateTypes } from "canvas-confetti";

function randomInRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export default class Snow extends Component {
  private isAnimationEnabled: boolean;
  private animationInstance: CreateTypes | null = null;

  constructor(props: {}) {
    super(props);
    this.isAnimationEnabled = false;
    this.animationInstance = null;
  }

  getAnimationSettings(): any {
    return {
      particleCount: 1,
      startVelocity: 0,
      ticks: 300,
      drift: 0.5,
      gravity: 0.4,
      origin: {
        x: Math.random() * 1.2 - 0.2,
        y: Math.random() * 0.999 - 0.2,
      },
      colors: ["#ffffff"],
      shapes: ["circle"],
      scalar: randomInRange(0.4, 1),
    };
  }

  nextTickAnimation = () => {
    this.animationInstance &&
      this.animationInstance(this.getAnimationSettings());
    if (this.isAnimationEnabled) requestAnimationFrame(this.nextTickAnimation);
  };

  startAnimation = () => {
    if (!this.isAnimationEnabled) {
      this.isAnimationEnabled = true;
      this.nextTickAnimation();
    }
  };

  pauseAnimation = () => {
    this.isAnimationEnabled = false;
  };

  stopAnimation = () => {
    this.isAnimationEnabled = false;
    this.animationInstance && this.animationInstance.reset();
  };

  handlerClickStart = () => {
    this.startAnimation();
  };

  handlerClickPause = () => {
    this.pauseAnimation();
  };

  handlerClickStop = () => {
    this.stopAnimation();
  };

  getInstance = (instance: any) => {
    this.animationInstance = instance;
  };

  componentWillUnmount() {
    this.isAnimationEnabled = false;
  }
}
