
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { MenuItem, menuItems } from "@/data/menu-items";

type MenuCategory = "all" | "bread" | "appetizers" | "lunch" | "dinner" | "desserts";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("all");
  
  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => 
        Array.isArray(item.category) 
          ? item.category.includes(activeCategory) 
          : item.category === activeCategory
      );

  return (
    <>
      {/* Menu Hero */}
      <section className="pt-32 pb-12 bg-cafe-50 relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-fixed"></div>
        <div className="container-custom relative">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block text-spice-600 font-medium mb-2">OUR MENU</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
              Discover Old House Restaurant & Bar Cuisine
            </h1>
            <p className="text-muted-foreground text-lg">
              Authentic dishes prepared with fresh ingredients and traditional recipes, 
              bringing the true flavors of India and Nepal to your table.
            </p>
            <Button asChild className="mt-6">
              <Link to="/delivery">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Order Online
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-8 bg-white sticky top-16 z-20 shadow-sm">
        <div className="container-custom">
          <div className="flex overflow-x-auto space-x-2 pb-2 scrollbar-none">
            {[
              { id: "all", label: "All" },
              { id: "appetizers", label: "Appetizers" },
              { id: "bread", label: "Bread" },
              { id: "lunch", label: "Main Course" },
              { id: "dinner", label: "Dinner" },
              { id: "desserts", label: "Desserts" },
            ].map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id as MenuCategory)}
                className="whitespace-nowrap"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="section bg-accent">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover-scale transition-all duration-300"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 flex space-x-1">
                    {item.isVegetarian && (
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">Veg</span>
                    )}
                    {item.isSpicy && (
                      <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded">Spicy</span>
                    )}
                    {item.isPopular && (
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded">Popular</span>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/delivery">
                      <ShoppingCart className="h-4 w-4 mr-2" /> Order Now
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Dietary Needs */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-spice-600 font-medium mb-2">DIETARY INFORMATION</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Catering to Your Dietary Needs
            </h2>
            <p className="text-muted-foreground">
              We understand the importance of accommodating various dietary preferences and restrictions. 
              Please inform our staff about any allergies or special requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-green-100 h-16 w-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                  <path d="M2 12s2.5-9 10-9 10 9 10 9-2.5 9-10 9-10-9-10-9-10-9-10-9Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Vegetarian Options</h3>
              <p className="text-muted-foreground">
                We offer a wide range of delicious vegetarian dishes that don't compromise on flavor or authenticity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-yellow-100 h-16 w-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-600">
                  <path d="m8.5 14.5-5-5c-1.07-1.07-1.07-2.83 0-3.89 1.07-1.07 2.83-1.07 3.89 0L8.5 6.7l1.11-1.09c1.07-1.07 2.83-1.07 3.89 0 1.07 1.07 1.07 2.83 0 3.89l-5 5"></path>
                  <path d="M16.5 9.5 21 14c.61.61.61 1.39 0 2-.61.61-1.39.61-2 0l-4.5-4.5"></path>
                  <path d="m15 6-3 3"></path>
                  <path d="M11.63 12.63 6 18l-3-3 5.63-5.63"></path>
                  <path d="m16.5 9.5 5 5"></path>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Gluten Free</h3>
              <p className="text-muted-foreground">
                Many of our traditional dishes are naturally gluten-free, and we can modify others to meet your needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-red-100 h-16 w-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
                  <path d="m8 2 1.88 1.88"></path>
                  <path d="M14.12 3.88 16 2"></path>
                  <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"></path>
                  <path d="M18 11a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4"></path>
                  <path d="M10 15v1a3 3 0 0 0 3 3v0a3 3 0 0 0 3-3v-1"></path>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Nut Allergies</h3>
              <p className="text-muted-foreground">
                We can prepare dishes without nuts upon request. Please notify our staff about any allergies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Orders CTA */}
      <section className="bg-cafe-800 text-white py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-serif font-bold mb-2">Order Online</h3>
              <p className="text-cafe-100">
                We now offer delivery service. Order our delicious food online!
              </p>
            </div>
            <Button asChild className="bg-white text-cafe-800 hover:bg-cafe-100">
              <Link to="/delivery">Order For Delivery</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuPage;
