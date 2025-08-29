import React from "react"
import styles from '../termsandconditions/termsandcondition.module.css'

const PrivacyPolicy = () => {
    return(
        <>
        <div className={styles.container}>
        <div className={styles.header}>
            <h1>Privacy Policy</h1>
            <p>Your privacy is important to us</p>
        </div>

        <div className={styles.lastupdated}>
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>1. INFORMATION WE COLLECT</h2>
            
            <div className={styles.subsection}>
                <h3 className={styles.subsectiontitle}>Personal Information</h3>
                <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support:</p>
                <ul>
                    <li className={styles.listItem}>Name, email address, phone number</li>
                    <li className={styles.listItem}>Shipping and billing addresses</li>
                    <li className={styles.listItem}>Payment information (processed securely through Razorpay)</li>
                    <li className={styles.listItem}>Account credentials and preferences</li>
                </ul>
            </div>

            <div className={styles.subsection}>
                <h3 className={styles.subsectiontitle}>Usage Information</h3>
                <p>We automatically collect information about your use of our platform:</p>
                <ul>
                    <li className={styles.listItem}>Device information (IP address, browser type, operating system)</li>
                    <li className={styles.listItem}>Usage patterns and preferences</li>
                    <li className={styles.listItem}>Pages visited and time spent on our platform</li>
                    <li className={styles.listItem}>Referral sources and search queries</li>
                </ul>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>2. HOW WE USE YOUR INFORMATION</h2>
            
            <div className={styles.subsection}>
                <p>We use the information we collect to:</p>
                <ul>
                    <li className={styles.listItem}>Process and fulfill your orders</li>
                    <li className={styles.listItem}>Provide customer support and respond to inquiries</li>
                    <li className={styles.listItem}>Send order confirmations and shipping updates</li>
                    <li className={styles.listItem}>Personalize your shopping experience</li>
                    <li className={styles.listItem}>Improve our products and services</li>
                    <li className={styles.listItem}>Comply with legal obligations</li>
                    <li className={styles.listItem}>Prevent fraud and enhance security</li>
                </ul>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>3. INFORMATION SHARING</h2>
            
            <div className={styles.subsection}>
                <p>We may share your information with:</p>
                <ul>
                    <li className={styles.listItem}><strong>Service Providers:</strong> Third parties who help us operate our business (payment processors, shipping companies, etc.)</li>
                    <li className={styles.listItem}><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or other business transactions</li>
                    <li className={styles.listItem}><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                </ul>
                
                <div className={styles.highlight}>
                    <strong>We never sell your personal information to third parties for marketing purposes.</strong>
                </div>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>4. DATA SECURITY</h2>
            
            <div className={styles.policybox}>
                <h4>Security Measures</h4>
                <ul>
                    <li className={styles.listItem}>SSL encryption for all data transmission</li>
                    <li className={styles.listItem}>Secure payment processing through Razorpay (PCI DSS compliant)</li>
                    <li className={styles.listItem}>Regular security audits and monitoring</li>
                    <li className={styles.listItem}>Access controls and employee training</li>
                    <li className={styles.listItem}>Data backup and disaster recovery procedures</li>
                </ul>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>5. YOUR RIGHTS AND CHOICES</h2>
            
            <div className={styles.subsection}>
                <p>You have the right to:</p>
                <ul>
                    <li className={styles.listItem}>Access and update your personal information</li>
                    <li className={styles.listItem}>Request deletion of your account and data</li>
                    <li className={styles.listItem}>Opt-out of marketing communications</li>
                    <li className={styles.listItem}>Request a copy of your data</li>
                    <li className={styles.listItem}>Object to certain data processing activities</li>
                </ul>
                
                <p>To exercise these rights, please contact us at <strong>hitlerabi63@gmail.com</strong></p>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>6. COOKIES AND TRACKING</h2>
            
            <div className={styles.subsection}>
                <p>We use cookies and similar technologies to:</p>
                <ul>
                    <li className={styles.listItem}>Remember your preferences and login status</li>
                    <li className={styles.listItem}>Analyze website traffic and usage patterns</li>
                    <li className={styles.listItem}>Provide personalized content and recommendations</li>
                    <li className={styles.listItem}>Enable social media features</li>
                </ul>
                
                <p>You can control cookies through your browser settings, but this may affect your experience on our platform.</p>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>7. DATA RETENTION</h2>
            
            <div className={styles.subsection}>
                <p>We retain your information for as long as necessary to:</p>
                <ul>
                    <li className={styles.listItem}>Provide our services and fulfill transactions</li>
                    <li className={styles.listItem}>Comply with legal and regulatory requirements</li>
                    <li className={styles.listItem}>Resolve disputes and enforce our agreements</li>
                    <li className={styles.listItem}>Improve our services and prevent fraud</li>
                </ul>
                
                <p>Account information is typically retained for 7 years after account closure, unless longer retention is required by law.</p>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>8. CHILDREN'S PRIVACY</h2>
            
            <div className={styles.subsection}>
                <p>Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If you believe we have collected information from a child under 18, please contact us immediately.</p>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>9. INTERNATIONAL DATA TRANSFERS</h2>
            
            <div className={styles.subsection}>
                <p>Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.</p>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>10. CHANGES TO THIS POLICY</h2>
            
            <div className={styles.subsection}>
                <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page with an updated "Last Updated" date. Your continued use of our services after any changes constitutes acceptance of the updated policy.</p>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>11. CONTACT US</h2>
            
            <div className={styles.subsection}>
                <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                <div className={styles.policybox}>
                    <p><strong>Email:</strong> hitlerabi63@gmail.com</p>
                    <p><strong>Phone:</strong> +91 7092381019</p>
                    <p><strong>Address:</strong> Hitler Abi karode Rd, Adaikkakuzhi P.O Kanayakumari Tamil Nadu 629 153</p>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default PrivacyPolicy;