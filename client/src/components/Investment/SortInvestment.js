import Fields from "./Fields";
import Countries from "./Countries";


function SortInvestment() { 
    return (
        <div className="flex flex-col items-start justify-start w-[50%] 2xl:w-[50%] ">
            <Countries></Countries>
            <Fields></Fields>
        </div>
        
    );
}

export default SortInvestment;