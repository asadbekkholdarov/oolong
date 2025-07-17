import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { teaProducts } from '@/data/teaProducts';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronLeft } from 'lucide-react';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const product = teaProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto py-20 text-center text-2xl text-muted-foreground">
        {t('error')}: Product not found
      </div>
    );
  }

  // Generate images for each size (if only one image, repeat it)
  const images = product.sizes.map((_, idx) => {
    if (Array.isArray(product.image)) {
      return product.image[idx] || product.image[0];
    }
    return product.image;
  });

  return (
    <>
      <Header />
      <section className="py-20 bg-background min-h-[70vh]">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-primary hover:underline mb-8"
            aria-label="Back"
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="text-lg font-medium">{t('back') || 'Back'}</span>
          </button>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary mb-6 text-center">
            {product.name}
          </h1>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            {t(product.description)}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {images.map((img, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="rounded-xl overflow-hidden shadow-warm mb-4 w-full aspect-[4/3] bg-muted">
                  <img
                    src={img}
                    alt={`${product.name} - ${product.sizes[idx]}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <Badge className="text-base px-4 py-2 bg-accent-tea/10 text-accent-tea border border-accent-tea/20">
                  {product.sizes[idx]}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetails;
