import { useState } from 'react'
import SafeImage from '../components/SafeImage'

import koreaImg from '../assets/south korea.jpeg'
import ukImg from '../assets/UK.jpeg'
import usaImg from '../assets/USA.jpeg'
import russiaImg from '../assets/Russia.jpeg'

export default function Destinations () {
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [selectedUniversity, setSelectedUniversity] = useState(null)
  const [selectedDegree, setSelectedDegree] = useState(null)

  const countries = [
    {
      name: 'South Korea',
      flag: '🇰🇷',
      image: koreaImg,
      tuition: '$3,000 - $8,000 / Year',
      intake: 'March / September',
      workPermit: '20 Hours Weekly',
      scholarship: 'GKS & University Scholarships',

      universities: [
        {
          name: 'Kyungpook National University',

          degrees: {
            Bachelor: {
              requirements: [
                'HSC Certificate',
                'Minimum GPA 3.00',
                'Personal Statement'
              ],

              score: 'TOPIK Level 3 / IELTS 5.5',

              documents: [
                'Passport',
                'SSC Certificate',
                'HSC Certificate',
                'Birth Certificate',
                'Bank Statement'
              ]
            },

            Masters: {
              requirements: [
                'Bachelor Degree',
                'Research Interest',
                'Academic Transcript'
              ],

              score: 'TOPIK Level 4 / IELTS 6.0',

              documents: [
                'Passport',
                'Degree Certificate',
                'Transcript',
                'CV',
                'Study Plan'
              ]
            },

            PhD: {
              requirements: ['Masters Degree', 'Research Proposal'],

              score: 'TOPIK Level 4 / IELTS 6.5',

              documents: ['Passport', 'Research Proposal', 'CV', 'Transcript']
            }
          }
        },

        {
          name: 'Seoul National University',

          degrees: {
            Bachelor: {
              requirements: ['Excellent Academic Record', 'Personal Statement'],

              score: 'TOPIK 4 / IELTS 6.0',

              documents: [
                'Passport',
                'Academic Certificates',
                'Transcript',
                'Bank Statement'
              ]
            },

            Masters: {
              requirements: [
                'Bachelor Degree',
                'Research Experience Preferred'
              ],

              score: 'IELTS 6.5',

              documents: ['Degree Certificate', 'CV', 'Transcript']
            },

            PhD: {
              requirements: ['Masters Degree', 'Research Proposal'],

              score: 'IELTS 6.5',

              documents: ['Research Proposal', 'Publications', 'CV']
            }
          }
        }
      ]
    },

    {
      name: 'United Kingdom',
      flag: '🇬🇧',
      image: ukImg,
      tuition: '£12,000 - £30,000 / Year',
      intake: 'January / September',
      workPermit: '20 Hours Weekly',
      scholarship: 'Chevening & University Funding',

      universities: [
        {
          name: 'University of Manchester',

          degrees: {
            Bachelor: {
              requirements: ['HSC / A-Level Equivalent', 'Academic Transcript'],

              score: 'IELTS 6.0',

              documents: ['Passport', 'Transcript', 'Personal Statement']
            },

            Masters: {
              requirements: ['Bachelor Degree', 'Relevant Academic Background'],

              score: 'IELTS 6.5',

              documents: ['Passport', 'CV', 'Transcript', 'SOP']
            },

            PhD: {
              requirements: ['Masters Degree', 'Research Proposal'],

              score: 'IELTS 6.5',

              documents: ['CV', 'Research Proposal', 'Publications']
            }
          }
        },

        {
          name: 'University of Birmingham',

          degrees: {
            Bachelor: {
              requirements: ['Strong Academic Record', 'Personal Statement'],

              score: 'IELTS 6.0',

              documents: ['Passport', 'Transcript', 'Personal Statement']
            },

            Masters: {
              requirements: ['Bachelor Degree', 'Academic References'],

              score: 'IELTS 6.5',

              documents: ['CV', 'Recommendation Letter', 'Transcript']
            },

            PhD: {
              requirements: ['Masters Degree', 'Research Proposal'],

              score: 'IELTS 6.5',

              documents: ['Research Proposal', 'CV']
            }
          }
        }
      ]
    },

    {
      name: 'United States',
      flag: '🇺🇸',
      image: usaImg,
      tuition: '$15,000 - $45,000 / Year',
      intake: 'Spring / Fall',
      workPermit: 'OPT Available',
      scholarship: 'Merit Scholarships',

      universities: [
        {
          name: 'Arizona State University',

          degrees: {
            Bachelor: {
              requirements: ['High School Completion', 'Academic Transcript'],

              score: 'IELTS 6.0',

              documents: ['Passport', 'Transcript', 'SOP']
            },

            Masters: {
              requirements: ['Bachelor Degree'],

              score: 'IELTS 6.5',

              documents: ['CV', 'Transcript', 'Recommendation Letter']
            },

            PhD: {
              requirements: ['Masters Degree', 'Research Proposal'],

              score: 'IELTS 6.5',

              documents: ['Research Proposal', 'CV']
            }
          }
        },

        {
          name: 'University of Arizona',

          degrees: {
            Bachelor: {
              requirements: ['High School Completion'],

              score: 'IELTS 6.0',

              documents: ['Passport', 'Transcript']
            },

            Masters: {
              requirements: ['Bachelor Degree'],

              score: 'IELTS 6.5',

              documents: ['CV', 'SOP', 'Transcript']
            },

            PhD: {
              requirements: ['Masters Degree'],

              score: 'IELTS 6.5',

              documents: ['Research Proposal', 'CV']
            }
          }
        }
      ]
    }
  ]

  const upcomingIntakes = [
    {
      university: 'Kyungpook National University',
      degree: 'Bachelor of Computer Science',
      deadline: '15 October 2026'
    },

    {
      university: 'University of Manchester',
      degree: 'MSc Data Science',
      deadline: '30 September 2026'
    },

    {
      university: 'Arizona State University',
      degree: 'MS Information Technology',
      deadline: '20 November 2026'
    },

    {
      university: 'Lomonosov Moscow State University',
      degree: 'Bachelor of Engineering',
      deadline: '10 December 2026'
    }
  ]

  return (
    <div className='destinationsPage'>
      {/* HERO */}

      <section className='heroSection'>
        <div className='heroOverlay'>
          <div className='container text-center'>
            <h1 className='heroTitle'>
              Explore Your
              <span> Global Study Destination</span>
            </h1>

            <p className='heroText'>
              Discover top universities, degree pathways, admission requirements
              and scholarship opportunities around the world.
            </p>
          </div>
        </div>
      </section>

      {/* COUNTRIES */}

      <section className='sectionPadding'>
        <div className='container'>
          <div className='text-center mb-5'>
            <h2 className='sectionTitle'>Popular Study Destinations</h2>

            <p className='sectionSubtitle'>
              Select your preferred country and explore available universities.
            </p>
          </div>

          <div className='row g-4'>
            {countries.map((country, countryIndex) => (
              <div className='col-lg-6' key={countryIndex}>
                <div className='countryCard'>
                  <SafeImage
                    src={country.image}
                    alt={country.name}
                    className='countryImage'
                  />

                  <div className='countryContent'>
                    <h3>
                      {country.flag} {country.name}
                    </h3>

                    <div className='countryInfo'>
                      <p>
                        <strong>Tuition:</strong> {country.tuition}
                      </p>

                      <p>
                        <strong>Intake:</strong> {country.intake}
                      </p>

                      <p>
                        <strong>Work:</strong> {country.workPermit}
                      </p>

                      <p>
                        <strong>Scholarship:</strong> {country.scholarship}
                      </p>
                    </div>

                    <button
                      className='viewBtn'
                      onClick={() => {
                        setSelectedCountry(
                          selectedCountry === countryIndex ? null : countryIndex
                        )

                        setSelectedUniversity(null)
                        setSelectedDegree(null)
                      }}
                    >
                      {selectedCountry === countryIndex
                        ? 'Hide Universities'
                        : 'View Universities'}
                    </button>
                    {selectedCountry === countryIndex && (
                      <div className='universityWrapper'>
                        {country.universities.map(
                          (university, universityIndex) => (
                            <div
                              className='universityCard'
                              key={universityIndex}
                            >
                              <div
                                className='universityHeader'
                                onClick={() => {
                                  setSelectedUniversity(
                                    selectedUniversity ===
                                      `${countryIndex}-${universityIndex}`
                                      ? null
                                      : `${countryIndex}-${universityIndex}`
                                  )

                                  setSelectedDegree(null)
                                }}
                              >
                                <h4>{university.name}</h4>

                                <span>
                                  {selectedUniversity ===
                                  `${countryIndex}-${universityIndex}`
                                    ? '−'
                                    : '+'}
                                </span>
                              </div>

                              {selectedUniversity ===
                                `${countryIndex}-${universityIndex}` && (
                                <div className='degreeSection'>
                                  <h5>Available Degrees</h5>

                                  <div className='degreeBtns'>
                                    {Object.keys(university.degrees).map(
                                      degree => (
                                        <button
                                          key={degree}
                                          className='degreeBtn'
                                          onClick={() =>
                                            setSelectedDegree(
                                              selectedDegree === degree
                                                ? null
                                                : degree
                                            )
                                          }
                                        >
                                          {degree}
                                        </button>
                                      )
                                    )}
                                  </div>

                                  {selectedDegree && (
                                    <div className='degreeDetails'>
                                      <h5>{selectedDegree} Requirements</h5>

                                      <div className='row'>
                                        <div className='col-md-6'>
                                          <h6>Academic Requirements</h6>

                                          <ul>
                                            {university.degrees[
                                              selectedDegree
                                            ].requirements.map(
                                              (item, index) => (
                                                <li key={index}>{item}</li>
                                              )
                                            )}
                                          </ul>
                                        </div>

                                        <div className='col-md-6'>
                                          <h6>Language Requirement</h6>

                                          <p className='scoreBadge'>
                                            {
                                              university.degrees[selectedDegree]
                                                .score
                                            }
                                          </p>

                                          <h6 className='mt-4'>Documents</h6>

                                          <ul>
                                            {university.degrees[
                                              selectedDegree
                                            ].documents.map((item, index) => (
                                              <li key={index}>{item}</li>
                                            ))}
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING INTAKES */}

      <section className='intakeSection'>
        <div className='container'>
          <div className='text-center mb-5'>
            <h2 className='sectionTitle'>Upcoming Intakes</h2>

            <p className='sectionSubtitle'>
              Apply before deadlines and secure your admission opportunity.
            </p>
          </div>

          <div className='row g-4'>
            {upcomingIntakes.map((item, index) => (
              <div className='col-lg-3 col-md-6' key={index}>
                <div className='intakeCard'>
                  <h4>{item.university}</h4>

                  <p>
                    <strong>Degree:</strong> {item.degree}
                  </p>

                  <p>
                    <strong>Deadline:</strong> {item.deadline}
                  </p>

                  <div className='deadlineBadge'>Open For Application</div>

                  <p className='mt-3'>For details knock us via email.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`

.destinationsPage{
  min-height:100vh;
  overflow:hidden;

  background:
    radial-gradient(
      circle at top left,
      rgba(255,155,120,.25),
      transparent 35%
    ),

    radial-gradient(
      circle at bottom left,
      rgba(210,70,80,.28),
      transparent 40%
    ),

    radial-gradient(
      circle at top right,
      rgba(255,190,40,.25),
      transparent 35%
    ),

    linear-gradient(
      135deg,
      #2d0f17 0%,
      #7b2f2b 45%,
      #d36a2e 80%,
      #f0a81e 100%
    );
}

.sectionPadding{
  padding:100px 0;
}

.heroSection{
  min-height:80vh;

  display:flex;
  align-items:center;
  justify-content:center;

  text-align:center;
}

.heroOverlay{
  width:100%;
  padding:120px 20px;
}

.heroTitle{
  font-size:4rem;
  font-weight:900;
  color:white;
}

.heroTitle span{
  color:#ffd54f;
}

.heroText{
  max-width:800px;
  margin:auto;
  margin-top:25px;

  color:#f5f5f5;
  line-height:1.9;
}

.sectionTitle{
  color:white;
  font-size:3rem;
  font-weight:900;
}

.sectionSubtitle{
  color:#f1f1f1;
}

.countryCard{
  overflow:hidden;

  border-radius:28px;

  background:rgba(
    255,
    255,
    255,
    .08
  );

  border:1px solid rgba(
    255,
    255,
    255,
    .15
  );

  backdrop-filter:blur(16px);

  transition:.4s;
}

.countryCard:hover{
  transform:translateY(-8px);
}

.countryImage{
  width:100%;
  height:280px;
  object-fit:cover;
}

.countryContent{
  padding:30px;
}

.countryContent h3{
  color:white;
  font-weight:800;
}

.countryInfo p{
  color:white;
  margin-bottom:10px;
}

.viewBtn{
  width:100%;

  border:none;

  padding:14px;

  border-radius:14px;

  background:#facc15;

  color:black;

  font-weight:700;

  margin-top:15px;
}

.universityWrapper{
  margin-top:25px;
}

.universityCard{
  margin-top:15px;

  border-radius:18px;

  background:rgba(
    255,
    255,
    255,
    .05
  );

  border:1px solid rgba(
    255,
    255,
    255,
    .12
  );
}

.universityHeader{
  padding:20px;

  display:flex;

  justify-content:space-between;

  align-items:center;

  cursor:pointer;
}

.universityHeader h4{
  margin:0;
  color:white;
}

.universityHeader span{
  color:#facc15;
  font-size:28px;
}

.degreeSection{
  padding:20px;
}

.degreeSection h5{
  color:white;
}

.degreeBtns{
  display:flex;
  gap:10px;
  flex-wrap:wrap;
  margin:20px 0;
}

.degreeBtn{
  border:none;

  padding:10px 18px;

  border-radius:12px;

  background:#facc15;

  color:black;

  font-weight:700;
}

.degreeDetails{
  padding:20px;

  border-radius:15px;

  background:rgba(
    255,
    255,
    255,
    .06
  );
}

.degreeDetails h5,
.degreeDetails h6{
  color:white;
}

.degreeDetails li{
  color:white;
  margin-bottom:8px;
}

.scoreBadge{
  display:inline-block;

  padding:10px 15px;

  border-radius:12px;

  background:rgba(
    250,
    204,
    21,
    .2
  );

  color:#facc15;
}

.intakeSection{
  padding:100px 0;
}

.intakeCard{
  height:100%;

  padding:30px;

  border-radius:22px;

  background:rgba(
    255,
    255,
    255,
    .08
  );

  border:1px solid rgba(
    255,
    255,
    255,
    .15
  );

  backdrop-filter:blur(12px);

  transition:.4s;
}

.intakeCard:hover{
  transform:translateY(-8px);
}

.intakeCard h4{
  color:white;
  margin-bottom:15px;
}

.intakeCard p{
  color:white;
}

.deadlineBadge{
  display:inline-block;

  padding:10px 15px;

  border-radius:12px;

  background:#22c55e;

  color:white;

  font-weight:700;
}

@media(max-width:992px){

  .heroTitle{
    font-size:3rem;
  }

  .sectionTitle{
    font-size:2.3rem;
  }

}

@media(max-width:768px){

  .heroTitle{
    font-size:2.2rem;
  }

  .sectionTitle{
    font-size:1.8rem;
  }

  .countryImage{
    height:220px;
  }

  .degreeBtns{
    flex-direction:column;
  }

}

      `}</style>
    </div>
  )
}
