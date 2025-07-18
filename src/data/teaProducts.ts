export interface TeaProduct {
  id: string;
  name: string;
  description: string;
  sizes: string[];
  category: 'premium' | 'standard' | 'bulk';
}

function parseSize(size) {
  // Extract the numeric value and unit (GR or KG)
  const match = size.match(/(\d+(?:\.\d+)?)\s*(GR|KG)/i);
  if (!match) return Number.MAX_VALUE;
  let value = parseFloat(match[1]);
  if (match[2].toUpperCase() === 'KG') value *= 1000;
  return value;
}

// Sort sizes within each product
export const teaProducts: TeaProduct[] = [
  {
    id: '8810',
    name: '8810',
    description: 'product8810',
    sizes: ['125 GR', '200 GR', '250 GR', '400 GR', '500 GR', '1000 GR'],
    category: 'premium'
  },
  {
    id: '8008',
    name: '8008',
    description: 'product8008',
    sizes: ['125 GR', '250 GR', '400 GR', '1000 GR'],
    category: 'premium'
  },
  {
    id: 'C20',
    name: 'C20',
    description: 'productC20',
    sizes: ['250 GR', '400 GR', '1000 GR'],
    category: 'standard'
  },
  {
    id: 'C30',
    name: 'C30',
    description: 'productC30',
    sizes: ['250 GR', '400 GR', '1000 GR'],
    category: 'standard'
  },
  {
    id: 'V550',
    name: 'V550',
    description: 'productV550',
    sizes: ['400 GR'],
    category: 'premium'
  },
  {
    id: '3505',
    name: '3505',
    description: 'product3505',
    sizes: ['1000 GR', '5000 GR'],
    category: 'bulk'
  },
  {
    id: 'C3',
    name: 'C3',
    description: 'productC3',
    sizes: ['400 GR'],
    category: 'standard'
  },
  {
    id: 'C110',
    name: 'C110',
    description: 'productC110',
    sizes: ['400 GR'],
    category: 'standard'
  },
  {
    id: 'C120',
    name: 'C120',
    description: 'productC120',
    sizes: ['400 GR'],
    category: 'standard'
  },
  {
    id: '2318',
    name: '2318 (95\')',
    description: 'product2318',
    sizes: ['1000 GR'],
    category: 'premium'
  },
  {
    id: '9371',
    name: '9371',
    description: 'product9371',
    sizes: ['500 GR', '1000 GR', '5000 GR'],
    category: 'standard'
  },
  {
    id: '9371-zira',
    name: '9371 ZIRA TEA',
    description: 'product9371zira',
    sizes: ['Special Blend'],
    category: 'premium'
  },
  {
    id: 'J9',
    name: 'J9 (01A)',
    description: 'productJ9',
    sizes: ['3 KG'],
    category: 'bulk'
  },
  {
    id: 'J4',
    name: 'J4 (9500)',
    description: 'productJ4',
    sizes: ['5 KG'],
    category: 'bulk'
  },
  {
    id: 'J5',
    name: 'J5 (2318)',
    description: 'productJ5',
    sizes: ['3 KG', '5 KG'],
    category: 'bulk'
  },
  {
    id: 'J2',
    name: 'J2 (01A)',
    description: 'productJ2',
    sizes: ['5 KG'],
    category: 'bulk'
  },
  {
    id: 'J8',
    name: 'J8 (708A)',
    description: 'productJ8',
    sizes: ['3 KG'],
    category: 'bulk'
  }
]