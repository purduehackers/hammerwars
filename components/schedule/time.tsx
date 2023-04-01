interface ITimeProps {
  time: string;
  title: string;
}

const Time = (props: ITimeProps) => {
  return (
    <div>
      <span className="font-bold">{props.time}</span> {props.title}
    </div>
  );
};

export default Time;
