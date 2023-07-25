import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
    return(
        <div>
            {/* <header>
                    <nav class="navbar">
                        <h1>Royal stays</h1>
                        <ul>
                            <li><a href="/home.">Home</a></li>
                            <li><a href="/aboutus">About us</a></li>
                            <li><a href="/contactUs">Contacts</a></li>
                        </ul>
                    </nav>
                </header> */}
                <Header />
                <section class="showcase">
                    <h1><span class="s-color">Enjoy</span> your stay</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, saepe.</p>
                    <a href="#">About Our Hotel</a>
                </section>
                <section class="hotel-history">
                    <div class="box-1"></div>
                    <div class="box-2">
                        <h1><span class="s-color">The History</span> Of Our Hotel</h1>
                        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
          aliquam dolor alias iste autem, quaerat magni unde accusantium qui
          fuga placeat quidem quo pariatur, voluptatum, ea sequi? Corporis,
          explicabo quisquam dolor placeat praesentium nesciunt mollitia quos
          nobis natus voluptatum asperiores!</p>
                        <a href="#">Read more</a>
      </div>
    </section>

    <section class="offers">
      <div class="offers-container">
        <div class="offer-1">
          <i class="fas fa-hotel fa-3x"></i>
          <h1>Great Location</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
            impedit!
          </p> 
        </div>
        <div class="offer-2">
          <i class="fas fa-hamburger fa-3x"></i>
          <h1>Free Meals</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
            impedit!
          </p>
        </div>
        <div class="offer-3">
          <i class="fas fa-dumbbell fa-3x"></i>
          <h1>Great Location</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
            impedit!
          </p>
        </div>
      </div>
    </section>
    
    {/* <footer>
    Copyright ©2023. All rights reserved
    </footer> */}
    <Footer />

            
        </div>
    )
}

export default Home;