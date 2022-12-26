import React, { useState } from "react";
import { useEffect } from "react";
import Objects from "./components/ObjectView";
import { AnimationProps, ObjectsProps, ToggleVisibilityProp } from "./types";

const App = () => {
  const [objects, setObjects] = useState<ObjectsProps>([]);
  const [trianglesVisible, setTrianglesVisible] = useState<boolean>(true);
  const [squaresVisible, setSquaresVisible] = useState<boolean>(true);
  const [circlesVisible, setCirclesVisible] = useState<boolean>(true);
  const [animation, setAnimation] = useState<AnimationProps>({
    count: 0,
  });
  const [start, setStart] = useState<{ starter: boolean; value: string }>({
    starter: false,
    value: "",
  });

  const handleAnimationBackward = () => {
    setStart({ starter: !start.starter, value: "backward" });
  };

  const handleAnimationForward = () => {
    setStart({ starter: !start.starter, value: "forward" });
  };

  useEffect(() => {
    let interval: any = null;

    if (start.starter) {
      interval = setInterval(() => {
        if ((start.value == "forward"))
          setAnimation((animation) => ({ count: animation.count + 1 }));
        else if(start.value == "backward") {
          setAnimation((animation) => ({ count: animation.count - 1 }));
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    
    return () => clearInterval(interval);
  }, [start]);

  const createRandomObjects = (n: number) => {
    // Generate an array of random objects
    const newObjects: ObjectsProps = [];
    for (let i = 0; i < n; i++) {
      const name: string = `Object ${i + 1}`;
      const type: string = ["triangle", "square", "circle"][
        Math.floor(Math.random() * 3)
      ];
      const color: string =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      const size: number = 5 + Math.random() * 10;
      const x: number = Math.random() * 800;
      const y: number = Math.random() * 800;
      const velocity: number = Math.random() * 100 - 5;
      newObjects.push({
        name,
        type,
        color,
        size,
        x,
        y,
        velocity,
      });
    }

    return newObjects;
  };

  const handleCreateObjects = () => {
    // Prompt the user to enter the number of objects to create
    const n: number = Number(
      window.prompt("Enter the number of objects to create:")
    );
    // Create the objects and set them in state
    const newObjects = createRandomObjects(n);
    setObjects(newObjects);
    console.log("Objects : ", newObjects);
  };

  const handleToggleVisibility = (type: string) => {
    // Toggle the visibility of objects of the specified type
    switch (type) {
      case "triangle":
        setTrianglesVisible(!trianglesVisible);
        break;
      case "square":
        setSquaresVisible(!squaresVisible);
        break;
      case "circle":
        setCirclesVisible(!circlesVisible);
        break;
      default:
        break;
    }
  };

  const getObjectsStyle: ToggleVisibilityProp = (type: string) => {
    // Get the style for objects of the specified type
    switch (type) {
      case "triangle":
        return trianglesVisible ? {} : { opacity: 0.5 };
      case "square":
        return squaresVisible ? {} : { opacity: 0.5 };
      case "circle":
        return circlesVisible ? {} : { opacity: 0.5 };
      default:
        return {};
    }
  };

  return (
    <div>
      <button
        style={{ margin: "10px 10px 10px 10px" }}
        onClick={handleCreateObjects}
      >
        Create Objects
      </button>
      <Objects
        animation={animation}
        objects={objects}
        toggleVisibility={getObjectsStyle}
      />
      <div style={{ flexDirection: "column" }}>
        <div>
          <button
            style={{ margin: "10px 10px 10px 10px" }}
            onClick={() => handleToggleVisibility("triangle")}
          >
            Toggle Triangles
          </button>
          <button
            style={{ margin: "10px 10px 10px 10px" }}
            onClick={() => handleToggleVisibility("square")}
          >
            Toggle Squares
          </button>
          <button
            style={{ margin: "10px 10px 10px 10px" }}
            onClick={() => handleToggleVisibility("circle")}
          >
            Toggle Circle
          </button>
        </div>
        <div>
          <button
            style={{ margin: "10px 10px 10px 10px" }}
            onClick={handleAnimationBackward}
          >
            Backward
          </button>
          <button
            style={{ margin: "10px 10px 10px 10px" }}
            onClick={handleAnimationForward}
          >
            Forward
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
