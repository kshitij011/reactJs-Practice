export const HeroSection = () =>{

    return(
        <main className='hero'>
            <div className='heroContent container'>
                <h1>YOUR FEET DESERVES THE BEST</h1>
                <p>YOUR FEET DESERVES THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
                YOUR FEET DESERVES THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
                </p>

                <div className="heroButton">
                    <button>Shop Now</button>
                    <button className="categoryButton">Category</button>
                </div>

                <div className="shopping">
                    <p>Also Available On</p>
                </div>

                <div className="brandIcons">
                    <img src="/Images/amazonLogo.png" alt="Amazon Logo" />
                    <img src="/Images/flipkart.png" alt="Flipkart Logo" />
                </div>
            </div>

            <div className='heroImage'>
                <img src="/Images/shoe.png" alt="shoe image" />
            </div>

        </main>
    )
}