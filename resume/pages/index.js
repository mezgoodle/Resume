import HeroComponent from "../components/hero";

export default function Home() {
  return (
    <div>
      <div id="container--main">
        <HeroComponent />

        <section className="section--page">
          <div id="socials--list">
            <a href="https://youtube.com/c/dennisivy" target="_blank">
              Youtube
            </a>
            <a href="https://twitter.com/dennisivy11" target="_blank">
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/dennis-ivanov/"
              target="_blank"
            >
              Linkedin
            </a>
            <a href="https://github.com/divanov11" target="_blank">
              Github
            </a>
            <a href="./assets/resume.pdf" target="_blank">
              Download Resume
            </a>
          </div>
        </section>

        <section className="section--page">
          <h2>Skills & Qualifications</h2>
          <ul id="qualifications--list">
            <li>✔️ 7 Years experience with front & backend development</li>
            <li>✔️ Extensive knowledge in API & Database Design.</li>
            <li>
              ✔️ Experienced content creator on YouTube & community leader{" "}
            </li>
            <li>✔️ 7 Years experience with running Adwords campaigns & SEO</li>
          </ul>
        </section>

        <section className="section--page">
          <h2>Tech stack</h2>

          <div id="wrapper--techstack__items">
            <div className="card--techstack">
              <span>Python, JavaScript, NodeJS</span>
            </div>
            <div className="card--techstack">
              <span>Django, Express, Flask, FastAPI</span>
            </div>
            <div className="card--techstack">
              <span>React, Next JS</span>
            </div>
            <div className="card--techstack">
              <span>Postgres, MongoDB, MySQL</span>
            </div>
          </div>
        </section>

        <section id="work-history-wrapper" className="section--page">
          <h2>Work History</h2>

          <div className="line-break"></div>
          <div className="card--work-history">
            <strong>🚧 DEVELOPER ADVOCATE | AGORA.IO</strong>
            <p>11/2021 - Present</p>
            <p>
              Worked on making Agora’s Web Based SDK more accessible through
              video tutorials, articles, demo projects and event based training.
              Also building out React UI components & leading a team to
              re-design Agora’s documentation and api reference.
            </p>
            <ul>
              <li>
                Doubled Web SDK’s monthly usage minutes from 15 million to 30
                million minutes within my first 4 months
              </li>
              <li>
                Produced educational video content which resulted in 300k+ views
                on youtube
              </li>
              <li>
                Produced SEO campaigns and content to gain market share for
                related keywords.
              </li>
            </ul>
          </div>

          <div className="line-break"></div>

          <div className="card--work-history">
            <strong>🚧 INSTRUCTOR | YOUTUBE, UDEMY, TEACHABLE</strong>
            <p>11/2019 - Present</p>
            <p>
              Produced content showcasing new tech, tutorials & interviews with
              top developers.
            </p>
            <ul>
              <li>166,000+ Youtube Subscribers</li>
              <li>30,000 course copies sold</li>
              <li>12+ Million views on Youtube</li>
              <li>
                Made regular contributions to Traversy Medias youtube channel
                (1.9m Subscribers)
              </li>
              <li>
                Tutorial videos included projects such as social networks,
                Ecommerce, real time video, stripe & paypal integrations and
                more{" "}
              </li>
            </ul>
          </div>

          <div className="line-break"></div>

          <div className="card--work-history">
            <strong>🚧 SENIOR DEVELOPER | FOI LABS</strong>
            <p>10/2017 - 10/2019</p>
            <p>
              Designed and developed a laboratory management system. My system
              provided an interface for lab technicians and customers to view
              and track data from samples tested in the lab.
            </p>
            <ul>
              <li>
                Designed prototype & pitched original idea for new lab
                management system (LIMS)
              </li>
              <li>
                Built entire code base and brought version 1 of LIMS system to
                market as a solo developer
              </li>
              <li>Onboarded and trained customers (Webinars & Conferences)</li>
              <li>
                Managed a small team of developers in expansion of LIMS system
              </li>
            </ul>
          </div>

          <div className="line-break"></div>

          <div className="card--work-history">
            <strong>🚧 DIGITAL MARKETER | UNIFIVE DIGITAL</strong>
            <p>2014 - 2017</p>
            <p>
              Started a digital agency building websites and marketing for local
              businesses. Mostly Wordpress sites with small modifications to
              themes.
            </p>
            <ul>
              <li>
                Organized SEO & SEM campaigns on a local and global scale.
              </li>
              <li>
                Saved a customer $110k a year by reducing Adwords CPC cost with
                optimization
              </li>
              <li>
                70 + websites built with my small team of developers and
                freelancers
              </li>
            </ul>
          </div>
        </section>

        <section className="section--page">
          <h2>Projects & Accomplishments</h2>

          <div className="card--project">
            <a href="project1.html">
              <span>🏆 </span>Built a Laboratory management system for forensics
              lab
            </a>
          </div>

          <div className="card--project">
            <a href="project1.html">
              <span>🏆 </span>Documentation website - Lead team to re-build docs
              for agora.io
            </a>
          </div>

          <div className="card--project">
            <a href="project1.html">
              <span>🏆 </span>Ecommerce platform using paypal and stripe API for
              payment integration
            </a>
          </div>

          <div className="card--project">
            <a href="project1.html">
              <span>🏆 </span>Social Network - open source project
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
