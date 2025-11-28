import React from 'react';

export function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            ChatSea Privacy Policy
          </h1>
          <p className="text-slate-500">Last updated: November 28, 2025</p>
        </div>

        {/* Body */}
        <div className="space-y-6 text-slate-700 leading-relaxed">
          {/* 1. Executive Summary */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              1. Executive Summary: Compliance Strategy for Global Launch
            </h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              1.1. Shift to Email-Based Identity &amp; GDPR Implications
            </h3>
            <p className="mb-3">
              The transition from a phone-number-based system to an email-based identity
              significantly alters the privacy landscape.
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                <strong>Reduced Risk:</strong> Unlike phone numbers, which are often tied to
                physical SIM cards and rigid identities, email addresses allow for a degree of
                pseudonymity.
              </li>
              <li>
                <strong>&quot;Connected&quot; Feature:</strong> By allowing connections via
                knowing the email or scanning a QR code, the app minimizes the need to process the
                user&apos;s entire address book (bulk contact syncing). This approach is highly
                GDPR-friendly as it avoids the complex legal issues surrounding the processing of
                non-users&apos; data (shadow profiles).
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              1.2. Data Points &amp; Purpose Mapping
            </h3>
            <p className="mb-3">
              Based on the provided JSON schema, the data processing purposes are defined as
              follows:
            </p>
            <div className="border border-slate-200 rounded-lg p-4 bg-slate-50 text-sm space-y-2">
              <div>
                <span className="font-semibold">memberId (UUID): </span>
                System identification, database indexing.{' '}
                <span className="italic">Legal basis: Contractual Necessity.</span>
              </div>
              <div>
                <span className="font-semibold">email (string): </span>
                Authentication, account recovery, &quot;Connected&quot; search key.{' '}
                <span className="italic">Legal basis: Contractual Necessity.</span>
              </div>
              <div>
                <span className="font-semibold">firstName / lastName (string): </span>
                Real-name verification (optional but recommended for maritime trust.{' '}
                <span className="italic">Legal basis: Consent / Contract.</span>
              </div>
              <div>
                <span className="font-semibold">displayName (string): </span>
                How users appear to others in chats.{' '}
                <span className="italic">Legal basis: Contractual Necessity.</span>
              </div>
              <div>
                <span className="font-semibold">profileUrl (string): </span>
                User avatar image. <span className="italic">Legal basis: Consent.</span>
              </div>
              <div>
                <span className="font-semibold">mrn (string): </span>
                Maritime Reference Number for verifying vessel/seafarer status.{' '}
                <span className="italic">Legal basis: Legitimate Interest / Consent.</span>
              </div>
              <div>
                <span className="font-semibold">country (string): </span>
                Jurisdiction determination and localization.{' '}
                <span className="italic">Legal basis: Legitimate Interest.</span>
              </div>
            </div>
          </section>

          {/* 2. Technical Privacy Architecture */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              2. Technical Privacy Architecture (Updated)
            </h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              2.1. E2EE &amp; Local Storage (Zero Knowledge)
            </h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                <strong>Chat Content:</strong> Chat content is strictly stored on the user&apos;s
                device (local storage). The server acts only as a blind relay.
              </li>
              <li>
                <strong>Metadata Protection:</strong> While the server knows who is connected to
                whom (the social graph is stored centrally to manage the &quot;Connected&quot; list),
                it cannot see what users are saying.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              2.2. Connection Logic (&quot;Connected&quot;)
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Email Match:</strong> User A enters User B&apos;s email. The server checks if
                User B exists. If yes, a connection request is sent.
              </li>
              <li>
                <strong>QR Scan:</strong> The QR code may contain the memberId and a cryptographic
                public key. Scanning bypasses the need to type the email, directly establishing the
                &quot;Connected&quot; status.
              </li>
            </ul>
          </section>

          {/* 3. Global Privacy Policy Intro */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              3. Global Privacy Policy (GDPR / CCPA Compliant)
            </h2>
            <p>
              The following sections constitute the full English text of the Privacy Policy, ready
              for use in your app. It includes specific clauses required by GDPR (Articles 13 &amp;
              14) and CCPA.
            </p>
          </section>

          {/* 4. Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">4. Introduction</h2>
            <p className="mb-3">
              Welcome to ChatSea (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We provide a
              secure maritime communication platform designed to connect seafarers through a
              privacy-focused environment. We are committed to protecting your personal data.
            </p>
            <p className="mb-3">
              This Privacy Policy explains how we collect, use, and share information when you use
              our mobile application (the &quot;App&quot;). We operate on a &quot;Privacy by
              Design&quot; basis:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>End-to-End Encryption (E2EE):</strong> We cannot read your messages.
              </li>
              <li>
                <strong>Local Storage:</strong> Your chat history is stored on your device, not on
                our servers.
              </li>
            </ul>
          </section>

          {/* 5. Data Controller */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">5. Data Controller</h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-2">5.1. Data Controller</h3>
            <p className="mb-3">The entity responsible for the processing of your personal data is:</p>
            <div className="border border-slate-200 rounded-lg p-4 bg-slate-50 text-sm space-y-1 mb-4">
              <p className="font-semibold">AIVeNautics</p>
              <p>
                Address: Room 404, 70 Yuseong-daero 1689beon-gil, Yuseong-gu, Daejeon, Republic of
                Korea
              </p>
              <p>
                Email:{' '}
                <a
                  href="mailto:privacy@aivenautics.com"
                  className="text-blue-600 hover:underline"
                >
                  privacy@aivenautics.com
                </a>
              </p>
            </div>
            <p className="mb-4">
              The Republic of Korea is recognized by the European Commission as providing an
              adequate level of data protection (Adequacy Decision), allowing secure data transfer.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              5.2. EU Representative (GDPR Art. 27)
            </h3>
            <p className="mb-2">
              Since we do not have a physical establishment in the European Union, we have
              appointed a representative to act on our behalf regarding GDPR matters:
            </p>
            <div className="border border-slate-200 rounded-lg p-4 bg-slate-50 text-sm space-y-1">
              <p className="font-semibold">Digital Maritime Consultancy ApS</p>
              <p>Address: Frederiksborggade 5, 1360 København K, Denmark</p>
              <p>
                Email:{' '}
                <a
                  href="mailto:contact@dmc.international"
                  className="text-blue-600 hover:underline"
                >
                  contact@dmc.international
                </a>
              </p>
            </div>
          </section>

          {/* 6. Information We Collect */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              6. Information We Collect
            </h2>
            <p className="mb-3">
              We collect the minimal amount of data necessary to provide our Services.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-2">6.1. Information You Provide</h3>
            <p className="mb-2">
              When you create an account or update your profile, you provide us with the following
              data:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-3">
              <li>
                <strong>Account Information:</strong>
                <ul className="list-disc pl-5 space-y-1 mt-1">
                  <li>
                    <strong>Email Address:</strong> Required to create an account, log in, and allow
                    others to find you.
                  </li>
                  <li>
                    <strong>Profile Details:</strong> firstName, lastName, and displayName.
                  </li>
                  <li>
                    <strong>Profile Image:</strong> A URL or file for your profileUrl.
                  </li>
                  <li>
                    <strong>Country:</strong> To determine your region and applicable laws.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Maritime Identity (Verification):</strong>
                <ul className="list-disc pl-5 space-y-1 mt-1">
                  <li>
                    <strong>MRN (Maritime Reference Number):</strong> You may provide your
                    vessel&apos;s or personal maritime ID (e.g., MMSI, License No.) to verify your
                    status in the community.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Connections:</strong>
                <ul className="list-disc pl-5 space-y-1 mt-1">
                  <li>
                    When you add a friend as &quot;Connected&quot;, we store the relationship
                    between your memberId and your friend&apos;s memberId.
                  </li>
                </ul>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              6.2. Automatically Generated Information
            </h3>
            <ul className="list-disc pl-5 space-y-2 mb-3">
              <li>
                <strong>memberId:</strong> A unique UUID assigned to your account for internal
                system identification.
              </li>
              <li>
                <strong>QR Codes:</strong> When you generate a QR code, we encode your memberId and
                public key to allow others to scan and connect with you.
              </li>
              <li>
                <strong>Log Data:</strong> Server logs (IP address, access times) are collected for
                security and diagnostic purposes but are retained for a limited period.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              6.3. Information We Do Not Collect (End-to-End Encryption)
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                We do not store your messages on our central servers. Your chats, photos, videos,
                and voice notes are end-to-end encrypted. Only you and the recipient can decrypt
                them.
              </li>
              <li>
                Once a message is delivered, it exists only on the devices of the sender and
                recipient.
              </li>
              <li>
                If a message cannot be delivered immediately (e.g., the recipient is offline), it is
                temporarily stored in an encrypted format on our server and deleted once delivered
                or after a set period (e.g., 30 days).
              </li>
            </ul>
          </section>

          {/* 7. How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              7. How We Use Your Information (Legal Basis)
            </h2>
            <p className="mb-3">
              Under the GDPR, we rely on the following legal bases to process your data:
            </p>
            <div className="border border-slate-200 rounded-lg p-4 bg-slate-50 text-sm space-y-3">
              <div>
                <span className="font-semibold">Service Provision:</span> Creating accounts, routing
                messages, authenticating users. <br />
                <span className="italic">Data used:</span> email, memberId, firstName, lastName.{' '}
                <span className="italic">Legal basis:</span> Contractual Necessity (Art. 6(1)(b)).
              </div>
              <div>
                <span className="font-semibold">&quot;Connected&quot; Feature:</span> Enabling you
                to find and add friends via email or QR. <br />
                <span className="italic">Data used:</span> email, memberId.{' '}
                <span className="italic">Legal basis:</span> Contractual Necessity.
              </div>
              <div>
                <span className="font-semibold">Maritime Verification:</span> Verifying MRN to build
                community trust. <br />
                <span className="italic">Data used:</span> mrn.{' '}
                <span className="italic">Legal basis:</span> Legitimate Interest (Art. 6(1)(f)) or
                Consent.
              </div>
              <div>
                <span className="font-semibold">Safety &amp; Security:</span> Preventing fraud,
                spam, and abuse. <br />
                <span className="italic">Data used:</span> IP address, email.{' '}
                <span className="italic">Legal basis:</span> Legitimate Interest.
              </div>
              <div>
                <span className="font-semibold">Legal Compliance:</span> Complying with legal
                obligations. <br />
                <span className="italic">Data used:</span> all applicable data.{' '}
                <span className="italic">Legal basis:</span> Legal Obligation (Art. 6(1)(c)).
              </div>
            </div>
          </section>

          {/* 8. How You Connect with Others */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              8. How You Connect with Others
            </h2>
            <p className="mb-2">
              Our Service allows you to establish a &quot;Connected&quot; relationship with other
              users. This happens in two ways:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <strong>Email Search:</strong> If you know another user&apos;s email address, you
                can send a connection request. We look up the email in our database to facilitate
                this.
              </li>
              <li>
                <strong>QR Code Scan:</strong> You can scan another user&apos;s QR code to instantly
                add them. This processes the data encoded in the QR code (typically their memberId
                and displayName) on your device.
              </li>
            </ol>
            <p className="mt-3">
              <strong>Note:</strong> We do not automatically upload or sync your device&apos;s
              contact list (address book) to our servers. Connections are user-initiated.
            </p>
          </section>

          {/* 9. Sharing of Information */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              9. Sharing of Information
            </h2>
            <p className="mb-3">We do not sell your personal data. We share information only in the following circumstances:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>With Other Users:</strong> Your displayName, profileUrl, country, and mrn
                (if verified) are visible to users you are &quot;Connected&quot; with.
              </li>
              <li>
                <strong>Service Providers:</strong> We engage trusted third-party companies
                (processors) to perform functions such as database hosting (e.g., AWS, Google Cloud)
                and email delivery. These providers are bound by strict data protection agreements.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your account information (email,
                IP, mrn) if compelled by law (e.g., court order). However, we cannot disclose message
                contents because they are encrypted.
              </li>
            </ul>
          </section>

          {/* 10. Data Storage and Retention */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              10. Data Storage and Retention
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Server Data:</strong> User profile data (memberId, email, etc.) is stored on
                our central servers as long as your account is active.
              </li>
              <li>
                <strong>Local Data:</strong> Chat history is stored locally on your device. If you
                uninstall the app or lose your phone without a backup, your messages are lost. We
                cannot recover them for you.
              </li>
              <li>
                <strong>Retention Period:</strong> We retain your account data until you request
                deletion. Server logs are retained for 180 days for security auditing.
              </li>
            </ul>
          </section>

          {/* 11. Your Rights */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              11. Your Rights (GDPR &amp; Global)
            </h2>
            <p className="mb-3">
              Regardless of where you live, we grant you the following rights:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-3">
              <li>
                <strong>Right to Access:</strong> You can request a copy of the personal data we
                hold about you (profile, MRN, Connected list).
              </li>
              <li>
                <strong>Right to Rectification:</strong> You can update your profile, email, or MRN
                directly in the app settings.
              </li>
              <li>
                <strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> You can
                delete your account within the app. This will remove your data from our central
                servers. Note: This does not delete messages already delivered to other users&apos;
                devices.
              </li>
              <li>
                <strong>Right to Data Portability:</strong> You can request your profile data in a
                structured, machine-readable format.
              </li>
            </ul>
            <p>
              To exercise these rights, contact us at:{' '}
              <a
                href="mailto:privacy@aivenautics.com"
                className="text-blue-600 hover:underline"
              >
                privacy@aivenautics.com
              </a>
              .
            </p>
          </section>

          {/* 12. International Data Transfers */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              12. International Data Transfers
            </h2>
            <p>
              Our servers may be located in jurisdictions outside your country of residence. If you
              access the App from the European Economic Area (EEA), your data may be transferred
              outside the EEA. We ensure these transfers are protected by appropriate safeguards,
              such as the European Commission&apos;s Standard Contractual Clauses (SCCs) or
              equivalent mechanisms.
            </p>
          </section>

          {/* 13. Children's Privacy */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              13. Children&apos;s Privacy
            </h2>
            <p>
              Our Services are not intended for children under the age of 16. We do not knowingly
              collect data from children. If we learn that we have collected data from a child
              without parental consent, we will delete it.
            </p>
          </section>

          {/* 14. Changes to This Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              14. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant
              changes through the App or via email. Your continued use of the Service after any
              changes indicates your acceptance of the updated Privacy Policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}