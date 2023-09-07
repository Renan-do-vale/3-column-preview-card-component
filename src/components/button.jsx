

function Button(props) {
    return (

        <button className={`mt-[3em] text-center ${props.classNames} bg-[white] rounded-3xl p-3 border-2 w-[80%] hover:bg-transparent hover:text-[white] active:bg-Dark-transparent`}>Learn More</button>
    )
}
export default Button