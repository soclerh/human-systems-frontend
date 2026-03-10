export interface ResourceItem {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    category: "HR Toolkit" | "Use Cases" | "Compliance";
    date: string;
    readTime: string;
    content: string;
}

export const resources: ResourceItem[] = [
    // HR Toolkit
    {
        id: "tk1",
        title: "The Ultimate Guide to Employee Onboarding",
        slug: "ultimate-onboarding-guide",
        excerpt: "Discover best practices and templates for welcoming new hires to your organization.",
        category: "HR Toolkit",
        date: "Mar 10, 2026",
        readTime: "7 min read",
        content: "### Introduction\nOnboarding is the critical first step in an employee's journey. A strong onboarding process can improve new hire retention by 82%.\n\n### Best Practices\n1. Start before Day 1: Send a welcome kit and necessary paperwork ahead of time.\n2. Assign a Buddy: Pair new hires with experienced team members for guidance.\n3. Setup 30-60-90 Day Plans: Set clear expectations early on.\n\n### Conclusion\nInvesting in a solid onboarding process pays dividends in employee engagement and long-term success."
    },
    {
        id: "tk2",
        title: "10 Essential Interview Questions for 2026",
        slug: "essential-interview-questions-2026",
        excerpt: "A curated list of behavioral and situational questions to find top tier talent.",
        category: "HR Toolkit",
        date: "Feb 28, 2026",
        readTime: "5 min read",
        content: "### Moving Beyond the Resume\nModern hiring requires evaluating more than just technical skills. Cultural fit, adaptability, and emotional intelligence are paramount.\n\n### Top Questions\n1. Tell me about a time you had to unlearn something to solve a problem.\n2. How do you handle situations where the project scope changes drastically?\n3. Describe a time you strongly disagreed with a manager. How did you handle it?\n\n### The Takeaway\nUse these questions to uncover the true potential of your candidates."
    },

    // Use Cases
    {
        id: "uc1",
        title: "How TechNova Reduced Turnover by 30%",
        slug: "technova-reduced-turnover",
        excerpt: "Learn how a mid-sized software company used Human Systems to improve retention.",
        category: "Use Cases",
        date: "Mar 05, 2026",
        readTime: "6 min read",
        content: "### The Challenge\nTechNova was experiencing a 25% annual turnover rate, costing them millions in recruiting and lost productivity.\n\n### The Solution\nBy implementing the Human Systems Employee Self-Service and Performance Management modules, TechNova gave their employees a voice and clear growth paths.\n\n### The Results\nWithin 12 months, turnover plummeted by 30%. Employee satisfaction scores rose from 68 to 89 out of 100."
    },
    {
        id: "uc2",
        title: "Automating Payroll for 5,000 Global Employees",
        slug: "automating-global-payroll",
        excerpt: "A deep dive into GlobalCorp's transition to an automated payroll system.",
        category: "Use Cases",
        date: "Jan 15, 2026",
        readTime: "8 min read",
        content: "### The Nightmare of Manual Payroll\nManaging payroll across 14 countries manually was an HR nightmare for GlobalCorp. Errors were frequent, and processing took two weeks every month.\n\n### Enter Automation\nHuman Systems provided a unified platform that automatically handled currency exchange, local taxes, and compliance.\n\n### The Impact\nPayroll processing time was reduced from 14 days to just 2 days. Accuracy improved to 99.9%."
    },

    // Compliance
    {
        id: "cp1",
        title: "2026 Guide to EU Labor Laws Updates",
        slug: "eu-labor-laws-2026",
        excerpt: "Stay ahead of the curve with our comprehensive guide to new European labor regulations.",
        category: "Compliance",
        date: "Mar 12, 2026",
        readTime: "10 min read",
        content: "### Key Changes in 2026\nThe European Union has introduced sweeping changes aimed at protecting remote workers and standardizing gig economy benefits.\n\n### What You Need to Know\n- Remote workers must be given 'right to disconnect' protocols.\n- Gig workers now qualify for proportionate healthcare benefits.\n- Standardized ESG reporting requirements for all companies with over 250 employees.\n\n### Action Items\nReview your current policies and ensure your HR systems are tracking these new compliant data points."
    },
    {
        id: "cp2",
        title: "Data Privacy in HR: Beyond GDPR",
        slug: "data-privacy-beyond-gdpr",
        excerpt: "Understand how to handle sensitive employee data globally without risking hefty fines.",
        category: "Compliance",
        date: "Feb 10, 2026",
        readTime: "6 min read",
        content: "### The Stakes Are Higher Than Ever\nMishandling employee data can result in fines up to 4% of your global revenue.\n\n### Best Practices\n1. Data Minimization: Only collect what you absolutely need.\n2. Strict Access Control: Implement role-based access for all HR systems.\n3. Regular Audits: Conduct bi-annual security audits of your HR tech stack.\n\n### Getting Started\nHuman Systems includes built-in compliance checks to ease the burden of data privacy management."
    }
];

export const getResourcesByCategory = (category: "HR Toolkit" | "Use Cases" | "Compliance") => {
    return resources.filter(res => res.category === category);
};

export const getResourceBySlug = (slug: string) => {
    return resources.find(res => res.slug === slug);
};
