import React,{useEffect} from 'react'

// import React from 'react'
import HappyGuy from "../../public/Images/happy.jpg"
import CalmGuy from "../../public/Images/calm.png"
import StraightGuy from "../../public/Images/straight.jpg"
import ConfusedGuy from "../../public/Images/confused.jpg"
import AngryGuy from "../../public/Images/angry.jpg"
import SadGuy from "../../public/Images/sad.jpg"

export const Container = () => {

    const boxes = document.querySelectorAll('.box')
    const overlay = document.querySelectorAll('.overlay')
    const popup = document.querySelectorAll('.popup')
    // const close = document.getElementById('btn-close')
    const imageChange = document.querySelectorAll('.change')
    const lower = document.querySelectorAll('.lower')
    const navigation = document.querySelectorAll('.navigation')
    const headClose = document.querySelectorAll('.navigation-head')

useEffect(()=>{
    boxes.forEach((box)=> box.addEventListener('click', (e) =>{
        console.log('hey');
        const img = e.target.src;
        imageChange.src = img;
        overlay.classList.add("show");
        popup.classList.add('show');
    }))
})

const headCloseArray = Array.from(headClose);
const lowerArray = Array.from(lower);
useEffect(()=>{
    console.log('headClose: ', headClose);
    console.log('lower: ', lower);

    headCloseArray.forEach((el) => {
        el.addEventListener('click', () => {
            navigation.classList.remove('slide');
        });
    });

    lowerArray.forEach((el) => {
        el.addEventListener('click', () => {
            navigation.classList.remove('slide');
        });
    });
})

useEffect(()=>{
    lowerArray.forEach((el) => {
        el.addEventListener('click', () => {
            navigation.classList.add('slide');
        });
    });
})

// useEffect(()=>{
//     close.addEventListener('click', ()=>{
//         overlay.classList.remove('show')
//         popup.classList.remove('show')
//     })
// })

document.addEventListener('DOMContentLoaded', function() {
    const close = document.getElementById('btn-close');

    if (close) {
        close.addEventListener('click', () => {
            overlay.classList.remove('show');
            popup.classList.remove('show');
        });
    } else {
        console.error('Element with id "btn-close" not found.');
    }
});

  return (
    <div>
        <div className='container'>
            <div className="navigation">
                <div className="navigation-head">
                    <i className="uil uil-align-left"></i>
                </div>

                <div className="grid">
                    <div className="navigation-menu">
                        <span className="active flex">
                            <i className="uil uil-estate"></i>
                            <small>Home</small>
                        </span>

                        <span className="flex">
                            <i className="uil uil-trophy"></i>
                            <small>Project</small>
                        </span>

                        <span className="flex">
                            <i className="uil uil-bill"></i>
                            <small>Billing</small>
                        </span>

                        <span className="flex">
                            <i className="uil uil-graph-bar"></i>
                            <small>Team Members</small>
                        </span>

                        <span className="flex">
                            <i className="uil uil-cog"></i>
                            <small>Setting</small>
                        </span>
                    </div>
                    <div className="navigation-profile">
                        <i className="uil uil-user">Computer User</i>
                    </div>
                </div>
            </div>

            <div className="main-container">
                <div className="box" data='1'>
                    <img src={HappyGuy} alt="Happy Guy Image" />
                </div>

                <div className="box" data='2'>
                    <img src={CalmGuy} alt="Calm Guy Image" />
                </div>

                <div className="box" data='3'>
                    <img src={StraightGuy} alt="Straight Guy Image" />
                </div>

                <div className="box" data='4'>
                    <img src={ConfusedGuy} alt="Confused Guy Image" />
                </div>

                <div className="box" data='5'>
                    <img src={AngryGuy} alt="Angry Guy Image" />
                </div>

                <div className="box" data='6'>
                    <img src={SadGuy} alt="Sad Guy Image" />
                </div>
            </div>
        </div>

        <div className="popup">
            <img src={HappyGuy} alt="Happy Guy" className='change' />

            <div className="text">
                <h2 className="title">Welcome to NFT Project</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sunt libero molestiae, dolores, iusto saepe illo distinctio minima temporibus a nostrum consequuntur corporis perferendis laudantium soluta, deserunt eligendi vero assumenda.</p>

                <div className="social">
                    <span>
                        <i className="uil uil-facebook"></i>
                    </span>
                    <span>
                        <i className="uil uil-instagram"></i>
                    </span>
                    <span>
                        <i className="uil uil-twitter"></i>
                    </span>
                    <span>
                        <i className="uil uil-bitcoin-circle"></i>
                    </span>
                </div>
            </div>

            <div id="btn-close">
                <i className="uil-multiply"></i>
            </div>
        </div>

        <div className="overlay"></div>
        <div className="lower">
            <span>
                <i className="uil uil-atom"></i>
            </span>
        </div>
    </div>
  )
}
