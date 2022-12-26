import React from "react";
import { isPropertySignature } from "typescript";
import {
  CoordinatesProps,
  AnimationProps,
  ObjectProps,
  ToggleVisibilityProp,
  ObjectsProps,
} from "../types";
import './style.css'

const ObjectView: React.FC<{
  animation: AnimationProps;
  objects: ObjectsProps;
  toggleVisibility: ToggleVisibilityProp;
}> = ({ animation, objects, toggleVisibility }) => {
  const viewBox = "0 0 800 800";

  return (
    <div
      style={{
        border: "1px solid black",
        width: "600px",
        height: "600px",
        overflow: "hidden",
        marginLeft: "10px",
      }}
    >
      <svg width="600" height="600" viewBox={viewBox}>
        {objects.map((object: ObjectProps) => {
          return (
            <g key={object.name}>
              {object.type === "circle" && (
                <circle
                  cx={object.x + object.velocity * animation.count}
                  cy={object.y}
                  r={object.size / 2}
                  fill={object.color}
                  style={toggleVisibility(object.type)}
                />
              )}
              {object.type === "triangle" && (
                <polygon
                  style={toggleVisibility(object.type)}
                  points={`${object.x + object.velocity * animation.count},${
                    object.y - object.size / 2
                  } ${
                    object.x -
                    object.size / 2 +
                    object.velocity * animation.count
                  },${object.y + object.size / 2} ${
                    object.x +
                    object.size / 2 +
                    object.velocity * animation.count
                  },${object.y + object.size / 2}`}
                  fill={object.color}
                />
              )}
              {object.type === "square" && (
                <rect
                  x={
                    object.x -
                    object.size / 2 +
                    object.velocity * animation.count
                  }
                  y={object.y - object.size / 2}
                  width={object.size}
                  height={object.size}
                  fill={object.color}
                  style={toggleVisibility(object.type)}
                />
              )}
              <text
                x={object.x + object.velocity * animation.count}
                y={object.y + object.size / 2 + 10}
                fontSize="10"
              >
                {object.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default ObjectView;
