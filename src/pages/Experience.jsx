export default function Experience() {
  const experiences = [
    {
      period: '2026 – Present',
      title: 'Quantum Machine Learning Intern',
      org: 'Research Internship',
      description:
        'Working on different compression techniques for PDF processing using quantum machine learning methods.',
    },
    {
      period: '2026 – Present',
      title: 'Member',
      org: 'GaMUverse',
      description:
        'Building a hypercasual game targeting all age groups as part of an interdisciplinary game development team.',
    },
    {
      period: 'Oct 2025',
      title: 'Team Lead',
      org: 'NASA Space Apps Challenge',
      description:
        'Led a team to develop a real-time, location-based air quality forecasting system with a health-incentivising wallet that dynamically adjusts user scores based on pollution exposure and recovery activities.',
    },
  ];

  const certifications = [
    {
      date: 'Oct 2025',
      title: 'Oracle Cloud Infrastructure 2025 Certified Data Science Professional',
      issuer: 'Oracle',
    },
    {
      date: 'Oct 2025',
      title: 'Oracle Cloud Infrastructure 2025 Certified Gen AI Professional',
      issuer: 'Oracle',
    },
  ];

  return (
    <main className="page">
      <div className="container">

        {/* ── Experience ── */}
        <section className="section">
          <p className="section-label">Experience</p>
          <div className="timeline">
            {experiences.map((e, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-date">{e.period}</div>
                <div className="timeline-body">
                  <h3>{e.title}</h3>
                  <p className="org">{e.org}</p>
                  <p>{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="divider" />

        {/* ── Certifications ── */}
        <section className="section">
          <p className="section-label">Certifications</p>
          <div className="cert-list">
            {certifications.map((c, i) => (
              <div key={i} className="cert-item">
                <div className="cert-date">{c.date}</div>
                <div className="cert-body">
                  <h3>{c.title}</h3>
                  <span className="issuer">{c.issuer}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
