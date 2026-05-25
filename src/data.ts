import { Project, Service } from "./types";
import heroImage from "./assets/images/hero_cinematic_1779708719256.png";
import villaImage from "./assets/images/residential_villa_1779708738073.png";
import finishingImage from "./assets/images/architectural_finishing_1779708755892.png";
import landscapeImage from "./assets/images/isabo_landscape_1779708779227.png";
import constructionImage from "./assets/images/structural_construction_1779708799354.png";

// Local image references resolved by Vite
export const CINEMATIC_IMAGES = {
  hero: heroImage,
  villa: villaImage,
  finishing: finishingImage,
  landscape: landscapeImage,
  construction: constructionImage
};

export const SERVICES_DATA: Service[] = [
  {
    id: "serv-1",
    title: "Luxury Residential Development",
    subtitle: "Bespoke Sanctuary Settings",
    description: "Sleek, contemporary custom villas and breathtaking multi-level estates designed for absolute privacy, premium visual framing, and high-performance smart living.",
    image: CINEMATIC_IMAGES.villa,
    details: [
      "Custom floor-to-ceiling structural glazing",
      "Floating cantilevered patios and rooftop sky patios",
      "Fully integrated high-end home automation systems",
      "Climate-controlled subterranean motor-galleries"
    ]
  },
  {
    id: "serv-2",
    title: "Real Estate Construction",
    subtitle: "Elite Structural Integrity",
    description: "Industrial-grade structural engineering executing elaborate plans with absolute safety, using heavy-duty reinforced frameworks and state-of-the-art curing technologies.",
    image: CINEMATIC_IMAGES.construction,
    details: [
      "Premium seismic-resistant foundations",
      "Bespoke structural steel and composite timber frames",
      "Uncompromising German-engineered waterproofing layers",
      "Rigorous third-party structural stress-testing"
    ]
  },
  {
    id: "serv-3",
    title: "Architectural Finishing",
    subtitle: "The Symphony of Detail",
    description: "Artisanal interior and facade finishings sourcing direct-import Bookmatch marble, acoustic wood detailing, custom-alloy metal screens, and concealed golden lighting borders.",
    image: CINEMATIC_IMAGES.finishing,
    details: [
      "Seamless large-format porcelain & travertine laying",
      "Precision shadow-line baseboards and zero-frame doors",
      "Hand-brushed champagne gold and copper structural accents",
      "Multi-layered acoustic damping and sound-isolation walls"
    ]
  },
  {
    id: "serv-4",
    title: "Property Development",
    subtitle: "Masterplanned Legacies",
    description: "Transforming prestigious parcels into secured master estates. Orchestrating roads, underground fiber meshes, custom utility grids, and luxury communal amenities.",
    image: CINEMATIC_IMAGES.landscape,
    details: [
      "Comprehensive site analysis and contour grading",
      "Underground smart direct-current grid and service rings",
      "Biophilic architectural paths and security-perimeter rings",
      "Secured prestige gating structures with facial identification"
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "proj-1",
    name: "The Grand Horizon Estate",
    location: "Isabo, Abeokuta, Ogun State",
    type: "Hillside Smart Mansions",
    completionYear: "2026",
    description: "A breathtaking private enclave of custom glass-fronted smart villas cascading down the scenic rock formations of Isabo.",
    longDescription: "Our signature regional masterpiece. Utilizing the elevation offsets of Isabo, these 8 master-crafted villas merge heavy structural concrete arches with massive floating glass platforms that project into the clouds. Features infinite custom deck pools that blend water with the local horizon, providing a daily cinematic golden hour panorama.",
    specs: [
      { label: "Site Coordinates", value: "Isabo Peak, Abeokuta" },
      { label: "Glazing System", value: "Low-E Triple-Insulated Solar Screen" },
      { label: "Gross Built Area", value: "14,500 SQ-FT per Mansion" },
      { label: "Somatic Controls", value: "Fully integrated automated lighting, climate & acoustic filters" }
    ],
    image: CINEMATIC_IMAGES.landscape
  },
  {
    id: "proj-2",
    name: "Aura Hill Pavilion",
    location: "Abeokuta, Ogun State",
    type: "Ultra-Classic Villa",
    completionYear: "2025",
    description: "An architectural wonder emphasizing absolute minimalism, utilizing raw textured concrete panels and structural brass highlights.",
    longDescription: "A sanctuary constructed upon solid stone, providing a visual counterweight to standard development shapes. Built with a stunning heavy concrete monolith framework that appears to float above the ground. Premium finishes include custom shadow-line mahogany walls, seamless grey basalt tiles, and golden ambient spotlights built deep into structural grooves.",
    specs: [
      { label: "Structural Core", value: "Poured raw concrete & matte dark alloy steel" },
      { label: "Interior Surfaces", value: "Sourced Italian Travertine & Black Obsidian slabs" },
      { label: "Infinity Pool Offset", value: "25-meter Olympic overlap edge with custom heaters" },
      { label: "Parking Bay", value: "Subterranean 6-car glass-view gallery" }
    ],
    image: CINEMATIC_IMAGES.villa
  },
  {
    id: "proj-3",
    name: "The Obsidian Monolith",
    location: "Sovereign Border District",
    type: "High-Rise Development Frame",
    completionYear: "2024",
    description: "A commercial-meets-residential luxurious tower utilizing black composite cladding panels and high-trust soundproof barriers.",
    longDescription: "A high-density monument constructed to support forward-looking lifestyle demands. Utilizing specialized architectural vibration dampening and double-gazed low-iron glass facades which reflect the sunset. The framing elements use lightweight, high-tensile copper panels that shine during dusk flythroughs.",
    specs: [
      { label: "Structural Alloy", value: "Anodized Dark Bronze & Carbon Compositions" },
      { label: "Energy Source", value: "Building-integrated Photovoltaic Solar skin" },
      { label: "Security Level", value: "Biometric and bulletproof panic inner sanctuary" },
      { label: "Amenities", value: "Helipad, private cigar lounge, thermal wellness center" }
    ],
    image: CINEMATIC_IMAGES.construction
  }
];

export const COMPANY_STATS = [
  { value: "15+", label: "Years of Masterly Craft" },
  { value: "48+", label: "Luxury Portfolios Completed" },
  { value: "100%", label: "High-Trust Client Retainers" },
  { value: "₦12B+", label: "Real Estate Assets Initiated" }
];
