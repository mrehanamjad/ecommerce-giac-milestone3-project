import Container from "./Container"

function Top() {
  return (
    <div className=" bg-button text-Title-14PX-Regular  text-secondary">
    <Container>
    <div className="h-12 w-full flex items-center px-2  justify-between">
        <span className="max-lg:hidden"></span>
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className="text-Title-14PX-SemiBold text-center underline cursor-pointer text-text px-1">ShopNow</span> </p>
        <span className="flex justify-center items-center gap-1 cursor-pointer">
            English 
        <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.36403 4.95L11.314 0L12.728 1.414L6.36403 7.778L2.67029e-05 1.414L1.41403 0L6.36403 4.95Z" fill="white"/>
</svg>
        </span>
    </div>
    </Container>
    </div>
  )
}

export default Top