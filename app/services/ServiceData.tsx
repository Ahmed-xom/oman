export interface Service {
    id: string;
    service: string;
    image: string
    description: string;
  }
  
  export interface CompanyServices {
    XOM_Drilling_Systems_LLC: Service[];
    XOM_Well_Maintenance_LLC: Service[];
  }


export const servicesData: CompanyServices ={
    "XOM_Drilling_Systems_LLC": [
      {
        "id": "XOM_DS_001",
        "service": "Wide range of Drilling Mud Motors",
        "image": "/images/services/motorHead.webp",
        "description": "XOM utilizes a wide range of Drilling Mud Motors for different drilling applications. Our drilling engineers consistently work with our customers to design optimum Bottom-Hole-Assemblies based on analyzing drilling behavior and drilling environment requirements."
      },
      {
        "id": "XOM_DS_002",
        "service": "Mud Pulse Telemetry",
        "image": "/images/services/mudPulse.webp",
        "description": "XOM MPT covers a wide range of flow rates from 125 GPM to 1500 GPM for different hole sections and provides reliable positive pulse data transmission in fluid mediums."
      },
      {
        "id": "XOM_DS_003",
        "service": "Electromagnetic Telemetry",
        "image": "/images/services/electromagnet.webp",
        "description": "XOM EM systems use EM signals to transmit data to the surface as fast as 10 times the MPT system. This system allows for fast data transmission to save survey time, increase data density for precise analysis, and reduce rig uptime. Dual transmission modes (uplink and downlink) enable versatility in data handling."
      },
      {
        "id": "XOM_DS_004",
        "service": "Directional Drilling",
        "image": "/images/services/dirDrilling.webp",
        "description": "XOM provides customized directional drilling services with the latest technology to enable efficient target execution, faster ROP, and increased hydrocarbon recovery."
      }
    ],
    
   
  }
  
