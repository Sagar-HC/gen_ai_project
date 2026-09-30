const resume = `Name: Arjun Mehta
Email: arjun.mehta@example.com
Phone: +91 98765 43210
Location: Bengaluru, Karnataka, India
LinkedIn: linkedin.com/in/arjunmehta-dev
Summary
Full-stack developer with 4 years of experience building web applications and REST APIs. Comfortable across the stack, with a focus on Node.js backends and React frontends.
Experience
Software Engineer, BrightCart Technologies (Jun 2022 to Present)
Built and maintained REST APIs in Node.js and Express serving 50,000+ daily users
Reduced average API response time by 35% by adding Redis caching and optimizing MongoDB queries
Led migration of a legacy jQuery dashboard to React, cutting page load time by 40%
Wrote integration tests with Jest, raising test coverage from 45% to 80%

Junior Developer, Pixelwave Solutions (Jul 2020 to May 2022)

Developed responsive UIs using React and Tailwind CSS
Integrated third-party payment and SMS APIs
Fixed 100+ bugs and shipped 15+ features across two client projects

Education
B.Tech in Computer Science, Visvesvaraya Technological University (2016 to 2020), CGPA 8.1

Skills
JavaScript, TypeScript, Node.js, Express, React, MongoDB, PostgreSQL, Redis, Docker, Git, AWS (EC2, S3), Jest, REST APIs

Projects

TaskFlow: A Kanban-style project management app with real-time updates using Socket.io
ResumeLens: A tool that parses resumes and scores them against job descriptions

Certifications

AWS Certified Cloud Practitioner (2023)`

const selfDescription = `Hi, I'm Arjun. I've been working as a developer for about four years now, mostly building web apps with JavaScript and TypeScript. I'm strongest on the backend, where I enjoy designing APIs, working with databases, and making things faster. I also like frontend work with React, though I wouldn't call myself a designer. I've recently started learning Docker and basic AWS deployment, and I'm keen to get better at system design and cloud infrastructure. I work well in small teams, like clear communication, and I'm not afraid to ask questions when I'm stuck. I'm looking for a role where I can take on more ownership and eventually grow into a senior or tech lead position.`


const jobDescription = `Job Title: Senior Backend Engineer
Company: NimbusPay (fintech startup)
Location: Bengaluru, India (Hybrid, 3 days in office)
Experience: 4 to 7 years

About the Role
We're looking for a Senior Backend Engineer to help build and scale the core payments platform used by thousands of merchants across India.

Responsibilities

Design, build, and maintain scalable backend services and APIs
Optimize database performance and ensure high availability
Collaborate with frontend, product, and DevOps teams
Write clean, tested, well-documented code
Participate in code reviews and mentor junior engineers
Help improve system reliability, monitoring, and deployment pipelines

Required Skills

4+ years of backend development experience
Strong proficiency in Node.js and TypeScript
Experience with PostgreSQL or MongoDB
Solid understanding of REST API design
Familiarity with Docker and CI/CD pipelines
Experience writing automated tests

Nice to Have

Experience with AWS or another cloud platform
Knowledge of Kafka or message queues
Background in fintech or payments
Experience with microservices architecture

What We Offer
Competitive salary, ESOPs, health insurance, flexible hours, and a learning budget.

This set is designed so there's a good match (Node.js, TypeScript, MongoDB, Docker) and a few gaps (Kafka, fintech, deeper AWS), which gives you something useful to test skill-matching or gap-analysis logic against. If you want, I can also give it to you as a JSON object shaped for a zod schema.`

module.exports = { resume , selfDescription,jobDescription}