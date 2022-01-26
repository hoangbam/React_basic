import React from 'react'


const student1 = {
    name: "Hieu",
    age: 18,
}

export default function DataBindingRFC() {
    const renderImg = () => {

        return <img src="https://zingnews.vn/tuyen-viet-nam-vs-thai-lan-cong-phuong-van-toan-da-chinh-post1285171.html" alt="err"></img>
    }

    const school = "Cyberlearn";
    return (
        <div>
            <h1>{school}</h1>
            <h2>{student1.name} and {student1.age}</h2>
            {renderImg()}

        </div>
    )
}
