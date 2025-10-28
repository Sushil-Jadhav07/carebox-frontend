import { Routes, Route } from "react-router-dom";
import Main from "@/layout/Main";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import ServiceDetails from "@/pages/ServiceDetails";
import Team from "@/pages/Team";
import Blog from "@/pages/Blog";
import BlogStandard from "@/pages/BlogStandard";
import BlogDetails from "@/pages/BlogDetails";
import BlogDetailsTwo from "@/pages/BlogDetailsTwo";
import ContactUs from "@/pages/ContactUs";
import CaseStudy from "@/pages/CaseStudy";
import CaseStudyDetails from "@/pages/CaseStudyDetails";
import FAQ from "@/pages/FAQ";
import Pricing from "@/pages/Pricing";
import ErrorPage from "@/pages/ErrorPage";
import OceanCargo from "@/pages/OceanCargo";
import AirFreight from "@/pages/AirFreight";
import LandFreight from "@/pages/LandFreight";
import OrderTracking from "@/pages/OrderTracking";
import Servicibility from "@/pages/Servicibility";
import LocalPrimeCourier from "@/pages/LocalPrimeCourier";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="/air-freight" element={<AirFreight />} />
        <Route path="/land-freight" element={<LandFreight />} />
        <Route path="/ocean-cargo" element={<OceanCargo />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route
          path="service-details/:servicesId"
          element={<ServiceDetails />}
        />
        <Route path="team" element={<Team />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog-standard" element={<BlogStandard />} />
        <Route path="blog-details/:blogId" element={<BlogDetails />} />
        <Route
          path="blog-details-nosidebar/:blogId"
          element={<BlogDetailsTwo />}
        />
        <Route path="case-study" element={<CaseStudy />} />
        <Route
          path="case-study-details/:caseItemId"
          element={<CaseStudyDetails />}
        />
        <Route path="pricing" element={<Pricing />} />
        <Route path="order-tracking" element={<OrderTracking />} />
        <Route path="servicibility" element={<Servicibility />} />
        <Route path="local-prime-courier" element={<LocalPrimeCourier />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="error-page" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
