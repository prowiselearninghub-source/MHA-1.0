// Team Members Data with Detailed Profiles
// Synchronized with main page order and photos
const teamMembersData = [
    {
        id: 1,
        name: "Sanjay Joshi",
        credentials: "FCS, B.Com",
        image: "images/latest-images/team/sanjay_joshi.png",
        enhancedImage: "images/latest-images/team/sanjay_joshi.png",
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
        name: 'Mihen Halani',
        title: 'Founder & Managing Partner',
        credentials: 'IIM Ahmedabad | Fellow CS | LLB | B.Com | NISM Social Audit Certificate',
        image: 'images/latest-images/team/mihen_hilani.png',
        enhancedImage: 'images/latest-images/team/mihen_hilani.png',
        specialization: 'Corporate Governance, Securities Law, FEMA & Strategic Advisory',
        experience: '10+ years',
        expertise: [
            'Corporate Governance',
            'Securities Law',
            'FEMA',
            'Insolvency & Bankruptcy',
            'Strategic Planning',
            'Equity Structuring',
            'Board Advisory'
        ],
        bioHTML: `
        <p><strong>Professional Background:</strong> Mihen is a fellow member of the Institute of Company Secretaries of India (ICSI) and an IIM-A alumnus with more than a decade of experience in handling critical corporate governance matters.</p>
        <p>He has extensive expertise in corporate law, securities laws, and foreign exchange laws and compliances in India. His experience spans working with various law firms and advisory firms on matters related to the Insolvency and Bankruptcy Code.</p>
        <p><strong>Leadership Excellence:</strong> Mihen has served as an independent as well as non-executive director on the boards of various multinational companies in India. He has been instrumental in providing strategic planning insights and implementing ideas and systems in entities that benefit all stakeholders.</p>
        <p><strong>Key Achievements:</strong></p>
        <ul>
            <li>Implementation of various compliance systems for startups, including unicorns in India</li>
            <li>Execution of time-bound and challenging equity structuring assignments</li>
            <li>Instrumental role in the implementation of a resolution plan with bankers for Bharat Wire Ropes Limited, a BSE and NSE listed company</li>
            <li>Strategic advisor to multiple multinational corporations on corporate governance</li>
        </ul>
    `
    },
    {
        id: 3,
        name: "Amita Karia",
        credentials: "CS, B.Com",
        image: "images/latest-images/team/amita_karia.png",
        enhancedImage: "images/latest-images/team/amita_karia.png",
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
        id: 3,
        name: "Parul Sarda",
        credentials: "CS, B.Com",
        image: "images/latest-images/team/parul_sarda.png",
        enhancedImage: "images/latest-images/team/parul_sarda.png",
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
        id: 1,
        name: "Mitesh Shah",
        credentials: "FCS, B.Com",
        image: "images/latest-images/team/mitesh_shah.png",
        enhancedImage: "images/latest-images/team/mitesh_shah.png",
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
        image: "images/latest-images/team/milin_ramani.png",
        enhancedImage: "images/latest-images/team/milin_ramani.png",
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
        id: 4,
        name: "Nidhi Busa",
        credentials: "CS, LLB, B.Com",
        image: "images/latest-images/team/nidhi_busa.png",
        enhancedImage: "images/latest-images/team/nidhi_busa.png",
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
        id: 4,
        name: "Shweta Gupta",
        credentials: "CS, LLB, B.Com",
        image: "images/latest-images/team/nidhi_busa.png",
        enhancedImage: "images/latest-images/team/nidhi_busa.png",
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
        id: 9,
        name: "Monika Shah",
        credentials: "B.Com",
        image: "images/latest-images/team/monika_shah.png",
        enhancedImage: "images/latest-images/team/monika_shah.png",
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
    },
    {
        id: 6,
        name: "Dipen Shah",
        credentials: "CS, B.Com",
        image: "images/latest-images/team/dipen_shah.PNG",
        enhancedImage: "images/latest-images/team/dipen_shah.PNG",
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
        id: 5,
        name: "Aditi Khandelwal",
        credentials: "FCS, LLB, B.Com",
        image: "images/latest-images/team/aditi_khandelwal.PNG",
        enhancedImage: "images/latest-images/team/aditi_khandelwal.PNG",
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
        id: 7,
        name: "Janhavi",
        credentials: "CS, B.Com",
        image: "images/latest-images/team/janhavi_navrang.png",
        enhancedImage: "images/latest-images/team/janhavi_navrang.png",
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
        id: 7,
        name: "Pratap Chavda",
        credentials: "CS, B.Com",
        image: "images/latest-images/team/pratab_chavda.png",
        enhancedImage: "images/latest-images/team/pratab_chavda.png",
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
        name: "Mahesh Dhuri",
        credentials: "B.Com",
        image: "images/latest-images/team/mahesh_dhuri.png",
        enhancedImage: "images/latest-images/team/mahesh_dhuri.png",
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
    },
    {
        id: 8,
        name: "Maitri Dharod",
        credentials: "CS, B.Com",
        image: "images/latest-images/team/maitri_dharod.png",
        enhancedImage: "images/latest-images/team/maitri_dharod.png",
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
    },
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = teamMembersData;
}
