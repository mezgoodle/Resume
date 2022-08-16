export default function StackComponent() {
  return (
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
  );
}
