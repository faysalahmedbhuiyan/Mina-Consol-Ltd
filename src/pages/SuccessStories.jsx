import { useState } from 'react'
import SafeImage from '../components/SafeImage'
import founder3 from '../assets/founder3.jpg'

import ukImg from '../assets/UK.jpeg'
import usaImg from '../assets/USA.jpeg'
import koreaImg from '../assets/south korea.jpeg'
import russiaImg from '../assets/Russia.jpeg'

export default function SuccessStories () {
  const [selectedStory, setSelectedStory] = useState(null)

  // ==================================
  // STUDENT SUCCESS STORIES
  // ==================================

  const studentStories = [
    {
      id: 1,
      image: founder3,

      name: 'Ahmed Hasan',

      country: 'United Kingdom',

      university: 'University of Hertfordshire',

      course: 'Foundation Program',

      visa: 'Approved',

      year: '2026',

      description:
        'Successfully received UK student visa with scholarship support.',

      details: {
        gpa: '5.00',
        ielts: '6.5',
        scholarship: '£3,000 Scholarship',
        processing: '2 Months',
        interview: 'Successfully completed university interview',
        extra:
          'Received complete SOP, university application, visa processing and accommodation support.'
      }
    },

    {
      id: 2,

      image: founder3,

      name: 'MD FAYSAL AHMED BHUIYAN',

      country: 'South Korea',

      university: 'Kyungdong University',

      course: 'Bachelor Degree Program',

      visa: 'Approved',

      year: '2022',

      description:
        'Successfully enrolled in degree pathway and Korean language preparation.',

      details: {
        gpa: '5.00',
        ielts: '7.0',
        scholarship: 'Degree Program Discount',
        processing: '120 Days',
        interview: 'Online interview completed successfully',
        extra:
          'Currently pursuing academic progression opportunities and international career development.'
      }
    },

    {
      id: 3,

      image: founder3,

      name: 'Fahim Rahman',

      country: 'USA',

      university: 'University of South Alabama',

      course: 'Bachelor Degree',

      visa: 'Approved',

      year: '2026',

      description:
        'Received admission and scholarship opportunity in the United States.',

      details: {
        gpa: '5.00',
        ielts: '7.0',
        scholarship: '$8,000 Scholarship',
        processing: '3 Months',
        interview: 'Visa interview successfully completed',
        extra:
          'Received complete admission support, DS-160 guidance and embassy preparation.'
      }
    }
  ]

  // ==================================
  // PARTNER UNIVERSITIES
  // ==================================

  const universityStories = [
    {
      id: 1,

      image: ukImg,

      university: 'University of Hertfordshire',

      country: 'United Kingdom',

      students: '120+ Students Sent',

      programs: 'Foundation, Undergraduate, Masters',

      ranking: 'Top Modern UK University',

      description:
        'One of our most successful partner universities in the United Kingdom.',

      details: {
        scholarship: 'Up to £5,000 Scholarship',
        acceptance: 'High Acceptance Rate',
        work: '20 Hours Part Time Work',
        campus: 'Modern International Campus',
        extra: 'Excellent student support and post-study work opportunities.'
      }
    },

    {
      id: 2,

      image: koreaImg,

      university: 'Kyungdong University',

      country: 'South Korea',

      students: '80+ Students Sent',

      programs: 'Language & Degree Programs',

      ranking: 'Popular Korean Destination',

      description:
        'Leading destination for Korean language and degree studies.',

      details: {
        scholarship: 'Tuition Fee Reduction Available',
        acceptance: 'Fast Admission Process',
        work: 'Student Work Opportunities',
        campus: 'International Student Friendly',
        extra: 'Pathway available from language programs into degree programs.'
      }
    },

    {
      id: 3,

      image: russiaImg,

      university: 'Kazan Federal University',

      country: 'Russia',

      students: '60+ Students Sent',

      programs: 'Medical & Engineering',

      ranking: 'Globally Recognized University',

      description:
        'Popular destination for affordable medical and engineering education.',

      details: {
        scholarship: 'Affordable Tuition Structure',
        acceptance: 'Medical Admission Support',
        work: 'Student Support Services',
        campus: 'Modern Research Facilities',
        extra: 'English medium programs available for international students.'
      }
    },

    {
      id: 4,

      image: usaImg,

      university: 'University of South Alabama',

      country: 'USA',

      students: '50+ Students Sent',

      programs: 'Bachelor, Masters',

      ranking: 'Top Regional University',

      description:
        'Excellent academic environment and scholarship opportunities.',

      details: {
        scholarship: '$8,000 Scholarship',
        acceptance: 'International Friendly',
        work: 'On Campus Employment',
        campus: 'Modern Learning Facilities',
        extra: 'Strong academic and career placement opportunities.'
      }
    }
  ]

  // ==================================
  // TESTIMONIALS
  // ==================================

  const testimonials = [
    {
      name: 'Rakib Hasan',
      text: 'The entire admission and visa process was handled professionally. Highly recommended.'
    },

    {
      name: 'Sadia Islam',
      text: 'From university selection to visa approval, everything was smooth and transparent.'
    },

    {
      name: 'Mahin Ahmed',
      text: 'Excellent consultancy support and very responsive throughout the journey.'
    }
  ]
  return (
    <div className='successPage'>
      {/* HERO SECTION */}

      <section className='storyHero'>
        <div className='heroBlur heroBlur1'></div>
        <div className='heroBlur heroBlur2'></div>

        <div className='container heroContent'>
          <span className='heroTag'>SUCCESS STORIES</span>

          <h1>
            Real Students.
            <br />
            Real Dreams.
            <br />
            Real Success.
          </h1>

          <p>
            Explore successful student journeys, university partnerships,
            scholarship achievements and global education opportunities through
            Mina Consol Ltd.
          </p>

          <div className='heroButtons'>
            <button className='primaryBtn'>Explore Success Stories</button>

            <button className='secondaryBtn'>Partner Universities</button>
          </div>
        </div>
      </section>

      {/* STATISTICS */}

      <section className='statsSection'>
        <div className='container'>
          <div className='statsGrid'>
            <div className='statCard'>
              <h2>5+</h2>
              <p>Successful Students</p>
            </div>

            <div className='statCard'>
              <h2>3+</h2>
              <p>Partner Universities</p>
            </div>

            <div className='statCard'>
              <h2>3+</h2>
              <p>Destination Countries</p>
            </div>

            <div className='statCard'>
              <h2>95%</h2>
              <p>Visa Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* STUDENT SUCCESS STORIES */}

      <section className='storySection'>
        <div className='container'>
          <div className='sectionHeader'>
            <span className='miniTitle'>OUR STUDENTS</span>

            <h2 className='sectionTitle'>Student Success Stories</h2>

            <p className='sectionText'>
              Every successful admission reflects dedication, preparation and
              expert guidance. Here are some of our students who achieved their
              study abroad dreams.
            </p>
          </div>

          <div className='row g-4'>
            {studentStories.map(story => (
              <div className='col-lg-4 col-md-6' key={story.id}>
                <div className='storyCard'>
                  <div className='storyImage'>
                    <SafeImage
                      src={story.image}
                      alt={story.name}
                      fallbackText={story.name}
                    />
                  </div>

                  <div className='storyBody'>
                    <div className='storyTop'>
                      <span className='countryBadge'>{story.country}</span>

                      <span className='visaBadge'>{story.visa}</span>
                    </div>

                    <h3>{story.name}</h3>

                    <h5>{story.university}</h5>

                    <p>{story.description}</p>

                    <div className='storyInfo'>
                      <div>
                        <span>Course</span>

                        <strong>{story.course}</strong>
                      </div>

                      <div>
                        <span>Year</span>

                        <strong>{story.year}</strong>
                      </div>
                    </div>

                    <button
                      className='detailsBtn'
                      onClick={() => setSelectedStory(story)}
                    >
                      View Full Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* PARTNER UNIVERSITIES */}

      <section className='universitySection'>
        <div className='container'>
          <div className='sectionHeader'>
            <span className='miniTitle'>OUR UNIVERSITIES</span>

            <h2 className='sectionTitle'>Global Partner Universities</h2>

            <p className='sectionText'>
              We work with trusted universities across the United Kingdom,
              United States, South Korea and Russia to provide students with
              quality education opportunities.
            </p>
          </div>

          <div className='row g-4'>
            {universityStories.map(uni => (
              <div className='col-lg-3 col-md-6' key={uni.id}>
                <div className='uniCard'>
                  <div className='uniImage'>
                    <SafeImage
                      src={uni.image}
                      alt={uni.university}
                      fallbackText={uni.university}
                    />
                  </div>

                  <div className='uniBody'>
                    <span className='countryBadge'>{uni.country}</span>

                    <h3>{uni.university}</h3>

                    <p>{uni.description}</p>

                    <div className='uniInfo'>
                      <div>
                        <span>Programs</span>

                        <strong>{uni.programs}</strong>
                      </div>

                      <div>
                        <span>Students</span>

                        <strong>{uni.students}</strong>
                      </div>
                    </div>

                    <button
                      className='detailsBtn'
                      onClick={() => setSelectedStory(uni)}
                    >
                      University Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}

      <section className='testimonialSection'>
        <div className='container'>
          <div className='sectionHeader'>
            <span className='miniTitle'>TESTIMONIALS</span>

            <h2 className='sectionTitle'>What Students Say</h2>

            <p className='sectionText'>
              Feedback from students who successfully started their
              international education journey with our support.
            </p>
          </div>

          <div className='row g-4'>
            {testimonials.map((item, index) => (
              <div className='col-lg-4' key={index}>
                <div className='testimonialCard'>
                  <div className='quoteIcon'>"</div>

                  <p>{item.text}</p>

                  <h4>{item.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}

      {selectedStory && (
        <div className='customModal' onClick={() => setSelectedStory(null)}>
          <div className='modalCard' onClick={e => e.stopPropagation()}>
            <button className='closeBtn' onClick={() => setSelectedStory(null)}>
              ×
            </button>

            <SafeImage
              src={selectedStory.image}
              alt={selectedStory.name || selectedStory.university}
              className='modalImage'
              fallbackText={selectedStory.name || selectedStory.university}
            />

            <div className='modalContent'>
              <h2>{selectedStory.name || selectedStory.university}</h2>

              <p className='modalSub'>{selectedStory.country}</p>

              <div className='modalGrid'>
                {selectedStory.details &&
                  Object.entries(selectedStory.details).map(([key, value]) => (
                    <div className='modalInfoBox' key={key}>
                      <h5>{key}</h5>

                      <p>{value}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STYLE START */}
      <style>{`
          *{
margin:0;
padding:0;
box-sizing:border-box;
}

.successPage{
overflow-x:hidden;
min-height:100vh;

background:
radial-gradient(
circle at top left,
rgba(219,234,254,.9),
transparent 35%
),

radial-gradient(
circle at top right,
rgba(252,231,243,.9),
transparent 40%
),

radial-gradient(
circle at bottom left,
rgba(253,242,248,.8),
transparent 40%
),

linear-gradient(
135deg,
#f8fbff 0%,
#fff7fb 45%,
#fdfdff 100%
);
}

/* HERO */

.storyHero{
position:relative;

padding:140px 20px;

overflow:hidden;
}

.heroContent{
position:relative;
z-index:5;

max-width:900px;
margin:auto;
text-align:center;
}

.heroBlur{
position:absolute;
border-radius:50%;
filter:blur(120px);
}

.heroBlur1{
width:450px;
height:450px;

background:#bfdbfe;

top:-150px;
right:-100px;
}

.heroBlur2{
width:400px;
height:400px;

background:#fbcfe8;

bottom:-150px;
left:-100px;
}

.heroTag{
display:inline-block;

padding:10px 24px;

border-radius:50px;

background:rgba(255,255,255,.75);

backdrop-filter:blur(12px);

font-size:13px;
font-weight:800;
letter-spacing:2px;

color:#2563eb;

margin-bottom:30px;
}

.storyHero h1{
font-size:72px;
font-weight:900;
line-height:1.05;

color:#0f172a;

margin-bottom:30px;
}

.storyHero p{
font-size:20px;
line-height:1.9;

max-width:760px;
margin:auto;

color:#475569;
}

.heroButtons{
margin-top:40px;

display:flex;
justify-content:center;
gap:18px;
flex-wrap:wrap;
}

.primaryBtn{
border:none;

padding:16px 34px;

border-radius:16px;

background:
linear-gradient(
135deg,
#2563eb,
#4f46e5
);

color:white;

font-weight:700;
}

.secondaryBtn{
border:none;

padding:16px 34px;

border-radius:16px;

background:white;

font-weight:700;

color:#0f172a;

box-shadow:
0 10px 25px rgba(15,23,42,.08);
}

/* SECTION */

.storySection,
.universitySection,
.testimonialSection{
padding:100px 0;
}

.sectionHeader{
text-align:center;
max-width:850px;
margin:auto auto 60px;
}

.miniTitle{
display:inline-block;

font-size:13px;
font-weight:800;

letter-spacing:2px;

color:#2563eb;

margin-bottom:18px;
}

.sectionTitle{
font-size:52px;
font-weight:900;

color:#0f172a;

margin-bottom:20px;
}

.sectionText{
font-size:18px;
line-height:1.8;

color:#64748b;
}

/* CARDS */

.storyCard,
.uniCard{
height:100%;

background:
rgba(255,255,255,.8);

backdrop-filter:blur(20px);

border-radius:32px;

overflow:hidden;

border:1px solid rgba(255,255,255,.6);

box-shadow:
0 20px 45px rgba(15,23,42,.08);

transition:.4s;
}

.storyCard:hover,
.uniCard:hover{
transform:translateY(-12px);

box-shadow:
0 30px 70px rgba(15,23,42,.15);
}

.storyImage,
.uniImage{
height:260px;
overflow:hidden;
}

.storyImage img,
.uniImage img{
width:100%;
height:100%;

object-fit:cover;

transition:.6s;
}

.storyCard:hover img,
.uniCard:hover img{
transform:scale(1.08);
}

.storyBody,
.uniBody{
padding:30px;
}

.storyTop{
display:flex;
justify-content:space-between;

margin-bottom:20px;
}

.countryBadge{
padding:8px 14px;

border-radius:50px;

background:#eff6ff;

color:#2563eb;

font-size:12px;
font-weight:700;
}

.visaBadge{
padding:8px 14px;

border-radius:50px;

background:#dcfce7;

color:#15803d;

font-size:12px;
font-weight:700;
}

.storyBody h3,
.uniBody h3{
font-size:26px;
font-weight:800;

margin-bottom:10px;

color:#0f172a;
}

.storyBody h5{
font-size:16px;

margin-bottom:15px;

color:#6366f1;
}

.storyBody p,
.uniBody p{
font-size:15px;
line-height:1.8;

color:#64748b;
}

.storyInfo,
.uniInfo{
display:grid;
grid-template-columns:1fr 1fr;

gap:15px;

margin-top:25px;
}

.storyInfo div,
.uniInfo div{
padding:15px;

border-radius:18px;

background:#f8fafc;
}

.storyInfo span,
.uniInfo span{
display:block;

font-size:12px;

margin-bottom:8px;

color:#64748b;
}

.storyInfo strong,
.uniInfo strong{
font-size:14px;

color:#0f172a;
}

/* BUTTON */

.detailsBtn{
width:100%;

margin-top:25px;

padding:15px;

border:none;

border-radius:18px;

background:
linear-gradient(
135deg,
#3b82f6,
#6366f1
);

color:white;

font-size:15px;
font-weight:700;

cursor:pointer;

transition:.3s;
}

.detailsBtn:hover{
transform:translateY(-4px);

box-shadow:
0 15px 30px rgba(59,130,246,.25);
}

/* TESTIMONIAL */

.testimonialCard{
height:100%;

padding:35px;

background:
rgba(255,255,255,.85);

border-radius:30px;

backdrop-filter:blur(15px);

box-shadow:
0 20px 40px rgba(15,23,42,.08);
}

.quoteIcon{
font-size:60px;

font-weight:900;

line-height:1;

color:#6366f1;

margin-bottom:15px;
}

.testimonialCard p{
font-size:16px;

line-height:1.9;

color:#64748b;

margin-bottom:25px;
}

.testimonialCard h4{
font-size:18px;
font-weight:800;

color:#0f172a;
}

/* MODAL */

.customModal{
position:fixed;
inset:0;

background:rgba(15,23,42,.75);

display:flex;
justify-content:center;
align-items:center;

padding:20px;

z-index:99999;
}

.modalCard{
position:relative;

width:100%;
max-width:850px;

max-height:90vh;

overflow-y:auto;

background:
rgba(255,255,255,.96);

backdrop-filter:blur(25px);

border-radius:35px;

animation:popup .35s ease;
}

.modalImage{
width:100%;
height:320px;
object-fit:cover;
}

.closeBtn{
position:absolute;

top:20px;
right:20px;

width:45px;
height:45px;

border:none;

border-radius:50%;

background:white;

font-size:28px;

cursor:pointer;

box-shadow:
0 10px 25px rgba(15,23,42,.15);
}

.modalContent{
padding:35px;
}

.modalContent h2{
font-size:40px;
font-weight:900;

margin-bottom:10px;

color:#0f172a;
}

.modalSub{
font-size:18px;
font-weight:700;

color:#6366f1;

margin-bottom:30px;
}

.modalGrid{
display:grid;
grid-template-columns:1fr 1fr;

gap:20px;
}

.modalInfoBox{
padding:20px;

border-radius:22px;

background:#f8fafc;
}

.modalInfoBox h5{
font-size:17px;
font-weight:800;

margin-bottom:10px;

text-transform:capitalize;

color:#0f172a;
}

.modalInfoBox p{
font-size:15px;
line-height:1.8;

color:#64748b;
}

/* ANIMATION */

@keyframes popup{

from{
opacity:0;
transform:scale(.9);
}

to{
opacity:1;
transform:scale(1);
}

}

/* MOBILE */

@media(max-width:768px){

.storyHero{
padding:120px 20px 80px;
}

.storyHero h1{
font-size:42px;
}

.storyHero p{
font-size:16px;
}

.sectionTitle{
font-size:34px;
}

.storyInfo,
.uniInfo,
.modalGrid{
grid-template-columns:1fr;
}

.modalContent h2{
font-size:28px;
}

.heroButtons{
flex-direction:column;
}

.primaryBtn,
.secondaryBtn{
width:100%;
}

.storyImage,
.uniImage{
height:220px;

}

`}</style>
    </div>
  )
}
