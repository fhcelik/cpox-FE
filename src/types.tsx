interface ObjectProps {
  name: string;
  type: string;
  color: string;
  size: number;
  x: number;
  y: number;
  velocity:number;
}

interface CoordinatesProps {
  count:number;
  x:number;
  y:number;
  velocity:number;
  size:number
}

interface AnimationProps {
  count:number;
}

type ObjectsProps = Array<ObjectProps>;

interface ReturnTypeProp {
  opacity:number;
}

type ToggleVisibilityProp= (type: string) => ReturnTypeProp | {};


export type {CoordinatesProps, AnimationProps, ObjectProps, ToggleVisibilityProp, ObjectsProps }