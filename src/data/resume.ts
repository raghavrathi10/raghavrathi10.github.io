// src/data/resume.ts

export interface ResumeData {
    name?: string;
    title?: string;
    contact?: {
        email?: string;
        phone?: string;
        location?: string;
        website?: string;
    };
    summary?: string;
    skills?: string[];
    experience?: {
        company: string;
        role: string;
        start: string;
        end?: string;
        bullets?: string[];
    }[];
    education?: {
        school: string;
        degree?: string;
        year?: string;
    }[];
    projects?: {
        name: string;
        desc?: string;
        link?: string;
    }[];
}

export let data: ResumeData = {
    name: "Raghav Rathi",
    title: "Cybersecurity Engineer",
    contact: {
        email: "raghav_rathi@outlook.com",
        // website: "https://example.com",
        location: "Florida, United States",
    },
    summary:
        "I am a cybersecurity engineer supporting a mission-critical public-sector agency responsible for providing healthcare services, financial assistance programs, child welfare systems and disaster recovery operations. I lead the development and implementation of security measures to protect sensitive data and systems from cyber threats. Combining a background in offensive security with expertise in incident response and vulnerability management, I am dedicated to ensuring the confidentiality, integrity, and availability of the most vital information assets.",
    skills: ["Incident Response", "NIST Framework", "Astro", "React", "Python"],
    experience: [
        {
            company: "Example Co.",
            role: "Senior Frontend Engineer",
            start: "Jan 2022",
            end: "Present",
            bullets: [
                "Built component-based interfaces with Astro and React.",
                "Improved page load performance by 40% using partial hydration.",
            ],
        },
    ],
    education: [
        { school: "University Name", degree: "B.S. Computer Science", year: "2020" },
    ],
    projects: [
        {
            name: "Portfolio",
            desc: "A small Astro site showcasing work, optimized for performance.",
            link: "https://example.com",
        },
    ],
};