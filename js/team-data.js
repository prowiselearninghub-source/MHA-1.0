// Team Members Data with Detailed Profiles
// Synchronized with main page order and photos
const teamMembersData = [
    {
        id: 1,
        name: "Mitesh Shah",
        credentials: "FCS, B.Com",
        image: "images/team/member-placeholder.jpg",
        enhancedImage: "images/team/member-placeholder.jpg",
        specialization: "NCLT Matters & Insolvency",
        experience: "8+ years",
        expertise: [
            "NCLT Proceedings",
            "Insolvency & Bankruptcy",
            "Company Liquidation",
            "Revival of Struck-off Companies",
            "Dispute Resolution"
        ],
        bio: "As a Fellow Company Secretary, Mitesh specializes in NCLT matters and insolvency proceedings. He has successfully handled complex cases involving company liquidations, revival of struck-off companies, and bankruptcy resolutions. His expertise in tribunal proceedings and deep understanding of IBC makes him a valuable asset for distressed asset resolution."
    },
    {
        id: 2,
        name: "Milin Ramani",
        credentials: "CS, LLB, B.Com",
        image: "images/team/milin-ramani-new.jpg",
        enhancedImage: "images/team/milin-ramani-new.jpg",
        specialization: "SEBI Compliance, Listed Entities & Corporate Governance",
        experience: "10+ years",
        expertise: [
            "SEBI LODR Compliance",
            "IPO & Listing Advisory",
            "Independent Director",
            "Corporate Governance for Listed Companies",
            "ICSI Visiting Faculty"
        ],
        bio: "A seasoned Company Secretary with over 10 years of professional experience in corporate secretarial practice, compliance, and corporate laws. He has been associated with the firm since its inception and has played an integral role in all major activities and growth initiatives of the firm. He leads and manages various secretarial and SEBI-related compliance assignments, providing strategic and regulatory support to clients. He also serves as an Independent Director on the Boards of various listed and unlisted companies, contributing to effective corporate governance and strategic oversight. In addition to this, he is a Visiting Faculty at WIRC of the Institute of Company Secretaries of India (ICSI), actively contributing to the academic and professional development of aspiring Company Secretaries."
    },
    {
        id: 3,
        name: "Amita Karia",
        credentials: "CS, B.Com",
        image: "images/team/amita-karia.jpg",
        enhancedImage: "images/team/amita-karia.jpg",
        specialization: "Transaction Advisory & Valuation",
        experience: "5+ years",
        expertise: [
            "Transaction Advisory",
            "Business Valuation",
            "Financial Structuring",
            "Tax Planning",
            "Investment Advisory"
        ],
        bio: "Amita specializes in transaction advisory and business valuation services. She provides strategic advice on financial restructuring, fund raising, and investment decisions. Her analytical skills and understanding of corporate finance enables her to deliver valuable insights for complex business transactions."
    },
    {
        id: 4,
        name: "Nidhi Grover",
        credentials: "CS, LLB, B.Com",
        image: "images/team/member-placeholder.jpg",
        enhancedImage: "images/team/member-placeholder.jpg",
        specialization: "Startup Advisory & MSME Services",
        experience: "5+ years",
        expertise: [
            "Startup India Registration",
            "MSME Advisory",
            "Funding Documentation",
            "SHA & SSA Drafting",
            "Contract Management"
        ],
        bio: "Nidhi specializes in providing comprehensive solutions to startups and MSMEs. She has helped numerous entrepreneurs navigate the legal complexities of business setup, funding rounds, and regulatory compliances. Her expertise in drafting shareholder agreements and managing contractual obligations makes her a trusted advisor for emerging businesses."
    },
    {
        id: 5,
        name: "Aditi Khandelwal",
        credentials: "FCS, B.Com",
        image: "images/team/aditi-khandelwal.jpg",
        enhancedImage: "images/team/aditi-khandelwal.jpg",
        specialization: "Secretarial Audit & Compliance Health Check",
        experience: "7+ years",
        expertise: [
            "Secretarial Audit",
            "Compliance Health Check",
            "Internal Audit",
            "Risk Assessment",
            "Regulatory Advisory"
        ],
        bio: "As a Fellow Company Secretary, Aditi specializes in secretarial audits and compliance health checks. She conducts comprehensive audits for listed and unlisted companies, identifying compliance gaps and providing remedial solutions. Her methodical approach and thorough understanding of regulatory requirements ensures clients maintain the highest standards of corporate governance."
    },
    {
        id: 6,
        name: "Dipen Shah",
        credentials: "CS, B.Com",
        image: "images/team/member-placeholder.jpg",
        enhancedImage: "images/team/member-placeholder.jpg",
        specialization: "FEMA & Foreign Investment Advisory",
        experience: "6+ years",
        expertise: [
            "Foreign Direct Investment (FDI)",
            "External Commercial Borrowings (ECB)",
            "FEMA Compliance",
            "Overseas Investment",
            "RBI Regulations"
        ],
        bio: "Dipen is an expert in FEMA regulations and foreign investment advisory. He has successfully handled complex cross-border transactions and FDI structuring for multinational corporations. His deep understanding of RBI regulations and foreign exchange management makes him a go-to professional for international business setups."
    },
    {
        id: 7,
        name: "Pratap Chavda",
        credentials: "CS, B.Com",
        image: "images/team/pratap-chavda.jpg",
        enhancedImage: "images/team/pratap-chavda.jpg",
        specialization: "Business Setup & Registration",
        experience: "6+ years",
        expertise: [
            "Company Incorporation",
            "LLP Registration",
            "Foreign Company Setup",
            "Business Structuring",
            "Trademark & IP Registration"
        ],
        bio: "Pratap has extensive experience in business setup and corporate registrations. He has successfully established numerous companies, LLPs, and foreign entities in India. His expertise in business structuring and understanding of regulatory requirements ensures smooth and efficient business establishment processes."
    },
    {
        id: 8,
        name: "Vibhor Kala",
        credentials: "CA, B.Com",
        image: "images/team/member-placeholder.jpg",
        enhancedImage: "images/team/member-placeholder.jpg",
        specialization: "Accounting & Taxation",
        experience: "5+ years",
        expertise: [
            "Financial Accounting",
            "Tax Planning & Compliance",
            "Audit & Assurance",
            "GST Advisory",
            "Financial Reporting"
        ],
        bio: "Vibhor is a Chartered Accountant specializing in accounting and taxation services. He provides comprehensive financial advisory and ensures compliance with tax regulations. His expertise in GST and financial reporting helps clients maintain accurate financial records and optimize tax strategies."
    },
    {
        id: 9,
        name: "Mahesh Dhuri",
        credentials: "B.Com",
        image: "images/team/member-placeholder.jpg",
        enhancedImage: "images/team/member-placeholder.jpg",
        specialization: "Administrative Support & Operations",
        experience: "5+ years",
        expertise: [
            "Office Administration",
            "Document Management",
            "Client Coordination",
            "Compliance Support",
            "Operations Management"
        ],
        bio: "Mahesh provides essential administrative and operational support to the team. His organizational skills and attention to detail ensure smooth day-to-day operations. He plays a crucial role in document management, client coordination, and supporting the team's compliance activities."
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = teamMembersData;
}
