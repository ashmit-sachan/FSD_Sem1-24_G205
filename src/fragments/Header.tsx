import { IconContext } from "react-icons";
import { FaPinterest } from "react-icons/fa6";
import { TiSocialTwitter, TiSocialFacebook, TiSocialYoutube } from "react-icons/ti";
import { RiInstagramFill } from "react-icons/ri";



import Navigation from "./Navigation";

function Header() {
    return ( 
        <>
        <header>
            <div className="px-2 py-0.5 bg-gray-300">
                <div className="flex justify-between content-center">
                    <div className="flex-grow flex justify-around">
                        <div className="flex">
                            <h1 className="text-gray-500 font-medium text-base my-auto">Some Header Information: </h1>
                            <span className="mx-2 fomt-thin text-sm my-auto">Some explaination</span>
                        </div>
                    </div>

                    <div className="flex-grow-0 my-auto flex flex-row-reverse content-center pr-2">
                        <IconContext.Provider value={{size: "1.1rem",className: "text-gray-500 ml-2"}}>
                            <FaPinterest/>
                            <RiInstagramFill/>
                            <TiSocialTwitter/>
                            <TiSocialFacebook/>
                            <TiSocialYoutube/>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
            <Navigation/>
        </header>
        </>
     );
}

export default Header;