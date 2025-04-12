import { NavLink } from "react-router-dom"

const Home_hero=()=>{

    return(
        <>
            <div className="hero">
                <section className="hero-section">
                    <div className="hero-content">
                        <div className="hero-text" >
                            <span className="badge" >Inherit the generational skills</span>
                            <h1 className="hero-title" >
                            Your Gateway to learning<br />and Productivity</h1>
                            <p className="hero-description">
                            Whether you're here to explore Courses, Skill up Technical topics enhance your Sessions, or
                            connect with Mentors, you've come to the right
                            place. Let's DO IT, Level up, and grow together!
                            </p>
                    <div className="hero-buttons">
                        <NavLink to='/Login' className="btn btn-primary btn-lg">Get Started
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon-right"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </NavLink>
                    <NavLink 
                      to='/courses'
                      className="btn btn-outline btn-lg"
                    >
                      Explore Courses
                    </NavLink>
                  </div>
                  <div className="member-count">
                    <div className="avatar-group">
                      <img
                        src="https://randomuser.me/api/portraits/women/32.jpg"
                        alt="Member"
                        className="avatar"
                      />
                      <img
                        src="https://randomuser.me/api/portraits/men/44.jpg"
                        alt="Member"
                        className="avatar"
                      />
                      <img
                        src="https://randomuser.me/api/portraits/women/56.jpg"
                        alt="Member"
                        className="avatar"
                      />
                      <div style={{ color: "#000" }} className="avatar avatar-more">
                        +5
                      </div>
                    </div>
                    <div className="member-text">
                      Join over{" "}
                      <span
                        className="highlight"
                      >
                        5,000+
                      </span>{" "}
                      members already learning
                    </div>
                  </div>
                </div>
                </div>
                </section>
                <div className="hero-image-container">
                  <img
                    src='https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt="Community Collaboration"
                    className="hero-image"
                  />
                </div>
          </div>
        </>
    )
}
export default Home_hero