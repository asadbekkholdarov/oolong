// Utility functions for organizing product images

export interface ProductImage {
  size: string;
  path: string;
  filename: string;
}

export interface ProductImages {
  [productId: string]: ProductImage[];
}

// Organize all available images by product type (all images are now in public/assets)
export const productImages: ProductImages = {
  '8810': [
    { size: '125', path: '/assets/8810.125.jpg', filename: '8810.125.jpg' },
    { size: '200', path: '/assets/8810.200.jpg', filename: '8810.200.jpg' },
    { size: '250', path: '/assets/8810.250.jpg', filename: '8810.250.jpg' },
    { size: '400', path: '/assets/8810.400.jpg', filename: '8810.400.jpg' },
    { size: '500', path: '/assets/8810.500.jpg', filename: '8810.500.jpg' },
    { size: '1000', path: '/assets/8810.1000.jpg', filename: '8810.1000.jpg' },
    { size: 'JASMIN', path: '/assets/8810.JASMIN.jpg', filename: '8810.JASMIN.jpg' },
    // { size: 'default', path: '/assets/8810.jpg', filename: '8810.jpg' }
  ],
  '8008': [
    { size: '125', path: '/assets/8008.125.jpg', filename: '8008.125.jpg' },
    { size: '250', path: '/assets/8008.250.jpg', filename: '8008.250.jpg' },
    { size: '400', path: '/assets/8008.400.jpg', filename: '8008.400.jpg' },
    { size: '1000', path: '/assets/8008.1000.jpg', filename: '8008.1000.jpg' },
    // { size: 'default', path: '/assets/8008.jpg', filename: '8008.jpg' }
  ],
  'C20': [
    { size: '250', path: '/assets/C20.250.jpg', filename: 'C20.250.jpg' },
    { size: '400', path: '/assets/C20.400.jpg', filename: 'C20.400.jpg' },
    { size: '1000', path: '/assets/C20.1000.jpg', filename: 'C20.1000.jpg' },
    // { size: 'default', path: '/assets/C20.jpg', filename: 'C20.jpg' }
  ],
  'C30': [
    { size: '250', path: '/assets/C30.250.jpg', filename: 'C30.250.jpg' },
    { size: '400', path: '/assets/C30.400.jpg', filename: 'C30.400.jpg' },
    { size: '1000', path: '/assets/C30.1000.jpg', filename: 'C30.1000.jpg' },
    // { size: 'default', path: '/assets/C30.jpg', filename: 'C30.jpg' }
  ],
  'V550': [
    { size: '400', path: '/assets/V550.400.jpg', filename: 'V550.400.jpg' }
  ],
  '3505': [
    { size: '1000', path: '/assets/3505.1000.jpg', filename: '3505.1000.jpg' },
    { size: '5000', path: '/assets/3505.5000.jpg', filename: '3505.5000.jpg' },
    // { size: 'default', path: '/assets/3505.jpg', filename: '3505.jpg' }
  ],
  'C3': [
    { size: '400', path: '/assets/C3.400.jpg', filename: 'C3.400.jpg' },
    // { size: 'default', path: '/assets/C3.jpg', filename: 'C3.jpg' }
  ],
  'C110': [
    { size: '400', path: '/assets/C110.400.jpg', filename: 'C110.400.jpg' },
    // { size: 'default', path: '/assets/C110.jpg', filename: 'C110.jpg' }
  ],
  'C120': [
    { size: '400', path: '/assets/C120.400.jpg', filename: 'C120.400.jpg' },
    // { size: 'default', path: '/assets/C120.jpg', filename: 'C120.jpg' }
  ],
  '2318': [
    { size: '1000', path: '/assets/2318(95).1000.jpg', filename: '2318(95).1000.jpg' }
  ],
  '9371': [
    { size: '500', path: '/assets/9371.500.jpg', filename: '9371.500.jpg' },
    { size: '1000', path: '/assets/9371.1000.jpg', filename: '9371.1000.jpg' },
    { size: '5000', path: '/assets/9371.5000.jpg', filename: '9371.5000.jpg' },
    { size: 'ZIRA', path: '/assets/9371.ZIRA.jpg', filename: '9371.ZIRA.jpg' },
    // { size: 'default', path: '/assets/9371.jpg', filename: '9371.jpg' }
  ],
  '9371-zira': [
    { size: 'ZIRA', path: '/assets/9371.ZIRA.jpg', filename: '9371.ZIRA.jpg' },
    { size: '500', path: '/assets/9371.500.jpg', filename: '9371.500.jpg' },
    { size: '1000', path: '/assets/9371.1000.jpg', filename: '9371.1000.jpg' },
    { size: '5000', path: '/assets/9371.5000.jpg', filename: '9371.5000.jpg' },
  ],
  'J9': [
    { size: '3000', path: '/assets/J9(01A).3000.jpg', filename: 'J9(01A).3000.jpg' },
    // { size: 'default', path: '/assets/J9.jpg', filename: 'J9.jpg' }
  ],
  'J4': [
    { size: '5000', path: '/assets/J4(9500).5000.jpg', filename: 'J4(9500).5000.jpg' },
    // { size: 'default', path: '/assets/J4.jpg', filename: 'J4.jpg' }
  ],
  'J5': [
    { size: '3000', path: '/assets/J5(2318).3000.jpg', filename: 'J5(2318).3000.jpg' },
    { size: '5000', path: '/assets/J5(2318).5000.jpg', filename: 'J5(2318).5000.jpg' },
    // { size: 'default', path: '/assets/J5.jpg', filename: 'J5.jpg' }
  ],
  'J2': [
    { size: '5000', path: '/assets/J2(01A).5000.jpg', filename: 'J2(01A).5000.jpg' },
    // { size: 'default', path: '/assets/J2.jpg', filename: 'J2.jpg' }
  ],
  'J8': [
    { size: '3000', path: '/assets/J8(708A).3000.jpg', filename: 'J8(708A).3000.jpg' },
    // { size: 'default', path: '/assets/J8.jpg', filename: 'J8.jpg' }
  ]
};

// Get the first available image for a product (for product home page)
export function getFirstProductImage(productId: string): string {
  const images = productImages[productId];
  if (!images || images.length === 0) {
    // Fallback to default tea images
    return productId === '8810' ? '/assets/tea-8810.jpg' : '/assets/tea-8008.jpg';
  }
  
  // Return the first image (excluding 'default' if it's not the only one)
  const firstImage = images.find(img => img.size !== 'default') || images[0];
  return firstImage.path;
}

// Get all images for a product (for product details page)
export function getAllProductImages(productId: string): ProductImage[] {
  const images = productImages[productId];
  if (!images || images.length === 0) {
    // Fallback to default tea images
    return [{
      size: 'default',
      path: productId === '8810' ? '/assets/tea-8810.jpg' : '/assets/tea-8008.jpg',
      filename: productId === '8810' ? 'tea-8810.jpg' : 'tea-8008.jpg'
    }];
  }
  
  return images;
}

// Get images for specific sizes of a product
export function getProductImagesBySizes(productId: string, sizes: string[]): ProductImage[] {
  const allImages = getAllProductImages(productId);
  const sizeImages: ProductImage[] = [];
  
  sizes.forEach(size => {
    // Extract numeric part from size (e.g., "125 GR" -> "125")
    const sizeMatch = size.match(/(\d+(?:\.\d+)?)/);
    const numericSize = sizeMatch ? sizeMatch[1] : size;
    
    // Find matching image
    const matchingImage = allImages.find(img => 
      img.size === numericSize || 
      img.size === size ||
      img.size === 'default'
    );
    
    if (matchingImage) {
      sizeImages.push(matchingImage);
    }
  });
  
  return sizeImages.length > 0 ? sizeImages : allImages;
} 