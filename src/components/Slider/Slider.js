import React from 'react'
import './Slider.css'

export const Slider = () => {

    //-----------------------Codigo Slider--------------------

    // const slider = document.querySelector(".slider");
    // const nextBtn = document.querySelector(".nextBtn");
    // const prevBtn = document.querySelector(".prevBtn");
    // const slides = document.querySelectorAll(".slide");
    // const slideIcons = document.querySelectorAll(".slideIcon");
    // const numberOfSlides = slides.length;
    // var slideNumber = 0;



    // nextBtn.addEventListener("click", () => {
    //     slides.forEach((slide) => {
    //         slide.classList.remove("active");
    //     });
    //     slideIcons.forEach((slideIcon) => {
    //         slideIcon.classList.remove("active");
    //     });

    //     slideNumber++;

    //     if (slideNumber > (numberOfSlides - 1)) {
    //         slideNumber = 0;
    //     }

    //     slides[slideNumber].classList.add("active");
    //     slideIcons[slideNumber].classList.add("active");
    // });


    // prevBtn.addEventListener("click", () => {
    //     slides.forEach((slide) => {
    //         slide.classList.remove("active");
    //     });
    //     slideIcons.forEach((slideIcon) => {
    //         slideIcon.classList.remove("active");
    //     });

    //     slideNumber--;

    //     if (slideNumber < 0) {
    //         slideNumber = numberOfSlides - 1;
    //     }

    //     slides[slideNumber].classList.add("active");
    //     slideIcons[slideNumber].classList.add("active");
    // });


    // var playSlider;

    // var repeater = () => {
    //     playSlider = setInterval(function () {
    //         slides.forEach((slide) => {
    //             slide.classList.remove("active");
    //         });
    //         slideIcons.forEach((slideIcon) => {
    //             slideIcon.classList.remove("active");
    //         });

    //         slideNumber++;

    //         if (slideNumber > (numberOfSlides - 1)) {
    //             slideNumber = 0;
    //         }

    //         slides[slideNumber].classList.add("active");
    //         slideIcons[slideNumber].classList.add("active");
    //     }, 8000);
    // }
    // repeater();




    return (
        <section className="carrucel">
            <div className="slider">
                <div className="slide active">
                    <img src="images/slide/slide1.webp" alt="#" />
                    <div className="info"></div>
                </div>
                <div className="slide">
                    <img src="images/slide/slide2.webp" alt="#" />
                </div>
                <div className="slide">
                    <img src="images/slide/slide3.webp" alt="#" />
                </div>
                <div className="slide">
                    <img src="images/slide/slide4.webp" alt="#" />
                </div>
                <div className="slide">
                    <img src="images/slide/slide5.webp" alt="#" />
                </div>
                <div className="navigation">
                    <i className="fas fa-chevron-left nextBtn"></i>
                    <i className="fas fa-chevron-right prevBtn"></i>
                </div>
                <div className="navigationVisibility">
                    <div className="slideIcon active"></div>
                    <div className="slideIcon"></div>
                    <div className="slideIcon"></div>
                    <div className="slideIcon"></div>
                    <div className="slideIcon"></div>
                </div>
            </div>
        </section>
    )
}
