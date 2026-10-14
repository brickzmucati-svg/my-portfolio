import Image from "next/image";
export default function Home() {
  return (
    <main>
      <nav>
        <h2>Brickz Aloysius R. Mucati</h2>

        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#interests">Interests</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <Image
  src="/profile.jpg"
  alt="My profile picture"
  width={160}
  height={160}
  className="profile-picture"
/>

        <p>BSIT STUDENT | PC BUILDING ENTHUSIAST</p>

        <h1>Hi, I'm Brickz!</h1>

        <h2>Exploring the world of PC building.</h2>

        <p>
          I'm an IT student interested in computer hardware,
          PC components, and learning how computers work.
        </p>

        <a className="button" href="#about">
          Get to know me
        </a>
      </section>

      <section id="about">
        <h2>About Me</h2>

        <p>
          I'm a Bachelor of Science in Information Technology
          student with a strong interest in computer hardware,
          especially PC building.
        </p>

        <p>
          I want to learn more about computer components,
          how they work together, and how to choose parts
          for different needs and budgets.
        </p>
      </section>

      <section id="interests">
        <h2>My Interests</h2>

        <div className="card">
          <h3>PC Components</h3>
          <p>
            Learning about CPUs, GPUs, motherboards, RAM,
            and storage devices.
          </p>
        </div>

        <div className="card">
          <h3>PC Building</h3>
          <p>
            Exploring computer parts and how to choose
            compatible components.
          </p>
        </div>

        
<div className="card">
  <h3>Gaming</h3>
  <p>
    I enjoy playing games and exploring how
    computer hardware affects gaming performance.
  </p>
</div>

      </section>

      <footer>
        <p>Brickz Aloysius R. Mucati | My First Portfolio Project</p>
      </footer>
    </main>
  );
}
