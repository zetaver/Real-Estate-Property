import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSearch from './components/HeroSearch';
import PropertiesByArea from './components/PropertiesByArea';
import LatestProperties from './components/LatestProperties';
import PropertiesByCategory from './components/PropertiesByCategory';
import PropertiesForRent from './components/PropertiesForRent';
import FeaturedProperties from './components/FeaturedProperties';
import RealEstateAgents from './components/RealEstateAgents';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import SearchResults from './components/SearchResults';
import PropertyDetail from './components/PropertyDetail';
import UserDashboard from './components/user/UserDashboard';
import AdminDashboard from './components/admin/AdminDashboard';
import { getCurrentUser } from './lib/auth';

function HomePage() {
  return (
    <>
      <HeroSearch />
      <PropertiesByArea />
      <LatestProperties />
      <PropertiesByCategory />
      <PropertiesForRent />
      <FeaturedProperties />
      <RealEstateAgents />
      <Testimonials />
      <ContactForm />
    </>
  );
}

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const user = getCurrentUser();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

function AdminRoute({ children }: { children: React.ReactNode }) {
  const user = getCurrentUser();
  const location = useLocation();

  if (!user || user.role !== 'admin') {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

function AppContent() {
  const location = useLocation();
  const showFooter = !location.pathname.includes('/dashboard');
  const showNavbar = !location.pathname.includes('/dashboard/admin');

  return (
    <div className="min-h-screen bg-white">
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <UserDashboard />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/dashboard/admin" 
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          } 
        />
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;