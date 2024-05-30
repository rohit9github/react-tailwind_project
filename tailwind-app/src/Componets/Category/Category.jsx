let categoryItem = [
    {
        title: "Grocery",
        img: "https://rukminim1.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100"
    },
    {
        title: "Mobiles",
        img: "https://rukminim1.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100"
    },
    {
        title: "Fashion",
        img: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100"
    },
    {
        title: "Electronics",
        img: "https://rukminim1.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100"
    },
    {
        title: "Home & Furniture",
        img: "https://rukminim1.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100"
    },
    {
        title: "Home & Furniture",
        img: "https://rukminim1.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100"
    },
    {
        title: "Appliances",
        img: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100"
    },
    {
        title: "Travel",
        img: "https://rukminim1.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100"
    },
    {
        title: "Beauty, Toys & More",
        img: "https://rukminim1.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100"
    },
    {
        title: "Two Wheelers",
        img: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/05d708653beff580.png?q=100"
    }
]

function Category() {
    return (
        <>
            <div style={{ maxWidth: "1320px" }} className="mx-auto bg-white py-7 mt-6">
                <div className="flex justify-center">
                    {categoryItem.map((v, i) => {
                        return (
                            <div key={i} className="mx-4 text-center">
                                <a href="javascript:void(0)">
                                    <img src={v.img} alt={v.title} className="inline-block" />
                                </a>
                                <h3 className="font-semibold">
                                    <a href="javascript:void(0)">{v.title}</a>
                                </h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Category