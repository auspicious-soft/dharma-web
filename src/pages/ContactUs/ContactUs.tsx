import EnquiryForm from '@/components/ReusableComponents/EnquiryForm/EnquiryForm';
import FooterPageHeroSection from '@/components/ReusableComponents/FooterPageHeroSection/FooterPageHeroSection';
import React from 'react';

const ContactUs = () => {
    return (
         <>
      <FooterPageHeroSection
        title="Contact Us"
        description=""
      />
      <EnquiryForm />
      </>
    );
}

export default ContactUs;
