import React from 'react'
// import Banner from '../images/news banner1.jpg'
// import Banner2 from '../images/newsbanner2.webp'
// import Banner3 from '../images/newsbanner3.jpg'


function Home() {
    return (
        <t>
            {/* <div className="container-fluid bg-danger marquee2">
                <marquee className='marquee'><h4><b>TODAY`S BREAKING NEWS : Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</b></h4></marquee>
            </div> */}
            {/* <div className=" carousel">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Banner} className="d-block " alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={Banner2} className="d-block " alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={Banner3} className="d-block " alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div> */}
            <div className='redline container text-center  my-5'>
                <h1 >TODAY`S LATEST NEWS</h1>

            </div>
            <div className=" container my-5">
                <div className="row row-cols-1 row-cols-md-2 ">
                    <div className="col col-md-8">


                        <div className="card mb-3">
                            <img src="https://demo.tagdiv.com/newsmag_voice/wp-content/uploads/2017/06/45-681x454.jpg" className="card-img-top card-imgx" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">CAREERS</h5>
                                <p className="card-text"><h1>The Silent War of African American Women Starting their Careers</h1></p>
                                <p className="card-text"><small className="text-muted">Mark Webber</small></p>
                            </div>

                        </div>

                        <div className="card mb-3">
                            <img src="https://demo.tagdiv.com/newsmag_voice/wp-content/uploads/2017/06/44-681x505.jpg" className="card-img-top card-imgx" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">CAREERS</h5>
                                <p className="card-text"><h1>The First Black Musician Still Remains Just a Forgotten Pioneer</h1></p>
                                <p className="card-text"><small className="text-muted">Mark Webber</small></p>
                            </div>
                        </div>

                    </div>

                    <div className="col col-md-4 ">
                        <h5 className='redline2 text-center'>MUST READ</h5>

                        <div className="card mb-3 my-4" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://demo.tagdiv.com/newsmag_voice/wp-content/uploads/2017/06/50-100x75.jpg" className="img-fluid rounded-start img-cover " alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <p className="card-text m-0">Law School Created a Criminal Justice Class Based on “The Wire”</p>
                                        <p className="card-text m-0"><small className="text-muted">EDUCATION</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card mb-3 my-4" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://demo.tagdiv.com/newsmag_voice/wp-content/uploads/2017/06/49-100x75.jpg" className="img-fluid rounded-start img-cover " alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <p className="card-text m-0">Authorities Seeking Expanded Education for Incarcerated Youth</p>
                                        <p className="card-text m-0"><small className="text-muted">EDUCATION</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card mb-3 my-4" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://demo.tagdiv.com/newsmag_voice/wp-content/uploads/2017/06/48-100x75.jpg" className="img-fluid rounded-start img-cover " alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <p className="card-text m-0">How these Students Called Out their School’s Racism Ugly Policy</p>
                                        <p className="card-text m-0"><small className="text-muted">EDUCATION</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card mb-3 my-4" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://demo.tagdiv.com/newsmag_voice/wp-content/uploads/2017/06/47-100x75.jpg" className="img-fluid rounded-start img-cover " alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <p className="card-text m-0">This College Student’s Martin – Themed Campaign Video is Everything</p>
                                        <p className="card-text m-0"><small className="text-muted">EDUCATION</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card mb-3 my-4" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://demo.tagdiv.com/newsmag_voice/wp-content/uploads/2017/06/46-100x75.jpg" className="img-fluid rounded-start img-cover " alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <p className="card-text m-0">Students from Predominantly Black School Applied to College</p>
                                        <p className="card-text m-0"><small className="text-muted">EDUCATION</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3 my-4" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://demo.tagdiv.com/newsmag_voice/wp-content/uploads/2017/06/46-100x75.jpg" className="img-fluid rounded-start img-cover " alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <p className="card-text m-0">Students from Predominantly Black School Applied to College</p>
                                        <p className="card-text m-0"><small className="text-muted">EDUCATION</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3 my-4" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://demo.tagdiv.com/newsmag_voice/wp-content/uploads/2017/06/46-100x75.jpg" className="img-fluid rounded-start img-cover " alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <p className="card-text m-0">Students from Predominantly Black School Applied to College</p>
                                        <p className="card-text m-0"><small className="text-muted">EDUCATION</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3 my-4" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://demo.tagdiv.com/newsmag_voice/wp-content/uploads/2017/06/46-100x75.jpg" className="img-fluid rounded-start img-cover " alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <p className="card-text m-0">Students from Predominantly Black School Applied to College</p>
                                        <p className="card-text m-0"><small className="text-muted">EDUCATION</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3 my-4" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://demo.tagdiv.com/newsmag_voice/wp-content/uploads/2017/06/46-100x75.jpg" className="img-fluid rounded-start img-cover " alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <p className="card-text m-0">Students from Predominantly Black School Applied to College</p>
                                        <p className="card-text m-0"><small className="text-muted">EDUCATION</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
                <div className='container  my-5'>
                    <h1 className='redline3 text-center'>HOT THIS WEEK</h1>
                </div>
                <div className="row row-cols-1 row-cols-md-2">
                    <div className='col col-md-4'>
                        <div className="card my-4">
                            <img src="https://demo.tagdiv.com/newsmag_voice/wp-content/uploads/2017/06/30-300x194.jpg" className="card-img-top img-cover" alt="..." />
                            <div className="card-body">
                                <h5>HISTORY</h5>
                                <p className="card-text">Young Architects Fight to Save Historic Building from Developers</p>
                                <h4 className='my-3'>Mark Webber</h4>

                            </div>
                        </div>
                    </div>

                    <div className='col col-md-4'>
                        <div className="card my-4">
                            <img src="https://demo.tagdiv.com/newsmag_voice/wp-content/uploads/2017/06/29-300x194.jpg" className="card-img-top img-cover" alt="..." />
                            <div className="card-body">
                                <h6>HISTORY</h6>

                                <p className="card-text">This Young Man Will Be Sworn-In as Trump’s Only Black Choice</p>

                                <h4 className='my-3'>Mark Webber</h4>


                            </div>
                        </div>
                    </div>

                    <div className='col col-md-4'>
                        <div className="card my-4">
                            <img src="https://demo.tagdiv.com/newsmag_voice/wp-content/uploads/2017/06/28-300x194.jpg" className="card-img-top img-cover" alt="..." />
                            <div className="card-body">
                                <h5>HISTORY</h5>

                                <p className="card-text">Vast New Online Archive of African American History Materials</p>
                                <h4 className='my-3'>Mark Webber</h4>

                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div className='container-fluid footer'>
                <div className='text'>

                    <div className='text-center'>Fake News is your news, entertainment, music and fashion website. We provide you with the latest breaking news and videos straight from the</div>
                    <div className='text-center'>entertainment industry. Stay close to see what's new and get ready to be amazed by the best quality information available.</div>
                    <div className='text-center my-3'>Contact us: contact@fake_news.co</div>
                </div>


            </div>

        </t>
    )
}

export default Home
