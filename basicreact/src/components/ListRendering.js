//List rendering

export const List = () => {
    const cars = ["Ferrari", "Lamborghini", "McLeren"]
    return(
        <>
        {
            cars.map((car)=>{
                return(
                    // Each child in list must have unique property
                    <h2 key={car}>You have {car} car</h2>
                )
            })
        }
        </>
    )
}