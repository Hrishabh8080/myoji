import React from 'react'

export const Card = (props) => {
    return (
            <div onClick={()=>props.click1(props.id)}  className='app_main_card_container'>
                <div style={{background:props.background}}  className='app_main_card_data'>
                    <div>
                    <h2>h1</h2>
                    <h2>h1</h2>
                    <h2>hh</h2>
                    </div>
                </div>
                <p>{props.name}</p>
            </div>

    )
}
