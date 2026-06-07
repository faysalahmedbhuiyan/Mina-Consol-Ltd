import { useState } from 'react'
import SafeImage from '../components/SafeImage'
import logo from '../assets/logo.jpeg'
import Skorea from '../assets/south korea.jpeg'
import UK from '../assets/UK.jpeg'
import USA from '../assets/USA.jpeg'
import Russia from '../assets/Russia.jpeg'
import KNU from '../assets/KNU.jpeg'

export default function Home () {
  const [activeCountry, setActiveCountry] = useState(null)
  const [activeScholarship, setActiveScholarship] = useState(null)
  const [activeUni, setActiveUni] = useState(null)

  const whatsappNumber = '8801XXXXXXXXX'
  const email = 'minaconsol.official@gmail.com'

  const countries = [
    {
      name: 'South Korea',
      image: Skorea,
      flag: '🇰🇷',
      programs: ['Korean Language', 'Bachelor', 'Master', 'PhD', 'Medical']
    },
    {
      name: 'United Kingdom',
      image: UK,
      flag: '🇬🇧',
      programs: ['Foundation', 'Bachelor', 'Master', 'PhD']
    }
  ]

  const scholarships = [
    {
      title: 'Merit Scholarship',
      desc: 'Based on academic performance and IELTS score'
    },
    {
      title: 'Need Based Scholarship',
      desc: 'Financial assistance for eligible students'
    },
    {
      title: 'University Grant',
      desc: 'Direct university funding support'
    }
  ]

  const universities = [
    {
      name: 'Kyungpook National University',
      image: KNU,
      country: 'South Korea',
      students: [
        {
          name: 'Rahim Ahmed',
          ielts: 'IELTS 6.5',
          applied: 'Applied 2024',
          visa: 'Visa Approved',
          status: 'Studying Computer Science',
          Comment: 'This Agency change my life with alot of joy.'
        },
        {
          name: 'Faysal Ahmed BHuiyan',
          ielts: 'IELTS 7',
          applied: 'Applied 2022',
          visa: 'Visa Approved',
          status: 'Studying Computer Science',
          Comment:
            'I love this agency. Mainly the person named Mina. They are realy good person.'
        }
      ]
    },
    //Unknown university
    {
      name: 'Kyungpook National University',
      image: KNU,
      country: 'South Korea',
      students: [
        {
          name: 'Rahim Ahmed',
          ielts: 'IELTS 6.5',
          applied: 'Applied 2024',
          visa: 'Visa Approved',
          status: 'Studying Computer Science',
          Comment: 'This Agency change my life with alot of joy.'
        },
        {
          name: 'Faysal Ahmed BHuiyan',
          ielts: 'IELTS 7',
          applied: 'Applied 2022',
          visa: 'Visa Approved',
          status: 'Studying Computer Science',
          Comment:
            'I love this agency. Mainly the person Fahmina. They are realy good person.'
        }
      ]
    }
  ]

  return (
    <div className='homeDark'>
      {/* ================= HERO ================= */}
      <section className='hero'>
        <div className='heroOverlay'></div>

        <div className='container heroContent'>
          <h1>
            Build Your <span>Global Future</span> With Confidence
          </h1>

          <p>
            We guide students to South Korea, UK, USA & Russia with complete
            admission, visa and scholarship support.
          </p>

          <div className='btnGroup'>
            <a
              className='btn btnWarning'
              href={`https://wa.me/${whatsappNumber}`}
              target='_blank'
            >
              Free Consultation (WhatsApp)
            </a>

            <a
              className='btn btnOutline'
              href='https://mail.google.com/mail/?view=cm&fs=1&to=minaconsol.official@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              Book Consultant (Email)
            </a>
          </div>
        </div>

        {/* WORLD MAP BACKGROUND */}
        <div className='worldGlow'></div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className='section dark'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-7'>
              <h2>About Mina Consol Ltd</h2>

              <p>
                Mina Consol Ltd is a modern international education consultancy
                dedicated to helping ambitious students pursue higher education
                opportunities across South Korea, the United Kingdom, the United
                States, Russia, and other leading destinations.
              </p>

              <p>
                Through transparent processing, expert counselors, personalized
                university selection, scholarship guidance, and end-to-end visa
                support.
              </p>
            </div>

            <div className='col-lg-5'>
              <div className='logoBox'>
                <SafeImage
                  src={logo}
                  fallbackText='Mina Consol Ltd'
                  alt='logo'
                  className='companyLogo'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COUNTRIES ================= */}
      <section className='section dark2'>
        <div className='container'>
          <h2 className='title'>Best Study Destinations</h2>

          <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
            {countries.map((c, i) => (
              <div className='col' key={i}>
                <div
                  className='card'
                  onClick={() =>
                    setActiveCountry(activeCountry === i ? null : i)
                  }
                >
                  <SafeImage src={c.image} fallbackText={c.name} alt={c.name} />

                  <h3>
                    {c.flag} {c.name}
                  </h3>
                </div>

                {activeCountry === i && (
                  <div className='expandCard'>
                    <h4>Programs</h4>
                    <ul>
                      {c.programs.map((p, j) => (
                        <li key={j}>{p}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SCHOLARSHIP ================= */}
      <section className='section dark'>
        <div className='container'>
          <h2 className='title'>Scholarships & Intakes</h2>

          <div className='grid'>
            {scholarships.map((s, i) => (
              <div
                key={i}
                className='card small'
                onClick={() =>
                  setActiveScholarship(activeScholarship === i ? null : i)
                }
              >
                <h3>{s.title}</h3>

                {activeScholarship === i && <p>{s.desc}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= UNIVERSITIES + SUCCESS ================= */}
      <section className='section dark2'>
        <div className='container'>
          <h2 className='title'>Universities & Student Success</h2>

          <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
            {universities.map((u, i) => (
              <div className='col' key={i}>
                <div
                  className='card'
                  onClick={() => setActiveUni(activeUni === i ? null : i)}
                >
                  <SafeImage src={u.image} fallbackText={u.name} />
                  <h3>{u.name}</h3>
                  <small>{u.country}</small>
                </div>

                {activeUni === i && (
                  <div className='expandCard'>
                    {u.students.map((s, j) => (
                      <div className='studentBox' key={j}>
                        <h5>{s.name}</h5>

                        <div className='studentMeta'>
                          {s.ielts} • {s.applied}
                        </div>

                        <ul>
                          <li>{s.visa}</li>
                          <li>{s.status}</li>
                          <li>{s.comment}</li>
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STYLE ================= */}
      <style>{`
        .homeDark{
          background:
          radial-gradient(
            circle at top right,
            rgba(250,204,21,.12),
            transparent 25%
          ),

          radial-gradient(
            circle at bottom left,
            rgba(255,255,255,.05),
            transparent 30%
          ),

          linear-gradient(
            135deg,
            #020617 0%,
            #0f172a 30%,
            #111827 65%,
            #0b1120 100%
          );

          color:white;
        }

         .hero{
        min-height:100vh;

        display:flex;
        align-items:center;
        justify-content:center;

        position:relative;

        overflow:hidden;

        background:
        linear-gradient(
          135deg,
          #020617,
          #0f172a,
          #111827
        );
      }

      .hero::before{
          content:'';

          position:absolute;

          inset:0;

          background:url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg');

          background-size:cover;
          background-position:center;

          opacity:.08;

          animation:floatMap 20s linear infinite;
        }
          
        .heroOverlay{
          position:absolute;
          inset:0;
          background:radial-gradient(circle,#facc1520,transparent);
        }

        .worldGlow{
          position:absolute;
          width:600px;
          height:600px;
          background:radial-gradient(circle,#facc1530,transparent);
          border-radius:50%;
          filter:blur(80px);
        }

        .heroContent{
        position:relative;
        z-index:2;

        max-width:900px;

        text-align:center;

        margin:auto;
      }
        .heroContent p{
          max-width:700px;

          margin:20px auto;

          font-size:20px;

          color:#cbd5e1;
        }

        .hero h1{
          font-size:60px;
          font-weight:900;
        }

        .hero span{
          color:#facc15;
        }

        .btnGroup{
          margin-top:25px;
          display:flex;
          gap:15px;
          justify-content:center;
          flex-wrap:wrap;
        }

        .btn{
          padding:12px 25px;
          border-radius:30px;
          text-decoration:none;
          font-weight:700;
        }

        .btnWarning,
          .btnOutline{
            transition:
            all .35s ease;
          }

          .btnWarning:hover{
            transform:
            translateY(-4px);

            box-shadow:
            0 15px 35px rgba(250,204,21,.35);
          }

          .btnOutline:hover{
            transform:
            translateY(-4px);

            background:white;

            color:#111827;
          }

        .section{
          padding:90px 0;
        }

        .dark{
          background:
          linear-gradient(
            135deg,
            #020617 0%,
            #0f172a 45%,
            #111827 100%
          );
        }

        .dark2{
          background:
          linear-gradient(
            135deg,
            #111827 0%,
            #1e293b 50%,
            #0f172a 100%
          );
        }

        .title{
          text-align:center;

          margin-bottom:60px;

          font-size:48px;

          font-weight:900;

          color:white;
        }

        .title::after{
          content:'';

          display:block;

          width:90px;
          height:4px;

          margin:15px auto 0;

          background:#facc15;

          border-radius:50px;
        }

        .grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
          gap:20px;
        }

        .col-lg-7 h2{
          font-size:48px;
          font-weight:900;
          margin-bottom:25px;
        }

        .col-lg-7 p{
          color:#cbd5e1;
          line-height:1.9;
          font-size:17px;
        }

        .card img{
          width:100%;
          height:220px;

          object-fit:cover;

          border-radius:
          24px 24px 0 0;
        }
          
        .card{
          background: rgba(255,255,255,.92);

          border:1px solid rgba(255,255,255,.7);

          backdrop-filter:blur(20px);

          color:#111827;

          border-radius:24px;

          overflow:hidden;

          transition:.4s ease;

          box-shadow:
          0 15px 40px rgba(0,0,0,.25);
        }
        
        .card h3{
          color:#111827;
          font-weight:800;

          padding:
          20px 24px 5px;
        }

        .card small{
          color:#64748b;

          padding:
          0 24px 20px;

          display:block;
        }

        .card p,
        .card li{
          color:#334155;
        }
        .card:hover{
          transform:translateY(-10px);

          border-color:#facc15;

          box-shadow:
          0 20px 50px rgba(250,204,21,.15);
        }

        .small{
          text-align:center;
        }

          
        .expandCard{
          margin-top:15px;

          background:
          linear-gradient(
            135deg,
            rgba(17,24,39,.95),
            rgba(15,23,42,.95)
          );

          border:
          1px solid rgba(250,204,21,.15);

          border-radius:18px;

          padding:20px;

          color:#e5e7eb;

          animation:fadeIn .3s ease;
        }

        

           .logoBox{
            width:320px;
            height:320px;

            display:flex;
            align-items:center;
            justify-content:center;

            padding:25px;

            background:rgba(255,255,255,.04);

            border:1px solid rgba(250,204,21,.12);

            border-radius:30px;

            backdrop-filter:blur(12px);

            box-shadow:
            0 20px 50px rgba(0,0,0,.25);

            animation:slideInRight 2s ease-in-out;
          }
            @keyframes slideInRight{

          from{
            opacity:0;
            transform:translateX(120px);
          }

          to{
            opacity:1;
            transform:translateX(0);
          }

        }

        .logoBox:hover{
          transform:translateY(-8px);

          box-shadow:
          0 25px 60px rgba(250,204,21,.20);

          transition:.4s;
        }

      .companyLogo{
        width:100%;
        max-width:220px;

        object-fit:contain;

        filter:
        drop-shadow(0 0 15px rgba(250,204,21,.15))
        drop-shadow(0 0 30px rgba(250,204,21,.08));
      }
        
          
          @media(max-width:768px){

          
          .logoBox{
            animation:
            slideInRight 2s ease-in-out;
          }

          .companyLogo{
            max-width:180px;
          }
        }
          .studentBox{
  background:white;

  border-radius:14px;

  padding:18px;

  margin-top:12px;
}

.studentBox h5{
  color:#111827;
  font-weight:800;
}

.studentMeta{
  color:#64748b;
  font-size:14px;

  margin-bottom:10px;
}

.studentBox ul{
  margin:0;
  padding-left:18px;
}

.studentBox li{
  color:#334155;
}
      `}</style>
    </div>
  )
}
