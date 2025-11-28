import React from 'react';

export function TermsOfService() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            ChatSea Terms of Service
          </h1>
          <p className="text-slate-500">Last updated: November 28, 2025</p>
        </div>

        {/* Body */}
        <div className="space-y-6 text-slate-700 leading-relaxed">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Introduction</h2>
            <p className="mb-3">
              These Terms of Service (&quot;Terms&quot;) constitute a binding legal agreement between
              you (&quot;User&quot; or &quot;You&quot;) and AIVeNautics (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;), a company organized and existing under the laws of the Republic of Korea.
              These Terms govern your access to and use of the ChatSea mobile application and related
              services (collectively, the &quot;Service&quot;).
            </p>
            <p className="font-semibold">
              BY INSTALLING, ACCESSING, OR USING THE SERVICE, YOU AGREE TO BE BOUND BY THESE TERMS.
            </p>
          </section>

          {/* 1. Age Requirements and Eligibility */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              1. Age Requirements and Eligibility
            </h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-2">1.1. General Age Limit</h3>
            <p className="mb-4">You must be at least 16 years old to use the Service.</p>

            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              1.2. GDPR Age Requirement (EEA/UK Users)
            </h3>
            <p>
              If you are a resident of the European Economic Area (EEA), the United Kingdom, or
              Switzerland, you must be at least <strong>16 years old</strong> to use the Service. If
              you are between the ages of 13 and 16, you must have your parent or legal guardian&apos;s
              permission to use the Service.
            </p>
          </section>

          {/* 2. Service Description */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              2. Service Description: Secure &amp; Private
            </h2>
            <p className="mb-3">
              The Service is a secure communication platform operating on a &quot;Local Storage&quot; and
              &quot;End-to-End Encryption&quot; model.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              2.1. &quot;Connected&quot; Relationship
            </h3>
            <p className="mb-2">
              Communication is only possible between Users who have established a &quot;Connected&quot;
              relationship.
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>
                <strong>Establishment:</strong> You can add a User to your &quot;Connected&quot; list only by:
                <ol className="list-decimal pl-5 space-y-1 mt-1">
                  <li>Scanning the User’s unique <strong>QR Code</strong>; or</li>
                  <li>Entering the User’s registered <strong>email address</strong>.</li>
                </ol>
              </li>
              <li>
                <strong>Verification:</strong> You are solely responsible for verifying the identity of
                the person you become &quot;Connected&quot; with.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              2.2. Data Storage and Privacy Architecture
            </h3>
            <p className="font-semibold mb-2">PLEASE READ CAREFULLY:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>End-to-End Encryption (E2EE):</strong> All messages and media are encrypted
                end-to-end. The Company <strong>cannot</strong> access, decrypt, or read your
                communications.
              </li>
              <li>
                <strong>Local Storage Only:</strong> Chat history is stored <strong>exclusively on your
                local device</strong>. We do not store your messages on our servers.
              </li>
              <li>
                <strong>Server Data:</strong> Our central server stores only minimal metadata necessary
                to facilitate the connection (e.g., Account Info, Connected List, Status).
              </li>
            </ul>
          </section>

          {/* 3. User Accounts */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">3. User Accounts</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Registration:</strong> You agree to provide accurate information (email) during
                registration.
              </li>
              <li>
                <strong>Data Loss Risk:</strong> Because we do not store your messages,{' '}
                <strong>
                  if you lose your device or uninstall the App, your chat history is permanently lost
                  and cannot be recovered by the Company.
                </strong>
              </li>
            </ul>
          </section>

          {/* 4. User Conduct */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">4. User Conduct</h2>
            <p className="mb-2">You agree not to use the Service to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Violate any applicable laws, including GDPR and local privacy laws.</li>
              <li>Infringe upon the rights of others.</li>
              <li>Distribute malware or harmful code.</li>
              <li>Send spam or automated messages.</li>
            </ul>
          </section>

          {/* 5. Intellectual Property & License */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              5. Intellectual Property &amp; License
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Your Content:</strong> You retain ownership of your messages (&quot;User
                Content&quot;).
              </li>
              <li>
                <strong>License:</strong> You grant us a limited, global, royalty-free license solely to
                route and transmit your encrypted content to your intended recipients. We do not have the
                right to view or sell your private message content.
              </li>
            </ul>
          </section>

          {/* 6. Disclaimers and Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              6. Disclaimers and Limitation of Liability
            </h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-2">6.1. &quot;As Is&quot; Service</h3>
            <p className="mb-4 font-semibold">
              THE SERVICE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-2">6.2. Limitation of Liability</h3>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE COMPANY SHALL NOT BE LIABLE FOR ANY INDIRECT
              DAMAGES OR <strong>LOSS OF DATA</strong> (INCLUDING CHAT HISTORY).
            </p>
          </section>

          {/* 7. Governing Law and Dispute Resolution */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              7. Governing Law and Dispute Resolution
            </h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-2">7.1. Governing Law</h3>
            <p className="mb-4">
              Except as stated in Section 7.3, these Terms shall be governed by the laws of the{' '}
              <strong>Republic of Korea</strong>.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-2">7.2. Jurisdiction</h3>
            <p className="mb-4">
              Except as stated in Section 7.3, any dispute arising out of these Terms shall be subject
              to the exclusive jurisdiction of the <strong>Seoul Central District Court</strong>.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              7.3. Special Provisions for EEA/UK Consumers (GDPR &amp; Consumer Rights)
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Mandatory Protections:</strong> Nothing in these Terms shall deprive you of the
                protection of the mandatory provisions of the law of your country of habitual residence.
              </li>
              <li>
                <strong>Dispute Resolution:</strong> You may bring legal proceedings regarding these
                Terms either in the <strong>Seoul Central District Court</strong> or in the competent
                courts of your <strong>country of habitual residence</strong>. The Company may bring
                legal proceedings against you only in the courts of your country of habitual residence.
              </li>
              <li>
                <strong>Online Dispute Resolution (ODR):</strong> If you reside in the EU, you may also
                access the European Commission&apos;s Online Dispute Resolution platform at{' '}
                <a
                  href="http://ec.europa.eu/consumers/odr"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  http://ec.europa.eu/consumers/odr/
                </a>
                .
              </li>
            </ul>
          </section>

          {/* 8. Privacy and Data Protection (GDPR) */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              8. Privacy and Data Protection (GDPR)
            </h2>
            <p className="mb-3">
              We value your privacy and comply with the General Data Protection Regulation (GDPR).
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Data Controller:</strong> [Company Name] acts as the Data Controller for your
                Account Information.
              </li>
              <li>
                <strong>Your Rights:</strong> Under GDPR, you have the right to access, rectify, erase,
                and restrict the processing of your personal data held on our servers.
              </li>
              <li>
                <strong>Privacy Policy:</strong> For detailed information on how we collect, use, and
                protect your data, please refer to our <strong>Privacy Policy</strong> [Link]. The
                Privacy Policy is an integral part of these Terms.
              </li>
            </ul>
          </section>

          {/* 9. Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">9. Contact Information</h2>
            <p className="mb-2">
              If you have questions about these Terms or our data practices, please contact us:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Company Name:</strong> AIVeNautics
              </li>
              <li>
                <strong>Address:</strong> Room 404, 70 Yuseong-daero 1689beon-gil, Yuseong-gu, Daejeon,
                Republic of Korea
              </li>
              <li>
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:contact@aivenautics.com"
                  className="text-blue-600 hover:underline"
                >
                  contact@aivenautics.com
                </a>
              </li>
              <li>
                <strong>Data Protection Officer (DPO) / EU Representative:</strong> Digital Maritime
                Consultancy ApS
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}