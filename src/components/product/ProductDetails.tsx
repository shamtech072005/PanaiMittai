import React, { useState } from 'react';
import { Check, Minus, Plus, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

const ProductDetails: React.FC = () => {
  //coursal
  const productImages = [
    './images/productImg.png',
    './images/ProductDetailsImg.png',
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % productImages.length);
  };
  
  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  
    const amount = quantity * 699;
  
    const options = {
      key: "rzp_test_wWx3zQIWpmIYNf",
      amount: amount * 100, // Razorpay takes amount in paise
      currency: "INR",
      name: "Paanai Mittai",
      description: "For testing purpose",
      handler: function (response: any) {
        alert("Payment Successful. Payment ID: " + response.razorpay_payment_id);
      },
      notes: {
        address: "Razorpay Corporate office",
      },
      theme: {
        color: "#3399cc",
      },
    };
  
    if (typeof window !== 'undefined' && (window as any).Razorpay) {
      const pay = new (window as any).Razorpay(options);
      pay.open();
    } else {
      alert("Razorpay SDK not loaded");
    }
  };
  

  const features = [
    '100% Natural and Pure',
    'Traditionally processed',
    'No additives or preservatives',
    'Rich in minerals and antioxidants',
    'Supports digestive health',
  ];

  return (
    <section className="py-24 bg-primary-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
  className="relative rounded-lg overflow-hidden shadow-lg bg-white p-8 flex items-center justify-center"
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
>
  <AnimatePresence mode="wait">
    <motion.img
      key={productImages[currentIndex]}
      src={productImages[currentIndex]}
      alt={`Product ${currentIndex + 1}`}
      className="rounded-lg max-h-[500px] object-cover w-full"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    />
  </AnimatePresence>

  {/* Carousel Controls */}
  <button
    onClick={prevImage}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
  >
    <ChevronLeft className="h-5 w-5 text-primary-700" />
  </button>
  <button
    onClick={nextImage}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
  >
    <ChevronRight className="h-5 w-5 text-primary-700" />
  </button>
</motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-block px-3 py-1 bg-accent-500 text-white text-sm font-medium rounded-full mb-4">
              Premium Quality
            </span>
            <h1 className="text-primary-900 mb-4">Medicinal Palm Sugar Powder</h1>
            <p className="text-primary-700 text-xl mb-4">₹699 <span className="text-primary-400 text-base line-through ml-2">₹999</span></p>
            <div className="border-t border-b border-primary-200 py-4 my-6">
              <p className="text-primary-700 mb-4">
                Our premium Medicinal Palm Sugar Powder is harvested from the finest palm trees
                and processed using traditional methods to preserve its natural nutrients and 
                medicinal properties. Each pouch contains 1kg of pure, additive-free palm sugar.
              </p>

              <ul className="space-y-2 mb-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-secondary-600 mr-2 flex-shrink-0" />
                    <span className="text-primary-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-primary-700 font-medium">Quantity:</span>
              <div className="flex items-center border border-primary-300 rounded-md">
                <button 
                  onClick={decreaseQuantity}
                  className="px-3 py-1 text-primary-700 hover:bg-primary-100 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 py-1 text-primary-900 font-medium">{quantity}</span>
                <button 
                  onClick={increaseQuantity}
                  className="px-3 py-1 text-primary-700 hover:bg-primary-100 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Buy Button */}
            <button onClick={handleSubmit} className="btn-primary w-full mb-4">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Buy Now - ₹{(699 * quantity).toLocaleString()}
            </button>
            
            {/* Additional Info */}
            <p className="text-sm text-primary-500 text-center">
              Free shipping on orders above ₹1500
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;