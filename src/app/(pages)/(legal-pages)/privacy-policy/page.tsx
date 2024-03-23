import LandingContainer from "@/components/common/LandingContainer";

export default function PrivacyPolicy() {
  return (
    <div>
      <LandingContainer>
        <div className="flex gap-5 flex-col py-10">
          <div className="flex text-2xl font-semibold">Privacy Policy</div>
          <div className="flex">
            This Privacy Policy describes how Unitr collects, uses, and
            discloses your personal information when you use our platform to
            connect with healthcare professionals and access related services.
            Protecting your privacy is important to us, and we are committed to
            safeguarding your personal information
          </div>
          <div className="flex flex-col">
            <div className="flex font-semibold">1. Information We Collect</div>
            <div className="flex">
              When you use Unite, we may collect various types of information,
              including : Personal Information: such as your name, email
              address, phone number, and other contact details. Health
              Information: such as medical history, symptoms, treatment
              preferences, and other health-related data you choose to share.
              Usage Information: such as device information, IP address, browser
              type, and usage patterns when you interact with our platform.
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex font-semibold">
              2. How We Use Your Information
            </div>
            <div className="flex">
              We may use the information we collect for various purposes,
              including : Providing and improving our services, including
              facilitating communication between you and doctors. Personalizing
              your experience and customizing the content and features of our
              platform. Analyzing usage trends and preferences to enhance our
              platform's functionality and user experience. Communicating with
              you about your account, appointments, and updates to our services.
              Complying with legal obligations and protecting our rights and
              interests.
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex font-semibold">
              3. Sharing Your Information
            </div>
            <div className="flex">
              We may share your personal information in the following
              circumstances : With doctors and healthcare professionals to
              facilitate consultations and provide healthcare services. With
              third-party service providers who assist us in operating our
              platform and delivering services. With legal authorities or as
              required by law to comply with legal obligations or protect our
              rights.
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex font-semibold">4. Data Security</div>
            <div className="flex">
              We employ industry-standard security measures to protect your
              personal information from unauthorized access, disclosure,
              alteration, or destruction. However, please be aware that no
              method of transmission over the internet or electronic storage is
              100% secure, and we cannot guarantee absolute security.
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex font-semibold">5. Your Choices</div>
            <div className="flex">
              You have certain choices regarding the collection, use, and
              disclosure of your personal information : You can access, update,
              or delete your account information through the settings of our
              platform. You may choose not to provide certain personal
              information, but this may limit your ability to use certain
              features of our platform.
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex font-semibold">6. Children's Privacy</div>
            <div className="flex">
              Our services are not intended for individuals under the age of 18.
              We do not knowingly collect personal information from children
              under 18. If you are a parent or guardian and believe that your
              child has provided us with personal information, please contact
              us, and we will take appropriate steps to remove such information
              from our systems
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex font-semibold">7. Changes to This Policy</div>
            <div className="flex">
              We reserve the right to update or revise this Privacy Policy at
              any time. We will notify you of any changes by posting the new
              Privacy Policy on this page.
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex font-semibold">8. Contact Us</div>
            <div className="flex">
              f you have any questions or concerns about our Privacy Policy or
              our privacy practices, please contact us at info.unite@gmail.com.
            </div>
          </div>
          <div className="flex ">
            By using Unite, you consent to the collection, use, and disclosure
            of your personal information as described in this Privacy Policy
          </div>
        </div>
      </LandingContainer>
    </div>
  );
}
