'use client';
import Link from "next/link";
import Image from "next/image";


const Footer = () => {
    return (
        <>
          <main className="main">
        {/* Hero Section */}
        <section id="hero" className="hero section dark-background">
          <Image src="/assets/img/hero-bg.jpg" width={300} height={100} alt="" data-aos="fade-in" />
          <div
            id="hero-carousel"
            className="carousel carousel-fade"
            data-bs-ride="carousel"
            data-bs-interval={5000}
          >
            <div className="container position-relative">
              <div className="carousel-item active">
                <div className="carousel-container">
                  <h2>Welcome to Moderna</h2>
                  <p>
                    Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
                    est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                    mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
                    repellendus deleniti vel. Minus et tempore modi architecto.
                  </p>
                  <Link href="#about" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
             
              <div className="carousel-item">
                <div className="carousel-container">
                  <h2>Lorem Ipsum Dolor</h2>
                  <p>
                    Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
                    est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                    mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
                    repellendus deleniti vel. Minus et tempore modi architecto.
                  </p>
                  <Link href="#about" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>

              <div className="carousel-item">
                <div className="carousel-container">
                  <h2>Sequi ea ut et est quaerat</h2>
                  <p>
                    Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
                    est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                    mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
                    repellendus deleniti vel. Minus et tempore modi architecto.
                  </p>
                  <Link href="#about" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
              <Link
                className="carousel-control-prev"
                href="#hero-carousel"
                role="button"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon bi bi-chevron-left"
                  aria-hidden="true"
                />
              </Link>
              <Link
                className="carousel-control-next"
                href="#hero-carousel"
                role="button"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon bi bi-chevron-right"
                  aria-hidden="true"
                />
              </Link>
              <ol className="carousel-indicators" />
            </div>
          </div>
        </section>
      
        <section id="featured-services" className="featured-services section">
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="service-item item-cyan position-relative">
                  <div className="icon">
                    <i className="bi bi-activity" />
                  </div>
                  <Link href="service-details.html" className="stretched-link">
                    <h3>Nesciunt Mete</h3>
                  </Link>
                  <p>
                    Provident nihil minus qui consequatur non omnis maiores. Eos
                    accusantium minus dolores iure perferendis tempore et consequatur.
                  </p>
                </div>
              </div>
          
              <div
                className="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="service-item item-orange position-relative">
                  <div className="icon">
                    <i className="bi bi-broadcast" />
                  </div>
                  <a href="service-details.html" className="stretched-link">
                    <h3>Eosle Commodi</h3>
                  </a>
                  <p>
                    Ut autem aut autem non a. Sint sint sit facilis nam iusto sint.
                    Libero corrupti neque eum hic non ut nesciunt dolorem.
                  </p>
                </div>
              </div>
             
              <div
                className="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="service-item item-teal position-relative">
                  <div className="icon">
                    <i className="bi bi-easel" />
                  </div>
                  <a href="service-details.html" className="stretched-link">
                    <h3>Ledo Markt</h3>
                  </a>
                  <p>
                    Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus
                    ea aut. Vel qui id voluptas adipisci eos earum corrupti.
                  </p>
                </div>
              </div>
            
              <div
                className="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <div className="service-item item-red position-relative">
                  <div className="icon">
                    <i className="bi bi-bounding-box-circles" />
                  </div>
                  <a href="service-details.html" className="stretched-link">
                    <h3>Asperiores Commodit</h3>
                  </a>
                  <p>
                    Non et temporibus minus omnis sed dolor esse consequatur.
                    Cupiditate sed error ea fuga sit provident adipisci neque.
                  </p>
                  <a href="service-details.html" className="stretched-link" />
                </div>
              </div>
           
            </div>
          </div>
        </section>
       
        <section id="about" className="about section light-background">
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-lg-6 position-relative align-self-start"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <Image src="/assets/img/about.jpg" width={200}  height={100} className="img-fluid" alt="" />
                <a
                  href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                  className="glightbox pulsating-play-btn"
                />
              </div>
              <div
                className="col-lg-6 content"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <h3>
                  Voluptatem dignissimos provident quasi corporis voluptates sit
                  assumenda.
                </h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check2-all" />{" "}
                    <span>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check2-all" />{" "}
                    <span>
                      Duis aute irure dolor in reprehenderit in voluptate velit.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check2-all" />{" "}
                    <span>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                      aute irure dolor in reprehenderit in voluptate trideta
                      storacalaperda mastiro dolore eu fugiat nulla pariatur.
                    </span>
                  </li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident
                </p>
              </div>
            </div>
          </div>
        </section>
  
        <section id="features" className="features section">
     
          <div className="container section-title" data-aos="fade-up">
            <h2>Features</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>
     
          <div className="container">
            <div className="row gy-4 align-items-center features-item">
              <div
                className="col-md-5 d-flex align-items-center"
                data-aos="zoom-out"
                data-aos-delay={100}
              >
                
              </div>
              <div className="col-md-7" data-aos="fade-up" data-aos-delay={100}>
                <h3>
                  Voluptatem dignissimos provident quasi corporis voluptates sit
                  assumenda.
                </h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check" /> 
                    <span>
                      {" "}
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check" />{" "}
                    <span>
                      Duis aute irure dolor in reprehenderit in voluptate velit.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check" />{" "}
                    <span>Ullam est qui quos consequatur eos accusamus.</span>
                  </li>
                </ul>
              </div>
            </div>
  
            <div className="row gy-4 align-items-center features-item">
              <div
                className="col-md-5 order-1 order-md-2 d-flex align-items-center"
                data-aos="zoom-out"
                data-aos-delay={200}
              >
                <Image src="/assets/img/features-2.svg" width={200} height={200}  className="img-fluid" alt="" />
                
              </div>
              <div
                className="col-md-7 order-2 order-md-1"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <h3>Corporis temporibus maiores provident</h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum
                </p>
              </div>
            </div>
        
            <div className="row gy-4 align-items-center features-item">
              <div className="col-md-5 d-flex align-items-center" data-aos="zoom-out">
                <Image src="/assets/img/features-3.svg" width={200} height={200} className="img-fluid" alt="" />
              </div>
              <div className="col-md-7" data-aos="fade-up">
                <h3>
                  Sunt consequatur ad ut est nulla consectetur reiciendis animi
                  voluptas
                </h3>
                <p>
                  Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia
                  minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor
                  doloremque.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check" />{" "}
                    <span>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check" />
                    <span>
                      {" "}
                      Duis aute irure dolor in reprehenderit in voluptate velit.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check" />{" "}
                    <span>
                      Facilis ut et voluptatem aperiam. Autem soluta ad fugiat
                    </span>
                    .
                  </li>
                </ul>
              </div>
            </div>
          
            <div className="row gy-4 align-items-center features-item">
              <div
                className="col-md-5 order-1 order-md-2 d-flex align-items-center"
                data-aos="zoom-out"
              >
                <Image src="/assets/img/features-4.svg" width={200} height={100} className="img-fluid" alt="" />
              </div>
              <div className="col-md-7 order-2 order-md-1" data-aos="fade-up">
                <h3>
                  Quas et necessitatibus eaque impedit ipsum animi consequatur
                  incidunt in
                </h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum
                </p>
              </div>
            </div>
            
          </div>
        </section>
      </main>
        <footer id="footer" className="footer dark-background">
          <div className="footer-newsletter">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-lg-6">
                  <h4>Join Our Newsletter</h4>
                  <p>
                    Subscribe to our newsletter and receive the latest news about our
                    products and services!
                  </p>
                  <form
                    action="forms/newsletter.php"
                    method="post"
                    className="php-email-form"
                  >
                    <div className="newsletter-form">
                      <input type="email" name="email" />
                      <input type="submit" defaultValue="Subscribe" />
                    </div>
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">
                      Your subscription request has been sent. Thank you!
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="container footer-top">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-6 footer-about">
                <Link href="" className="d-flex align-items-center">
                  <span className="sitename">Web</span>
                </Link>
                <div className="footer-contact pt-3">
                  <p>A108 Adam Street</p>
                  <p>New York, NY 535022</p>
                  <p className="mt-3">
                    <strong>Phone:</strong> <span>+1 5589 55488 55</span>
                  </p>
                  <p>
                    <strong>Email:</strong> <span>info@example.com</span>
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" /> <a href="#">Home</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" /> <a href="#">About us</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" /> <a href="#">Services</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <Link href="#">Terms of service</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" /> <a href="#">Web Design</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <Link href="#">Web Development</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <Link href="#">Product Management</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" /> <a href="#">Marketing</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-12">
                <h4>Follow Us</h4>
                <p>
                  Cras fermentum odio eu feugiat lide par naso tierra videa magna
                  derita valies
                </p>
                <div className="social-links d-flex">
                  <Link href="">
                    <i className="bi bi-twitter-x" />
                  </Link>
                  <Link href="">
                    <i className="bi bi-facebook" />
                  </Link>
                  <Link href="">
                    <i className="bi bi-instagram" />
                  </Link>
                  <Link href="">
                    <i className="bi bi-linkedin" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="container copyright text-center mt-4">
            <p>
              © <span>Copyright</span>{" "}
              <strong className="px-1 sitename">Moderna</strong>{" "}
              <span>All Rights Reserved</span>
            </p>
          </div>
        </footer>
        
       
    
     
      </>
      
    );
  };
  
  export default Footer;
  