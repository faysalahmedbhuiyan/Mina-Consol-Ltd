import { useEffect, useState } from 'react'

export default function GlobalBar () {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <div className='globalBar'>
        <div className='container'>
          <div className='globalBarWrap'>
            <div className='globalLeft'>
              Premium Student Consultancy Services
            </div>

            {!isMobile && (
              <div className='globalRight'>
                Future: A Member of Faymina Group
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`

.globalBar{

background:
linear-gradient(
90deg,
#020617,
#0f172a,
#111827
);

border-bottom:
1px solid rgba(255,255,255,.08);

padding:10px 0;

position:relative;

z-index:99999;

overflow:hidden;

}

/* PREMIUM GLOW */

.globalBar::before{

content:'';

position:absolute;

top:-40px;
left:-40px;

width:140px;
height:140px;

background:
rgba(250,204,21,.12);

filter:blur(60px);

border-radius:50%;

}

.globalBar::after{

content:'';

position:absolute;

right:-50px;
bottom:-50px;

width:160px;
height:160px;

background:
rgba(59,130,246,.12);

filter:blur(70px);

border-radius:50%;

}

.globalBarWrap{

display:flex;

justify-content:space-between;

align-items:center;

gap:20px;

position:relative;

z-index:2;

}

/* LEFT TEXT */

.globalLeft{

color:#f8fafc;

font-size:14px;

font-weight:600;

letter-spacing:.5px;

}

/* RIGHT TEXT */

.globalRight{

color:#cbd5e1;

font-size:13px;

font-weight:500;

}

/* MOBILE */

@media(max-width:767px){

.globalBar{

padding:12px 0;

}

.globalBarWrap{

justify-content:center;

text-align:center;

}

.globalLeft{

font-size:12px;

line-height:1.6;

}

}

/* SMALL MOBILE */

@media(max-width:480px){

.globalLeft{

font-size:11px;

padding:0 5px;

}

}

`}</style>
    </>
  )
}
