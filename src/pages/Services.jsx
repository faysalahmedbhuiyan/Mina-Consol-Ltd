import { useRef, useState } from 'react'

import SafeImage from '../components/SafeImage'

import knuLogo from '../assets/KNUlogo3.png'

export default function Services () {
  const destinationRef = useRef(null)
  const contactRef = useRef(null)

  const [activeTab, setActiveTab] = useState('KOREA')

  // =========================
  // CORE SERVICE EXPANSION
  // =========================

  const [expandedService, setExpandedService] = useState(null)

  // =========================
  // UNIVERSITY EXPANSION
  // =========================

  const [activeUniversity, setActiveUniversity] = useState(null)
  const [activeDegree, setActiveDegree] = useState(null)

  // =========================
  // LANGUAGE TAB
  // =========================

  const [languageTab, setLanguageTab] = useState('IELTS')

  // =========================
  // DESTINATIONS
  // =========================

  const destinations = [
    {
      country: 'South Korea',
      code: 'KOREA',
      flag: '🇰🇷'
    },
    {
      country: 'United Kingdom',
      code: 'UK',
      flag: '🇬🇧'
    },
    {
      country: 'United States',
      code: 'USA',
      flag: '🇺🇸'
    }
  ]

  // =========================
  // CORE SERVICES
  // =========================

  const coreServices = [
    {
      icon: '🎓',
      title: 'Admission Support',
      description:
        'Complete university admission guidance from profile assessment to offer letter.',
      tasks: [
        'Profile Analysis',
        'University Selection',
        'Courses Selection',
        'Application Submission',
        'SOP Writing ',
        'Scholarship Easy Writing',
        'Recommendation Letter Guidance',
        'Document Legalization',
        'University Communication',
        'Scholarship Application Support'
      ]
    },

    {
      icon: '💼',
      title: 'Career Counseling',
      description:
        'Personalized guidance to identify your ideal career path, build key skills, and land your dream job.',
      tasks: [
        'Career Assessment & Aptitude Testing',
        'Personalized Career Path Mapping',
        'Resume & LinkedIn Profile Optimization',
        'Interview Preparation & Mock Interviews',
        'Skill Gap Analysis & Roadmap',
        'Job Search & Networking Strategies',
        'Industry Expert Mentorship',
        'Soft Skills & Professional Grooming'
      ]
    },

    {
      icon: '🛂',
      title: 'Visa Assistance',
      description:
        'Professional visa filing support and interview preparation.',
      tasks: [
        'Visa Eligibility Assessment',
        'Financial Documentation Review',
        'Embassy Requirement Checking',
        'Visa Form Completion',
        'Interview Preparation',
        'Mock Interview Sessions',
        'Visa Filing Support',
        'Travel Planning Guidance'
      ]
    },

    {
      icon: '📄',
      title: 'Documentation Help',
      description: 'Preparation and verification of all required documents.',
      tasks: [
        'Passport Review',
        'Transcript Verification',
        'Certificate Translation',
        'Document Notarization',
        'Bank Statement Preparation',
        'Medical Documentation',
        'Offer Letter Processing',
        'Final Submission Checklist'
      ]
    },

    {
      icon: '💰', // Tumi chaile '🏆' ba '🎓' o dite paro
      title: 'Scholarship Guidance',
      description:
        'Expert assistance in finding, applying for, and securing fully or partially funded scholarships worldwide.',
      tasks: [
        'Global Scholarship Search & Matching',
        'Eligibility & Profile Assessment',
        'Scholarship Essay & Personal Statement Review',
        'Financial Need Documentation Support',
        'Application Form Review & Submission',
        'Interview Preparation for Scholarship Panels',
        'External Fellowship & Grant Assistance',
        'Deadlines & Tracking Management'
      ]
    },

    {
      icon: '✈️',
      title: 'Pre-Departure Guide',
      description: 'Everything students need before flying abroad.',
      tasks: [
        'Accommodation Guidance',
        'Airport Pickup Information',
        'Cultural Orientation',
        'Travel Checklist',
        'Student Insurance Guidance',
        'Bank Account Setup Information',
        'Part-time Work Guidance',
        'Emergency Contact Preparation'
      ]
    },
    {
      icon: '🛬', // '🏠' ba '🌍' icon-o use korte paro
      title: 'Post-Departure Support',
      description:
        'Comprehensive transition support to help you settle down comfortably and safely in your new destination country.',
      tasks: [
        'Accommodation & Housing Assistance',
        'Local SIM Card & Bank Account Opening',
        'City Orientation & Public Transport Guide',
        'Part-Time Job Search Guidance',
        'Emergency & Medical Insurance Setup',
        'Foreign Registration & Legal Formalities',
        'Alumni & Local Community Networking'
      ]
    }
  ]

  // =========================
  // UNIVERSITY DATABASE
  // =========================

  const universityData = {
    KOREA: [
      {
        university: 'Kyungpook National University',

        degrees: {
          Bachelor: {
            requirements: [
              'SSC & HSC Certificates',
              'Minimum GPA Requirement',
              'Passport Copy',
              'Personal Statement'
            ],
            score: 'TOPIK Level 3 / IELTS 5.5+',
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
              'Transcript',
              'Research Interest Statement'
            ],
            score: 'TOPIK Level 4 / IELTS 6.0+',
            documents: [
              'Passport',
              'Degree Certificate',
              'Transcript',
              'CV',
              'Study Plan'
            ]
          },

          PhD: {
            requirements: [
              'Masters Degree',
              'Research Proposal',
              'Publication Record Preferred'
            ],
            score: 'TOPIK Level 4 / IELTS 6.5+',
            documents: [
              'Passport',
              'Masters Transcript',
              'Research Proposal',
              'CV'
            ]
          }
        }
      },

      {
        university: 'Seoul National University',

        degrees: {
          Bachelor: {
            requirements: [
              'Excellent Academic Background',
              'High GPA',
              'Personal Statement'
            ],
            score: 'TOPIK Level 4 / IELTS 6.0+',
            documents: [
              'Passport',
              'Academic Certificates',
              'Transcript',
              'Bank Statement'
            ]
          },

          Masters: {
            requirements: [
              'Relevant Bachelor Degree',
              'Research Experience Preferred'
            ],
            score: 'IELTS 6.5+',
            documents: [
              'Degree Certificate',
              'Transcript',
              'CV',
              'Recommendation Letters'
            ]
          },

          PhD: {
            requirements: ['Relevant Masters Degree', 'Research Proposal'],
            score: 'IELTS 6.5+',
            documents: ['Research Proposal', 'CV', 'Publications']
          }
        }
      }
    ],

    UK: [
      {
        university: 'University of Manchester',

        degrees: {
          Bachelor: {
            requirements: ['HSC/A-Level Equivalent', 'Academic Transcript'],
            score: 'IELTS 6.0+',
            documents: ['Passport', 'Transcript', 'Personal Statement']
          },

          Masters: {
            requirements: ['Bachelor Degree', 'Relevant Academic Background'],
            score: 'IELTS 6.5+',
            documents: ['CV', 'Transcript', 'Passport']
          },

          PhD: {
            requirements: ['Masters Degree', 'Research Proposal'],
            score: 'IELTS 6.5+',
            documents: ['Research Proposal', 'CV', 'Publications']
          }
        }
      },

      {
        university: 'University of Birmingham',

        degrees: {
          Bachelor: {
            requirements: ['Strong Academic Record', 'Personal Statement'],
            score: 'IELTS 6.0+',
            documents: ['Passport', 'Transcript', 'Personal Statement']
          },

          Masters: {
            requirements: ['Bachelor Degree', 'Academic References'],
            score: 'IELTS 6.5+',
            documents: ['CV', 'Transcript', 'Recommendation Letter']
          },

          PhD: {
            requirements: ['Masters Degree', 'Research Proposal'],
            score: 'IELTS 6.5+',
            documents: ['Research Proposal', 'CV']
          }
        }
      }
    ],

    USA: [
      {
        university: 'Arizona State University',

        degrees: {
          Bachelor: {
            requirements: ['High School Completion', 'Academic Transcript'],
            score: 'IELTS 6.0+',
            documents: ['Passport', 'Transcript', 'SOP']
          },

          Masters: {
            requirements: ['Bachelor Degree', 'Academic Background'],
            score: 'IELTS 6.5+',
            documents: ['CV', 'Transcript', 'Recommendation Letters']
          },

          PhD: {
            requirements: ['Masters Degree', 'Research Proposal'],
            score: 'IELTS 6.5+',
            documents: ['Research Proposal', 'CV']
          }
        }
      }
    ]
  }

  // =========================
  // SCHOLARSHIP GUIDANCE
  // =========================

  const scholarshipPrograms = [
    {
      title: 'Full Government Scholarships',
      icon: '🏛️',
      coverage: '100% Tuition + Monthly Stipend',
      points: [
        'Global Korea Scholarship (GKS)',
        'Commonwealth Scholarship',
        'Government Sponsored Funding',
        'Living Allowance Support'
      ],
      criteria: [
        'Academic GPA',
        'Language Test Score',
        'Study Plan',
        'Leadership Activities'
      ]
    },

    {
      title: 'University Tuition Waivers',
      icon: '🎓',
      coverage: '30% - 100% Tuition Reduction',
      points: [
        'Merit Scholarships',
        'Dean Awards',
        'International Student Discounts',
        'Academic Excellence Grants'
      ],
      criteria: [
        'GPA Evaluation',
        'IELTS / TOPIK / PTE',
        'Extracurricular Activities',
        'Personal Statement'
      ]
    },

    {
      title: 'Research Assistantships',
      icon: '🔬',
      coverage: 'Research Funding + Monthly Salary',
      points: [
        'Masters Research Support',
        'PhD Assistantships',
        'Professor Matching',
        'Lab Placement Guidance'
      ],
      criteria: [
        'Research Background',
        'Publication Experience',
        'Technical Skills',
        'Research Proposal'
      ]
    }
  ]

  // =========================
  // SUCCESS PROCESS TIMELINE
  // =========================

  const successSteps = [
    {
      number: '01',
      title: 'Free Assessment & Profile Evaluation',
      description:
        'Academic GPA analysis, destination selection and course eligibility review.'
    },

    {
      number: '02',
      title: 'University Application & Offer Letter',
      description:
        'Application preparation, SOP assistance and admission offer processing.'
    },

    {
      number: '03',
      title: 'Financial Vetting & Visa Filing',
      description:
        'Bank statement verification, documentation review and visa interview preparation.'
    },

    {
      number: '04',
      title: 'Pre-Departure Briefing & Fly',
      description:
        'Accommodation guidance, insurance support and arrival preparation.'
    }
  ]

  // =========================
  // LANGUAGE MODULES
  // =========================

  const languagePrograms = {
    IELTS: {
      title: 'IELTS Preparation',
      duration: '8-12 Weeks',
      modules: [
        'Listening Mastery',
        'Reading Strategies',
        'Academic Writing',
        'Speaking Mock Tests',
        'Weekly Assessments'
      ]
    },

    PTE: {
      title: 'PTE Academic Training',
      duration: '6-10 Weeks',
      modules: [
        'AI Scoring Strategy',
        'Speaking Fluency',
        'Writing Templates',
        'Reading Skills',
        'Full Mock Exams'
      ]
    },

    TOPIK: {
      title: 'TOPIK Korean Language',
      duration: '3-6 Months',
      modules: [
        'Hangul Foundation',
        'Grammar Development',
        'Listening Practice',
        'Writing Training',
        'TOPIK Exam Preparation'
      ]
    }
  }

  return (
    <>
      <div className='servicesPage darkTheme'>
        {/* HERO */}

        <section className='heroSection'>
          <div className='heroOverlay'>
            <div className='container text-center'>
              <h1 className='heroTitle'>
                Build Your
                <span> Global Education Future</span>
              </h1>

              <p className='heroText'>
                Professional admission, visa, scholarship, language training and
                pre-departure support for ambitious international students.
              </p>

              <div className='heroButtons'>
                <button
                  className='btn btn-warning btn-lg px-4'
                  onClick={() =>
                    contactRef.current?.scrollIntoView({
                      behavior: 'smooth'
                    })
                  }
                >
                  Start Consultation
                </button>

                <button
                  className='btn btn-outline-light btn-lg px-4'
                  onClick={() =>
                    destinationRef.current?.scrollIntoView({
                      behavior: 'smooth'
                    })
                  }
                >
                  Explore Destinations
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CORE SERVICES */}

        <section className='sectionPadding'>
          <div className='container'>
            <div className='text-center mb-5'>
              <h2 className='sectionTitle'>Our Core Services</h2>

              <p className='sectionSubtitle'>
                End-to-end support throughout your international education
                journey.
              </p>
            </div>

            <div className='row g-4'>
              {coreServices.map((service, index) => (
                <div className='col-lg-3 col-md-6' key={index}>
                  <div
                    className='serviceCard'
                    onClick={() =>
                      setExpandedService(
                        expandedService === index ? null : index
                      )
                    }
                  >
                    <div className='serviceIcon'>{service.icon}</div>

                    <h4>{service.title}</h4>

                    <p>{service.description}</p>

                    <div className='expandText'>
                      {expandedService === index
                        ? 'Hide Details'
                        : 'View Details'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {expandedService !== null && (
              <div className='row mt-4'>
                <div className='col-12'>
                  <div className='glassCard p-4 serviceDetailsCard'>
                    <h4 className='mb-3'>
                      {coreServices[expandedService].title}
                    </h4>

                    <ul className='serviceList ps-4'>
                      {coreServices[expandedService].tasks.map(
                        (task, index) => (
                          <li key={index}>{task}</li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* STUDENT SUCCESS PROCESS */}

        <section className='sectionPadding darkSection py-5'>
          <div className='container'>
            <div className='text-center mb-5'>
              <h2 className='sectionTitle'>Student Journey With Mina Consol</h2>

              <p className='sectionSubtitle'>
                A structured pathway designed to simplify every stage of
                studying abroad.
              </p>
            </div>

            <div className='successTimelineWrapper'>
              <div className='successTimelineLine'></div>

              <div className='row g-4'>
                {successSteps.map((step, index) => (
                  <div className='col-lg-3 col-md-6' key={index}>
                    <div className='successStepCard'>
                      <div className='successStepNumber'>{step.number}</div>

                      <h5>{step.title}</h5>

                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SCHOLARSHIP & FINANCIAL AID */}

        <section className='sectionPadding py-5'>
          <div className='container'>
            <div className='text-center mb-5'>
              <h2 className='sectionTitle'>
                Scholarship & Financial Aid Guidance
              </h2>

              <p className='sectionSubtitle'>
                We help students identify, prepare and maximize opportunities
                for scholarships, tuition waivers and funded research pathways.
              </p>
            </div>

            <div className='row g-4'>
              {scholarshipPrograms.map((item, index) => (
                <div className='col-lg-4' key={index}>
                  <div className='scholarshipCard h-100'>
                    <div className='scholarshipIcon'>{item.icon}</div>

                    <h4>{item.title}</h4>

                    <div className='coverageBadge mb-3'>{item.coverage}</div>

                    <h6 className='mt-4 mb-3'>Funding Opportunities</h6>

                    <ul className='ps-4'>
                      {item.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>

                    <h6 className='mt-4 mb-3'>Criteria We Analyze</h6>

                    <div className='criteriaWrapper'>
                      {item.criteria.map((criteria, i) => (
                        <span key={i} className='criteriaBadge'>
                          {criteria}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LANGUAGE SUPPORT */}

        <section className='sectionPadding darkSection'>
          <div className='container'>
            <div className='text-center mb-5'>
              <h2 className='sectionTitle'>Language & Training Support</h2>

              <p className='sectionSubtitle'>
                Structured preparation programs to maximize admission success.
              </p>
            </div>

            <div className='languageTabs'>
              {Object.keys(languagePrograms).map(tab => (
                <button
                  key={tab}
                  className={`languageBtn ${
                    languageTab === tab ? 'activeLanguageBtn' : ''
                  }`}
                  onClick={() => setLanguageTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className='glassCard p-4 mt-4'>
              <h3>{languagePrograms[languageTab].title}</h3>

              <p>
                <strong>Duration:</strong>{' '}
                {languagePrograms[languageTab].duration}
              </p>

              <div className='row g-3 mt-2'>
                {languagePrograms[languageTab].modules.map((module, index) => (
                  <div className='col-lg-4 col-md-6' key={index}>
                    <div className='moduleCard'>{module}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* STUDY DESTINATIONS */}

        <section
          className='sectionPadding destinationSection'
          ref={destinationRef}
        >
          <div className='container'>
            <div className='text-center mb-5'>
              <h2 className='sectionTitle'>Study Destinations</h2>

              <p className='sectionSubtitle'>
                Explore universities, degree pathways and admission
                requirements.
              </p>
            </div>

            {/* COUNTRY TABS */}

            <div className='destinationTabs'>
              {destinations.map(destination => (
                <button
                  key={destination.code}
                  className={`destinationBtn ${
                    activeTab === destination.code ? 'activeDestination' : ''
                  }`}
                  onClick={() => {
                    setActiveTab(destination.code)
                    setActiveUniversity(null)
                    setActiveDegree(null)
                  }}
                >
                  {destination.flag} {destination.country}
                </button>
              ))}
            </div>

            {/* UNIVERSITY GRID */}

            <div className='row g-4 mt-4'>
              {universityData[activeTab]?.map((university, universityIndex) => (
                <div className='col-lg-6' key={universityIndex}>
                  <div
                    className='universityCard'
                    onClick={() => {
                      setActiveUniversity(
                        activeUniversity === universityIndex
                          ? null
                          : universityIndex
                      )

                      setActiveDegree(null)
                    }}
                  >
                    <div className='d-flex justify-content-between align-items-center'>
                      <h4 className='mb-0'>{university.university}</h4>

                      <span className='expandIcon'>
                        {activeUniversity === universityIndex ? '−' : '+'}
                      </span>
                    </div>
                  </div>

                  {/* LEVEL 1 */}

                  {activeUniversity === universityIndex && (
                    <div className='glassCard p-4 mt-3'>
                      <h5 className='mb-3'>Available Degrees</h5>

                      <div className='d-flex flex-wrap gap-3'>
                        {Object.keys(university.degrees).map(degree => (
                          <button
                            key={degree}
                            className={`degreeBtn ${
                              activeDegree === degree ? 'activeDegreeBtn' : ''
                            }`}
                            onClick={e => {
                              e.stopPropagation()

                              setActiveDegree(
                                activeDegree === degree ? null : degree
                              )
                            }}
                          >
                            {degree}
                          </button>
                        ))}
                      </div>

                      {/* LEVEL 2 */}

                      {activeDegree && (
                        <div className='degreeDetails glassInnerCard mt-4 p-4'>
                          <h4 className='mb-4'>
                            {activeDegree} Program Requirements
                          </h4>

                          <div className='row'>
                            <div className='col-lg-6'>
                              <h5>Academic Requirements</h5>

                              <ul className='ps-4'>
                                {university.degrees[
                                  activeDegree
                                ].requirements.map(
                                  (requirement, requirementIndex) => (
                                    <li key={requirementIndex}>
                                      {requirement}
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>

                            <div className='col-lg-6'>
                              <h5>Language Requirement</h5>

                              <p className='scoreBadge'>
                                {university.degrees[activeDegree].score}
                              </p>

                              <h5 className='mt-4'>Required Documents</h5>

                              <ul className='ps-4'>
                                {university.degrees[activeDegree].documents.map(
                                  (document, documentIndex) => (
                                    <li key={documentIndex}>{document}</li>
                                  )
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ACADEMIC FOCUS */}

        <section className='sectionPadding'>
          <div className='container'>
            <div className='text-center mb-5'>
              <h2 className='sectionTitle'>Our Academic Focus</h2>
            </div>

            <div className='partnerCard mx-auto'>
              <SafeImage
                src={knuLogo}
                alt='Kyungpook National University'
                className='partnerLogo'
              />

              <h3>Kyungpook National University</h3>

              <p>
                One of South Korea's leading national universities offering
                undergraduate, master's and doctoral pathways for international
                students.
              </p>

              <div className='partnerStats'>
                <div className='statBox'>
                  <h4>80+</h4>
                  <span>Programs</span>
                </div>

                <div className='statBox'>
                  <h4>Global</h4>
                  <span>Students</span>
                </div>

                <div className='statBox'>
                  <h4>Top</h4>
                  <span>Research</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APPLICATION TIMELINE */}

        <section className='sectionPadding darkSection'>
          <div className='container'>
            <div className='text-center mb-5'>
              <h2 className='sectionTitle'>
                Which Destination is right for you?
              </h2>

              <p className='sectionSubtitle'>
                A clear destination is a key of success.
              </p>
            </div>

            <div className='timelineWrapper'>
              <div className='timelineLine'></div>

              <div className='timelineGrid'>
                <div className='timelineCard'>
                  <div className='timelineNumber'>01</div>

                  <h4>The Right course and Institution?</h4>

                  <p>
                    To maximize your global career potential, start by
                    evaluating your course of choice, study level, and seat
                    availability. While some nations are global hubs for
                    specific industries, others offer flexible degrees and
                    excellent post-study work placements. Find your match
                    instantly using the Search Option above. Compare
                    institutional rankings, explore faculty expertise, and
                    review program structures to curate your personal list of
                    top-tier choices. Your global future is just a search away.
                  </p>
                </div>

                <div className='timelineCard'>
                  <div className='timelineNumber'>02</div>

                  <h4>Tuition Fees and Cost of Living?</h4>

                  <p>
                    Choosing a study destination requires balancing immediate
                    costs with long-term Return on Investment (ROI). Premium
                    destinations including the UK, Canada, Australia, South
                    Korea and Japan offer extensive post-study work programs and
                    immigration pathways that add immense value to your
                    professional portfolio. To optimize your search, we
                    recommend drafting a comprehensive 3-to-4-year financial
                    plan. Factor in tuition, regional living costs, and active
                    currency exchange rates. Additionally, explore available
                    bursaries and scholarship programs. Please note that
                    scholarship grants are non-guaranteed and are subject to
                    strict university eligibility criteria and admission board
                    decisions.
                  </p>
                </div>

                <div className='timelineCard'>
                  <div className='timelineNumber'>03</div>

                  <h4>Eligibility and Chances of Success?</h4>

                  <p>
                    Because admission criteria differ by institution and
                    department, aligning your academic profile with the right
                    program requires strategic planning. To eliminate the
                    guesswork, Mina Consol Ltd conducts a comprehensive
                    evaluation of your academic credentials, mapping your core
                    strengths to your long-term career goals. Our expertise also
                    extends to mitigating Visa Success risks—a critical step, as
                    a visa refusal can adversely affect future applications.
                    While countries like Canada, Australia, and the USA require
                    highly rigorous financial profiling, destinations such as
                    the UK, Japan, and Malaysia offer a more streamlined pathway
                    to visa approval. Trust Mina Consol Ltd to balance your
                    academic ambitions with practical visa compliance.
                  </p>
                </div>

                <div className='timelineCard'>
                  <div className='timelineNumber'>04</div>

                  <h4>Invest in a Degree That Pays You Back Globally</h4>

                  <p>
                    Studying abroad is the ultimate investment in your personal
                    and professional growth. But maximizing your ROI requires a
                    strategic plan. With Mina consol Ltd, you don't just apply
                    to a university; you strategically position your profile for
                    global success. We help you map out your 3-4 year budget,
                    secure competitive bursaries, and target destinations with
                    strong post-study work opportunities. From profile
                    assessment to stepping off the plane, we ensure every step
                    aligns with your future career goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}

        <section className='sectionPadding'>
          <div className='container'>
            <div className='text-center mb-5'>
              <h2 className='sectionTitle'>Services FAQ</h2>
            </div>

            <div
              className='accordion accordion-flush faqAccordion'
              id='servicesFaq'
            >
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#faq1'
                  >
                    Do you help with university selection?
                  </button>
                </h2>

                <div
                  id='faq1'
                  className='accordion-collapse collapse'
                  data-bs-parent='#servicesFaq'
                >
                  <div className='accordion-body'>
                    Yes. We evaluate academic background, budget, preferred
                    destination and future career goals before recommending
                    suitable universities.
                  </div>
                </div>
              </div>

              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#faq2'
                  >
                    Can you assist with scholarships?
                  </button>
                </h2>

                <div
                  id='faq2'
                  className='accordion-collapse collapse'
                  data-bs-parent='#servicesFaq'
                >
                  <div className='accordion-body'>
                    Yes. Scholarship opportunities are reviewed during
                    university selection and application preparation.
                  </div>
                </div>
              </div>

              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#faq3'
                  >
                    Do you provide visa interview preparation?
                  </button>
                </h2>

                <div
                  id='faq3'
                  className='accordion-collapse collapse'
                  data-bs-parent='#servicesFaq'
                >
                  <div className='accordion-body'>
                    Yes. Mock interview sessions and visa-specific preparation
                    are included in our visa assistance service.
                  </div>
                </div>
              </div>

              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#faq4'
                  >
                    Do you provide Korean language training?
                  </button>
                </h2>

                <div
                  id='faq4'
                  className='accordion-collapse collapse'
                  data-bs-parent='#servicesFaq'
                >
                  <div className='accordion-body'>
                    Yes. TOPIK preparation programs are available for students
                    planning to study in South Korea.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}

        <section className='ctaSection' ref={contactRef}>
          <div className='container text-center'>
            <h1>Start Your International Education Journey</h1>

            <p>
              Book a consultation and receive a personalized study abroad
              roadmap.
            </p>

            <a
              className='btn btn-warning btn-lg px-5 mt-3'
              href='mailto:minaconsol.official@gmail.com?subject=Free
              Counselling Request'
            >
              {' '}
              Get Free Counselling
            </a>
          </div>
        </section>
      </div>

      <style>{`
/* =====================================================
   GLOBAL THEME
===================================================== */

.darkTheme {
   position: relative;
  overflow: hidden;

  background:
    radial-gradient(
      circle at 80% 30%,
      rgba(255, 105, 180, 0.22),
      transparent 25%
    ),
    radial-gradient(
      circle at 20% 80%,
      rgba(255, 120, 200, 0.18),
      transparent 20%
    ),
    linear-gradient(
      135deg,
      #05020a 0%,
      #18040f 40%,
      #3d0a22 100%
    );
}

.servicesPage {
  width: 100%;
  position: relative;
}

.sectionPadding {
  padding: 100px 0;
}

.sectionTitle {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 15px;
  color: #ffffff;
}

.sectionSubtitle {
  color: #ffffff;
  max-width: 750px;
  margin: auto;
  font-size: 1.05rem;
  line-height: 1.8;
}

/* =====================================================
   HERO SECTION
===================================================== */

.heroSection {
  min-height: 100svh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  background:
    linear-gradient(
      rgba(4, 10, 25, 0.82),
      rgba(4, 10, 25, 0.9)
    ),
    url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80');

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.heroOverlay {
  width: 100%;
  padding: 120px 20px;
}

.heroTitle {
  font-size: clamp(2.5rem, 7vw, 4.5rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 30px;
}

.heroTitle span {
  color: #facc15;
}

.heroText {
  max-width: 850px;
  margin: auto;
  color: #ffffff;
  font-size: 1.2rem;
  line-height: 1.9;
}

.heroButtons {
  margin-top: 40px;
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

/* =====================================================
   GLASSMORPHISM
===================================================== */

.glassCard {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);

  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  border-radius: 22px;

  box-shadow:
    0 10px 35px rgba(0, 0, 0, 0.25);

  transition: all 0.3s ease-in-out;
}

.glassCard:hover {
  transform: translateY(-4px);
}

.glassInnerCard {
  background: rgba(255, 255, 255, 0.06);

  border: 1px solid rgba(
    255,
    255,
    255,
    0.12
  );

  border-radius: 18px;

  transition: all 0.3s ease-in-out;
}

.glassInnerCard:hover {
  transform: translateY(-2px);
}

/* =====================================================
   CORE SERVICES
===================================================== */

.serviceCard {
  position: relative;

  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 35px 25px;

  text-align: center;

  cursor: pointer;

  border-radius: 28px;

  background: rgba(
    255,
    255,
    255,
    0.08
  );

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  border: 1px solid rgba(
    255,
    255,
    255,
    0.18
  );

  box-shadow:
    0 10px 40px rgba(
      0,
      0,
      0,
      0.3
    ),
    inset 0 1px 0 rgba(
      255,
      255,
      255,
      0.2
    );

  transition: all 0.4s ease;

  overflow: hidden;
}

.serviceCard::before {
  content: '';

  position: absolute;

  width: 180px;
  height: 180px;

  border-radius: 50%;

  background: rgba(
    255,
    255,
    255,
    0.12
  );

  filter: blur(40px);

  top: -60px;
  right: -60px;
}

.serviceCard:hover {
  transform:
    translateY(-12px)
    scale(1.02);

  border-color: rgba(
    255,
    180,
    220,
    0.5
  );

  box-shadow:
    0 20px 50px rgba(
      255,
      105,
      180,
      0.18
    ),
    0 0 40px rgba(
      255,
      105,
      180,
      0.12
    );
}


.serviceIcon {
  font-size: 65px;

  margin-bottom: 20px;

  filter:
    drop-shadow(
      0 0 15px
      rgba(
        255,
        180,
        220,
        0.5
      )
    );
}

.serviceCard h4 {
  font-weight: 700;
  margin-bottom: 15px;
}

.serviceCard p {
  color: #ffffff;
  line-height: 1.7;
}

.expandText {
  margin-top: 20px;
  color: #facc15;
  font-weight: 700;
}

.serviceList {
  margin: 0;
}

.serviceList li {
  margin-bottom: 12px;
  color: #ffffff;
  line-height: 1.7;
}
.serviceDetailsCard {
  position: relative;

  background: rgba(
    255,
    255,
    255,
    0.08
  );

  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);

  border: 1px solid rgba(
    255,
    255,
    255,
    0.18
  );

  border-radius: 30px;

  box-shadow:
    0 15px 45px rgba(
      0,
      0,
      0,
      0.35
    ),
    inset 0 1px 0 rgba(
      255,
      255,
      255,
      0.18
    );

  overflow: hidden;

  animation: fadeUp .4s ease;
}
.serviceDetailsCard::before {
  content: '';

  position: absolute;

  width: 300px;
  height: 300px;

  border-radius: 50%;

  background: rgba(
    255,
    105,
    180,
    0.15
  );

  filter: blur(70px);

  top: -120px;
  right: -100px;
}

.serviceDetailsCard:hover {
  transform: translateY(-4px);

  border-color: rgba(250, 204, 21, 0.25);

  box-shadow:
    0 15px 45px rgba(0, 0, 0, 0.45),
    0 0 20px rgba(250, 204, 21, 0.08);
}

.serviceDetailsCard h4 {
  color: #facc15;
  font-weight: 700;
  margin-bottom: 20px;
}

.serviceDetailsCard ul {
  margin-bottom: 0;
}

.serviceDetailsCard li {
  color: #ffffff;
  margin-bottom: 12px;
  line-height: 1.8;
}

/* =====================================================
   LANGUAGE SUPPORT
===================================================== */

.darkSection {
  position: relative;
  overflow: hidden;

  background:
    radial-gradient(
      circle at 80% 30%,
      rgba(255, 105, 180, 0.22),
      transparent 25%
    ),
    radial-gradient(
      circle at 20% 80%,
      rgba(255, 120, 200, 0.18),
      transparent 20%
    ),
    linear-gradient(
      135deg,
      #05020a 0%,
      #18040f 40%,
      #3d0a22 100%
    );
}

.darkSection::before {
  content: '';

  position: absolute;

  width: 420px;
  height: 420px;

  border-radius: 50%;

  background: rgba(
    255,
    120,
    180,
    0.22
  );

  filter: blur(60px);

  top: -100px;
  right: -100px;
}

.darkSection::after {
  content: '';

  position: absolute;

  width: 220px;
  height: 220px;

  border-radius: 50%;

  background: rgba(
    255,
    140,
    190,
    0.18
  );

  filter: blur(40px);

  bottom: 20px;
  left: 10%;
}

.languageTabs {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.languageBtn {
  border: none;

  padding: 12px 28px;

  border-radius: 50px;

  background: #1f2937;

  color: white;

  font-weight: 600;

  transition: all 0.3s ease-in-out;
}

.languageBtn:hover {
  background: #374151;
  transform: translateY(-2px);
}

.activeLanguageBtn {
  background: #facc15;
  color: #000;
}

.moduleCard {
  height: 100%;

  background: rgba(
    255,
    255,
    255,
    0.06
  );

  border: 1px solid rgba(
    255,
    255,
    255,
    0.08
  );

  border-radius: 16px;

  padding: 20px;

  text-align: center;

  font-weight: 600;

  transition: all 0.3s ease-in-out;
  color: #ffffff;
}

.moduleCard:hover {
  transform: translateY(-5px);

  background: rgba(
    255,
    255,
    255,
    0.1
  );
}

/* =====================================================
   TEXT
===================================================== */

h1,
h2,
h3,
h4,
h5,
h6 {
  color: white;
}

p {
  color: #d6deeb;
}

/* =====================================================
   ANIMATION
===================================================== */

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(25px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.serviceCard,
.glassCard,
.moduleCard {
  animation: fadeUp 0.5s ease;
}

/* =====================================================
   RESPONSIVE
===================================================== */

@media (max-width: 992px) {
  .heroTitle {
    font-size: 3.4rem;
  }

  .sectionTitle {
    font-size: 2.4rem;
  }

  .sectionPadding {
    padding: 80px 0;
  }
}

@media (max-width: 768px) {
  .heroTitle {
    font-size: 2.6rem;
  }

  .heroText {
    font-size: 1rem;
  }

  .sectionTitle {
    font-size: 2rem;
  }

  .heroButtons {
    flex-direction: column;
    align-items: center;
  }

  .languageBtn {
    width: 100%;
    max-width: 260px;
  }

  .sectionPadding {
    padding: 70px 0;
  }
}

@media (max-width: 480px) {
  .heroTitle {
    font-size: 2.1rem;
  }

  .sectionTitle {
    font-size: 1.7rem;
  }

  .serviceCard {
    padding: 28px 20px;
  }

  .glassCard {
    padding: 20px;
  }
}
  /* =====================================================
   STUDY DESTINATIONS
===================================================== */

.destinationSection {
  position: relative;
}

.destinationTabs {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.destinationBtn {
  border: none;
  padding: 14px 26px;
  border-radius: 50px;
  background: #1f2937;
  color: white;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
}

.destinationBtn:hover {
  transform: translateY(-3px);
  background: #374151;
}

.activeDestination {
  background: #facc15;
  color: #000;
  box-shadow: 0 10px 25px rgba(250, 204, 21, 0.3);
}

/* =====================================================
   UNIVERSITY CARD
===================================================== */

.universityCard {
  background: linear-gradient(
    145deg,
    rgba(17, 24, 39, 0.95),
    rgba(30, 41, 59, 0.95)
  );

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 24px;

  padding: 24px;

  cursor: pointer;

  transition: all 0.3s ease-in-out;
}

.universityCard:hover {
  transform: translateY(-6px);

  border-color: rgba(250, 204, 21, 0.35);

  box-shadow:
    0 15px 40px rgba(
      250,
      204,
      21,
      0.12
    );
}

.universityCard h4 {
  margin: 0;
  font-weight: 700;
}

.expandIcon {
  font-size: 28px;
  font-weight: 700;
  color: #facc15;
}

/* =====================================================
   DEGREE BUTTONS
===================================================== */

.degreeBtn {
  border: none;

  padding: 12px 22px;

  border-radius: 12px;

  background: rgba(
    255,
    255,
    255,
    0.08
  );

  color: white;

  font-weight: 600;

  transition: all 0.3s ease-in-out;
}

.degreeBtn:hover {
  transform: translateY(-2px);

  background: rgba(
    255,
    255,
    255,
    0.15
  );
}

.activeDegreeBtn {
  background: #facc15;
  color: black;
}

.degreeDetails {
  animation: fadeUp 0.4s ease;
}

.degreeDetails ul {
  margin-bottom: 0;
}

.degreeDetails li {
  margin-bottom: 10px;
  line-height: 1.7;
  color: #ffffff;
}

/* =====================================================
   SCORE BADGE
===================================================== */

.scoreBadge {
  display: inline-block;

  padding: 12px 18px;

  border-radius: 12px;

  background: rgba(
    250,
    204,
    21,
    0.15
  );

  border: 1px solid rgba(
    250,
    204,
    21,
    0.3
  );

  color: #facc15;

  font-weight: 700;
}

/* =====================================================
   PARTNER CARD
===================================================== */

.partnerCard {
  max-width: 900px;

  background: rgba(
    255,
    255,
    255,
    0.07
  );

  border: 1px solid rgba(
    255,
    255,
    255,
    0.12
  );

  backdrop-filter: blur(12px);

  border-radius: 28px;

  padding: 45px;

  text-align: center;

  transition: all 0.3s ease-in-out;
}

.partnerCard:hover {
  transform: translateY(-5px);
}

.partnerLogo {
  width: 100%;
  max-width: 220px;
  object-fit: contain;
  margin-bottom: 25px;
}

.partnerCard h3 {
  margin-bottom: 15px;
}

.partnerStats {
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-top: 35px;
  flex-wrap: wrap;
}

.statBox {
  min-width: 140px;

  background: rgba(
    255,
    255,
    255,
    0.08
  );

  border-radius: 18px;

  padding: 20px;
}

.statBox h4 {
  color: #facc15;
  font-size: 28px;
  margin-bottom: 5px;
}

.statBox span {
  color: #ffffff;
}


/* =====================================
   SCHOLARSHIP SECTION
===================================== */

.scholarshipCard {
  background: rgba(255,255,255,.07);
  border: 1px solid rgba(255,255,255,.12);
  backdrop-filter: blur(12px);

  border-radius: 24px;
  padding: 30px;

  transition: all .3s ease-in-out;
}

.scholarshipCard:hover {
  transform: translateY(-10px);

  border-color: rgba(
    250,
    204,
    21,
    .4
  );

  box-shadow:
    0 15px 40px rgba(
      250,
      204,
      21,
      .15
    );
}

.scholarshipIcon {
  font-size: 55px;
  margin-bottom: 20px;
}

.coverageBadge {
  display: inline-block;

  background: rgba(
    250,
    204,
    21,
    .15
  );

  color: #facc15;

  border-radius: 12px;

  padding: 10px 16px;

  font-weight: 700;
}

.criteriaWrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.criteriaBadge {
  background: rgba(
    255,
    255,
    255,
    .08
  );

  border-radius: 10px;

  padding: 8px 12px;

  font-size: 14px;
  color: #ffffff;
}

/* =====================================
   SUCCESS TIMELINE
===================================== */

.successTimelineWrapper {
  position: relative;
}

.successTimelineLine {
  position: absolute;

  top: 45px;
  left: 0;
  right: 0;

  height: 4px;

  background: linear-gradient(
    90deg,
    #facc15,
    #f59e0b
  );

  z-index: 0;
}

.successStepCard {
  position: relative;
  z-index: 1;

  background: rgba(255,255,255,.07);

  border: 1px solid rgba(
    255,
    255,
    255,
    .1
  );

  border-radius: 24px;

  padding: 30px;

  text-align: center;

  transition: all .3s ease-in-out;
}

.successStepCard:hover {
  transform: translateY(-8px);
}

.successStepNumber {
  width: 80px;
  height: 80px;

  margin: auto auto 20px;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #facc15;

  color: black;

  font-size: 24px;
  font-weight: 800;
}

.successStepCard h5 {
  margin-bottom: 15px;
}

.successStepCard p {
  color: #ffffff;
}

@media (max-width: 992px) {
  .successTimelineLine {
    display: none;
  }
}
  
/* =====================================================
   TIMELINE
===================================================== */

.timelineWrapper {
  position: relative;
}

.timelineLine {
  position: absolute;

  top: 55px;
  left: 0;
  right: 0;

  height: 4px;

  background: linear-gradient(
    90deg,
    #facc15,
    #f59e0b
  );

  z-index: 0;
}

.timelineGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  position: relative;
  z-index: 1;
}

.timelineCard {
  background: rgba(
    255,
    255,
    255,
    0.08
  );

  border: 1px solid rgba(
    255,
    255,
    255,
    0.1
  );

  border-radius: 22px;

  padding: 30px;

  text-align: center;

  transition: all 0.3s ease-in-out;
}

.timelineCard:hover {
  transform: translateY(-8px);
}

.timelineNumber {
  width: 70px;
  height: 70px;

  margin: auto auto 20px;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #facc15;

  color: black;

  font-size: 24px;
  font-weight: 800;
}

/* =====================================================
   FAQ
===================================================== */

.faqAccordion {
  max-width: 1000px;
  margin: auto;
}

.faqAccordion .accordion-item {
  background: rgba(
    255,
    255,
    255,
    0.06
  );

  border: 1px solid rgba(
    255,
    255,
    255,
    0.08
  );

  margin-bottom: 15px;

  border-radius: 16px !important;

  overflow: hidden;
}

.faqAccordion .accordion-button {
  background: transparent;
  color: white;
  font-weight: 600;
  box-shadow: none;
}

.faqAccordion .accordion-button:not(.collapsed) {
  background: rgba(
    250,
    204,
    21,
    0.08
  );

  color: #facc15;
}

.faqAccordion .accordion-body {
  color: #ffffff;
  line-height: 1.8;
}

.faqAccordion .accordion-button::after {
  filter: invert(1);
}

/* =====================================================
   CTA
===================================================== */

.ctaSection {
  padding: 130px 20px;

  background:
    linear-gradient(
      135deg,
      #0f172a,
      #111827,
      #000000
    );

  text-align: center;
}

.ctaSection h1 {
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 20px;
}

.ctaSection p {
  max-width: 700px;
  margin: auto;
  color: #ffffff;
  font-size: 1.1rem;
}

/* =====================================================
   EXTRA HOVER EFFECTS
===================================================== */

.partnerCard,
.universityCard,
.timelineCard,
.degreeBtn,
.destinationBtn {
  transition: all 0.3s ease-in-out;
}

/* =====================================================
   RESPONSIVE
===================================================== */

@media (max-width: 1200px) {
  .timelineGrid {
    grid-template-columns: repeat(2, 1fr);
  }

  .timelineLine {
    display: none;
  }
}

@media (max-width: 768px) {
  .timelineGrid {
    grid-template-columns: 1fr;
  }

  .partnerStats {
    flex-direction: column;
    align-items: center;
  }

  .partnerCard {
    padding: 30px 20px;
  }

  .destinationBtn {
    width: 100%;
  }

  .degreeBtn {
    width: 100%;
  }

  .ctaSection h1 {
    font-size: 2.2rem;
  }
}

@media (max-width: 576px) {
  .universityCard {
    padding: 20px;
  }

  .glassInnerCard {
    padding: 20px !important;
  }

  .timelineCard {
    padding: 22px;
  }

  .scoreBadge {
    display: block;
    width: 100%;
    text-align: center;
  }

  .ctaSection {
    padding: 90px 20px;
  }

  .ctaSection h1 {
    font-size: 1.8rem;
  }

}
  .servicesPage,
.servicesPage p,
.servicesPage li,
.servicesPage span,
.servicesPage h1,
.servicesPage h2,
.servicesPage h3,
.servicesPage h4,
.servicesPage h5,
.servicesPage h6,
.servicesPage label,
.servicesPage small,
.servicesPage div {
  color: #ffffff;
}
`}</style>
    </>
  )
}
