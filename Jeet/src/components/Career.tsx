import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Team Leader — Testing</h4>
                <h5>SLK · Gurugram</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Leading QA testing initiatives with Playwright and TypeScript.
              Driving quality strategy and test automation at enterprise scale.
              Collaborating with cross-functional teams to ensure release readiness.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Asst. Manager — Product QA</h4>
                <h5>Rezolve.AI · Dehradun</h5>
              </div>
              <h3>2023–26</h3>
            </div>
            <p>
              Owned end-to-end QA strategy, test planning, and release sign-off
              for SaaS ITSM &amp; Asset Management products. Built Playwright
              automation framework (TS/JS) with Page Object Model — 70%+
              coverage. Reduced defect leakage by 35–40%. Configured CI/CD
              pipelines in Jenkins &amp; GitHub Actions, reducing feedback time
              by ~50%. Mentored 13-member QA team on Playwright adoption.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Tester → Senior → Lead</h4>
                <h5>Rezolve.AI · Dehradun</h5>
              </div>
              <h3>2017–23</h3>
            </div>
            <p>
              Progressed through 3 promotions over 6 years — manual testing to
              leading QA delivery &amp; automation strategy. Transitioned to Playwright
              automation from 2020, building the initial framework and regression
              suites. Designed automation-first regression strategies with CI/CD,
              reducing manual effort by 25–30%. Tracked 500+ defects in JIRA.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sr. Customer Service</h4>
                <h5>Firstsource Solutions · Jalandhar</h5>
              </div>
              <h3>2016–17</h3>
            </div>
            <p>
              Tested enterprise software platforms for UK/US clients, performing
              functional and regression testing. Improved service quality scores
              by 15–20% through systematic quality audits, defect tracking, and
              root cause analysis. Built quality dashboards and trend reports.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
