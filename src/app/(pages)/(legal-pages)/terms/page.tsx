import LandingContainer from "@/components/common/LandingContainer";

export default function Terms() {
  return (
    <div>
      <LandingContainer>
        <div className="flex gap-5 flex-col py-10">
        <div className="flex text-2xl font-semibold">Terms and Conditions</div>

          <div className="flex">
            Welcome to Unite, a platform designed to facilitate seamless
            communication and interaction between doctors and patients. By
            accessing or using our services, you agree to comply with and be
            bound by the following terms and conditions:
          </div>
          <div className="flex flex-col">
            <div className="flex font-semibold">1. Acceptance of Terms</div>
            <div className="flex">
              By accessing or using the Unite platform, you agree to be bound by
              these Terms & Conditions, our Privacy Policy, and all applicable
              laws and regulations. If you do not agree with any of these terms,
              you are prohibited from using or accessing our services..
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex font-semibold">2. Uses of Services</div>
            <div className="flex">
              Unite provides a platform for communication between doctors and
              patients for healthvare purposes. Users must be atleast 18 years
              old or have the consent of a legal guardian to use our services.
              Users are solely responsible for the content they submit, and must
              not use our platform for any unlawful, harmful, or unauthorized
              purposes.
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex font-semibold">
              3. Doctor-Patient Relationship
            </div>
            <div className="flex">
              Unite facilitates communication between doctors and patients, but
              does not establish a doctor-patient relationship. Users understand
              that interactions on the platform are for informational purposes
              only and should not substitute for professional medical advice,
              diagnosis, or treatment.
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex font-semibold">4. Privacy</div>
            <div className="flex">
              Protecting your privacy is paramount to us. Please review our
              Privacy Policy to understand how we collect, use, and disclose
              your personal information. By using our services, you consent to
              the collection and use of your information as outlined in the
              Privacy Policy.
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex font-semibold">5. User Accounts</div>
            <div className="flex">
              Users are responsible for maintaining the confidentiality of their
              account credentials and for all activities that occur under their
              account. Users agree to notify Unite immediately of any
              unauthorized use of their account or any other breach of security.
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex font-semibold">6. Content Ownership</div>
            <div className="flex">
              Users retain ownership of the content they submit to the platform,
              but grant Unite a worldwide, royalty-free, non-exclusive license
              to use, reproduce, modify, adapt, publish, translate, and
              distribute such content for the purpose of operating and improving
              our services
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex font-semibold">7. Modification of Terms</div>
            <div className="flex">
              Unite reserves the right to modify or revise these Terms &
              Conditions at any time without prior notice. It is the
              responsibility of users to review these terms periodically.
              Continued use of our services after any changes constitutes
              acceptance of the modified terms.
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex font-semibold">8. Termination</div>
            <div className="flex">
              Unite reserves the right to terminate or suspend access to our
              services at any time for any reason without prior notice. Upon
              termination, all provisions of these Terms & Conditions which by
              their nature should survive termination, including, without
              limitation, ownership provisions, warranty disclaimers, indemnity,
              and limitations of liability, shall remain in full force and
              effect.
            </div>
          </div>
          <div className="flex ">
            By using Unite, you acknowledge that you have read, understood, and
            agree to be bound by these Terms & Conditions. If you have any
            questions or concerns regarding these terms, please contact us at
            info.unite@gmail.com.
          </div>
        </div>
      </LandingContainer>
    </div>
  );
}
