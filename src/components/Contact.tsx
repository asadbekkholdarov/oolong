import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import {
  Send,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Download,
} from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDownloadCatalog = () => {
    // Create a placeholder download - replace with actual catalog URL
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual catalog URL
    link.download = 'oolong-tea-catalog.pdf';
    link.click();

    toast({
      title: 'Catalog Download',
      description: 'Catalog download will be available soon.',
    });
  };

  // Replace with your actual Telegram bot token and chat ID
  const TELEGRAM_BOT_TOKEN = '8156919054:AAGI3bxchxsEev4eFtRiT_FVNWDl5FAVyio';
  const TELEGRAM_CHAT_ID = '491621576';

  // Send form data to Telegram
  const sendToTelegram = async (data: typeof formData) => {
    const message = `New Contact Form Submission:%0AName: ${data.name}%0AEmail: ${data.email}%0APhone: ${data.phone}%0AMessage: ${data.message}`;
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${message}`;
    return fetch(url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    try {
      // Send to Telegram
      await sendToTelegram(formData);

      toast({
        title: t('success'),
        description: "Your message has been saved! We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: t('error'),
        description:
          'There was an error saving your message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section id="contact" className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                {t('contactTitle')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('contactSubtitle')}
              </p>
            </div>

            <Card className="border-border/50 shadow-warm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
                {/* Contact Form 50% */}
                <div className="p-8 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5 text-primary" />
                      {t('contactTitle')}
                    </CardTitle>
                    <CardDescription>{t('fillOutForm')}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Input
                            name="name"
                            placeholder={t('name')}
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full"
                          />
                        </div>
                        <div>
                          <Input
                            name="email"
                            type="email"
                            placeholder={t('email')}
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full"
                          />
                        </div>
                      </div>
                      <div>
                        <Input
                          name="phone"
                          type="tel"
                          placeholder={t('phone')}
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <Textarea
                          name="message"
                          placeholder={t('message')}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full resize-none"
                        />
                      </div>
                      {/* Catalog Section */}
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Product Catalog
                        </label>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={handleDownloadCatalog}
                          className="w-full"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          {t('downloadCatalog')}
                        </Button>
                      </div>
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-primary hover:bg-primary-hover text-primary-foreground py-6 rounded-lg shadow-warm"
                      >
                        {isLoading ? (
                          t('loading')
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            {t('sendMessage')}
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </div>
                {/* Geolocation Map 50% */}
                <div className="flex items-center justify-center p-0">
                  <div className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg border border-border">
                    <iframe
                      src="https://www.google.com/maps/d/embed?mid=1pj5N3RbNMJCXk0qNjB4lN_WBAgKy6Sk&ehbc=2E312F"
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: 400 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Company Location"
                    ></iframe>
                  </div>
                </div>
              </div>
            </Card>
            {/* Contact Info Row Full Width */}
            <div className="flex flex-col md:flex-row mt-8 bg-white/70 rounded-lg p-6 shadow divide-y md:divide-y-0 md:divide-x divide-border">
              <div className="flex items-center gap-2 text-primary w-full md:w-1/3 justify-center py-2 md:py-0 md:px-4">
                <Mail className="h-5 w-5" />
                <span>info@oolongtea.uz</span>
              </div>
              <div className="flex items-center gap-2 text-primary w-full md:w-1/3 justify-center py-2 md:py-0 md:px-4">
                <Phone className="h-5 w-5" />
                <span>+998953012218</span>
                <span>+998910515858</span>
              </div>
              <div className="flex items-center gap-2 text-primary w-full md:w-1/3 justify-center py-2 md:py-0 md:px-4">
                <MapPin className="h-5 w-5" />
                <span>Namangan, Uzbekistan</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
