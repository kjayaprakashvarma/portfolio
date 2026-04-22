import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'F1 Race Tracking & Historical Statistics Visualization Platform',
      period: 'Jan 2026 – Apr 2026',
      tech: ['HTML', 'CSS', 'JavaScript', 'APIs'],
      description:
        'Interactive platform to visualise Formula 1 races using a 2D track simulation combined with real-time and historical race data. Features replay functionality with timeline controls, driver position tracking across laps, and analytical dashboards for lap times, overtakes, and pit strategies.',
      github: 'https://github.com/Hemz2006/F1-Track.git ',
    },
    {
      title: 'AirTime – Personal Pollution Budget Platform',
      period: 'Oct 2025',
      tech: ['React.js', 'TypeScript', 'TailwindCSS', 'FastAPI', 'Vite'],
      description:
        'Web platform that transforms satellite (NASA TEMPO), weather, and geolocation data into personalised pollution exposure insights and health recommendations. Includes custom exposure models integrating AQI, PM₂.₅, and ozone metrics with 12-hour predictive forecasting, interactive Chart.js dashboards, and PWA support for offline access.',
      github: 'https://github.com/Hemz2006/AirTime-The-Personal-Pollution-Budget.git',
    },
    {
      title: 'Fake News Detection',
      period: 'Nov 2025',
      tech: ['Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'Git'],
      description:
        'Team NLP project — developed a deep learning model using Bidirectional LSTMs to classify news articles with high accuracy by capturing long-term dependencies in both forward and backward textual contexts.',
      github: 'https://github.com/kjayaprakashvarma/Fake-News-Classifier.git',
    },
    {
      title: 'Secure Personal Diary System',
      period: 'Oct 2025',
      tech: ['Java', 'Swing', 'AWT', 'Git', 'IntelliJ IDEA'],
      description:
        'Desktop journaling application built with Java Swing/AWT, featuring a clean UI and responsive event handling. Includes a Smart Search algorithm using label-based indexing for high-speed queries across thousands of entries, with robust File I/O for zero data loss during crashes.',
      github: null,
    },
    {
      title: 'Project Chronos',
      period: 'Apr 2024 – May 2024',
      tech: ['Python', 'NLP', 'Google Gemini API', 'Git'],
      description:
        'AI-driven restoration tool that leverages LLMs to reconstruct fragmented historical manuscripts with contextual linguistic accuracy. Uses custom prompt templates to preserve historical writing styles and integrates Google Gemini API for zero-shot and few-shot learning on incomplete datasets.',
      github: 'https://github.com/kjayaprakashvarma/Project-Chronos-The-AI-archeologist.git',
    },
  ];

  return (
    <main className="page">
      <div className="container">

        <section className="section">
          <p className="section-label">Projects</p>
          <div className="projects-grid">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
