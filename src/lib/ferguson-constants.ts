// Ferguson Enterprises - Supply Chain Control Tower Data Constants
// Centralized reference for product names, facilities, customers, and suppliers

export const FERGUSON_PRODUCTS = {
  // Pipe & Fittings
  COPPER_COUPLING: { name: "3/4in Copper Coupling 100-Pack", sku: "FRG-CP-7501", category: "Pipe & Fittings", price: 245.00 },
  PEX_TUBING: { name: "1/2in PEX Tubing 100ft", sku: "FRG-PX-4410", category: "Pipe & Fittings", price: 89.50 },
  PVC_DWV_FITTING: { name: "2in PVC DWV Fitting", sku: "FRG-PV-1120", category: "Pipe & Fittings", price: 12.75 },
  DUCTILE_IRON_PIPE: { name: "4in Ductile Iron Pipe 20ft", sku: "FRG-DI-4020", category: "Waterworks", price: 385.00 },
  COPPER_PIPE_TYPE_L: { name: "1/2in Copper Pipe Type L 10ft", sku: "FRG-CP-5010", category: "Pipe & Fittings", price: 42.30 },
  PVC_SCHEDULE_40: { name: "3in PVC Schedule 40 Pipe 10ft", sku: "FRG-PV-3010", category: "Pipe & Fittings", price: 18.95 },
  BRASS_BALL_VALVE: { name: "1in Brass Ball Valve", sku: "FRG-VL-1001", category: "Valves", price: 34.50 },
  PUSH_FIT_COUPLING: { name: "3/4in Push-Fit Coupling", sku: "FRG-PF-7500", category: "Pipe & Fittings", price: 8.25 },

  // Water Heaters
  ELECTRIC_WATER_HEATER: { name: "50-Gal Electric Water Heater", sku: "FRG-WH-3200", category: "Water Heaters", price: 649.00 },
  COMMERCIAL_WATER_HEATER: { name: "Rheem 80-Gal Commercial Water Heater", sku: "FRG-WH-8000", category: "Water Heaters", price: 2450.00 },
  TANKLESS_WATER_HEATER: { name: "Rinnai Tankless Water Heater", sku: "FRG-WH-TL50", category: "Water Heaters", price: 1895.00 },
  GAS_WATER_HEATER_40: { name: "AO Smith 40-Gal Gas Water Heater", sku: "FRG-WH-4040", category: "Water Heaters", price: 589.00 },

  // HVAC
  ROOFTOP_UNIT: { name: "Trane 5-Ton Rooftop Unit", sku: "FRG-HV-5000", category: "HVAC", price: 8750.00 },
  SPLIT_SYSTEM_AC: { name: "Carrier 3-Ton Split System AC", sku: "FRG-HV-3000", category: "HVAC", price: 4200.00 },
  GAS_FURNACE: { name: "Lennox 80K BTU Gas Furnace", sku: "FRG-HV-8080", category: "HVAC", price: 2150.00 },
  MINI_SPLIT: { name: "Mitsubishi 12K BTU Mini Split", sku: "FRG-HV-1200", category: "HVAC", price: 1650.00 },

  // Fire Protection
  FIRE_SPRINKLER: { name: "Viking Fire Sprinkler Head", sku: "FRG-FP-2200", category: "Fire Protection", price: 18.50 },
  FIRE_PIPE: { name: "2in Black Steel Fire Pipe 21ft", sku: "FRG-FP-2021", category: "Fire Protection", price: 125.00 },
  BACKFLOW_PREVENTER: { name: "Watts Backflow Preventer 2in", sku: "FRG-WW-3300", category: "Waterworks", price: 875.00 },

  // Plumbing Fixtures
  SINGLE_HANDLE_FAUCET: { name: "Delta Single-Handle Faucet", sku: "FRG-PF-1100", category: "Plumbing Fixtures", price: 189.00 },
  TOILET_ELONGATED: { name: "Kohler Elongated Toilet", sku: "FRG-PF-2200", category: "Plumbing Fixtures", price: 349.00 },
  PRESSURE_REDUCING_VALVE: { name: "Watts Pressure Reducing Valve 3/4in", sku: "FRG-VL-7503", category: "Valves", price: 67.50 },
  COMMERCIAL_SINK: { name: "Elkay Commercial Stainless Sink", sku: "FRG-PF-3300", category: "Plumbing Fixtures", price: 425.00 },

  // Tools & Safety
  PIPE_WRENCH_18: { name: "18in Pipe Wrench", sku: "FRG-TL-1800", category: "Tools", price: 45.00 },
  COPPER_CUTTER: { name: "Copper Tube Cutter 1/8-1in", sku: "FRG-TL-0100", category: "Tools", price: 28.50 },
} as const;

export const FERGUSON_FACILITIES = {
  DC_DALLAS: "Ferguson DC Dallas",
  DC_ATLANTA: "Ferguson DC Atlanta",
  DC_PORTLAND: "Ferguson DC Portland",
  DC_SEATTLE: "Ferguson DC Seattle",
  DC_CHICAGO: "Ferguson DC Chicago",
  DC_PHOENIX: "Ferguson DC Phoenix",
  DC_SACRAMENTO: "Ferguson DC Sacramento",
  BRANCH_MIAMI: "Ferguson Branch Miami",
  BRANCH_DENVER: "Ferguson Branch Denver",
  BRANCH_CHARLOTTE: "Ferguson Branch Charlotte",
  BRANCH_HOUSTON: "Ferguson Branch Houston",
  BRANCH_MINNEAPOLIS: "Ferguson Branch Minneapolis",
  CENTRAL_DC: "Ferguson Central DC - Newport News, VA",
  REGIONAL_DC_WEST: "Ferguson Regional DC - Phoenix, AZ",
  REGIONAL_DC_SOUTH: "Ferguson Regional DC - Dallas, TX",
} as const;

export const FERGUSON_CUSTOMERS = {
  PLUMBING_CONTRACTORS: [
    "Apex Plumbing Services",
    "Summit Plumbing & Mechanical",
    "Metro Plumbing Contractors",
    "Valley Plumbing Solutions",
    "Pacific Plumbing Group",
    "Reliable Plumbing Inc",
    "ProFlow Plumbing Services",
    "National Plumbing Alliance",
  ],
  HVAC_CONTRACTORS: [
    "Valley HVAC Solutions",
    "Summit Mechanical Services",
    "ThermalTech HVAC",
    "CoolAir Systems Inc",
    "Precision Climate Control",
    "AirPro Mechanical",
  ],
  GENERAL_CONTRACTORS: [
    "Metro Contractors Inc",
    "BuildRight Construction",
    "National Construction Group",
    "Premier Builders LLC",
    "Cornerstone Construction",
  ],
  MUNICIPALITIES: [
    "City of Portland Water Dept",
    "Dallas Public Works",
    "Phoenix Water Services",
    "Atlanta Dept of Watershed",
    "Denver Water Authority",
  ],
} as const;

export const FERGUSON_SUPPLIERS = {
  CHARLOTTE_PIPE: { name: "Charlotte Pipe & Foundry", category: "Pipe & Fittings", location: "Charlotte, NC" },
  RHEEM: { name: "Rheem Manufacturing", category: "Water Heaters", location: "Montgomery, AL" },
  TRANE: { name: "Trane Technologies", category: "HVAC", location: "Davidson, NC" },
  WATTS_WATER: { name: "Watts Water Technologies", category: "Valves & Flow Control", location: "North Andover, MA" },
  ELKAY: { name: "Elkay Manufacturing", category: "Plumbing Fixtures", location: "Downers Grove, IL" },
  VIKING: { name: "Viking Group Inc", category: "Fire Protection", location: "Caledonia, MI" },
  DELTA: { name: "Delta Faucet Company", category: "Plumbing Fixtures", location: "Indianapolis, IN" },
  KOHLER: { name: "Kohler Co", category: "Plumbing Fixtures", location: "Kohler, WI" },
  AO_SMITH: { name: "A.O. Smith Corporation", category: "Water Heaters", location: "Milwaukee, WI" },
  CARRIER: { name: "Carrier Global", category: "HVAC", location: "Palm Beach Gardens, FL" },
  MUELLER_WATER: { name: "Mueller Water Products", category: "Waterworks", location: "Atlanta, GA" },
  MCWANE: { name: "McWane Inc", category: "Waterworks", location: "Birmingham, AL" },
} as const;

export const FERGUSON_REVENUE_CATEGORIES = {
  PLUMBING: "Plumbing & Pipe",
  HVAC: "HVAC Equipment",
  WATERWORKS: "Waterworks & Fire Protection",
  FIXTURES: "Plumbing Fixtures & Faucets",
  TOOLS: "Tools & Safety Equipment",
} as const;

// Product mapping from old names to new Ferguson products
export const PRODUCT_MAPPING: Record<string, typeof FERGUSON_PRODUCTS[keyof typeof FERGUSON_PRODUCTS]> = {
  "FROSTY MIX VANILLA CLEAN LABEL": FERGUSON_PRODUCTS.COPPER_COUPLING,
  "FROSTY MIX CHOCOLATE CLEAN LABEL": FERGUSON_PRODUCTS.ELECTRIC_WATER_HEATER,
  "SAUCE MINT CHOCOLATE COOKIE": FERGUSON_PRODUCTS.PEX_TUBING,
  "Marble Mosaic": FERGUSON_PRODUCTS.PVC_DWV_FITTING,
  "Ceramic White": FERGUSON_PRODUCTS.COMMERCIAL_WATER_HEATER,
  "Porcelain Stone": FERGUSON_PRODUCTS.DUCTILE_IRON_PIPE,
  "Granite Pearl": FERGUSON_PRODUCTS.ROOFTOP_UNIT,
  "Slate Grey": FERGUSON_PRODUCTS.FIRE_SPRINKLER,
  "Travertine Beige": FERGUSON_PRODUCTS.SINGLE_HANDLE_FAUCET,
  "Quartzite Gold": FERGUSON_PRODUCTS.PRESSURE_REDUCING_VALVE,
  "Onyx Black": FERGUSON_PRODUCTS.BACKFLOW_PREVENTER,
  "Limestone Cream": FERGUSON_PRODUCTS.SPLIT_SYSTEM_AC,
  "Sandstone Tan": FERGUSON_PRODUCTS.GAS_FURNACE,
  "Basalt Dark": FERGUSON_PRODUCTS.BRASS_BALL_VALVE,
  "Terrazzo Mix": FERGUSON_PRODUCTS.COPPER_PIPE_TYPE_L,
};
