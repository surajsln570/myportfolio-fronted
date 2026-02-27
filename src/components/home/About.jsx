import Dp from '../../assets/suraj.jpg'
import Row from '../Row'
import Col from '../Col'
import Button from '../UI/Button'

export default function About() {
  return (
    <Row
      id="about"
      className="mt-[80px] flex-col-reverse md:flex-row items-center justify-between 
                 px-6 md:px-16 py-16 
                 bg-gradient-to-br from-red-50 via-white to-gray-100"
    >

      {/* Text Section */}
      <Col className="items-start justify-center md:w-1/2 space-y-6">

        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Hi, I'm <span className="text-primary">Suraj</span> 👋 <br />
          <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Full-Stack Developer
          </span>
        </h1>

        <h3 className="text-lg md:text-2xl text-primary font-semibold">
          MERN Stack | System Design | AWS
        </h3>

        <p className="text-gray-600 text-sm md:text-lg leading-relaxed max-w-xl">
          I build scalable and dynamic web applications using React.js, Node.js,
          Express, and MongoDB. Passionate about creating clean UI, robust APIs,
          and performance-focused architectures.
        </p>

        <div className="pt-4">
          <a href="/#contact">
            <Button
              variant="primary"
              className="px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition duration-300"
            >
              Get In Touch
            </Button>
          </a>
        </div>

      </Col>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <div className="relative group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-500 blur-2xl opacity-30 group-hover:opacity-50 transition"></div>

          <img
            className="relative h-[180px] w-[180px] md:h-[280px] md:w-[280px] 
                       rounded-full object-cover 
                       border-4 border-white shadow-2xl"
            src={Dp}
            alt="Suraj"
          />
        </div>
      </div>

    </Row>
  )
}