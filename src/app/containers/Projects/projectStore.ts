import { Tech, Roles } from 'types/projects'
import { ProjectMap } from './CardLayoutContainer'

let applicationLink =
  'https://docs.google.com/forms/d/e/1FAIpQLSewYZ3DFLDpeVAGjAOYqJT05-6QRReZO-eJHXEIABpXjOGsHg/viewform'

export const upcomingProjects: ProjectMap = {
  Community: [
    {
      orgName: 'Spelling Bee of Canada',
      projectTitle: 'Mobile Learning App',
      techStack: [Tech.REACT_NATIVE, Tech.REDUX, Tech.TYPESCRIPT],
      description:
        'To support the enrichment of youth literacy, SBOC already offer an existing web based learning platform which engages children with flashcards, practice tests, and various learning games. They would like to supplement the learning site with a mirroring cross platform compatible mobile app, which for this project will be developed in React Native. Time permitting, there will also be an opportunity to enhance current features through the implementation of enhancing algorithms like spaced repetition.',
      key: 'SBOC App',
      apply: applicationLink,
      roles: [
        Roles.DESIGNER,
        Roles.BACKEND_DEV,
        Roles.FULLSTACK_DEV,
        Roles.FRONTEND_DEV,
      ],
      aboutOrg:
        'Spelling Bee of Canada (SBOC) is an educational organization that inspires youth, parents, teachers and the community at large to participate in the education process and celebrate scholastic achievement through an annual spelling bee and other educational programs.',
    },
    {
      orgName: 'Big Brothers Big Sisters of Toronto',
      projectTitle: 'Mentor Based Networking Site',
      techStack: [
        Tech.REACT,
        Tech.TYPESCRIPT,
        Tech.POSTGRES,
        Tech.PYTHON,
        Tech.FLASK,
      ],
      description:
        'Currently, they are looking to improve the experience of mentors and mentees (Bigs and Littles) by supporting their pursuit for a rewarding career. BBBST hopes to do this through a networking site where Bigs, or youth who have aged out of the program, can access professionals in a mentorship capacity. This project is incredibly multifaceted, with a strong technical aspect of developing the web application through the creation of profile pages and querying capabilities, as well as key design thinking/human factors principles involving empathy-based preliminary research and usability testing before deploying the production version.',
      key: 'BBBST proj',
      apply: applicationLink,
      roles: [
        Roles.DESIGNER,
        Roles.BACKEND_DEV,
        Roles.FULLSTACK_DEV,
        Roles.FRONTEND_DEV,
      ],
      aboutOrg:
        'Big Brothers Big Sisters of Toronto (BBBST) is a Maclean’s Top 100 Charity focused on building thriving communities by empowering lives through mentorship. In 2017, they empowered over 2500 children and youth in our city. ',
    },
    {
      orgName: 'Youth Without Shelter',
      projectTitle: 'Outreach Revitilization',
      techStack: [],
      description:
        'Since 2010, YWS has run Time4Change (T4C - formerly Tokens for Change) involving a fusion of art activism and fundraising at TTC subways stations in February, primarily led by student volunteers. As consumer habits change and we are transforming into a cashless society, in addition to lower ridership this year, YWS is looking to partner with VEEP to revitalize their strategy for execution of the original vision; youth supporting youth. VEEP students will play a pivotal role in the digital transformation of a $750,000+ and 4,500+ person initiative. This project involves an initial research phase which will culminate in a report with insights based on human factors research (particularly Human Computer Interaction) using key ideas in user experience design and design thinking. Students will translate research insight into a software deliverable which will be used in the new campaign next year.',
      key: 'YWS proj',
      apply: applicationLink,
      roles: [
        Roles.DESIGNER,
        Roles.BACKEND_DEV,
        Roles.FULLSTACK_DEV,
        Roles.FRONTEND_DEV,
        Roles.ANALYST,
      ],
      aboutOrg:
        'Youth Without Shelter (YWS) is a 2020 Top 100 Maclean’s National Charity which provides emergency housing and support programs to help youth develop skills to secure long term housing and jobs. ',
    },
    {
      orgName: 'The 519',
      projectTitle: 'Database Consultation',
      techStack: [Tech.SQL, Tech.POSTGRES, Tech.MSACCESS],
      description:
        'Currently, all their information required to run their operations (programs, space-use, membership, donors, volunteers data etc) is decentralized making it difficult and time consuming to collate, analyze and report on. To address this, VEEP is proposing a project consisting of two core parts to be completed in series. The first, a technical consultation process culminating in a report summarizing the needs of the organization with regards to their data, how their current implementation is falling short, and recommendations for improvement. The second, working in tandem with the organization to craft an RFP and time permitting, promoting the project directly to senior leadership at the organization.',
      key: 'The 519 proj',
      apply: applicationLink,
      roles: [Roles.ANALYST, Roles.BACKEND_DEV],
      aboutOrg:
        'The 519 is a City of Toronto agency, a registered charity, and a community centre committed to the health, happiness and full participation of the LGBTQ2S communities.',
    },
  ],
  'Campus Clubs': [
    {
      orgName: 'VEEP',
      projectTitle: 'Web App Development',
      techStack: [
        Tech.FLASK,
        Tech.PYTHON,
        Tech.POSTGRES,
        Tech.TYPESCRIPT,
        Tech.REACT,
      ],
      description:
        'As part of our goal to always be improving our program model and better serve our partners, VEEP is looking to expand its data collection, analysis, and presentation capabilities in the next year. The current infrastructure is insufficient and we need to develop functionalities to store survey data, access student portals containing internal resources and forums, expand our outward facing website content / design to include more information for potential students, partners and third parties as well as showcasing work completed.',
      key: 'veep proj',
      apply: applicationLink,
      roles: [
        'Frontend Developer',
        'Fullstack Developer',
        'Backend Developer',
        'Designer',
      ],
      aboutOrg:
        "VEEP is a student run organization that focuses on providing meaningful services to the community through student led projects designed to prepare students for internships in industry. VEEP currently doesn't have a mature data management system, which is vital to supporting and imporoving their project model.",
    },
  ],
  'Research - Coming Soon': [],
}

export const currentProjects: ProjectMap = {
  'Coming Soon...': [],
}

export const previousProjects: ProjectMap = {
  '2018 - 2019': [
    {
      orgName: 'Girls eMentorship (GEM)',
      projectTitle: 'CRM System Development',
      techStack: [Tech.SQL, Tech.MSACCESS, Tech.EXCEL, Tech.PYTHON],
      description:
        'This project encompasses the development of a GEM specific CRM system to include data from all mentees/mentors, committee & board members, partners, donors. Specific emphasis and importance placed on the quality and governance of the data and potentially developing a tool/GUI to easily get analytics',
      key: 'Girls eMentorship (GEM) - CRM System Development',
      aboutOrg:
        'Girls E-Mentorship (GEM) is a charitable organization that offers an innovative mentorship program for high school girls facing multiple barriers. GEM equips girls with the necessary skills to achieve their grown-up aspirations, building a diverse network of talented, vibrant women and girls to inspire and support one another. ',
    },
    {
      orgName: '180 Degrees Consulting',
      projectTitle: 'Web Development',
      techStack: [Tech.HTML, Tech.CSS, Tech.JAVASCRIPT, Tech.SQL],
      description:
        '180 hopes to either improve the existing website or design a new website which is consistent with their branding and is easy to navigate. The existing website is not up-to-date and is rarely used due to the cluttering of information. 180 would like to improve the design of the website and include new features so that students can follow up on events and apply to be a consultant more easily.',
      key: '180 Degrees Consulting - Web Development',
      aboutOrg:
        'The 180 Degrees Consulting group at the University of Toronto is Canada’s first branch of the world’s largest university-based volunteer consultancy. The group aims to help students create a positive long-term social impact via low-cost consulting services to non-profits.',
    },
    {
      orgName: 'reBoot Canada',
      projectTitle: 'Process Improvement',
      techStack: [Tech.PYTHON, Tech.C, Tech.SQL, Tech.MSACCESS, Tech.EXCEL],
      description:
        'Automation/Process Improvement/Tools to increase accuracy, level of detail and overall reduction of time spent on the task would have a lot of value. (think bag security check in, but for donated computers). It would be great to track everything that comes in, and everything that leaves too.',
      key: 'reBoot Canada - Process Improvement',
      aboutOrg:
        'reBOOT Canada is a registered charity that refurbishes donated computer equipment to provide non-profits, charities, and individuals, with access to subsidized technology, software, and training. reBOOT Canada relies on donations of retired IT assets. Receiving (identifying, sorting, capturing donor contact info, etc) is a significant resource and time sink. ',
    },
    {
      orgName: 'Sentier',
      projectTitle: 'Mental Health Social Media App',
      techStack: [Tech.MONGODB, Tech.NODE, Tech.JAVA],
      description:
        'VEEP students will work alongside clinicians (ie. physicians, nurses, and social workers), staff from other leading health initiatives (ie. Bell Let’s Talk), and HOL’s existing team to develop an impactful solution for more meaningful conversations – a safe, anonymous, and moderated mobile app that connects people experiencing similar emotions through a hashtag system.',
      key: 'Sentier - Mental Health Focused Social Media App',
      aboutOrg:
        'Health Out Loud (HOL) is a CRA-registered charity that innovates health to be fun, relatable, and understandable through novel technological and other products. Building connectedness to improve mental health is a priority for our clients, which is an unmet need based on existing community platforms (ie. Facebook) that tend to foster superficial relationships and conversations. ',
    },
    {
      orgName: 'VEEP',
      projectTitle: 'Database Improvement Project',
      techStack: [
        Tech.POSTGRES,
        Tech.PYTHON,
        Tech.HTML,
        Tech.CSS,
        Tech.JAVASCRIPT,
      ],
      description:
        "Historically VEEP has had issues keeping track of internal student development, surveys, and application data to use for program improvement. This project attempts to address that issue by making a database tool that can integrate with Google drive. The tool will have a web interface for VEEP students and executives to interact with & to query data. The primary deliverable of the project is a functional tool, which can be effectively implemented in VEEP's infrastructure.",
      key: 'VEEP - Database Improvement Project',
    },
  ],
}
