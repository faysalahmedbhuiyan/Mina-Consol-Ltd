import { useState } from 'react'

import founder1 from '../assets/founder1.jpg'
import founder2 from '../assets/founder2.jpg'
import founder3 from '../assets/founder3.jpg'
import founder4 from '../assets/founder4.png'

import logo from '../assets/logo.jpeg'
import KNUlogo3 from '../assets/KNUlogo3.png'

export default function About () {
  const [activeFounder, setActiveFounder] = useState(null)
  const whatsappNumber = '8801XXXXXXXXX'
  const founders = [
    {
      name: 'Fahmina Tasnim Khan Arpita',
      role: 'Chairperson & Director',
      img: founder1,
      details:
        'Leading the company with strategic vision, educational innovation, and international collaboration.'
    },

    {
      name: 'Afrahim Chowdhury',
      role: 'Managing Director (MD)',
      img: founder2,
      details:
        'Responsible for organizational management, operational leadership, and sustainable company growth.'
    },

    {
      name: 'Md Faysal Ahmed Bhuiyan',
      role: 'Chief Executive Officer (CEO)',
      img: founder3,
      details:
        'Managing international partnerships, consultancy strategy, and global educational expansion.'
    },

    {
      name: 'Rifat Jaman Emon',
      role: 'Chief Operating Officer (COO)',
      img: founder4,
      details:
        'Overseeing operations, student services, and smooth execution of consultancy activities.'
    }
  ]

  const values = [
    'Professional Guidance',
    'Global Opportunities',
    'Student Success',
    'Integrity & Trust',
    'International Collaboration',
    'Future Career Development'
  ]

  const process = [
    {
      title: 'Student Counseling',
      desc: 'We evaluate academic goals and guide students toward suitable destinations.'
    },

    {
      title: 'University Selection',
      desc: 'Helping students choose universities based on budget, ranking, and future opportunities.'
    },

    {
      title: 'Documentation',
      desc: 'Professional support for SOPs, documents, applications, and academic preparation.'
    },

    {
      title: 'Visa Processing',
      desc: 'Complete embassy preparation and visa documentation guidance.'
    }
  ]

  return (
    <>
      {/* HERO */}

      <section className='aboutHero'>
        <div className='heroOverlay'></div>

        <div className='container heroContent'>
          <span className='heroBadge'>
            Trusted International Education Consultancy
          </span>

          <h1>About Mina Consol Ltd.</h1>

          <p>
            Empowering students with professional guidance, global education
            opportunities, and successful international career pathways.
          </p>
        </div>
      </section>

      {/* ABOUT */}

      <section className='section aboutSection'>
        <div className='container'>
          <div className='row align-items-center g-5'>
            <div className='col-lg-6'>
              <div className='aboutImageBox'>
                <img src={logo} alt='' className='aboutMainImg' />
              </div>
            </div>

            <div className='col-lg-6'>
              <span className='miniTitle'>WHO WE ARE</span>

              <h2 className='sectionTitle darkText'>
                Building Global Educational Futures
              </h2>

              <p className='aboutText'>
                MINA CONSOL LIMITED is a modern international student
                consultancy organization dedicated to helping students achieve
                their dreams of studying abroad through professional guidance
                and trusted support.
              </p>

              <p className='aboutText'>
                From university applications and SOP preparation to visa
                processing and pre-departure assistance, we provide complete
                consultancy solutions with integrity, professionalism, and
                student-focused commitment.
              </p>

              <div className='aboutStats'>
                <div className='aboutStatCard'>
                  <h3>20+</h3>

                  <span>Students Assisted</span>
                </div>

                <div className='aboutStatCard'>
                  <h3>Global</h3>

                  <span>University Partnerships</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}

      <section className='section darkSection'>
        <div className='container'>
          <div className='row g-4'>
            <div className='col-lg-6'>
              <div className='glassCard'>
                <span className='cardTag'>OUR MISSION</span>

                <h2>Helping Students Achieve International Success</h2>

                <p>
                  Our mission is to provide professional educational consultancy
                  services that empower students to pursue higher education
                  opportunities globally with confidence and preparation.
                </p>
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='glassCard'>
                <span className='cardTag'>OUR VISION</span>

                <h2>Becoming Bangladesh’s Trusted Consultancy Brand</h2>

                <p>
                  We aim to become one of the most respected international
                  consultancy organizations known for professionalism,
                  transparency, and long-term student success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}

      <section className='section'>
        <div className='container'>
          <div className='text-center mb-5'>
            <span className='miniTitle'>
              OUR CORE VALUES
              <br />
              <br /> Values That Define Our Work
            </span>
          </div>
          <div className='row g-4'>
            {values.map((item, index) => (
              <div className='col-lg-4 col-md-6' key={index}>
                <div className='valueCard'>
                  <div className='valueNumber'>0{index + 1}</div>

                  <h4>{item}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}

      <section className='section processSection'>
        <div className='container'>
          <div className='text-center mb-5'>
            <span className='miniTitle'>HOW WE WORK</span>

            <h2 className='sectionTitle lightText'>Our Consultancy Process</h2>
          </div>

          <div className='row g-4'>
            {process.map((item, index) => (
              <div className='col-lg-3 col-md-6' key={index}>
                <div className='processCard'>
                  <span>0{index + 1}</span>

                  <h4>{item.title}</h4>

                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}

      <section className='section founderSection'>
        <div className='container'>
          <div className='text-center mb-5'>
            <span className='miniTitle'>OUR LEADERSHIP</span>

            <h2 className='sectionTitle darkText'>Meet Our Leadership Team</h2>

            <p className='founderSubtitle'>
              Dedicated professionals committed to guiding students toward
              global educational opportunities and long-term success.
            </p>
          </div>

          <div className='row g-4'>
            {founders.map((item, index) => (
              <div className='col-lg-3 col-md-6' key={index}>
                <div>
                  <div
                    className='teamCard'
                    onClick={() =>
                      setActiveFounder(activeFounder === index ? null : index)
                    }
                  >
                    <div className='teamImgWrap'>
                      <img src={item.img} alt='' className='teamImg' />
                    </div>

                    <div className='teamContent'>
                      <h4>{item.name}</h4>

                      <span>{item.role}</span>
                    </div>
                  </div>

                  {activeFounder === index && (
                    <div className='founderDetails'>
                      <h5>{item.name}</h5>

                      <small>{item.role}</small>

                      <p>{item.details}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNIVERSITY */}

      <section className='section universitySection'>
        <div className='container'>
          <div className='text-center mb-5'>
            <span className='miniTitle'>PARTNER UNIVERSITIES</span>

            <h2 className='sectionTitle darkText'>
              International Academic Partners
            </h2>
          </div>

          <div className='row g-4'>
            {[logo, KNUlogo3, KNUlogo3].map((img, index) => (
              <div className='col-lg-4 col-md-6' key={index}>
                <div className='partnerCard'>
                  <img src={img} alt='' />

                  <h4>
                    {index === 0
                      ? 'Kyungpook National University'
                      : index === 1
                      ? 'Global Partner University'
                      : 'International Education Partner'}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section className='section contactSection'>
        <div className='container'>
          <div className='text-center mb-5'>
            <span className='miniTitle'>CONTACT INFORMATION</span>

            <h2 className='sectionTitle darkText'>Get In Touch With Us</h2>

            <p className='contactSubtitle'>
              Feel free to contact our consultancy team for admission guidance,
              visa support, and international study opportunities.
            </p>
          </div>

          <div className='row g-4'>
            <div className='col-lg-4'>
              <div className='contactCard'>
                <div className='contactIcon'>📧</div>

                <h4>Email Address</h4>

                <p>minaconsol.official@gmail.com</p>
              </div>
            </div>

            <div className='col-lg-4'>
              <div className='contactCard'>
                <div className='contactIcon'>📞</div>

                <h4>Phone Number</h4>

                <p>+8801XXXXXXXXX</p>
              </div>
            </div>

            <div className='col-lg-4'>
              <div className='contactCard'>
                <div className='contactIcon'>📍</div>

                <h4>Office Address</h4>

                <p>Bangladesh</p>
              </div>
            </div>
          </div>

          {/* MAP */}

          <div className='mapSection'>
            <h3>Our Location</h3>

            <div className='mapBox'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.118938680051!2d90.41273387596944!3d23.735730789235955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85eff2a80b3%3A0xc3e4c1c63ff6150c!2sPaltan%20China%20Town!5e0!3m2!1sen!2sbd!4v1780050000000!5m2!1sen!2sbd'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className='ctaSection'>
        <div className='container text-center'>
          <span className='ctaTag'>Start Your Future Today</span>

          <h1>Ready To Study Abroad?</h1>

          <p>
            Connect with our professional consultancy team and begin your
            international education journey with confidence.
          </p>

          <button className='ctaBtn'>
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hello%20Mina%20Consol%20Ltd,%20I%20would%20like%20to%20book%20a%20free%20consultation.`}
              target='_blank'
              rel='noopener noreferrer'
              className='ctaBtn'
            >
              Book Free Consultation
            </a>
          </button>
        </div>
      </section>

      <style>{`
      :root{
  --warm-gradient:
    radial-gradient(
      circle at 20% 30%,
      rgba(255, 214, 170, 0.95),
      transparent 40%
    ),
    radial-gradient(
      circle at 80% 20%,
      rgba(222, 120, 255, 0.45),
      transparent 35%
    ),
    radial-gradient(
      circle at 50% 70%,
      rgba(255, 120, 120, 0.35),
      transparent 40%
    ),
    linear-gradient(
      135deg,
      #c65a00 0%,
      #e57a1f 25%,
      #f3b277 50%,
      #d878b7 75%,
      #6e003a 100%
    );
}

*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
font-family:'Segoe UI',sans-serif;
background:#f8fafc;
overflow-x:hidden;
}

/* HERO */

.aboutHero{
position:relative;
height:95vh;

background:
linear-gradient(rgba(2,6,23,.82),rgba(15,23,42,.88)),
url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')
center/cover no-repeat;

display:flex;
align-items:center;
justify-content:center;

overflow:hidden;
}

.heroOverlay{
position:absolute;
inset:0;

background:
radial-gradient(circle at top right,
rgba(250,204,21,.18),
transparent 35%);
}

.heroContent{
position:relative;
z-index:2;
max-width:850px;
color:white;
}

.heroBadge{
display:inline-block;

padding:12px 24px;

background:rgba(255,255,255,.08);

border:1px solid rgba(255,255,255,.12);

border-radius:50px;

backdrop-filter:blur(10px);

font-size:14px;
font-weight:700;
letter-spacing:1px;

margin-bottom:25px;

color:#facc15;
}

.aboutHero h1{
font-size:78px;
font-weight:900;
line-height:1.1;
margin-bottom:25px;
}

.aboutHero p{
font-size:21px;
line-height:1.9;
color:#e2e8f0;
max-width:720px;
}

/* SECTION */

.section{
padding:110px 0;
}

.sectionTitle{
font-size:52px;
font-weight:800;
line-height:1.2;
}

.darkText{
color:#0f172a;
}

.lightText{
color:white;
}

.miniTitle{
display:inline-block;

font-size:14px;
font-weight:700;
letter-spacing:2px;

color: #20104e;

margin-bottom:20px;
}

/* ABOUT */

.aboutSection{
background:var(--warm-gradient);
}

.aboutImageBox{
background:white;

padding:20px;

border-radius:35px;

box-shadow:
0 20px 45px rgba(15,23,42,.08);
}

.aboutMainImg{
width:100%;
height:600px;

object-fit:contain;

border-radius:
120px 30px
120px 30px;

background:white;
}

.aboutText{
font-size:18px;
line-height:2;
color:#475569;
margin-bottom:20px;
}

.aboutStats{
display:flex;
gap:20px;
margin-top:40px;
flex-wrap:wrap;
}

.aboutStatCard{
flex:1;

min-width:220px;

padding:30px;

border-radius:25px;

background:#f8fafc;

box-shadow:
0 10px 25px rgba(15,23,42,.05);
}

.aboutStatCard h3{
font-size:42px;
font-weight:800;
color:#f59e0b;
margin-bottom:10px;
}

.aboutStatCard span{
font-weight:600;
color:#334155;
}

/* DARK SECTION */

.darkSection{
background:var(--warm-gradient);
}

.glassCard{
height:100%;

padding:45px;

border-radius:35px;

background:
rgba(255,255,255,.05);

backdrop-filter:blur(16px);

border:1px solid rgba(255,255,255,.08);

box-shadow:
0 20px 45px rgba(0,0,0,.25);
}

.cardTag{
display:inline-block;

padding:10px 18px;

border-radius:50px;

background:rgba(250,204,21,.12);

color: #520ec7;

font-size:13px;
font-weight:700;
letter-spacing:1px;

margin-bottom:25px;
}

.glassCard h2{
font-size:34px;
font-weight:800;
color:white;
line-height:1.4;
margin-bottom:20px;
}

.glassCard p{
font-size:17px;
line-height:2;
color: #0f0f0f;
}

/* VALUES */

.valueCard{
background:white;

padding:45px 35px;

border-radius:30px;

height:100%;

box-shadow:
0 15px 35px rgba(15,23,42,.08);

transition:.45s;

border:1px solid rgba(15,23,42,.05);
}

.valueCard:hover{
transform:translateY(-12px);
}

.valueNumber{
font-size:60px;
font-weight:900;
color:#facc15;
margin-bottom:20px;
}

.valueCard h4{
font-size:24px;
font-weight:700;
color:#0f172a;
line-height:1.6;
}


/* PROCESS */

.processSection{
background:var(--warm-gradient);
}

.processCard{
height:100%;

padding:40px 30px;

border-radius:30px;

background:
rgba(255,255,255,.05);

border:1px solid rgba(255,255,255,.08);

transition:.45s;

box-shadow:
0 20px 40px rgba(0,0,0,.25);
}

.processCard:hover{
transform:translateY(-12px);
border-color:#facc15;
}

.processCard span{
font-size:55px;
font-weight:900;
color: #5684e8;
display:block;
margin-bottom:20px;
}

.processCard h4{
font-size:25px;
font-weight:700;
color: #000000;
margin-bottom:18px;
}

.processCard p{
font-size:16px;
line-height:1.9;
color: #0a0202;
}

/* FOUNDERS */

.founderSection{
background:var(--warm-gradient);
}

.founderSubtitle{
max-width:720px;
margin:auto;

font-size:18px;
line-height:1.9;
color:#475569;
}

.teamCard{
background:white;

border-radius:35px;

overflow:hidden;

cursor:pointer;

height:100%;

box-shadow:
0 20px 45px rgba(15,23,42,.08);

transition:.45s;
}

.teamCard:hover{
transform:translateY(-12px);
}

.teamImgWrap{
padding:22px;
padding-bottom:10px;
}

.teamImg{
width:100%;
height:360px;

object-fit:cover;
object-position:top;

border-radius:
110px 25px
110px 25px;

transition:.45s;

filter:grayscale(100%);
}

.teamCard:hover .teamImg{
filter:grayscale(0%);
transform:scale(1.03);
}

.teamContent{
padding:15px 25px 35px;
text-align:center;
}

.teamContent h4{
font-size:24px;
font-weight:800;
line-height:1.5;
color:#0f172a;
margin-bottom:10px;
}

.teamContent span{
font-size:14px;
font-weight:700;
color:#f59e0b;
line-height:1.7;
}

/* DETAILS */

.founderDetails{
margin-top:18px;

padding:28px;

border-radius:25px;

background:
linear-gradient(145deg,#111827,#0f172a);

animation:fade .4s;

box-shadow:
0 15px 35px rgba(0,0,0,.2);
}

.founderDetails h5{
font-size:24px;
font-weight:800;
color:white;
margin-bottom:8px;
}

.founderDetails small{
display:block;

color:#facc15;

font-size:14px;
font-weight:700;

margin-bottom:16px;
}

.founderDetails p{
font-size:16px;
line-height:1.9;
color:#e2e8f0;
margin:0;
}

/* UNIVERSITY */

.universitySection{
background:var(--warm-gradient);
}

.partnerCard{
background:#f8fafc;

padding:45px 30px;

border-radius:30px;

text-align:center;

height:100%;

box-shadow:
0 15px 35px rgba(15,23,42,.06);

transition:.45s;
}

.partnerCard:hover{
transform:translateY(-10px);
}

.partnerCard img{
width:100%;
max-height:180px;

object-fit:contain;

margin-bottom:25px;
}

.partnerCard h4{
font-size:24px;
font-weight:700;
line-height:1.5;
color:#0f172a;
}



/* CONTACT */

.contactSection{
background:var(--warm-gradient);
}

.contactSubtitle{
max-width:720px;
margin:auto;

font-size:18px;
line-height:1.9;
color:#475569;
}

.contactCard{
height:100%;

padding:45px 30px;

background:#f8fafc;

border-radius:30px;

text-align:center;

box-shadow:
0 15px 35px rgba(15,23,42,.06);

transition:.45s;
}

.contactCard:hover{
transform:translateY(-10px);
}

.contactIcon{
font-size:55px;
margin-bottom:20px;
}

.contactCard h4{
font-size:24px;
font-weight:800;
color:#0f172a;
margin-bottom:15px;
}

.contactCard p{
font-size:17px;
color:#475569;
line-height:1.8;
word-break:break-word;
}

.mapSection{
margin-top:70px;
}

.mapSection h3{
font-size:35px;
font-weight:800;
color:#0f172a;
margin-bottom:25px;
text-align:center;
}

.mapBox{
height:450px;

border-radius:35px;

overflow:hidden;

background:#e2e8f0;

display:flex;
justify-content:center;
align-items:center;

font-size:22px;
font-weight:700;
color:#475569;

box-shadow:
0 20px 45px rgba(15,23,42,.08);
}

/* CTA */

.ctaSection{
padding:120px 20px;

background:var(--warm-gradient);

text-align:center;
}

.ctaTag{
display:inline-block;

padding:10px 20px;

background:rgba(255,255,255,.08);

border-radius:50px;

font-size:13px;
font-weight:700;
letter-spacing:1px;

color: #300af1;

margin-bottom:25px;
}

.ctaSection h1{
font-size:62px;
font-weight:900;
color:white;
margin-bottom:25px;
}

.ctaSection p{
font-size:19px;
line-height:1.9;
color:#cbd5e1;
max-width:750px;
margin:auto;
}

.ctaBtn{
margin-top:40px;

padding:18px 42px;

border:none;

border-radius:50px;

background:
linear-gradient(135deg,#facc15,#f59e0b);

font-size:17px;
font-weight:700;

transition:.4s;
}

.ctaBtn:hover{
transform:translateY(-5px);
}

/* ANIMATION */

@keyframes fade{

from{
opacity:0;
transform:translateY(15px);
}

to{
opacity:1;
transform:none;
}

}

/* TABLET */

@media(max-width:992px){

.aboutHero h1{
font-size:58px;
}

.sectionTitle{
font-size:42px;
}

.teamImg{
height:320px;
}

.aboutMainImg{
height:450px;
}

}

/* MOBILE */

@media(max-width:768px){

.aboutHero{
height:auto;
padding:140px 0 110px;
}

.aboutHero h1{
font-size:42px;
}

.aboutHero p{
font-size:17px;
}

.section{
padding:80px 0;
}

.sectionTitle{
font-size:34px;
}

.aboutText,
.processCard p,
.glassCard p,
.founderSubtitle,
.contactSubtitle{
font-size:16px;
line-height:1.9;
}

.teamImg{
height:420px;
object-position:top;
}

.aboutMainImg{
height:400px;
}

.mapBox{
height:320px;
}

.ctaSection h1{
font-size:40px;
}

.ctaSection p{
font-size:17px;
}

}

/* SMALL MOBILE */

@media(max-width:576px){

.aboutHero h1{
font-size:34px;
}

.heroBadge{
font-size:12px;
}

.sectionTitle{
font-size:30px;
}

.teamImg{
height:360px;

border-radius:
80px 20px
80px 20px;
}

.aboutMainImg{
height:320px;

border-radius:
80px 20px
80px 20px;
}

.glassCard,
.valueCard,
.partnerCard,
.processCard,
.contactCard{
padding:30px 25px;
}

.mapBox{
height:250px;
font-size:18px;
}

.ctaSection{
padding:90px 20px;
}

.ctaSection h1{
font-size:32px;
}

}
.darkText{
color:white;
}

.aboutText,
.founderSubtitle,
.contactSubtitle,
.contactCard p,
.partnerCard h4,
.valueCard h4{
color: #000000;
}

`}</style>
    </>
  )
}
