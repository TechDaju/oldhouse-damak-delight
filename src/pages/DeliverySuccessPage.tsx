
import { useEffect, useContext } from "react";
import { CheckCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const DeliverySuccessPage = () => {
  const location = useLocation();
  const orderDetails = location.state?.orderDetails;

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pt-32 pb-20 bg-accent min-h-screen">
      <div className="container-custom">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-2xl font-serif font-bold mb-2">Order Successful!</h1>
          <p className="text-muted-foreground mb-6">
            Thank you for your order. We've received your request and will prepare it shortly.
          </p>
          
          <div className="bg-accent p-4 rounded-md mb-6">
            <h2 className="font-medium mb-2">What happens next?</h2>
            <p className="text-muted-foreground text-sm">
              Our team will prepare your delicious meal and deliver it to your provided address.
              You'll receive a call from our delivery person when they're on the way.
            </p>
          </div>
          
          <div className="space-y-4">
            <Button asChild className="w-full">
              <Link to="/delivery">Place Another Order</Link>
            </Button>
            
            <Button asChild variant="outline" className="w-full">
              <Link to="/">Return to Homepage</Link>
            </Button>
          </div>
          
          <div className="mt-8 pt-4 border-t border-muted">
            <p className="text-sm text-muted-foreground">
              Have questions about your order? <br />
              Call us at <a href="tel:9764493536" className="text-primary hover:underline">9764493536</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySuccessPage;
