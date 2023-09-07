import ImgCar from "./imgCar";
import Button from "./button";

function Column(props) {
    return (
        <div className={`w-[300px] h-[500px] ${props.colorTextBg} p-10 flex flex-col gap-5 ${props.rounded} lg:w-[300px] lg:h-[500px] md:w-[250px] md:h-[500px]`}>
            <ImgCar svgImg={props.img}/>
            <h1 className="text-[2.5em] font-bold text-[white] font-Big-shoulders lg:text-[3.5em]" >{props.name}</h1>
            <p className=" text-left text-[white] text-[0.98em] lg:text-[1em]">{props.text}</p>
            <Button classNames={props.colorText}/>
        </div>
    );
  }
  
  export default Column;