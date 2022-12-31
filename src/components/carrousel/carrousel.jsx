import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Navigation} from "swiper";
import {
    BodyText,
    CardArticulo,
    CardArticuloBody,
    CardHeader,
    CardHeaderState,
    TextUnidades
} from "./carrousel.elements";

const productos = [
    {
        id: 1,
        name: "You can work on your own or invite your teammates to collaborate!",
        lab: "BAYER",
        price: 10.99,
        quantity: 0,
        state: "Destacado",
        discount: 10,
        image: "https://www.agrovetmarket.com/uploads/15_a406f7f90b381133f590fd13ab822974.png"
    },
    {
        id: 2,
        name: "Producto 2",
        lab: "BAYER",
        price: 9.99,
        quantity: 250,
        state: "Nuevo",
        discount: 50,
        image: "https://www.msd-salud-animal.com.co/wp-content/uploads/sites/46/2020/02/POSATEX-1-e1623973684894.png?w=400&h=368&crop=1"
    },
    {
        id: 3,
        name: "Producto 3",
        lab: "BAYER",
        price: 8.99,
        quantity: 15,
        state: "Mas vendido",
        discount: 10,
        image: "https://www.agrovetmarket.com/uploads/398_e78d87ea0260b810c80969034b0215a8.png"
    },
    {
        id: 4,
        name: "Producto 4",
        lab: "BAYER",
        price: 7.99,
        quantity: 50,
        state: "",
        discount: 10,
        image: "http://localhost:3000/static/media/alimentacion.a881dbb6399b287009ae.png"
    },
    {
        id: 5,
        name: "Producto 5",
        lab: "BAYER",
        price: 6.99,
        quantity: 50,
        state: "Nuevo",
        discount: 10,
        image: "http://localhost:3000/product/BIP610108.jpeg"
    },
    {
        id: 6,
        name: "Producto 6",
        lab: "BAYER",
        price: 5.99,
        quantity: 50,
        state: "Nuevo",
        discount: 10,
        image: "http://localhost:3000/product/BLAS00001.jpeg"
    },
    {
        id: 7,
        name: "Producto 7",
        lab: "BAYER",
        price: 4.99,
        quantity: 50,
        state: "Nuevo",
        discount: 10,
        image: "http://localhost:3000/product/BIPBIP.jpeg"
    },
    {
        id: 8,
        name: "Producto 8",
        lab: "BAYER",
        price: 3.99,
        quantity: 50,
        state: "Nuevo",
        discount: 10,
        image: "http://localhost:3000/product/BIP561224.jpeg"
    },
    {
        id: 9,
        name: "Producto 9",
        lab: "BAYER",
        price: 2.99,
        quantity: 50,
        state: "Nuevo",
        discount: 100,
        image: "http://localhost:3000/product/BIP161298.jpeg"
    }
];

const Carrousel = () => {
    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                    0: {
                        slidesPerView: 1
                    },
                    780: {
                        slidesPerView: 2
                    },
                    1032: {
                        slidesPerView: 3
                    },
                    1440: {
                        slidesPerView: 4
                    },
                    1680: {
                        slidesPerView: 5
                    }
                }}
                className="mySwiper"
            >
                {productos.map((product) => (
                    <SwiperSlide key={product.id}>
                        <CardArticulo>
                            <CardHeader>
                                {(() => {
                                    if (product.state === ""){
                                        return
                                    }return(
                                        <CardHeaderState color={"#0BA3E5"}>
                                            {product.state}
                                        </CardHeaderState>
                                    )

                                })()}
                                {(() => {
                                    if (product.discount >= 1 && product.discount <= 99) {
                                        return (
                                            <CardHeaderState color={"#FF692E"}>
                                                Descuento {product.discount}%
                                            </CardHeaderState>
                                        );
                                    }
                                })()}
                            </CardHeader>
                            <CardArticuloBody>
                                <img src={product.image} alt=""/>
                                <BodyText>
                                    {(() => {
                                        if (product.quantity < 1) {
                                            return (
                                                <>
                                                    <TextUnidades color={"#F8468A"}>
                                                        Producto no disponible
                                                    </TextUnidades>
                                                </>
                                            );
                                        } else if (product.quantity > 1 && product.quantity < 20) {
                                            return (
                                                <>
                                                    <TextUnidades color={"#FFB905"}>
                                                        {product.quantity} unidades disponibles
                                                    </TextUnidades>
                                                </>
                                            );
                                        } else {
                                            return (
                                                <>
                                                    <TextUnidades color={"#59C184"}>
                                                        {product.quantity} unidades disponibles
                                                    </TextUnidades>
                                                </>
                                            );
                                        }
                                    })()}
                                    <h1>
                                        {product.name} <br/> <span>{product.lab}</span>
                                    </h1>
                                    <span className="price">€{product.price}</span>
                                </BodyText>
                            </CardArticuloBody>
                        </CardArticulo>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export {Carrousel}