"use client";

import React, { useState, ReactNode } from "react";
// import "./GlassPanel.css";

interface GlassPanelProps {
  children?: ReactNode;
  initialValues?: {
    frost?: number;
    refraction?: number;
    depth?: number;
    dispersion?: number;
    lightAngle?: number; // in degrees
    lightIntensity?: number; // 0-100
  };
}

const GlassPanel: React.FC<GlassPanelProps> = ({
  children,
  initialValues = {},
}) => {
  const [frost, setFrost] = useState<number>(initialValues.frost ?? 12);
  const [refraction, setRefraction] = useState<number>(
    initialValues.refraction ?? 8,
  );
  const [depth, setDepth] = useState<number>(initialValues.depth ?? 20);
  const [dispersion, setDispersion] = useState<number>(
    initialValues.dispersion ?? 4,
  );
  const [lightAngle, setLightAngle] = useState<number>(
    initialValues.lightAngle ?? -45,
  );
  const [lightIntensity, setLightIntensity] = useState<number>(
    initialValues.lightIntensity ?? 52,
  );

  return (
    <>
      {/* Hidden SVG Filter - defined once globally */}
      <svg
        style={{ position: "absolute", width: 0, height: 0 }}
        aria-hidden="true"
      >
        <defs>
          <filter id="glass-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01"
              numOctaves="3"
              seed="1"
              result="turb"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turb"
              scale={refraction}
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feOffset in="SourceGraphic" dx={-dispersion} result="red" />
            <feOffset in="SourceGraphic" dx={dispersion} result="blue" />
            <feBlend mode="screen" in="red" in2="blue" />
            <feBlend mode="normal" in2="SourceGraphic" />
          </filter>
        </defs>
      </svg>

      <div
        className="glass-panel"
        style={
          {
            "--frost": `${frost}px`,
            "--depth": `${depth}px`,
            "--light-angle": `${lightAngle}deg`,
            "--light-intensity": lightIntensity / 100,
          } as React.CSSProperties
        }
      >
        {/* Controls Section - mimics Figma's Glass panel */}
        <div className="glass-controls">
          <h3>Glass Settings (Figma-like)</h3>

          <div className="slider-group">
            <label>Light Angle: {lightAngle}° ↺</label>
            <input
              type="range"
              min="-180"
              max="180"
              step="1"
              value={lightAngle}
              onChange={(e) => setLightAngle(Number(e.target.value))}
              aria-label="Light angle"
            />

            <label>Light Intensity: {lightIntensity}% ☀</label>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={lightIntensity}
              onChange={(e) => setLightIntensity(Number(e.target.value))}
              aria-label="Light intensity"
            />
          </div>

          <div className="slider-group">
            <label>Frost: {frost}px</label>
            <input
              type="range"
              min="0"
              max="30"
              step="1"
              value={frost}
              onChange={(e) => setFrost(Number(e.target.value))}
              aria-label="Frost blur"
            />
          </div>

          <div className="slider-group">
            <label>Refraction: {refraction}</label>
            <input
              type="range"
              min="0"
              max="40"
              step="1"
              value={refraction}
              onChange={(e) => setRefraction(Number(e.target.value))}
              aria-label="Refraction strength"
            />
          </div>

          <div className="slider-group">
            <label>Depth: {depth}px</label>
            <input
              type="range"
              min="0"
              max="60"
              step="1"
              value={depth}
              onChange={(e) => setDepth(Number(e.target.value))}
              aria-label="Depth shadow"
            />
          </div>

          <div className="slider-group">
            <label>Dispersion: {dispersion}px</label>
            <input
              type="range"
              min="0"
              max="20"
              step="1"
              value={dispersion}
              onChange={(e) => setDispersion(Number(e.target.value))}
              aria-label="Chromatic dispersion"
            />
          </div>
        </div>

        {/* Optional custom content below controls */}
        {children && <div className="glass-content">{children}</div>}
      </div>
    </>
  );
};

export default GlassPanel;
