// src/app/about/page.tsx

import Link from 'next/link';
import React from 'react';

type Education = {
    degree: string;
    major: string;
    university: string;
    location: string;
    dateRange: string;
};

type WorkExperience = {
    title: string;
    company: string;
    location: string;
    dateRange: string;
    responsibilities: string[];
};

export const metadata = {
    title: 'About Me - Senior QA Automation Engineer',
    description: 'Senior QA Automation Engineer with extensive experience in test automation and quality assurance.',
    keywords: ['QA Automation Engineer', 'CV', 'Resume', 'Senior', 'Test Engineer', 'Quality Assurance', 'Java', 'Selenium', 'CI/CD'],
    author: 'Sergey Petrukhin',
    creator: 'Sergey Petrukhin',
    openGraph: {
        title: 'About Me - Senior QA Automation Engineer',
        description: 'Senior QA Automation Engineer with extensive experience in test automation and quality assurance.',
        url: 'https://yourwebsite.com/about',
        siteName: 'Blog about Testing',
    },
};

const AboutPage: React.FC = () => {
    const workExperience: WorkExperience[] = [
        {
            title: 'Senior Test Engineer',
            company: 'NumberFour AG',
            location: 'Hamburg, Germany',
            dateRange: '06/2022 – Present',
            responsibilities: [
                'Implemented and maintained more than 200 automation tests, reducing manual testing efforts by 60-70%.',
                'CI/CD on a nightly basis with GitLab to find 3-5 P1-P2 bugs per week.',
                'Managed junior colleagues to grow in technical experience through code review and meetings.',
                'Introduced Slack reporting to automate build results in 70-80% of cases.',
                'Integrated API testing into automation test plans, reducing implementation time by 20-30%.',
                'Updated and synchronized 200 Test Cases inside TestRail with technical requirements.',
            ],
        },
        {
            title: 'QA Automation Engineer',
            company: 'Die kartenmacherei',
            location: 'Hamburg, Germany',
            dateRange: '09/2018 – 05/2022',
            responsibilities: [
                'Developed 150 Java automation scripts using Selenium to monitor priority issues efficiently.',
                'Managed testing processes including automation tests and CI/CD integration.',
                'Defined over 200 test cases, 20 test suites, and 5 test plans.',
                'Created around 100 Cypress tests to introduce a new framework for frontend development.',
                'Collaborated with non-technical colleagues to share coding practices.',
                'Analyzed test results to prioritize and fix high-impact bugs.',
            ],
        },
        {
            title: 'Senior QA Automation Engineer',
            company: 'Home Credit Bank',
            location: 'Moscow, Russia',
            dateRange: '06/2017 – 07/2018',
            responsibilities: [
                'Achieved automation coverage with more than 100 Java automation scripts.',
                'Collaborated with colleagues to create 15 different test suites for various feature sets.',
                'Optimized Agile processes to save 2-3 hours per week in problem-solving and ticket discussions.',
                'Mentored interns to reduce onboarding time and improve product understanding.',
            ],
        },
        {
            title: 'QA Automation Engineer',
            company: 'Integrav',
            location: 'Moscow, Russia',
            dateRange: '01/2016 – 05/2017',
            responsibilities: [
                'Implemented more than 150 tests using Telerik and C# to detect web application bugs.',
                'Developed a custom reporting web application, reducing costs by 2% for the company.',
                'Analyzed and documented 1-2 bugs per day for developers and managers.',
                'Gathered valuable knowledge and approaches from senior team members.',
            ],
        },
        {
            title: 'Intern Test Engineer',
            company: 'Kaspersky Lab',
            location: 'Moscow, Russia',
            dateRange: '12/2012 – 12/2015',
            responsibilities: [],
        },
    ];

    // Education data (Master's and Bachelor's from MIPT)
    const education: Education[] = [
        {
            degree: 'Master of Applied Maths and Physics',
            major: 'Applied Mathematics and Physics',
            university: 'Moscow Institute of Physics and Technology',
            location: 'Moscow, Russia',
            dateRange: '09/2013 – 06/2015',
        },
        {
            degree: 'Bachelor of Applied Maths and Physics',
            major: 'Applied Mathematics and Physics',
            university: 'Moscow Institute of Physics and Technology',
            location: 'Moscow, Russia',
            dateRange: '09/2009 – 06/2013',
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white p-6 sm:p-10 flex flex-col md:flex-row">
            {/* Main Content: Centered Work Experience and Education */}
            <div className="flex-1 flex flex-col items-center text-center mb-10 md:mb-0 md:mr-10 md:ml-[25%]">
                <h1 className="text-5xl font-bold mb-6">About Me</h1>
                <p className="text-lg mb-8 max-w-2xl mx-auto md:mx-0">
                    I am a passionate Senior Test Engineer with extensive experience in test automation, quality assurance, and building scalable solutions. My expertise spans various tools and methodologies, aimed at optimizing workflows and improving product quality.
                </p>

                {/* Work Experience Section */}
                <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
                <div className="mb-6">
                    {workExperience.map((work, index) => (
                        <div key={index} className="mb-6">
                            <h3 className="text-xl font-semibold">{work.title}</h3>
                            <p>{work.company}, {work.location} — {work.dateRange}</p>
                            {work.responsibilities.length > 0 && (
                                <ul className="list-disc list-inside mt-2">
                                    {work.responsibilities.map((resp, index) => (
                                        <li key={index}>{resp}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

                {/* Education Section */}
                <h2 className="text-3xl font-bold mb-4">Education</h2>
                <div className="mb-6">
                    {education.map((edu, index) => (
                        <div key={index} className="mb-4">
                            <h3 className="text-xl font-semibold">{edu.degree}</h3>
                            <p>{edu.major}, {edu.university}, {edu.location}, {edu.dateRange}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Column: Contact and Skills */}
            <div className="md:w-1/4 md:pl-10 flex flex-col text-center md:text-left">
                <h1 className="text-5xl font-bold mb-6">Contact</h1>
                <p>Hamburg, Germany</p>
                <p>+49 1638479152</p>
                <p>petrukhin.s.a@gmail.com</p>
                <a
                    href="https://www.linkedin.com/in/sergey-petrukhin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline mb-6"
                >
                    LinkedIn Profile
                </a>

                <h2 className="text-3xl font-bold mt-4 md:mt-6 mb-4">Skills</h2>
                <h3 className="text-xl font-semibold mb-2">Technical:</h3>
                <ul className="list-disc list-inside mb-4">
                    <li>Java</li>
                    <li>Selenium</li>
                    <li>TypeScript</li>
                    <li>Playwright</li>
                    <li>Git</li>
                    <li>SQL</li>
                    <li>Cypress</li>
                    <li>CI/CD</li>
                    <li>Troubleshooting</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2">Tools and Software:</h3>
                <ul className="list-disc list-inside mb-4">
                    <li>IntelliJ IDEA</li>
                    <li>GitLab</li>
                    <li>Jira</li>
                    <li>Visual Studio Code</li>
                    <li>Slack as CI/CD reporting tool</li>
                    <li>Supabase</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2">Languages:</h3>
                <ul className="list-disc list-inside">
                    <li>English (C1-C2)</li>
                    <li>German (B1-B2)</li>
                    <li>Russian (Native)</li>
                </ul>
            </div>
        </div>
    );
};

export default AboutPage;
