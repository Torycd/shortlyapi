import Button from "../UI/Button"

const Shortly = ({className}) => {
  return (
    <div className="">
        <div className="mx-16 md:mx-32 px-8 py-6 bg-[#421E47] rounded-lg">
            <form className="flex flex-col md:flex-row md:gap-5">
                <input type="text" className="w-full rounded-lg text-xl px-6" required placeholder="Shortnen a link here..."/>
                <Button className={className}>Shorten It!</Button>
            </form>
        </div>
    </div>
  )
}

export default Shortly