// src/pages/Home/Skills.tsx

const skillGroups = [
  {
    title: 'Tools & Collaboration',
    skills: ['GitHub', 'GitHub Actions', 'Jira'],
    color: 'bg-red-100 text-red-800'
  },
  {
    title: 'OS / Environment',
    skills: ['Linux', 'Ubuntu Server'],
    color: 'bg-blue-100 text-blue-800'
  },
  {
    title: 'Programming Languages',
    skills: ['C/C++', 'JavaScript', 'Go', 'Python'],
    color: 'bg-green-100 text-green-800'
  },
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'Tailwind CSS', 'React'],
    color: 'bg-yellow-100 text-yellow-800'
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'REST API'],
    color: 'bg-purple-100 text-purple-800'
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'MySQL', 'Oracle'],
    color: 'bg-pink-100 text-pink-800'
  }
]

function Skills() {
  return (
    <section className="bg-white pb-16 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-16">
        <div className="space-y-2">
          <h2 className="text-3xl font-light text-gray-900">Experienced Technical Skills</h2>
          <p className="text-sm uppercase text-gray-500 tracking-widest">Grouped by Category</p>
        </div>

        <div className="space-y-10">
          {skillGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="text-xl font-light text-gray-700">{group.title}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 ${group.color} rounded-full text-sm font-medium border shadow-sm`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
