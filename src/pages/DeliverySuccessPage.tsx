
import { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const DeliverySuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderDetails = location.state?.orderDetails;

  // If no order details are found, redirect back to delivery page
  useEffect(() => {
    if (!orderDetails) {
      navigate("/delivery");
    }
  }, [orderDetails, navigate]);

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
          
          {orderDetails && (
            <div className="bg-accent p-4 rounded-md mb-6 text-left">
              <h2 className="font-medium mb-2 text-center">Order Summary</h2>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">Name:</span> {orderDetails.customer.name}</p>
                <p><span className="font-medium">Phone:</span> {orderDetails.customer.phone}</p>
                <p><span className="font-medium">Address:</span> {orderDetails.customer.address}</p>
                {orderDetails.customer.notes && (
                  <p><span className="font-medium">Notes:</span> {orderDetails.customer.notes}</p>
                )}
                
                <div className="mt-3">
                  <p className="font-medium">Items:</p>
                  <ul className="mt-1 space-y-1 pl-4">
                    {orderDetails.items.map((item, index) => (
                      <li key={index}>
                        {item.quantity}x {item.item.name} ({item.item.price})
                      </li>
                    ))}
                  </ul>
                </div>
                
                <p className="mt-2 font-medium text-primary">Total: रू {orderDetails.total}</p>
              </div>
            </div>
          )}
          
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
              Call us at <a href="tel:9816902671" className="text-primary hover:underline">9816902671</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySuccessPage;
