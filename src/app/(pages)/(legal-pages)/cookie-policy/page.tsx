import LandingContainer from "@/components/common/LandingContainer";

export default function CookiePolicy() {
  return (
    <LandingContainer>
      <div className="flex gap-5 flex-col py-10">
        <div className="flex text-2xl font-semibold">Cookie Policy</div>
        <div className="flex">
          This Cookie Policy explains how Unite uses cookies and similar
          technologies when you visit our website or use our services. By using
          our website or services, you consent to the use of cookies and similar
          technologies as described in this policy.
        </div>
        <div className="flex flex-col">
          <div className="flex font-semibold">What are Cookies?</div>
          <div className="flex">
            Cookies are small text files that are placed on your device
            (computer, smartphone, tablet, etc.) when you visit a website. They
            are widely used to make websites work more efficiently and to
            provide information to website owners.
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex font-semibold">How We Use Cookies</div>
          <div className="flex">
            We use cookies and similar technologies for the following purposes :
            Essential Cookies : These cookies are necessary for the operation of
            our website and services. They enable you to navigate our website
            and use its features, such as accessing secure areas. Analytics
            Cookies: We use analytics cookies to gather information about how
            visitors use our website. This helps us improve the performance and
            usability of our website by analyzing trends, tracking user
            movements, and gathering demographic information. Functionality
            Cookies: Functionality cookies allow us to remember choices you make
            on our website (such as your preferred language or region) and
            provide enhanced features. These cookies may also be used to provide
            services you have requested, such as accessing secure areas of the
            website. Advertising Cookies: We may use advertising cookies to
            deliver advertisements that are relevant to your interests. These
            cookies track your browsing habits and enable us to show you
            targeted advertisements based on your preferences and browsing
            history.
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex font-semibold">Your Cookie Choices</div>
          <div className="flex">
            You can control and manage cookies in various ways. Most web
            browsers allow you to delete or disable cookies through your browser
            settings. Please note that if you choose to disable cookies, some
            parts of our website may not function properly.
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex font-semibold">Third-Party Cookies</div>
          <div className="flex">
            Some of the cookies we use may be placed by third-party service
            providers. These third parties may use cookies on our behalf to
            provide certain features or services. We do not control these
            cookies or the information collected by them. Please refer to the
            privacy policies of these third-party service providers for more
            information about their cookie practices.
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex font-semibold">Updates to this Policy</div>
          <div className="flex">
            We may update this Cookie Policy from time to time to reflect
            changes in our practices or applicable laws. We encourage you to
            review this policy periodically for any updates. Your continued use
            of our website or services after any changes to this policy will
            constitute your acceptance of such changes.
          </div>
        </div>

        <div className="flex ">
          If you have any questions or concerns about our use of cookies or this
          Cookie Policy, please contact us at info.unite@gmail.com.
        </div>
      </div>
    </LandingContainer>
  );
}
