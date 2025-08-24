import React, { useState } from "react"
import styles from './termsandconditions.module.css'

const TermsandConditions = () => {
    return(
        <>
        <div className={styles.container}>
        <div className={styles.header}>
            <h1>Terms and Conditions</h1>
            <p>Your trusted e-commerce platform</p>
        </div>

        <div className={styles.lastupdated}>
            <strong>Last Updated:</strong> 16 June 2025
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>1. ABOUT HITLERABI STORE AND THESE TERMS</h2>
            
            <div className={styles.subsection}>
                <h3 className={styles.subsectiontitle}>What is HitlerAbi Store and who operates it?</h3>
                <p>HitlerAbi Store is an innovative e-commerce platform ("Platform") that connects buyers with verified sellers, offering a wide range of products from electronics to fashion, home goods to beauty products. Our platform provides a secure and convenient shopping experience with multiple payment options and reliable delivery services.</p>
                
                <p>The Platform, including our website at https://store.hitlerabi.in, is operated by HitlerAbi Store Technologies Private Limited ("Company"). The Company and its affiliates providing services through the Platform shall collectively be referred to as "HitlerAbi Store".</p>
                
                <p>The Company's role includes platform management, payment processing through secure gateways like Razorpay, order fulfillment, customer service, and other incidental services to facilitate transactions between sellers and buyers ("Services").</p>
            </div>

            <div className={styles.subsection}>
                <h3 className={styles.subsectiontitle}>When are these Terms applicable?</h3>
                <p>These Terms and Conditions ("Terms") become applicable when you access, browse, register, or use any part of our Platform. By using HitlerAbi Store, you agree to be bound by these Terms, our Privacy Policy, and other policies as may be updated from time to time.</p>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>2. ACCOUNT REGISTRATION AND ELIGIBILITY</h2>
            
            <div className={styles.subsection}>
                <h3 className={styles.subsectiontitle}>Registration Requirements</h3>
                <p>To access most features of HitlerAbi Store, you must create an account by providing accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials.</p>
                
                <ul>
                    <li>You must be at least 18 years of age</li>
                    <li>You must have the legal capacity to enter into binding contracts</li>
                    <li>You must provide accurate, current, and complete information</li>
                    <li>You must not use the platform for any illegal or unauthorized purpose</li>
                </ul>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>3. SHIPPING POLICIES</h2>
            
            <div className={styles.policybox}>
                <h4>Shipping Methods and Timeframes</h4>
                <div className={styles.tablecontainer}>
                    <table>
                        <thead>
                            <tr>
                                <th>Shipping Method</th>
                                <th>Delivery Time</th>
                                <th>Cost</th>
                                <th>Tracking Available</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Standard Delivery</td>
                                <td>5-7 business days</td>
                                <td>₹49 (Free for orders above ₹499)</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Express Delivery</td>
                                <td>2-3 business days</td>
                                <td>₹99</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Same Day Delivery</td>
                                <td>Within 24 hours</td>
                                <td>₹149 (Select cities only)</td>
                                <td>Yes</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className={styles.subsection}>
                <h3 className={styles.subsectiontitle}>Shipping Terms</h3>
                <ul>
                    <li>All delivery times are estimated and may vary due to factors beyond our control</li>
                    <li>Shipping charges are calculated based on product weight, dimensions, and delivery location</li>
                    <li>We ship to all major cities and towns across India</li>
                    <li>International shipping is currently not available</li>
                    <li>Address changes are allowed only before order dispatch</li>
                </ul>
            </div>

            <div className={styles.highlight}>
                <strong>Note:</strong> Delivery times may be extended during festivals, adverse weather conditions, or other unforeseen circumstances. We will notify you of any delays.
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>4. CANCELLATION AND RETURN POLICIES</h2>
            
            <div className={styles.subsection}>
                <h3 className={styles.subsectiontitle}>Cancellation Policy</h3>
                <p>You may cancel your order under the following conditions:</p>
                <ul>
                    <li><strong>Before Dispatch:</strong> Orders can be cancelled free of charge until they are dispatched</li>
                    <li><strong>After Dispatch:</strong> Once dispatched, orders cannot be cancelled but may be eligible for return</li>
                    <li><strong>Refund Timeline:</strong> Cancelled orders will be refunded within 5-7 business days</li>
                </ul>
            </div>

            <div className={styles.subsection}>
                <h3 className={styles.subsectiontitle}>Return Policy</h3>
                <div className={styles.policybox}>
                    <h4>Return Eligibility</h4>
                    <ul>
                        <li>Returns must be initiated within 7 days of delivery</li>
                        <li>Items must be unused, undamaged, and in original packaging</li>
                        <li>Original tags and labels must be attached</li>
                        <li>Certain items like perishables, intimate apparel, and customized products are non-returnable</li>
                    </ul>
                </div>

                <div className={styles.policybox}>
                    <h4>Return Process</h4>
                    <ol>
                        <li>Log into your account and go to "My Orders"</li>
                        <li>Select the item you wish to return</li>
                        <li>Choose return reason and preferred refund method</li>
                        <li>Schedule pickup or drop-off at nearest collection point</li>
                        <li>Refund will be processed within 7-10 business days after quality check</li>
                    </ol>
                </div>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>5. PAYMENT TERMS AND RAZORPAY VERIFICATION</h2>
            
            <div className={styles.subsection}>
                <h3 className={styles.subsectiontitle}>Accepted Payment Methods</h3>
                <p>HitlerAbi Store accepts multiple secure payment methods through our certified payment partner Razorpay:</p>
                <ul>
                    <li>Credit Cards (Visa, MasterCard, RuPay)</li>
                    <li>Debit Cards (All major banks)</li>
                    <li>Net Banking (All major banks)</li>
                    <li>Digital Wallets (Paytm, PhonePe, Google Pay, etc.)</li>
                    <li>UPI (Unified Payments Interface)</li>
                    {/* <li>EMI Options (Selected banks and credit cards)</li> --> */}
                    <li>Cash on Delivery (COD) - Available for orders up to ₹10,000</li>
                </ul>
            </div>

            {/* <div className="subsection">
                <h3 className="subsection-title">Razorpay Payment Verification</h3>
                <div className="policy-box">
                    <h4>Security and Verification Process</h4>
                    <p>All online payments are processed through Razorpay, a PCI DSS Level 1 compliant payment gateway that ensures highest security standards:</p>
                    <ul>
                        <li><strong>256-bit SSL Encryption:</strong> All payment data is encrypted during transmission</li>
                        <li><strong>Two-Factor Authentication:</strong> OTP verification for added security</li>
                        <li><strong>Fraud Detection:</strong> Advanced algorithms monitor and prevent fraudulent transactions</li>
                        <li><strong>PCI Compliance:</strong> Adheres to Payment Card Industry security standards</li>
                        <li><strong>No Storage:</strong> We do not store your payment information on our servers</li>
                    </ul>
                </div>

                <div className="policy-box">
                    <h4>Payment Verification Steps</h4>
                    <ol>
                        <li>Select items and proceed to checkout</li>
                        <li>Choose your preferred payment method</li>
                        <li>Enter payment details on Razorpay's secure interface</li>
                        <li>Complete OTP/3D Secure verification</li>
                        <li>Payment confirmation and order processing</li>
                        <li>Instant SMS/Email confirmation</li>
                    </ol>
                </div>

                <div className="highlight">
                    <strong>Payment Security Guarantee:</strong> Your payment information is never shared with us. All transactions are processed directly by Razorpay using bank-grade security protocols.
                </div>
            </div>  */}

            <div className={styles.subsection}>
                <h3 className={styles.subsectiontitle}>Refund Policy</h3>
                <ul>
                    <li><strong>Online Payments:</strong> Refunds processed to original payment method within 5-7 business days</li>
                    <li><strong>COD Orders:</strong> Refunds credited to provided bank account or digital wallet</li>
                    <li><strong>Failed Transactions:</strong> Automatic refund within 24-48 hours</li>
                    <li><strong>Partial Refunds:</strong> Available for damaged or partially delivered orders</li>
                </ul>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>6. PRIVACY AND DATA PROTECTION</h2>
            
            <div className={styles.subsection}>
                <p>Your privacy is important to us. We collect, use, and protect your personal information in accordance with our Privacy Policy and applicable data protection laws including the Information Technology Act, 2000.</p>
                
                <h3 className={styles.subsectiontitle}>Data Collection and Usage</h3>
                <ul>
                    <li>Personal information for account creation and order processing</li>
                    <li>Payment information processed securely through Razorpay</li>
                    <li>Usage data to improve our services and personalize experience</li>
                    <li>Communication preferences for order updates and promotional content</li>
                </ul>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>7. LIMITATION OF LIABILITY</h2>
            
            <div className={styles.subsection}>
                <p>HitlerAbi Store acts as an intermediary platform connecting buyers and sellers. While we strive to ensure quality and reliability:</p>
                <ul>
                    <li>We are not liable for defects in products sold by third-party sellers</li>
                    <li>Our liability is limited to the value of the specific transaction</li>
                    <li>We do not guarantee uninterrupted or error-free service</li>
                    <li>Force majeure events are beyond our control and responsibility</li>
                </ul>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>8. MODIFICATION OF TERMS</h2>
            
            <div className={styles.subsection}>
                <p>HitlerAbi Store reserves the right to modify these Terms and Conditions at any time. Updated terms will be posted on this page with a revised "Last Updated" date. Continued use of the Platform after modifications constitutes acceptance of the updated terms.</p>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>9. GOVERNING LAW</h2>
            
            <div className={styles.subsection}>
                <p>These Terms and Conditions are governed by the laws of India. Any disputes arising from the use of this Platform will be subject to the jurisdiction of courts in Mumbai, Maharashtra.</p>
            </div>
        </div>

        <div className={styles.contactinfo}>
            <h3>Contact Us</h3>
            <p>If you have any questions about these Terms and Conditions, please contact us:</p>
            <div className={styles.contactdetails}>
                <div className={styles.contactitem}>
                    <span>📧</span>
                    <span>hitlerabi63@gmail.com</span>
                </div>
                <div className={styles.contactitem}>
                    <span>📞</span>
                    <span>+91 7092381019</span>
                </div>
                <div className={styles.contactitem}>
                    <span>📍</span>
                    <span>India</span>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default TermsandConditions;