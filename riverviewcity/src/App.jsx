import './App.css';
import { useEffect } from 'react';

function App() {
  // Optional: Initialize Glide.js and glightbox in useEffect if needed
  useEffect(() => {
    // Example (requires importing Glide/glightbox):
    // import Glide from '@glidejs/glide';
    // new Glide('#mainSlider', { /* options */ }).mount();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Form submitted:', data);
    // Add your API call or logic here
  };

  return (
    <>
      <div className="lp-layout">
        {/* Menu - S */}
        <nav className="navbar navbar-expand-lg bg-white shadow main-navbar sticky-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="./">
              <img
                className="lazyload logo"
                src="assets/img/logo.jpg"
                data-src="assets/img/logo.jpg"
                alt="Riverview City Hornbill Heights Logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" href="#home">
                    <i className="ri-home-9-line"></i> Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#pricing">
                    <i className="ri-money-rupee-circle-line"></i> Price
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#sitefloorplan">
                    <i className="ri-building-line"></i> Site Plan
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#amenities">
                    <i className="ri-wifi-line"></i> Amenities
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#gallery">
                    <i className="ri-image-line"></i> Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#location">
                    <i className="ri-map-pin-2-line"></i> Location
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#!"
                    data-bs-toggle="modal"
                    data-bs-target="#enqPopup"
                    data-brochure-popup="yes"
                    data-form-name="Download Brochure - Menu"
                  >
                    <i className="ri-download-2-line"></i>
                    Brochure
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Menu - E */}

        {/* Banner Slider - S */}
        <section className="banner" id="home">
          <div className="glide" id="mainSlider">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                <li className="glide__slide">
                  <picture>
                    <source
                      media="(max-width: 750px)"
                      data-srcset="assets/img/slider1.webp"
                      type="image/webp"
                    />
                    <source
                      media="(min-width: 751px)"
                      data-srcset="assets/img/slider1.webp"
                      type="image/webp"
                    />
                    <img
                      data-sizes="auto"
                      className="lazyload"
                      src="assets/img/slider1.jpg"
                      data-srcset="assets/img/slider1.webp"
                      alt="Riverview City Hornbill Heights Banner 1"
                    />
                  </picture>
                </li>
                <li className="glide__slide">
                  <picture>
                    <source
                      media="(max-width: 750px)"
                      data-srcset="assets/img/slider2.webp"
                      type="image/webp"
                    />
                    <source
                      media="(min-width: 751px)"
                      data-srcset="assets/img/slider2.webp"
                      type="image/webp"
                    />
                    <img
                      data-sizes="auto"
                      className="lazyload"
                      src="assets/img/slider2.jpg"
                      data-srcset="assets/img/slider2.webp"
                      alt="Riverview City Hornbill Heights Banner 2"
                    />
                  </picture>
                </li>
              </ul>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
              <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                <i className="ri-arrow-left-s-line"></i>
              </button>
              <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
                <i className="ri-arrow-right-s-line"></i>
              </button>
            </div>
            <div className="glide__bullets" data-glide-el="controls[nav]">
              <button className="glide__bullet" data-glide-dir="=0"></button>
              <button className="glide__bullet" data-glide-dir="=1"></button>
            </div>
          </div>
          <div className="info-box">
            <span className="status">BOOKING OPEN</span>
            <div className="mb-box">
              <h1>Riverview City Hornbill Heights</h1>
              <h2>At Loni Kalbhor, Pune</h2>
              <div className="card-d card-d-custom p-3">
                <center>
                  <table>
                    <tbody>
                      <tr>
                        <td>Land Parcel</td>
                        <td>: &nbsp;</td>
                        <td>
                          <b>6.73 Acres</b>
                        </td>
                      </tr>
                      <tr>
                        <td>Floors</td>
                        <td>: &nbsp;</td>
                        <td>
                          <b>G+2P+21</b>
                        </td>
                      </tr>
                      <tr>
                        <td>Units</td>
                        <td>: &nbsp;</td>
                        <td>
                          <b>672</b>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </center>
              </div>
              <ul className="offers">
                <li>Life Time Maintenance</li>
                <li>3% Stamp Duty</li>
                <li>500 Acre Township</li>
                <li>Jodi Flat Also Available</li>
                <li>Phase 1 Delivered</li>
              </ul>
            </div>
            <div className="mb-ext-box">
              <h4>
                Luxury 2 & 2.5 BHK Apartments
                <br /> Starting Price
              </h4>
              <h5>
                <small>₹</small> 80.68 Lacs* <small>Onwards</small>
              </h5>
              <button
                className="btn btn-dark btn-cta mb-3"
                data-bs-toggle="modal"
                data-bs-target="#enqPopup"
                data-form-name="Enquiry Now - LP"
              >
                Express Your Interest
              </button>
            </div>
          </div>
        </section>
        {/* Banner Slider - E */}

        {/* Sidebar - S */}
        <aside className="sidebar shadow">
          <div className="og-wrapper">
            <div className="og-links">
              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#enqPopup"
                data-form-name="Organize Site Visit"
              >
                Organize Site Visit
              </a>
              <a href="tel:+918766081287">
                <i className="ri-phone-fill"></i> +91-8766081287
              </a>
            </div>
            <div className="og-open-links">
              <button
                type="button"
                className="btn btn-dark btn-cta"
                data-bs-toggle="modal"
                data-bs-target="#enqPopup"
                data-form-name="Request Call Back"
              >
                Request Call Back
              </button>
              <a
                href="https://api.whatsapp.com/send?phone=918766081287"
                target="_blank"
                rel="noreferrer"
                className="btn btn-wp-icon"
              >
                <i className="ri-whatsapp-line"></i>
              </a>
            </div>
          </div>
          <h5 className="section-heading mt-4">Enquire Now</h5>
          <form className="enq-form" onSubmit={handleSubmit}>
            <input
              name="Name"
              required
              autoComplete="off"
              type="text"
              maxLength="60"
              pattern="[A-Za-z\s\-'’]+"
              className="form-control"
              placeholder="Name"
            />
            <div className="form-group contact_number d-flex">
              <select className="form-select" style={{ width: '80%' }}>
                <option>India (+91)</option>
                <option>UAE (+971)</option>
                <option>USA (+1)</option>
              </select>
              <input
                type="number"
                name="Number"
                className="form-control"
                required
                placeholder="Mobile No."
              />
            </div>
            <input
              name="Email"
              required
              autoComplete="off"
              type="email"
              className="form-control"
              placeholder="Email"
            />
            <input type="hidden" name="Project" value="Riverview City Hornbill Heights" />
            <div className="consent">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultChecked
                  required
                  id="consentCheckSidebar"
                />
                <label className="form-check-label" htmlFor="consentCheckSidebar">
                  I consent to the use of my provided data in accordance with the{' '}
                  <a href="/disclaimer">privacy policy</a>.
                </label>
              </div>
            </div>
            <div className="btn-wrapper">
              <button type="submit" className="btn btn-dark btn-cta">
                Express Your Interest
              </button>
            </div>
          </form>
        </aside>
        {/* Sidebar - E */}

        {/* Brochure Section (Only once) */}
        <div className="brochure-section p-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 text-center">
                <div className="brochure-img">
                  <img src="assets/img/brochure-img.webp" alt="Brochure Preview" />
                </div>
              </div>
              <div className="col-lg-6 text-center">
                <div className="brochure-content">
                  <h2 className="brochure-h2 pb-2 text-white">
                    Receive A Digital Copy Of Our Brochure
                  </h2>
                  <p className="brochure-p text-white">
                    And Learn More About Our Spacious Residences
                  </p>
                  <center>
                    <button
                      className="btn btn-dark btn-cta mt-3"
                      data-bs-toggle="modal"
                      data-bs-target="#enqPopup"
                      data-brochure-popup="yes"
                      data-form-name="Download Brochure - Overview"
                    >
                      DOWNLOAD BROCHURE.PDF
                    </button>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overview - S */}
        <section id="overview">
          <div className="row row-cols-1 g-4 row-cols-md-2 align-content-center">
            <div className="col">
              <h3 className="section-heading">About Riverview City Hornbill Heights</h3>
              <p>
                Hornbill Heights, offering 2 BHK and 2.5 BHK in Pune, is part of Riverview City, the
                township that promises a complete lifestyle in every sense. Everything you need and
                desire will be present inside the township. From lifestyle amenities to civic
                infrastructure, you will have all necessities at a walkable distance. Book your 2
                BHK in Pune here, or a 2.5 BHK, and gift yourself the perfect lifestyle.
              </p>
              <button
                className="btn btn-dark btn-cta mt-3"
                data-bs-toggle="modal"
                data-bs-target="#enqPopup"
                data-brochure-popup="yes"
                data-form-name="Download Brochure - Overview"
              >
                Express Your Interest
              </button>
            </div>
            <div className="col justify-content-center align-content-center">
              <div className="bd-img">
                <picture>
                  <source data-srcset="assets/img/about.webp" type="image/webp" />
                  <img
                    data-sizes="auto"
                    className="lazyload"
                    src="assets/img/about.jpg"
                    data-srcset="assets/img/about.webp"
                    alt="About Riverview City"
                  />
                </picture>
              </div>
            </div>
          </div>
        </section>
        {/* Overview - E */}

        {/* Highlights - S */}
        <section id="highlights">
          <div className="highlight-2">
            <div className="row">
              <div className="col-12 col-md-5 d-none d-md-flex justify-content-center align-content-center">
                <div className="bd-img">
                  <picture>
                    <source data-srcset="assets/img/highlights.webp" type="image/webp" />
                    <img
                      data-sizes="auto"
                      className="lazyload"
                      src="assets/img/highlights.jpg"
                      data-srcset="assets/img/highlights.webp"
                      alt="Project Highlights"
                    />
                  </picture>
                </div>
              </div>
              <div className="col-12 col-md-7">
                <h3 className="section-heading text-center w-100">
                  Riverview City Hornbill Heights - Highlights
                </h3>
                <div className="row g-3 row-cols-1 highlights-list mt-3 p-3">
                  <div className="col">
                    <div className="point">
                      <i className="ri-checkbox-line"></i>
                      <span>Possession Date : December 2027</span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="point">
                      <i className="ri-checkbox-line"></i>
                      <span>Structure - Reinforced Cement Concrete (RCC)</span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="point">
                      <i className="ri-checkbox-line"></i>
                      <span>Landscaped Parks and Gardens</span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="point">
                      <i className="ri-checkbox-line"></i>
                      <span>Highlight 2.5bhk With 2 Parking</span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="point">
                      <i className="ri-checkbox-line"></i>
                      <span>24X7 Centralized Security System</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Highlights - E */}

        {/* Price - S */}
        <section className="light oo-tabs pg-tabs" id="pricing">
          <div className="row">
            <div className="col">
              <h3 className="section-heading text-center w-100">
                Area &amp; Pricing of Riverview City Hornbill Heights
              </h3>
              <div className="price-slider-s-block mt-4">
                <div className="row row-cols-1 row-cols-md-3 gap-5 justify-content-center pb-4">
                  <div className="price-block shadow">
                    <h4>2 BHK</h4>
                    <h5>898 Sq.Ft</h5>
                    <h6>
                      <small>₹</small> 80.68 Lacs* Onwards
                    </h6>
                    <button
                      className="btn btn-sm btn-dark btn-cta"
                      data-bs-toggle="modal"
                      data-bs-target="#enqPopup"
                      data-form-name="Costing Details - 2 BHK"
                    >
                      Express Your Interest
                    </button>
                  </div>
                  <div className="price-block shadow">
                    <h4>2.5 BHK</h4>
                    <h5>1096 Sq.Ft</h5>
                    <h6>
                      <small>₹</small> 98.77 Lacs* Onwards
                    </h6>
                    <button
                      className="btn btn-sm btn-dark btn-cta"
                      data-bs-toggle="modal"
                      data-bs-target="#enqPopup"
                      data-form-name="Costing Details - 2.5 BHK"
                    >
                      Express Your Interest
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Price - E */}

        {/* Site Plan - S */}
        <section id="sitefloorplan">
          <div className="row">
            <div className="col">
              <div className="row g-5 row-cols-1 row-cols-md-2 justify-content-center">
                <div className="col">
                  <div className="plan-block text-center">
                    <h3 className="section-heading text-center w-100">
                      Master Plan Layout of Riverview City Hornbill Heights
                    </h3>
                    <div
                      className="bd-img blur mt-3 mb-4"
                      data-bs-toggle="modal"
                      data-bs-target="#enqPopup"
                      data-form-name="Request Master Plan Layout"
                    >
                      <span className="cta-text">View Master Plan Layout</span>
                      <picture>
                        <source srcSet="assets/img/mp-768w.webp" type="image/webp" />
                        <img
                          className="lazyload"
                          src="assets/img/mp-768w.jpg"
                          data-src="assets/img/mp-768w.webp"
                          alt="Master Plan Layout"
                        />
                      </picture>
                    </div>
                    <a
                      className="btn btn-dark btn-cta mt-3 glightbox"
                      data-gallery="masterplanbtn"
                      href="assets/img/mp.jpg"
                    >
                      View Master Plan Layout
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="plan-block text-center">
                    <h3 className="section-heading text-center w-100">
                      Unit Plan Layout of Riverview City Hornbill Heights
                    </h3>
                    <div
                      className="bd-img blur mt-3 mb-4"
                      data-bs-toggle="modal"
                      data-bs-target="#enqPopup"
                      data-form-name="Request Unit Plan Layout"
                    >
                      <span className="cta-text">Request Unit Plan Layout</span>
                      <picture>
                        <source srcSet="assets/img/4bhk-768w.webp" type="image/webp" />
                        <img
                          className="lazyload"
                          src="assets/img/4bhk-768w.jpg"
                          data-src="assets/img/4bhk-768w.webp"
                          alt="Unit Plan Layout"
                        />
                      </picture>
                    </div>
                    <button
                      className="btn btn-dark btn-cta mt-3"
                      data-bs-toggle="modal"
                      data-bs-target="#enqPopup"
                      data-form-name="Request Unit Plan Layout Button"
                    >
                      Express Your Interest
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Site Plan - E */}

        {/* Amenities - S */}
        <section id="amenities">
          <div className="row">
            <div className="col">
              <h3 className="section-heading text-center w-100">
                Amenities of Riverview City Hornbill Heights
              </h3>
              <div className="slider-container">
                <div className="glide amenities-slider mt-3">
                  <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                      {[
                        ['a1', 'Cricket pitch'],
                        ['a2', 'Swimming pool'],
                        ['a3', 'Badminton court'],
                        ['a4', 'Squash court'],
                        ['a5', 'Healthcare amenities'],
                        ['a6', 'Amphitheatre'],
                        ['a7', 'Jogging path'],
                        ['a8', 'Cycling track'],
                      ].map(([img, name], idx) => (
                        <li className="glide__slide" key={idx}>
                          <div className="amenities-block-wrapper">
                            <a
                              href={`assets/img/ame/${img}-768w.webp`}
                              className="gallery-img glightbox"
                              data-gallery="ami-img"
                              data-glightbox={`title:${name}`}
                            >
                              <picture>
                                <source
                                  data-srcset={`assets/img/ame/${img}-768w.webp`}
                                  type="image/webp"
                                />
                                <img
                                  data-sizes="auto"
                                  className="lazyload"
                                  src={`assets/img/ame/${img}-768w.jpg`}
                                  data-srcset={`assets/img/ame/${img}-768w.webp`}
                                  alt={name}
                                />
                              </picture>
                              <span className="amenity-name">{name}</span>
                            </a>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="glide__arrows" data-glide-el="controls">
                    <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                      <i className="ri-arrow-left-s-line"></i>
                    </button>
                    <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
                      <i className="ri-arrow-right-s-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery - S */}
        <section id="gallery" className="oo-tabs pg-tabs">
          <div className="row">
            <div className="col">
              <h3 className="section-heading text-center w-100">
                Project Gallery of Riverview City Hornbill Heights
              </h3>
              <div className="tab-content" id="galTab-tabContent">
                <div className="tab-pane fade show active" id="galTab-exterior" role="tabpanel">
                  <div className="slider-container">
                    <div className="glide gallery-slider" id="exterior-galSider">
                      <div className="glide__track" data-glide-el="track">
                        <ul className="glide__slides">
                          {['g1', 'g2', 'g3', 'g4'].map((img, idx) => (
                            <li className="glide__slide" key={idx}>
                              <div className="amenities-block-wrapper">
                                <a
                                  href={`assets/img/${img}.jpg`}
                                  className="gallery-img glightbox"
                                  data-gallery="gal-img"
                                >
                                  <picture>
                                    <source data-srcset={`assets/img/${img}.webp`} type="image/webp" />
                                    <img
                                      data-sizes="auto"
                                      className="lazyload"
                                      src={`assets/img/${img}.jpg`}
                                      data-srcset={`assets/img/${img}.webp`}
                                      alt={`Gallery image ${idx + 1}`}
                                    />
                                  </picture>
                                </a>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="glide__arrows" data-glide-el="controls">
                        <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                          <i className="ri-arrow-left-s-line"></i>
                        </button>
                        <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
                          <i className="ri-arrow-right-s-line"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Gallery - E */}

        {/* Location Map - S */}
        <section className="" id="location">
          <div className="row">
            <div className="col">
              <h3 className="section-heading text-center w-100">
                Location Advantage of Riverview City Hornbill Heights
              </h3>
              <div className="row g-md-5 row-cols-1 row-cols-md-2 justify-content-center">
                <div className="col">
                  <div className="plan-block">
                    <div className="bd-iframe bd-img mt-3 mb-4">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7567.481790778265!2d74.0078360451313!3d18.49539210508255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e943825b7a03%3A0x642a5194d16f59dc!2sRiverview%20City%20Pune%20Magrapatta!5e0!3m2!1sen!2sin!4v1763142888109!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="plan-block">
                    <div
                      className="bd-img blur mt-3 mb-4"
                      data-bs-toggle="modal"
                      data-bs-target="#enqPopup"
                      data-form-name="Request Location Map"
                    >
                      <span className="cta-text">Request Location Map</span>
                      <picture>
                        <source data-srcset="assets/img/map.webp" type="image/webp" />
                        <img
                          data-sizes="auto"
                          className="lazyload"
                          src="assets/img/map.jpg"
                          data-srcset="assets/img/map.webp"
                          alt="Location Map"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Location Map - E */}

        {/* Location List - S */}
        <section className="pg-tabs">
          <div className="row">
            <div className="col">
              <div className="d-md-block">
                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-road-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-road"
                      type="button"
                      role="tab"
                      aria-controls="pills-road"
                      aria-selected="true"
                    >
                      Connectivity
                    </button>
                  </li>
                </ul>
                <div className="tab-content shadow" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-road"
                    role="tabpanel"
                    aria-labelledby="pills-road-tab"
                  >
                    <ul>
                      <li>
                        <i className="ri-map-pin-2-fill me-1"></i> Reliance Smart - 2.1km
                      </li>
                      <li>
                        <i className="ri-map-pin-2-fill me-1"></i> Loni Railway Station - 3.3km
                      </li>
                      <li>
                        <i className="ri-map-pin-2-fill me-1"></i> MIT College Rd - 3.8km
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="d-block text-center mt-4">
                <button
                  className="btn btn-dark btn-cta"
                  data-bs-toggle="modal"
                  data-bs-target="#enqPopup"
                  data-form-name="Request Location Details"
                >
                  Express Your Interest
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Location List - E */}

        {/* Site Visit - S */}
        <section className="light site-visit" id="site-visit">
          <h3 className="section-heading text-center w-100">Schedule a Site Visit</h3>
          <div className="row row-cols-1 row-cols-md-2 align-items-center">
            <div className="col d-flex justify-content-center">
              <div className="bd-img">
                <picture>
                  <source
                    data-srcset="https://s3.ap-south-1.amazonaws.com/microsites.images/temp_assets/temp-xi/img/sv.webp"
                    type="image/webp"
                  />
                  <img
                    className="lazyload img-fluid"
                    src="https://s3.ap-south-1.amazonaws.com/microsites.images/temp_assets/temp-xi/img/sv.jpg"
                    data-srcset="https://s3.ap-south-1.amazonaws.com/microsites.images/temp_assets/temp-xi/img/sv.webp"
                    alt="Site Visit"
                  />
                </picture>
              </div>
            </div>
            <div className="col pt-5">
              <form className="enq-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="Name"
                  required
                  autoComplete="off"
                  maxLength={60}
                  pattern="[A-Za-z\s\-'’]+"
                  className="form-control mb-3"
                  placeholder="Name"
                />
                <div className="form-group contact_number d-flex mb-3">
                  <select name="Country-code" className="form-control" style={{ width: '40%' }}>
                    <option value="IN +91">India (+91)</option>
                    <option value="AE +971">UAE (+971)</option>
                    <option value="US +1">USA (+1)</option>
                    <option value="UK +44">UK (+44)</option>
                  </select>
                  <input
                    type="number"
                    name="Number"
                    className="form-control ms-2"
                    required
                    placeholder="Mobile No."
                  />
                </div>
                <input
                  type="email"
                  name="Email"
                  required
                  autoComplete="off"
                  className="form-control mb-3"
                  placeholder="Email"
                />
                <input type="hidden" name="Project" value="Riverview City Hornbill Heights" />
                <input type="hidden" name="Ip" />
                <div className="consent mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="consentCheck-siteVisit"
                      required
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="consentCheck-siteVisit">
                      I consent to the use of my provided data in accordance with the{' '}
                      <a href="disclaimer.html">privacy policy</a>. I acknowledge that the project I
                      am enquiring about has not yet received RERA clearance.
                    </label>
                  </div>
                </div>
                <div className="btn-wrapper">
                  <button type="submit" className="btn btn-dark btn-cta w-100">
                    Express Your Interest
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/* Site Visit - E */}

        {/* Mobile Footer CTA - S */}
        <div className="mob-ft-cta">
          <a href="tel:+918766081287">
            <i className="ri-phone-fill"></i> Call
          </a>
          <a
            href="javascript:void(0)"
            data-bs-toggle="modal"
            data-bs-target="#enqPopup"
            data-form-name="Enquire Now - Mobile"
          >
            <i className="ri-mail-line"></i> Enquire
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=918766081287&text=Hi%21+I%27m+Interested+In+Riverview%20City%20Hornbill%20Heights%20At%20Loni%20Kalbhor,%20Pune.+Please+Share+Details."
            target="_self"
          >
            <i className="ri-whatsapp-line"></i> WhatsApp
          </a>
        </div>
        {/* Mobile Footer CTA - E */}

        {/* Enquire Popup - S */}
        <div
          className="modal fade enqPopup"
          id="enqPopup"
          tabIndex="-1"
          aria-labelledby="enqPopupLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header border-0 pb-0">
                <h1 className="modal-title" id="enqPopupTitle">
                  Enquire Now
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body p-0">
                <div className="enq-form-layout">
                  <ul className="enq-popup-cp-highlights">
                    <li className="heading">We Promise</li>
                    <li>
                      <i className="ri-customer-service-2-line"></i>
                      <span>
                        <b>Instant</b> Call Back
                      </span>
                    </li>
                    <li>
                      <i className="ri-taxi-line"></i>
                      <span>
                        <b>Free</b> Site Visit
                      </span>
                    </li>
                    <li>
                      <i className="ri-money-rupee-circle-line"></i>
                      <span>
                        <b>Unmatched</b> Price
                      </span>
                    </li>
                  </ul>
                  <form className="enq-form" onSubmit={handleSubmit}>
                    <input
                      name="Name"
                      required
                      autoComplete="off"
                      type="text"
                      maxLength="60"
                      pattern="[A-Za-z\s\-'’]+"
                      className="form-control"
                      placeholder="Name"
                    />
                    <div className="form-group contact_number" style={{ display: 'flex' }}>
                      <select
                        name="Country-code"
                        style={{ width: '80%', border: '0px solid', borderBottom: '1px solid' }}
                      >
                        <option value="IN +91">India (+91)</option>
                        <option value="AE +971">UAE (+971)</option>
                        <option value="US +1">USA (+1)</option>
                        <option value="UK +44">UK (+44)</option>
                        {/* Add more if needed */}
                      </select>
                      <input
                        type="number"
                        name="Number"
                        className="form-control"
                        required
                        placeholder="Mobile No."
                      />
                    </div>
                    <input
                      name="Email"
                      required
                      autoComplete="off"
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                    <input
                      type="hidden"
                      name="Project"
                      value="Riverview City Hornbill Heights"
                    />
                    <input type="hidden" name="Ip" />
                    <div className="consent">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="consentCheck-enqPopup"
                          required
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="consentCheck-enqPopup">
                          I consent to the use of my provided data in accordance with the{' '}
                          <a href="disclaimer.html" target="_self">
                            privacy policy
                          </a>
                          . I acknowledge that the project I am enquiring about has not yet received
                          RERA clearance.
                        </label>
                      </div>
                    </div>
                    <div className="btn-wrapper">
                      {/* ✅ Enabled submit button */}
                      <button type="submit" name="submit" id="enqPopupSumit" className="btn btn-dark btn-cta">
                        Express Your Interest
                      </button>
                    </div>
                  </form>
                </div>
                <div className="enq-popup-pj-highlights" id="enq-popup-pj-highlights-normal">
                  <div className="row row-cols-2 row-cols-md-3 g-2 pt-2 pb-3 align-content-center justify-content-center">
                    <div className="col">
                      <i className="ri-shield-check-line"></i> Available units
                    </div>
                    <div className="col">
                      <i className="ri-shield-check-line"></i> Payment plan
                    </div>
                    <div className="col">
                      <i className="ri-shield-check-line"></i> Floor plans
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Enquire Popup - E */}

        {/* Footer - S */}
        <footer>
          <section>
            <div className="row">
              <div className="col">
                <div className="d-block text-center">
                  <img
                    className="lazyload footer-project-logo"
                    src="assets/img/logo.jpg"
                    alt="Project Logo"
                  />
                </div>
                <center>
                  <div className="row m-auto">
                    <div className="col-md-12 col-lg-12 col-sm-12 pb-3">
                      <img src="assets/img/pro.webp" width="100" height="100" alt="RERA" />
                      <br />
                      <b>Project Rera :</b>
                      <br />
                      P52100053795
                    </div>
                  </div>
                </center>
                <p className="disclaimer mt-4">
                  Disclaimer: The content provided on this website is for information purposes only
                  and does not constitute an offer to avail any service. The prices mentioned are
                  subject to change without prior notice, and the availability of properties
                  mentioned is not guaranteed. The images displayed on the website are for
                  representation purposes only and may not reflect the actual properties accurately.
                  Please note that this is the official website of an authorized marketing partner.
                  We may share data with Real Estate Regulatory Authority (RERA) registered
                  brokers/companies for further processing as required. We may also send updates and
                  information to the mobile number or email ID registered with us. All rights
                  reserved. The content, design, and information on this website are protected by
                  copyright and other intellectual property rights. Any unauthorized use or
                  reproduction of the content may violate applicable laws. For accurate and
                  up-to-date information regarding services, pricing, availability, and any other
                  details, it is advisable to contact us directly through the provided contact
                  information on this website.
                </p>
                <div className="d-block text-center">
                  <a href="/disclaimer" className="footer-link">
                    Disclaimer & Privacy Policy
                  </a>
                  <br />
                  Managed By –{' '}
                  <a href="https://gkrtechnology.com/" target="_blank" rel="noreferrer">
                    <b>GKR Technology</b>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </footer>
      </div>
    </>
  );
}

export default App;