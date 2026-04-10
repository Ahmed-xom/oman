// cardDetail.tsx

export interface TeamMember {
    name: string;
    title: string;
    description: string;
    image:string
  }
  
  export const managementTeam: TeamMember[] = [ 
    {
      name: "Musab Al Mahruqi",
      // title: "Owner & Managing Partner",
      title: "Chairman & Board Member",
      image: "/images/members/Musab.webp",
      description: "Accomplished executive with local and international experience in both executive and board level strategic roles in oil and gas, oil refining, metals, petrochemicals, infrastructure, and logistics."
    },
    {
      name: "Lane Roberts",
      title: "Board Member",
      // title: "Owner & Partner",
      image: "/images/members/Lane.webp",
      description: "Accomplished leader with extensive global experience in oilfield services. Founder and former CEO of Hunter Well Science, CEO of ENSECO Energy Services, and Managing Director of Sondex Wireline Ltd."
    },
    {
      name: "Ahmed Salim Al Wahaibi",
      // title: "Business Executive ",
      title: "Board Member",
      image: "/images/members/ahmed.webp",
      description: "Ahmed Salim Al Wahaibi is a distinguished Omani business executive with a strong track record in leading large-scale energy and industrial investments. He served as the Chief Executive Officer of Oman Oil Company from 2004 to 2014, during which he played a pivotal role in executing multi-billion dollar projects across the energy sector. He also held key leadership roles such as Chairman of Sohar Aluminium Company and served on the boards of various prominent enterprises. Known for his strategic vision and deep expertise in the oil and gas industry, Al Wahaibi has been instrumental in shaping Oman's investment landscape."
    },
    {
      name: "Sridhar Ganesan",
      // title: "Board of  Oman Holding International Company SAOC",
      title: "Board Member",
      image: "/images/members/shridhar.webp",
      description: "Sridhar Ganesan is a seasoned finance and banking professional with over 35 years of residency in Oman. He holds advanced degrees in finance and management, including an AMP from Harvard Business School. Sridhar retired as Group General Manager – Corporate & International at Bank Muscat after 26 years of service, and previously held key roles in Indian financial institutions.  He has  extensive board experience in sectors such as banking, energy, insurance, and investment.He currently serves on the Board of  Oman Holding International Company SAOC and is a member of the Advisory Board of the  Sultan Qaboos University College of Economics and Political Science. "
    }
   
  ];
  