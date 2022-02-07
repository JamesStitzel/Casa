import React from 'react';
import { Link } from 'react-router-dom';
import home01 from '../assets/images/homepage/01.jpg'
import home02 from '../assets/images/homepage/02.jpg'
import home03 from '../assets/images/homepage/03.jpg'

const Home = () => {

  function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
    }, []);
    return (
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }

  return (
    <main className="main">
      <FadeInSection>
      <header class="masthead text-center text-black">
        <div class="masthead-content">
            <div class="container px-5 pb-5">
                <h1 class="masthead-heading mb-0">A new life.</h1>
                <h2 class="masthead-subheading mb-0">Starts with a new home.</h2>
                <a class="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll">Learn more</a>
            </div>
        </div>
        <div class="bg-circle-1 bg-circle zindex-1"></div>
        <div class="bg-circle-2 bg-circle zindex-1"></div>
        <div class="bg-circle-3 bg-circle zindex-1"></div>
        <div class="bg-circle-4 bg-circle zindex-1"></div>
    </header>
      </FadeInSection>

      <FadeInSection>
      <section id="scroll" class="">
        <div class="container px-5">
            <div class="row gx-5 align-items-center">
                <div class="col-lg-6 order-lg-2">
                    <div class="p-5"><img class="img-fluid rounded-circle" src={home01} alt="Happy family" /></div>
                </div>
                <div class="col-lg-6 order-lg-1">
                    <div class="p-5">
                        <h2 class="display-4">For those looking for new adventures.</h2>
                        <p>With Casa's large and growing community, finding the right buyer is simpler than ever.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
      </FadeInSection>

   
      <section id="sec2" class="">
        <div class="container px-5">
            <div class="row gx-5 align-items-center">
                <div class="col-lg-6 order-lg-2">
                <div class="p-5">
                        <h2 class="display-4">And for those looking to settle down.</h2>
                        <p>With our inuitive layout its never been easier to find your forever home.</p>
                    </div>
                </div>
                <div class="col-lg-6">
                <div class="p-5"><img class="img-fluid rounded-circle" src={home02} alt="Happy couple" /></div>
                    
                </div>
            </div>
        </div>
    </section>
 


      <section id="sec3" class="">
        <div class="container px-5">
            <div class="row gx-5 align-items-center">
                <div class="col-lg-6 order-lg-2">
                    <div class="p-5"><img class="img-fluid rounded-circle" src={home03} alt="Beautiful Home" /></div>
                </div>
                <div class="col-lg-6 order-lg-1">
                    <div class="p-5">
                        <h2 class="display-4">We have a Casa for you.</h2>
                        <p>So sign in or sign up to start today.</p>
                        <Link to="/signup">
            <button type="button" className="custom-btn mt-3">Sign Up</button>
            </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  

          <div className="col-12 flex-wrap justify-content-center">
            <h3 className="pt-5 text-light">Ready To Give It A Try?</h3>
            <p className="justify-content-center text-light flex-wrap mx-3">Join the fastest growing group of home owners today!.</p>
          </div>
      
    </main>
  );
};

export default Home;
