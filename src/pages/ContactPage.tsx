
import { useState } from "react";
import { toast } from "sonner";
import { Phone, MapPin, Mail, MessageSquare, Clock } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form data:", data);
      toast.success("Message sent successfully!", {
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  }
  
  return (
    <>
      {/* Contact Hero */}
      <section className="pt-32 pb-12 bg-cafe-50 relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-fixed"></div>
        <div className="container-custom relative">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block text-spice-600 font-medium mb-2">CONTACT US</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
              Get In Touch
            </h1>
            <p className="text-muted-foreground text-lg">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Info Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="bg-primary h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-4">Visit Us</h3>
              <p className="text-muted-foreground mb-4">
                123 Main Street, Damak<br />
                Jhapa, Nepal
              </p>
              <a 
                href="https://www.google.com/maps?q=Damak,Nepal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                View on Map
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="bg-primary h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-4">Call Us</h3>
              <p className="text-muted-foreground mb-4">
                Phone: <a href="tel:+9779800000000" className="text-primary hover:underline">+977 980-000-0000</a><br />
                Reservations: <a href="tel:+9779700000000" className="text-primary hover:underline">+977 970-000-0000</a>
              </p>
              <a 
                href="https://wa.me/9779800000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-600 hover:underline"
              >
                <MessageSquare className="h-5 w-5 mr-1" /> WhatsApp
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="bg-primary h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-4">Opening Hours</h3>
              <p className="text-muted-foreground">
                Monday - Friday: 8:00 AM - 9:00 PM<br />
                Saturday: 9:00 AM - 10:00 PM<br />
                Sunday: 10:00 AM - 8:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form & Map Section */}
      <section className="section bg-accent">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                Send Us a Message
              </h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="What is this regarding?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can we help you?" 
                            rows={6} 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                Find Us
              </h2>
              <div className="rounded-lg overflow-hidden shadow-md h-[500px]">
                <iframe 
                  title="Old House Cafe Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28522.43396788372!2d87.66955624999999!3d26.6700698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e59c1aaaaaaa0b%3A0x51ecd92b13e4a5e4!2sDamak%2C%20Nepal!5e0!3m2!1sen!2sus!4v1716621375260!5m2!1sen!2sus"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="mt-6 flex items-center">
                <Mail className="h-5 w-5 text-muted-foreground mr-2" />
                <p className="text-muted-foreground">
                  Email: <a href="mailto:info@oldhousecafe.com" className="text-primary hover:underline">info@oldhousecafe.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-cafe-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-cafe-100 max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter for updates on special events, new menu items, and exclusive offers.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white text-cafe-800"
            />
            <Button className="bg-spice-500 hover:bg-spice-600">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
