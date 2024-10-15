import React from "react";
import GuestHeader from "../Components/GuestHeader";
import "../Designs/Css/FindEventsPage.css";

function FindEventsPage() {
  return (
    <>
      <div className="container" style={{marginTop:'90vh', marginBottom: '25vh'}}>
        <div className="row">
          <div className="small-12 columns">
            <h2 className="widget-title">
              <strong>Upcoming Events</strong>
            </h2>
            <hr className="event-underline" />

            <ul className="event-list">
              <li className="event">
                <div className="date">
                  <time>
                    <span className="duration">September 28, 2024</span>
                    <span className="to-duration"> - to - </span>
                    <span className="duration">September 29, 2024</span>
                    <br />
                    <span className="location">Angeles City, Philippines</span>
                  </time>
                  <i className="fas fa-minus minimize-icon"></i>
                </div>

                <div className="info">
                  <h2 className="title">Kirby vs Helaena</h2>
                  <p className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </li>

              <li className="event">
                <div className="date">
                  <time>
                    <span className="duration">September 30, 2024</span>
                    <span className="to-duration"> - to - </span>
                    <span className="duration">October 1, 2024</span>
                    <br />
                    <span className="location">Angeles City, Philippines</span>
                  </time>
                  <i className="fas fa-minus minimize-icon"></i>
                </div>

                <div className="info">
                  <h2 className="title">Kirby vs Klein</h2>
                  <p className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </li>

              <li className="event">
                <div className="date">
                  <time>
                    <span className="duration">October 2, 2024</span>
                    <span className="to-duration"> - to - </span>
                    <span className="duration">October 3, 2024</span>
                    <br />
                    <span className="location">Angeles City, Philippines</span>
                  </time>
                  <i className="fas fa-minus minimize-icon"></i>
                </div>

                <div className="info">
                  <h2 className="title">Kirby vs Liam</h2>
                  <p className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default FindEventsPage;
