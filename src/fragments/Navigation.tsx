function Navigation() {
    return ( 
        <nav className="bg-primary">
            {/* Navigation section */}
            <section className="flex justify-between laptop:px-16 tablet:px-10 px-6 py-12">
                {/* LOGO */}
                <div className="">
                    <a href="/" className="logo">
                        <h1 className="font-bungeeShade text-3xl">
                            SOIL
                        </h1>
                    </a>
                </div>

                {/* Links */}
                <div className="flex">
                    <div className="">
                        <a href="">HOME</a>
                        <a href="">FEATURES</a>
                        <a href="">PRICING</a>
                        <a href="">BLOG</a>
                    </div>
                    <div className="">
                        <a href="">LOGIN</a>
                        <a href="">SIGNUP</a>
                    </div>
                </div>
            </section>
        </nav>
     );
}

export default Navigation;