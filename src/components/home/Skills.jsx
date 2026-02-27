import Col from "../Col";
import Row from "../Row";
import { AiOutlineAppstore } from "react-icons/ai";
import { CgGitPull } from "react-icons/cg";



export default function Skills() {
    return (
        <Col id='skills' className={'items-center bg-gradient-to-b from-background1 to-background'}>
            <h1 className="text-3xl font-bold mb-10">Technical Skills</h1>
            <Row className="justify-center flex-col w-full md:flex-row items-start gap-5">
                <Col className={'rounded-lg w-full'}>
                    <Row className="text-2xl pb-5 font-semibold"> <AiOutlineAppstore className="text-primary" /><span>Frontend</span></Row>
                    <Row className="text-mute text-lg"><CgGitPull className="text-primary" /> <span><b>Core Technologies-</b>Tailwind CSS, Responsive Web Design (Mobile-First), Custom UI Components, Reusable Component Architecture, HTML5, CSS3, JavaScript (ES6+), React.js</span></Row>
                    <Row className="text-mute text-lg"><CgGitPull className="text-primary" /> <span><b>Frontend Development Skills-</b>React Hooks (useState, useEffect, useContext), Form Handling & Validation, REST API Integration, Authentication UI, File Upload Handling (FormData), State Management, Dynamic Routing</span></Row>
                    <Row className="text-mute text-lg"><CgGitPull className="text-primary" /> <span><b>Tools-</b>Git & GitHub, VS Code, Chrome DevTools</span></Row>
                </Col>
                <Col className={'rounded-lg w-full'}>
                    <Row className="text-2xl pb-5 font-semibold"> <AiOutlineAppstore className="text-primary" /><span>Backend</span></Row>
                    <Row className="text-mute"><CgGitPull className="text-primary" /> <span><b>Core Technologies-</b>Node.js, Express.js, MongoDB, Mongoose</span></Row>
                    <Row className="text-mute text-lg"><CgGitPull className="text-primary" /> <span><b>Authentication & Security-</b>Session-based Authentication, JWT Authentication, Password Hashing (bcrypt), Protected Routes, Role-based Access Control (Admin/User)</span></Row>
                    <Row className="text-mute text-lg"><CgGitPull className="text-primary" /> <span><b>Database & API-</b>RESTful API Development, CRUD Operations, MongoDB Atlas, Schema Design, Data Validation, File Upload Handling (Multer), FormData Handling</span></Row>
                    <Row className="text-mute text-lg"><CgGitPull className="text-primary" /> <span><b>Tools & Deployment-</b>Postman (API Testing), dotenv (Environment Variables), CORS Handling</span></Row>
                </Col>
                <Col className={'rounded-lg gap-0 w-full'}>
                    <Row className="text-2xl pb-5 font-semibold"> <AiOutlineAppstore className="text-primary" /><span>Soft Skills</span></Row>
                    <Row className="text-mute"><CgGitPull className="text-primary" /> <span>Communication</span></Row>
                    <Row className="text-mute"><CgGitPull className="text-primary" /> <span>Problem-Solving</span></Row>
                    <Row className="text-mute"><CgGitPull className="text-primary" /> <span>Team Collaboration</span></Row>
                    <Row className="text-mute"><CgGitPull className="text-primary" /> <span>Time Management</span></Row>
                    <Row className="text-mute"><CgGitPull className="text-primary" /> <span>Leadership</span></Row>
                    <Row className="text-mute"><CgGitPull className="text-primary" /> <span>Creativity</span></Row>
                    <Row className="text-mute"><CgGitPull className="text-primary" /> <span>Client Handling</span></Row>
                    <Row className="text-mute"><CgGitPull className="text-primary" /> <span>Patience</span></Row>
                    <Row className="text-mute"><CgGitPull className="text-primary" /> <span>Continuous Learning Mindset</span></Row>
                </Col>
            </Row>
        </Col>
    )
}
