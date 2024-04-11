
interface Label {
    //children?:string;
    color?: "danger" | "secondary" | "primary";
    onClick:() => void;
}

const Button = ({color, onClick}: Label) => {
  return (
    <button type="button" className={`btn btn-${color}`} onClick={onClick}>
        {color}
    </button>
  )
}

export default Button