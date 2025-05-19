
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <>
      {/* About Hero */}
      <section className="pt-32 pb-12 bg-cafe-50 relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-fixed"></div>
        <div className="container-custom relative">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block text-spice-600 font-medium mb-2">ABOUT US</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
              Our Story
            </h1>
            <p className="text-muted-foreground text-lg">
              Discover the journey and values behind Old House Cafe Damak.
            </p>
          </div>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-spice-600 font-medium mb-2">OUR BEGINNING</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                The Old House Cafe Story
              </h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Old House Cafe began in 2010 as a small family venture with a simple mission: to preserve 
                and share the authentic flavors of Nepal with both locals and visitors in Damak.
              </p>
              <p className="text-lg mb-6 text-muted-foreground">
                Founded by the Sharma family, who have deep roots in the culinary traditions of Nepal,
                the cafe was originally housed in a restored traditional Nepali building—hence the name
                "Old House Cafe." While we've grown over the years, we've maintained our commitment to 
                authentic flavors and warm hospitality.
              </p>
              <p className="text-lg mb-6 text-muted-foreground">
                Today, Old House Cafe is a beloved gathering place in Damak, offering not just delicious
                food but a cultural experience that celebrates Nepal's rich culinary heritage.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Old House Cafe storefront"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-cafe-800 font-bold text-2xl">Since</p>
                <p className="text-primary text-4xl font-serif font-bold">2010</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="section bg-accent">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-spice-600 font-medium mb-2">OUR VALUES</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              What We Stand For
            </h2>
            <p className="text-muted-foreground">
              Our core values define everything we do at Old House Cafe, from how we source ingredients
              to how we treat our guests and staff.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-16 w-16 bg-cafe-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cafe-600">
                  <path d="M2 12s2.5-9 10-9 10 9 10 9-2.5 9-10 9-10-9-10-9Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3">Authenticity</h3>
              <p className="text-muted-foreground">
                We stay true to traditional Nepali recipes and cooking methods, offering genuine flavors
                that have been passed down through generations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-16 w-16 bg-cafe-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cafe-600">
                  <path d="M12 22v-5"></path>
                  <path d="M9 7V2"></path>
                  <path d="M15 7V2"></path>
                  <path d="M6 13V8a6 6 0 0 1 12 0v5a6 6 0 0 1-12 0v-5a6 6 0 0 1 12 0v5"></path>
                  <path d="M6 8h12"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3">Quality</h3>
              <p className="text-muted-foreground">
                We source the freshest ingredients from local farmers and suppliers, ensuring our dishes
                are not only delicious but also support the local community.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-16 w-16 bg-cafe-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cafe-600">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m8 14 2.5 2.5L16 10"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3">Hospitality</h3>
              <p className="text-muted-foreground">
                We believe in the Nepali tradition of "Atithi Devo Bhava" (The Guest is God), treating
                every customer with warmth and respect like a member of our family.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-spice-600 font-medium mb-2">OUR TEAM</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Meet the People Behind Old House Cafe
            </h2>
            <p className="text-muted-foreground">
              Our passionate team brings together years of experience and a shared love for Nepali cuisine.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="aspect-square rounded-full overflow-hidden w-48 mx-auto mb-6">
                <img
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80"
                  alt="Rajesh Sharma - Founder & Head Chef"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-1">Rajesh Sharma</h3>
              <p className="text-primary font-medium mb-4">Founder & Head Chef</p>
              <p className="text-muted-foreground">
                With over 25 years of culinary experience, Rajesh is the heart of Old House Cafe, 
                bringing traditional recipes from his family's cookbook.
              </p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square rounded-full overflow-hidden w-48 mx-auto mb-6">
                <img
                  src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="Priya Sharma - Co-Founder & Manager"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-1">Priya Sharma</h3>
              <p className="text-primary font-medium mb-4">Co-Founder & Manager</p>
              <p className="text-muted-foreground">
                Priya manages the day-to-day operations with a focus on customer experience and ensuring 
                that every visit to Old House Cafe is special.
              </p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square rounded-full overflow-hidden w-48 mx-auto mb-6">
                <img
                  src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
                  alt="Ankit Gurung - Chef de Cuisine"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-1">Ankit Gurung</h3>
              <p className="text-primary font-medium mb-4">Chef de Cuisine</p>
              <p className="text-muted-foreground">
                Trained in both Nepal and internationally, Ankit brings creativity and modern techniques 
                while respecting the traditional essence of our menu.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="section bg-cafe-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-spice-600 font-medium mb-2">OUR JOURNEY</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              The Growth of Old House Cafe
            </h2>
            <p className="text-muted-foreground">
              From a small family cafe to one of Damak's most beloved dining establishments.
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="relative pl-10 md:pl-0">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-cafe-300"></div>
              
              {/* 2010 */}
              <div className="md:grid md:grid-cols-2 gap-8 relative">
                <div className="hidden md:flex justify-end">
                  <div className="w-4/5 text-right">
                    <h3 className="text-2xl font-serif font-bold mb-2">2010</h3>
                    <h4 className="text-xl font-medium text-primary mb-2">Grand Opening</h4>
                    <p className="text-muted-foreground">
                      Old House Cafe opens its doors in a restored traditional Nepali building, offering a 
                      small menu of family recipes prepared by founder Rajesh Sharma.
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-0 md:top-6 bg-primary rounded-full h-6 w-6 border-4 border-white z-10"></div>
                <div className="md:hidden">
                  <h3 className="text-2xl font-serif font-bold mb-2">2010</h3>
                  <h4 className="text-xl font-medium text-primary mb-2">Grand Opening</h4>
                </div>
                <div className="w-4/5 md:mt-0 md:pt-0">
                  <div className="md:hidden mb-4">
                    <p className="text-muted-foreground">
                      Old House Cafe opens its doors in a restored traditional Nepali building, offering a 
                      small menu of family recipes prepared by founder Rajesh Sharma.
                    </p>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Old House Cafe in 2010"
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
              </div>
              
              {/* 2015 */}
              <div className="md:grid md:grid-cols-2 gap-8 relative mt-12">
                <div className="md:hidden">
                  <h3 className="text-2xl font-serif font-bold mb-2">2015</h3>
                  <h4 className="text-xl font-medium text-primary mb-2">Expansion</h4>
                </div>
                <div className="w-4/5 md:mt-0 md:pt-0">
                  <div className="md:hidden mb-4">
                    <p className="text-muted-foreground">
                      After gaining popularity, we expanded to a larger space while maintaining our 
                      traditional aesthetic. New dishes were added to the menu based on customer favorites.
                    </p>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Old House Cafe expansion in 2015"
                    className="rounded-lg shadow-md w-full md:order-1"
                  />
                </div>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-0 md:top-6 bg-primary rounded-full h-6 w-6 border-4 border-white z-10"></div>
                <div className="hidden md:block">
                  <h3 className="text-2xl font-serif font-bold mb-2">2015</h3>
                  <h4 className="text-xl font-medium text-primary mb-2">Expansion</h4>
                  <p className="text-muted-foreground">
                    After gaining popularity, we expanded to a larger space while maintaining our 
                    traditional aesthetic. New dishes were added to the menu based on customer favorites.
                  </p>
                </div>
              </div>
              
              {/* 2020 */}
              <div className="md:grid md:grid-cols-2 gap-8 relative mt-12">
                <div className="hidden md:flex justify-end">
                  <div className="w-4/5 text-right">
                    <h3 className="text-2xl font-serif font-bold mb-2">2020</h3>
                    <h4 className="text-xl font-medium text-primary mb-2">10th Anniversary</h4>
                    <p className="text-muted-foreground">
                      Celebrated our 10th anniversary with a complete interior renovation, adding a dedicated 
                      event space and introducing our signature Thakali Thali Set that has become our most popular dish.
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-0 md:top-6 bg-primary rounded-full h-6 w-6 border-4 border-white z-10"></div>
                <div className="md:hidden">
                  <h3 className="text-2xl font-serif font-bold mb-2">2020</h3>
                  <h4 className="text-xl font-medium text-primary mb-2">10th Anniversary</h4>
                </div>
                <div className="w-4/5 md:mt-0 md:pt-0">
                  <div className="md:hidden mb-4">
                    <p className="text-muted-foreground">
                      Celebrated our 10th anniversary with a complete interior renovation, adding a dedicated 
                      event space and introducing our signature Thakali Thali Set that has become our most popular dish.
                    </p>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1611489142329-5f62cfa43e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Old House Cafe 10th anniversary"
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
              </div>
              
              {/* Today */}
              <div className="md:grid md:grid-cols-2 gap-8 relative mt-12">
                <div className="md:hidden">
                  <h3 className="text-2xl font-serif font-bold mb-2">Today</h3>
                  <h4 className="text-xl font-medium text-primary mb-2">Looking to the Future</h4>
                </div>
                <div className="w-4/5 md:mt-0 md:pt-0">
                  <div className="md:hidden mb-4">
                    <p className="text-muted-foreground">
                      Today, Old House Cafe is a beloved institution in Damak, known for authentic Nepali cuisine
                      and warm hospitality. We're constantly evolving while staying true to our roots.
                    </p>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1600353565554-155246029dd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Old House Cafe today"
                    className="rounded-lg shadow-md w-full md:order-1"
                  />
                </div>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-0 md:top-6 bg-primary rounded-full h-6 w-6 border-4 border-white z-10"></div>
                <div className="hidden md:block">
                  <h3 className="text-2xl font-serif font-bold mb-2">Today</h3>
                  <h4 className="text-xl font-medium text-primary mb-2">Looking to the Future</h4>
                  <p className="text-muted-foreground">
                    Today, Old House Cafe is a beloved institution in Damak, known for authentic Nepali cuisine
                    and warm hospitality. We're constantly evolving while staying true to our roots.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-cafe-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Come Experience Our Story
          </h2>
          <p className="text-cafe-100 max-w-2xl mx-auto mb-8 text-lg">
            Visit Old House Cafe and be part of our continuing journey. We look forward to sharing 
            our passion for Nepali cuisine with you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-cafe-800 hover:bg-cafe-100">
              <Link to="/reservation">Reserve a Table</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-cafe-800">
              <Link to="/contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
