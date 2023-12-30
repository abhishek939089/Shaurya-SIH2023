import HeadDesign from 'components/Headers/HeadDesign'
import React from 'react';
import './stylesheet/Icons.css'; // Assuming you have a CSS file

export default function Icons() {
  return (
    <div>
      <HeadDesign/>
      {/* Frequently Asked Questions */}
      <section class="FAQ">
            <h2>Frequently Asked Questions</h2>
            <ol>
                <li>
                    <h3>What is the purpose of a Blockchain-Based eVault for Legal Records?</h3>
                    <p>Our eVault securely stores and manages legal documents on a blockchain, ensuring tamper-proof records and streamlined access for legal professionals.</p>
                </li>
            </ol>
        </section>

        <section class="Documentation">
            <h2>Technical Documentation</h2>
            <ul>
                <li><a href="#setting-up-react">Setting Up React.js Environment</a></li>
                <li><a href="#blockchain-integration">Blockchain Integration Guide</a></li>
                <li><a href="#multi-factor-auth">Implementing Multi-Factor Authentication</a></li>
                <li><a href="#api-docs">API Documentation</a></li>
            </ul>
        </section>

        
        <section class="Troubleshooting">
            <h2>Troubleshooting</h2>
            <ul>
                <li>
                    <h3>Issue: Unable to connect to the blockchain network</h3>
                    <p>Solution: Double-check your network configurations and ensure your blockchain nodes are running.</p>
                </li>
                <li>
                    <h3>Issue: Authentication errors</h3>
                    <p>Solution: Review the authentication logic in your React.js application and verify smart contract interactions.</p>
                </li>
        
            </ul>
        </section>

        
        <section class="ContactSupport">
            <h2>Contact Support</h2>
            <p>If you require further assistance or have specific questions, please feel free to reach out to our dedicated support team at <a href="mailto:support@example.com">support@example.com</a> or through our <a href="#contact-form">Contact Form</a>.</p>
        </section>    </div>
  );
}
