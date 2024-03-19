import ButtonHeroSection from "./buttonHeroSection";


function Glow() {
    return <div>
        <div id="home" className="bg-white min-h-screen flex items-center justify-center px-20">
            
            <div className="relative ">
                <div className=" relative space-y-4">
                    <div className="p-5  rounded-lg flex items-center justify-space-between space-x-8">

                        <p className="text-8xl font-bold ">The Taste You Know</p>



                    </div>
                    <div className="p-5  rounded-lg flex items-center justify-center space-x-8">

                        <p className="text-5xl font-bold ">The Value You Don&apos;t</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg flex items-center justify-between space-x-8">
                        <div className="flex-1">
                            {/* <button className="h-7 w-60 bg-gray-300 rounded flex items-center justify-center hover:bg-green-500 hover:scale-110 transition duration-3000">Join Us and Make a difference</button> */}
                            <ButtonHeroSection/>
                        </div>
                        <div>
                            {/* <div className="w-28 h-6 rounded-lg bg-pink-300"></div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-full flex items-center justify-center ">
                <img src="./childimg.png" />
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-1000"></div>
                <div className="absolute -bottom-8 -right-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

            </div>
        </div>

    </div>
}

export default Glow;