import React from 'react';

export const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    slidesToShow: 7,
    speed: 600,
    draggable: false,
    slidesToScroll: 3,
    dots: true,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 950,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }
    ],
    appendDots: dots => (
        <div style={{ padding: "10px", textAlign: "end", color: "#e5e5e5", border: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" }}>
            <ul style={{ margin: "0px" }}>{dots}</ul>
        </div>
    ),
    customPaging: i => (
        <div style={{
            marginTop: "270px",
            width: "30px",
            color: "#e5e5e5",
            border: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            borderRadius: "3px",
            textAlign: "center",
            backgroundColor: "rgba(20, 20, 20, 0.5)",
            lineHeight: "1.25vw",
            fontSize: "1.4vw",
            verticalAlign: "bottom",
            display: "table-cell",
        }}>{i + 1}
        </div>
    ),
};
