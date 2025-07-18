import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { teaProducts } from '@/data/teaProducts';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronLeft } from 'lucide-react';
import { getAllProductImages, getFirstProductImage } from '@/lib/imageUtils';

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

  // Get all available images for this product
  const productImages = getAllProductImages(product.id);

  // Get related products (same category, excluding current product)
  const relatedProducts = teaProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  // Scroll to top when component mounts or product changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  return (
    <>
      <Header />
      <section className="py-20 bg-background min-h-[70vh]">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-3 text-primary hover:text-primary/80 mb-8 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/30 transition-all duration-200"
            aria-label="Back"
          >
            <ChevronLeft className="h-7 w-7" />
            <span className="text-xl font-semibold">{t('back') || 'Back'}</span>
          </button>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary mb-6 text-center">
            {product.name}
          </h1>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            {t(product.description)}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 max-w-5xl mx-auto">
            {productImages.map((img, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="rounded-xl overflow-hidden shadow-warm mb-3 w-4/5 aspect-[2/3] bg-muted border-2 border-accent-tea/30 p-2">
                  <img
                    src={img.path}
                    alt={`${product.name} - ${img.size}`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <Badge className="text-base font-semibold px-5 py-2.5 bg-primary/10 text-primary border-2 border-primary/30 shadow-sm rounded-lg">
                  {img.size === 'default' ? 'Default' : `${img.size} GR`}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-gradient-warm">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-8 text-center">
              {t('otherTea')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedProducts.map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="group cursor-pointer"
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                >
                  <div className="bg-background rounded-xl overflow-hidden shadow-warm border-2 border-accent-tea/20 hover:border-primary/40 transition-all duration-300">
                    <div className="aspect-[2/3] overflow-hidden">
                      <img
                        src={getFirstProductImage(relatedProduct.id)}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-display font-semibold text-primary mb-2">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {t(relatedProduct.description)}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {relatedProduct.sizes.slice(0, 3).map((size, index) => (
                          <span
                            key={index}
                            className="text-xs px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded"
                          >
                            {size}
                          </span>
                        ))}
                        {relatedProduct.sizes.length > 3 && (
                          <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded">
                            +{relatedProduct.sizes.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
};

export default ProductDetails;
