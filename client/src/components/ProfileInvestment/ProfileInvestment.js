import About from "./About";
import Details from "./Details";

function ProfileInvestment() { 
    return (
        <section className="flex flex-col gap-12 pb-12 2xl:pb-12 px-40 2xl:px-40 w-full 2xl:w-full h-[100vh] 2xl:h-[100vh] align-middle bg-[#E6EDE9]">
            <div className="flex flex-col w-full 2xl:w-full gap-4">
                <div className="flex justify-start items-start w-full 2xl:w-full  mt:40 2xl:mt-40 mb-0 2xl:mb-0">
                    <h1 className="font-bold text-[#005728] text-xl 2xl:text-3xl" >BUSINESS PROFILE</h1>
                </div>
            </div>
            <div className="flex flex-row w-full items-start gap-4 ">
                <Details></Details>
                <About></About>
            </div>
        </section>
    );
}

export default ProfileInvestment;;