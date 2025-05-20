function Hero() {
  return (
    <section className="bg-white text-center pt-32 pb-16 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <p className="text-sm uppercase text-gray-500 tracking-widest">
            Problem-Solving Student
          </p>
          <h1 className="text-5xl font-light text-gray-900">Shinseong Kim</h1>
        </div>

        <p className="text-base text-gray-700 leading-relaxed">
          I'm studying Computer Programming and Analysis at Seneca Polytechnic,
          Canada, with a strong focus on practical systems. I enjoy solving
          problems, especially when they start from real needs around me and
          matter to people. When a problem captures my attention, I focus deeply
          and keep working until I find a solution.
        </p>

        <div className="space-x-4 text-red-500 text-sm">
          <a href="https://github.com/moosewithwolf">GitHub</a>
          <a href="https://www.linkedin.com/in/shinseong-kim-168711327/">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
