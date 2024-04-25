type greetProps = {
  language: string;
  value: number;
  period: boolean;
  name: {
    first:string,
    last: string
  }
};

export const Greet = (props: greetProps) => {
  return (
    <div>
      <h2>
        Hi! Lets learn {props.language} in {props.value}{" "}
        {props.period? "days": "weeks"}
      </h2>
      <h2>
        Here is {props.name.first} {props.name.last}
      </h2>
    </div>
  );
};
