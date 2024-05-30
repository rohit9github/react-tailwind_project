let sliderItems = [
    {
        sliderImg : "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1f25201ced5d720d.jpg?q=20"
    },
    {
        sliderImg : "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1f25201ced5d720d.jpg?q=20"
    },
    {
        sliderImg : "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1f25201ced5d720d.jpg?q=20"
    },
    {
        sliderImg : "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1f25201ced5d720d.jpg?q=20"
    },
    {
        sliderImg : "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1f25201ced5d720d.jpg?q=20"
    },
    {
        sliderImg : "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1f25201ced5d720d.jpg?q=20"
    },
    {
        sliderImg : "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1f25201ced5d720d.jpg?q=20"
    },
]


function Slider(){
    return(
        <>
            <div>
                <div>
                    {sliderItems.map((v,i)=>{
                        return(
                            <div key={i}>
                                <img src={v.sliderImg}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Slider