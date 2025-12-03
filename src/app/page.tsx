export default function HomePage() {
  const data = {
    name: '박성준',
    jobTitle: '정보보호학전공 4학년',
    introduction: '중부대학교 재학중',
    // ✅ 깃허브 프로필 링크를 여기에 추가합니다.
    githubLink: 'https://github.com/cark753',

    projects: [
      {
        title: 'TLS-Handshake 시뮬레이터',
        description: 'TLS의 Handshake 과정을 시각화',
        techStack: ['Next.js', 'Vercel'],
        link: '#', // 데모 링크
        repoLink: 'https://github.com/cark753/tls-demo', // ✅ 개별 프로젝트 저장소 링크
      },
      {
        title: 'AI 기반 웹공격 로그 분석웹페이지',
        description: '머신러닝을 활용하여 웹공격 로그를 학습하고 분석하여 평가',
        techStack: ['Scikit-learn', 'ELK', 'Mysql'],
        link: '#',
        repoLink: 'https://github.com/cark753/ai-log-analysis-repo', // ✅ 개별 프로젝트 저장소 링크
      },
      {
        title: 'URL 보안 점수 분석 웹사이트',
        description:
          '사용자가 입력한 웹사이트(URL)의 보안 위험도를 분석해 신뢰도 점수로 시각화',
        techStack: ['Node-js', 'Vercel'],
        link: '#',
        repoLink: 'https://github.com/cark753/url-security-score-repo', // ✅ 개별 프로젝트 저장소 링크
      },
    ],

    certifications: [
      { name: '네트워크관리사 2급', date: '2023.07' },
      { name: '', date: '' },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      {/* 👤 소개 섹션 (Hero) */}
      <section className="text-center max-w-4xl w-full p-10 bg-white rounded-xl shadow-2xl mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-2">
          {data.name}
        </h1>
        <p className="text-2xl font-medium text-blue-600 mb-6">
          {data.jobTitle}
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          {data.introduction}
        </p>

        {/* ✅ GitHub 프로필 링크 버튼 추가 */}
        {data.githubLink && (
          <a
            href={data.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-800 text-white py-2 px-6 rounded-lg font-semibold hover:bg-gray-700 transition duration-300 shadow-md"
          >
            GitHub 프로필 보기 &rarr;
          </a>
        )}
      </section>

      {/* 💻 프로젝트 섹션 (3칸) */}
      <section className="max-w-4xl w-full mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">
          주요 프로젝트 🚀
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-blue-400"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-3 text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* 프로젝트별 링크 버튼들 */}
              <div className="flex space-x-3 mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 font-medium text-sm"
                >
                  자세히 보기 &rarr;
                </a>

                {/* ✅ 프로젝트별 GitHub 저장소 링크 추가 */}
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 font-medium text-sm"
                  >
                    GitHub &rarr;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 📜 자격증 섹션 (2개) */}
      <section className="max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">
          자격증 및 어학 🏆
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.certifications.map((cert, index) => (
            <div
              key={index}
              className="p-5 bg-white rounded-lg shadow-lg border-l-4 border-green-500"
            >
              <p className="text-lg font-semibold text-gray-800">{cert.name}</p>
              <p className="text-sm text-gray-600 mt-1"> {cert.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🦶 간단한 푸터 */}
      <footer>© 2025 {data.name}&apos;s Portfolio.</footer>
    </div>
  );
}
