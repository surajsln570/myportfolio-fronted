import Col from "../Col";
import Row from "../Row";
import { AiOutlineAppstore } from "react-icons/ai";
import { CgGitPull } from "react-icons/cg";

export default function Skills() {
  return (
    <Col
      id="skills"
      className="items-center w-full py-16 px-6 bg-gradient-to-b from-background1 to-background"
    >
      <h1 className="text-4xl font-bold mb-14 text-center bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
        Technical Skills
      </h1>

      <Row className="justify-center flex-col md:flex-row w-full gap-8">

        {/* Skill Card Component Style */}
        {/* Frontend */}
        <Col className="w-full md:w-1/3 p-6 rounded-2xl 
                        backdrop-blur-lg bg-white/5 
                        border border-white/10 
                        shadow-lg hover:shadow-primary/20 
                        transition-all duration-300 
                        hover:-translate-y-2">

          <Row className="text-2xl font-semibold mb-6 items-center gap-2 text-primary">
            <AiOutlineAppstore />
            <span>Frontend</span>
          </Row>

          {[
            "React.js",
            "JavaScript (ES6+)",
            "React Hooks",
            "State Management",
            "REST API Integration",
            "Tailwind CSS",
            "Responsive Web Design",
            "Git & GitHub",
          ].map((skill, index) => (
            <Row key={index} className="text-mute text-lg mb-3 items-center gap-2 hover:text-primary transition">
              <CgGitPull className="text-primary" />
              <span>{skill}</span>
            </Row>
          ))}
        </Col>

        {/* Backend */}
        <Col className="w-full md:w-1/3 p-6 rounded-2xl 
                        backdrop-blur-lg bg-white/5 
                        border border-white/10 
                        shadow-lg hover:shadow-primary/20 
                        transition-all duration-300 
                        hover:-translate-y-2">

          <Row className="text-2xl font-semibold mb-6 items-center gap-2 text-primary">
            <AiOutlineAppstore />
            <span>Backend</span>
          </Row>

          {[
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "RESTful API Development",
            "JWT Authentication",
            "Password Hashing (bcrypt)",
          ].map((skill, index) => (
            <Row key={index} className="text-mute text-lg mb-3 items-center gap-2 hover:text-primary transition">
              <CgGitPull className="text-primary" />
              <span>{skill}</span>
            </Row>
          ))}
        </Col>

        {/* Soft Skills */}
        <Col className="w-full md:w-1/3 p-6 rounded-2xl 
                        backdrop-blur-lg bg-white/5 
                        border border-white/10 
                        shadow-lg hover:shadow-primary/20 
                        transition-all duration-300 
                        hover:-translate-y-2">

          <Row className="text-2xl font-semibold mb-6 items-center gap-2 text-primary">
            <AiOutlineAppstore />
            <span>Soft Skills</span>
          </Row>

          {[
            "Communication",
            "Problem-Solving",
            "Team Collaboration",
            "Time Management",
            "Leadership",
            "Creativity",
            "Client Handling",
            "Continuous Learning Mindset",
          ].map((skill, index) => (
            <Row key={index} className="text-mute text-lg mb-3 items-center gap-2 hover:text-primary transition">
              <CgGitPull className="text-primary" />
              <span>{skill}</span>
            </Row>
          ))}
        </Col>

      </Row>
    </Col>
  );
}