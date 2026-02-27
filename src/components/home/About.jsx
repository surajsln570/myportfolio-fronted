import Dp from '../../assets/suraj.jpg'
import Row from '../Row'
import Col from '../Col'
import Button from '../UI/Button'

export default function About() {
  return (
    <Row id='about'  className={'mt-[80px] md:flex-row flex-col bg-gradient-to-t from-red-50 to-gray-200  p-5 items-center pb-10 justify-between'}>
      <Col className='flex-col items-start justify-center'>
        <h1 className='text-5xl font-bold'>Full-Stack Developer</h1>
        <h3 className='text-2xl mb-3 text-primary font-semibold'>MERN | System Design | AWS</h3>
        <p className='text-mute text'>
            A Full-Stack Developer skilled in React.js, Next.js, Node.js, mongoDb, Express. Explore innovative projects, dynamic web applications, and robust system architectures.
        </p>
        <a href="/#contact"><Button variant='primary' className='button-primary'>Get In Touch</Button></a>
      </Col>
        <div className='w-full'>
          <img className='h-[250px] mx-auto object-fill w-[250px] rounded-full' src={Dp} alt="" />
        </div>
    </Row>
  )
}
