import "./Resume.css";

export default function Resume({ isMobile }) {
  return (
    <div className="Resume mh4 mt5 pa2 pb4 white-80">
      <div className="flex justify-around flex-wrap">
        {!isMobile && (
          <div className="br bw3 w-50">
            <h2 className="tc pa2 mt0 f2 bt bw3">Skills</h2>
            <ul className="flex flex-wrap">
              <li className="f4 ma4">Detail-oriented</li>
              <li className="f4 ma4">Analytical</li>
              <li className="f4 ma4">Resilient</li>
              <li className="f4 ma4">
                Bilingual - English (Fluent) & Spanish (Native Speaker)
              </li>
            </ul>
          </div>
        )}
        <div className="w-50">
          <h2 className="tc pa2 mt0 f2 bt bw3">Technologies</h2>
          <ul className="flex flex-wrap">
            <li className="f4 ma3">JavaScript</li>
            <li className="f4 ma3">ReactJS w/ Redux</li>
            <li className="f4 ma3">NodeJS</li>
            <li className="f4 ma3">JQuery</li>
            <li className="f4 ma3">Java</li>
            <li className="f4 ma3">Python</li>
            <li className="f4 ma3">Django</li>
            <li className="f4 ma3">PHP</li>
            <li className="f4 ma3">Linux</li>
            <li className="f4 ma3">DevOps</li>
            <li className="f4 ma3">MySQL</li>
            <li className="f4 ma3">MongoDB</li>
          </ul>
        </div>
      </div>
      <h2 className="tc pa2 mt1 f2 bt bw3">Education</h2>
      <ul>
        <li className="b f3">Bachelor of Science: Computer Science</li>
        <p className="f4 mt0 mb2">
          St. Edwards University - Austin, TX | Graduating Fall of 2021
        </p>
        <ul>
          <li className="pb1 f4">
            <span className="b">Honors</span>: Dean's Excellence Scholarship,
            Dean's List all semesters
          </li>
          <li className="pb1 f4 b">Relevant Coursework Experience</li>
          <ul>
            <li>
              <span className="i">Software Engineering I</span>: Gained
              experience by being part of a SCRUM team, being exposed to being a
              SCRUM master, where I led the team through technology selections
              and provided knowledge transfers of my previous knowledge with
              ReactJS and MongoDB. I took on the role of DevOps by establishing
              a steady development server on an Ubuntu droplet and implemented
              CI/CD through Bitbucket and bash scripts.
            </li>
            <li>
              <span className="i">Algorithms and Data Structures</span>: Problem
              solved using various different data structures
            </li>
            <li>
              <span className="i">Mobile Programming</span>: Built applications
              for iOS using Xcode and the swift programming language.
            </li>
          </ul>
        </ul>
      </ul>
      <h2 className="tc pa2 mt5 f2 bt bw3">Experience</h2>
      <ul>
        <li className="b f3">Software Engineering Fellow</li>
        <div className="flex justify-between mt0 mb2">
          <div className="f4">
            The Texas Tribune - Austin, TX |{"  "}
            <span className="i">Upcomming Role</span>
          </div>
          <div className="f4 mr3">August 2021 to December 2021</div>
        </div>
        <li className="b f3 mt4">Software Engineer Intern</li>
        <div className="flex justify-between mt0 mb2">
          <div className="f4 ">Macromoltek Inc. - Austin, TX / Remote</div>
          <div className="f4 mr3">May 2021 to August 2021</div>
        </div>
        <ul>
          <li className="pb1 f4">
            Built a collaborative dashboard for current and future projects
            using ReactJS with redux and Django
          </li>
          <li className="pb1 f4">
            Implemented a real-time collaboration feature, using hashes to keep
            track of changes
          </li>
          <li className="pb1 f4">
            Wrote a commenting component with ReactJS and Django backend,
            allowing coworkers to communicate next steps in real-time
          </li>
        </ul>
        <li className="b f3 mt4">Software Engineer</li>
        <div className="flex justify-between mt0 mb2">
          <div className="f4 ">EMS Serrot - El Paso, TX / Remote</div>
          <div className="f4 mr3">March 2019 to Present</div>
        </div>
        <ul>
          <li className="pb1 f4">
            Established a server through Digital Ocean and currently developing
            web applications using various technologies, including Javascript,
            React, Node JS, PHP, MySQL, and MongoDB
          </li>
          <li className="pb1 f4">
            Developed web applications for various departments of the company
            (HR applications to driver applications)
          </li>
          <li className="pb1 f4">
            Recently released an Inspections Software Solution to facilitate and
            keep record of inspections performed by the mechanics
          </li>
          <li className="pb1 f4">
            Drivers' web application for payroll has a record of over 300
            drivers and over 6000 trips on an SQL database
          </li>
          <li className="pb1 f4">
            Offer IT support to 20+ employees remotely with the use of
            TeamViewer
          </li>
          <li className="pb1 f4">Rewired network ports: 7 offices.</li>
        </ul>
        <li className="b f3 mt4">Scientific Data Curator Intern</li>
        <div className="flex justify-between mt0 mb2">
          <div className="f4 ">Macromoltek - Austin, TX / Remote</div>
          <div className="f4 mr3">June 2020 to August 2020</div>
        </div>
        <ul>
          <li className="pb1 f4">
            Established a RESTful API using Django, allowing the lab team to
            store antibody design structures and sequences into a MongoDB
            collection
          </li>
          <li className="pb1 f4">
            Evangelized the use of MongoDB as the best technology for this
            project, through independent and extensive research on the benefits
            and downfalls of MongoDB
          </li>
        </ul>
      </ul>
    </div>
  );
}
