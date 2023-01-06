import React from "react";

type Person = {
  name: string;
  age: number;
};

const SampleTypescriptComponent: React.FC<{ person: Person }> = (props) => {
  return (
    <div>
      <h1>Name: {props.person.name}</h1>
      <h1>Age: {props.person.age}</h1>
    </div>
  );
};

export default SampleTypescriptComponent;
