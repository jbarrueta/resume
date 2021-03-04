import "./Resume.css";

export default function Resume() {
  return (
    <div className="Resume mh4 mt5 pa2 pb4 white-80">
      <div className="flex justify-around">
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
        <p className="f4 mt0 mb2">St. Edwards University - Austin, TX</p>
        <ul>
          <li className="pb1 f4">Graduating in Fall 2021</li>
          <li className="pb1 f4">Dean's List all semesters</li>
          <li className="pb1 f4">Dean's Excellence Scholarship</li>
        </ul>
      </ul>
      <h2 className="tc pa2 mt5 f2 bt bw3">Experience</h2>
      <ul>
        <li className="b f3">Web Developer</li>
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
            Assist in configuring new laptops and any computer issues employees
            may have, remotely with use of TeamViewer.
          </li>
          <li className="pb1 f4">
            Administered new email accounts for employees.
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
            Review design project structures and sequences
          </li>
          <li className="pb1 f4">
            Compile data into a central database, build Restful-API using Django
          </li>
          <li className="pb1 f4">
            Create user-friendly spreadsheet for easy access to main data points
          </li>
          <li className="pb1 f4">
            Work with team members to extract relevant information to
            expression/binding
          </li>
        </ul>
      </ul>
    </div>
  );
}
