import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { teaProducts, TeaProduct } from '@/data/teaProducts';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Package } from 'lucide-react';
import ProductCarousel from '@/components/ProductCarousel';
import tea8810 from '@/assets/tea-8810.jpg';
import tea8008 from '@/assets/tea-8008.jpg';
import { useNavigate } from 'react-router-dom';

const Products: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const getProductImages = (product: TeaProduct) => {
    // Use the product.image for all products
    return [product.image];
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'premium':
        return 'bg-gold/20 text-gold border-gold/30';
      case 'standard':
        return 'bg-accent-tea/20 text-accent-tea border-accent-tea/30';
      case 'bulk':
        return 'bg-primary/20 text-primary border-primary/30';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="products" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            {t('productsTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('productsSubtitle')}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teaProducts.map((product) => {
            return (
              <Card
                key={product.id}
                className="group hover:shadow-warm transition-all duration-300 border-border/50 hover:border-primary/20 cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <CardHeader className="p-0">
                  <div className="relative">
                    <ProductCarousel
                      images={getProductImages(product)}
                      productName={product.name}
                    />
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <CardTitle className="text-xl font-display text-primary mb-2">
                    {product.name}
                  </CardTitle>

                  <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                    {t(product.description)}
                  </CardDescription>

                  {/* Package Sizes */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <Package className="h-4 w-4" />
                      {t('availableSizes')}:
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs py-1 px-2 bg-accent-tea/10 text-accent-tea border border-accent-tea/20"
                        >
                          {size}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            onClick={() =>
              document
                .querySelector('#contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 rounded-full shadow-warm"
          >
            {t('contactUsForOrder')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
