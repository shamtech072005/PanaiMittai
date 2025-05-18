import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface InfoTabProps {
  activeTab: string;
}

const UsageInfo: React.FC = () => (
  <div className="space-y-4">
    <p className="text-primary-700">
      Our palm sugar powder can be used in various ways to enhance your health and culinary experiences:
    </p>
    <ul className="list-disc pl-5 space-y-2 text-primary-700">
      <li>
        <span className="font-medium text-primary-900">Morning Ritual:</span> Add 1 teaspoon to warm water 
        or milk on an empty stomach to aid digestion.
      </li>
      <li>
        <span className="font-medium text-primary-900">Natural Sweetener:</span> Use as a healthier alternative 
        to refined sugar in tea, coffee, smoothies, or desserts.
      </li>
      <li>
        <span className="font-medium text-primary-900">Digestive Aid:</span> Consume 1 teaspoon after meals to 
        help with digestion and prevent bloating.
      </li>
      <li>
        <span className="font-medium text-primary-900">Culinary Applications:</span> Perfect for traditional 
        recipes, baking, and sweet dishes where the rich flavor can enhance the overall taste.
      </li>
    </ul>
    <p className="text-primary-700 italic mt-4">
      Recommended serving: 1-2 teaspoons daily. Store in a cool, dry place away from direct sunlight.
    </p>
  </div>
);

const IngredientsInfo: React.FC = () => (
  <div className="space-y-4">
    <p className="text-primary-700">
      Our commitment to purity means our palm sugar contains only one ingredient:
    </p>
    <p className="text-lg font-medium text-primary-900 my-4">100% Natural Palm Sugar Powder</p>
    <p className="text-primary-700">
      Harvested from mature palm trees and processed traditionally without any:
    </p>
    <ul className="list-disc pl-5 space-y-2 text-primary-700">
      <li>Additives or preservatives</li>
      <li>Artificial flavors or colors</li>
      <li>Fillers or anti-caking agents</li>
      <li>Refined sugars or sweeteners</li>
    </ul>
    <div className="bg-primary-100 p-4 rounded-lg mt-4">
      <p className="text-primary-800">
        <span className="font-medium">Note:</span> Our product is processed in a facility that 
        handles only natural palm sugar, ensuring zero cross-contamination with other ingredients.
      </p>
    </div>
  </div>
);

const BenefitsInfo: React.FC = () => (
  <div className="space-y-4">
    <p className="text-primary-700">
      Traditional medicine has recognized palm sugar for various health benefits, including:
    </p>
    <ul className="list-disc pl-5 space-y-3 text-primary-700">
      <li>
        <span className="font-medium text-primary-900">Digestive Health:</span> Contains natural 
        enzymes that aid digestion and help prevent gastrointestinal issues.
      </li>
      <li>
        <span className="font-medium text-primary-900">Nutrient-Rich:</span> Contains essential 
        minerals like potassium, zinc, iron, and magnesium that support overall health.
      </li>
      <li>
        <span className="font-medium text-primary-900">Lower Glycemic Index:</span> Has a lower GI 
        compared to refined sugar, potentially making it a better option for blood sugar management.
      </li>
      <li>
        <span className="font-medium text-primary-900">Antioxidant Properties:</span> Contains 
        antioxidants that help combat free radicals and reduce oxidative stress.
      </li>
      <li>
        <span className="font-medium text-primary-900">Energy Boost:</span> Provides sustained 
        energy without the rapid spikes and crashes associated with refined sugar.
      </li>
    </ul>
    <p className="text-primary-500 italic mt-4 text-sm">
      Note: While traditional medicine recognizes these benefits, individual results may vary. 
      This product is not intended to diagnose, treat, cure, or prevent any disease.
    </p>
  </div>
);

const ShippingInfo: React.FC = () => (
  <div className="space-y-4">
    <p className="text-primary-700">
      We take utmost care to ensure your premium palm sugar reaches you in perfect condition:
    </p>
    <ul className="list-disc pl-5 space-y-3 text-primary-700">
      <li>
        <span className="font-medium text-primary-900">Processing Time:</span> Orders are processed 
        within 1-2 business days.
      </li>
      <li>
        <span className="font-medium text-primary-900">Delivery Timeline:</span> Standard delivery 
        takes 3-5 business days across India.
      </li>
      <li>
        <span className="font-medium text-primary-900">Packaging:</span> Each 1kg pouch is sealed in 
        food-grade packaging to preserve freshness and quality.
      </li>
      <li>
        <span className="font-medium text-primary-900">Free Shipping:</span> All orders above ₹1500 
        qualify for free shipping.
      </li>
      <li>
        <span className="font-medium text-primary-900">Return Policy:</span> If you're not satisfied 
        with the product quality, you can return it within 7 days of delivery.
      </li>
    </ul>
    <p className="text-primary-700 mt-4">
      For bulk orders or expedited shipping, please contact us directly.
    </p>
  </div>
);

const InfoTabs: React.FC<InfoTabProps> = ({ activeTab }) => {
  return (
    <div className="mt-6">
      {activeTab === "usage" && <UsageInfo />}
      {activeTab === "ingredients" && <IngredientsInfo />}
      {activeTab === "benefits" && <BenefitsInfo />}
      {activeTab === "shipping" && <ShippingInfo />}
    </div>
  );
};

const ProductInfo: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState("usage");

  const tabs = [
    { id: "usage", label: "Usage & Storage" },
    { id: "ingredients", label: "Ingredients" },
    { id: "benefits", label: "Health Benefits" },
    { id: "shipping", label: "Shipping & Returns" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-primary-900 mb-8 text-center">
            Product <span className="text-accent-600">Information</span>
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap border-b border-primary-200 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? "text-accent-600 border-b-2 border-accent-500"
                    : "text-primary-600 hover:text-primary-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <InfoTabs activeTab={activeTab} />

          {/* CTA */}
          <div className="mt-12 text-center">
            <button className="btn-primary">
              <span>Buy Now</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductInfo;