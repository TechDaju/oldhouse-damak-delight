
import { useState } from "react";
import { toast } from "sonner";
import { ShoppingCart, Check, Plus, Minus, Trash2 } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { MenuItem, menuItems } from "@/data/menu-items";

const deliveryFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  address: z.string().min(10, {
    message: "Please enter your complete delivery address.",
  }),
  notes: z.string().optional(),
});

type DeliveryFormValues = z.infer<typeof deliveryFormSchema>;

const DeliveryPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cartItems, setCartItems] = useState<{item: MenuItem; quantity: number}[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const navigate = useNavigate();
  
  const form = useForm<DeliveryFormValues>({
    resolver: zodResolver(deliveryFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      notes: "",
    },
  });

  const addToCart = (item: MenuItem) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.item.id === item.id);
      if (existingItem) {
        return prevItems.map(cartItem => 
          cartItem.item.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        );
      }
      return [...prevItems, { item, quantity: 1 }];
    });
    
    toast.success(`Added ${item.name} to your cart`);
  };

  const updateQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems(prevItems => prevItems.filter(item => item.item.id !== itemId));
      return;
    }
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (itemId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.item.id !== itemId));
    toast.info("Item removed from cart");
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      // Extract numeric value from price string (e.g., "रू 250" -> 250)
      const priceValue = parseInt(item.item.price.replace(/\D/g, ''));
      return total + (priceValue * item.quantity);
    }, 0);
  };

  function onSubmit(data: DeliveryFormValues) {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty. Please add some items before ordering.");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Order data:", {
        customer: data,
        items: cartItems,
        total: calculateTotal(),
        orderDate: new Date(),
      });
      
      toast.success("Order placed successfully!", {
        description: "We'll deliver your order as soon as possible.",
      });
      
      // Reset form and cart
      form.reset();
      setCartItems([]);
      setIsSubmitting(false);
      
      // Navigate to success page
      navigate("/delivery-success");
    }, 1500);
  }

  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => 
        Array.isArray(item.category) 
          ? item.category.includes(activeCategory) 
          : item.category === activeCategory
      );
  
  return (
    <>
      {/* Delivery Hero */}
      <section className="pt-32 pb-12 bg-cafe-50 relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80')] bg-fixed"></div>
        <div className="container-custom relative">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block text-spice-600 font-medium mb-2">ONLINE ORDER</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
              Order For Delivery
            </h1>
            <p className="text-muted-foreground text-lg">
              Enjoy our authentic Nepali cuisine delivered right to your doorstep.
            </p>
          </div>
        </div>
      </section>
      
      {/* Delivery Content */}
      <section className="section bg-accent">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Menu Selection */}
            <div className="lg:col-span-2">
              {/* Category Filters */}
              <div className="flex overflow-x-auto space-x-2 pb-4 mb-6 scrollbar-none">
                {[
                  { id: "all", label: "All" },
                  { id: "breakfast", label: "Breakfast" },
                  { id: "lunch", label: "Lunch" },
                  { id: "dinner", label: "Dinner" },
                  { id: "beverages", label: "Beverages" },
                  { id: "desserts", label: "Desserts" },
                ].map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    onClick={() => setActiveCategory(category.id)}
                    className="whitespace-nowrap"
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
              
              {/* Menu Items Grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {filteredItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-40 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="p-4 pb-0">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <span className="font-bold text-primary">{item.price}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                        {item.description}
                      </p>
                      <div className="flex items-center space-x-2">
                        {item.isVegetarian && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded">Veg</span>
                        )}
                        {item.isSpicy && (
                          <span className="bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded">Spicy</span>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button 
                        variant="default" 
                        className="w-full"
                        onClick={() => addToCart(item)}
                      >
                        <Plus className="h-4 w-4 mr-1" /> Add to Order
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Order Summary & Checkout */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ShoppingCart className="mr-2 h-5 w-5" /> Your Order
                  </CardTitle>
                  <CardDescription>
                    {cartItems.length === 0 
                      ? "Your cart is empty" 
                      : `${cartItems.length} item(s) in your cart`}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {cartItems.length > 0 ? (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Item</TableHead>
                          <TableHead className="text-right">Qty</TableHead>
                          <TableHead className="text-right">Price</TableHead>
                          <TableHead className="w-8"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {cartItems.map((cartItem) => (
                          <TableRow key={cartItem.item.id}>
                            <TableCell className="font-medium">{cartItem.item.name}</TableCell>
                            <TableCell className="text-right">
                              <div className="flex items-center justify-end">
                                <Button 
                                  variant="outline" 
                                  size="icon" 
                                  className="h-8 w-8 rounded-full"
                                  onClick={() => updateQuantity(cartItem.item.id, cartItem.quantity - 1)}
                                >
                                  <Minus className="h-4 w-4" />
                                </Button>
                                <span className="w-8 text-center">{cartItem.quantity}</span>
                                <Button 
                                  variant="outline" 
                                  size="icon" 
                                  className="h-8 w-8 rounded-full"
                                  onClick={() => updateQuantity(cartItem.item.id, cartItem.quantity + 1)}
                                >
                                  <Plus className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                            <TableCell className="text-right">
                              {cartItem.item.price}
                            </TableCell>
                            <TableCell>
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                className="h-8 w-8 text-destructive hover:text-destructive/90"
                                onClick={() => removeFromCart(cartItem.item.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                      <TableFooter>
                        <TableRow>
                          <TableCell colSpan={2}>Total</TableCell>
                          <TableCell className="text-right">रू {calculateTotal()}</TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                      </TableFooter>
                    </Table>
                  ) : (
                    <div className="text-center py-6 text-muted-foreground">
                      <ShoppingCart className="h-12 w-12 mx-auto mb-3 opacity-25" />
                      <p>Add items from the menu to begin your order</p>
                    </div>
                  )}
                  
                  {cartItems.length > 0 && (
                    <div className="mt-6 space-y-6">
                      <h3 className="font-medium text-lg">Delivery Information</h3>
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your full name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input placeholder="+977 98XXXXXXXX" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Delivery Address</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Your complete address for delivery" 
                                    rows={3}
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="notes"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Special Instructions (Optional)</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Any special requests for your order" 
                                    rows={2}
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <Button 
                            type="submit" 
                            className="w-full mt-4"
                            disabled={isSubmitting || cartItems.length === 0}
                          >
                            {isSubmitting ? (
                              <>Processing Order...</>
                            ) : (
                              <>Place Order</>
                            )}
                          </Button>
                        </form>
                      </Form>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Delivery Information */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Delivery Information
            </h2>
            <p className="text-muted-foreground">
              We deliver to locations within Damak and surrounding areas. Please check our delivery guidelines below.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="mt-4">Delivery Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We currently deliver within a 5km radius of Damak city center. For locations outside this area, additional charges may apply.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="mt-4">Delivery Times</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Delivery hours: 10:00 AM - 8:00 PM daily. Average delivery time is 30-45 minutes depending on your location and order volume.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="mt-4">Minimum Order</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Minimum order for delivery is रू 300. Orders below this amount can be picked up at our restaurant.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeliveryPage;
