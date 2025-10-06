import React from "react"
import styles from '../termsandconditions/termsandcondition.module.css'

const Contact = () => {
    return(
        <>
        <div className={styles.container}>
        <div className={styles.header}>
            <h1>Contact Us</h1>
            <p>We're here to help you</p>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>1. GET IN TOUCH</h2>
            
            <div className={styles.subsection}>
                <p>Have a question, concern, or feedback? We'd love to hear from you. Our customer support team is here to assist you with all your needs.</p>
                
                <div className={styles.policybox}>
                    <h4>Contact Information</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '1rem' }}>
                        <div>
                            <h4 style={{ color: '#3498db', marginBottom: '1rem' }}>📧 Email Support</h4>
                            <p><strong>General Inquiries:</strong> hitlerabi63@gmail.com</p>
                            <p><strong>Order Support:</strong> hitlerabi63@gmail.com</p>
                            <p><strong>Business Inquiries:</strong> hitlerabi63@gmail.com</p>
                            <p><strong>Response Time:</strong> Within 24 hours</p>
                        </div>
                        
                        <div>
                            <h4 style={{ color: '#3498db', marginBottom: '1rem' }}>📞 Phone Support</h4>
                            <p><strong>Customer Care:</strong> +91 7092381019</p>
                            <p><strong>WhatsApp:</strong> +91 7092381019</p>
                            <p><strong>Hours:</strong> Mon-Sat, 10:00 AM - 7:00 PM IST</p>
                            <p><strong>Languages:</strong> Hindi, English, Tamil</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>2. OFFICE ADDRESS</h2>
            
            <div className={styles.subsection}>
                <div className={styles.policybox}>
                    <h4>HitlerAbi Store Headquarters</h4>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                        <strong>Hitler Abi karode Rd</strong><br/>
                        Adaikkakuzhi P.O<br/>
                        Kanayakumari, Tamil Nadu 629 153<br/>
                        India
                    </p>
                    
                    <div style={{ marginTop: '1.5rem' }}>
                        <p><strong>Business Hours:</strong></p>
                        <ul>
                            <li className={styles.listItem}>Monday to Friday: 9:00 AM - 6:00 PM</li>
                            <li className={styles.listItem}>Saturday: 10:00 AM - 4:00 PM</li>
                            <li className={styles.listItem}>Sunday: Closed</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>3. SOCIAL MEDIA</h2>
            
            <div className={styles.subsection}>
                <p>Follow us on social media for updates, offers, and customer stories:</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
                    <div className={styles.policybox}>
                        <h4>📱 Instagram</h4>
                        <p>@topper_manic_</p>
                        <p>@the_h.itler_abi_</p>
                        {/* <p>@aji_yazz</p> */}
                        <p>Daily updates and behind-the-scenes content</p>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>4. CUSTOMER SUPPORT CATEGORIES</h2>
            
            <div className={styles.subsection}>
                <p>Choose the appropriate support category for faster resolution:</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
                    <div className={styles.policybox}>
                        <h4>🛒 Order Support</h4>
                        <ul>
                            <li className={styles.listItem}>Order status and tracking</li>
                            <li className={styles.listItem}>Order modifications</li>
                            <li className={styles.listItem}>Cancellation requests</li>
                            <li className={styles.listItem}>Delivery issues</li>
                        </ul>
                    </div>
                    
                    <div className={styles.policybox}>
                        <h4>📦 Product Support</h4>
                        <ul>
                            <li className={styles.listItem}>Product information</li>
                            <li className={styles.listItem}>Availability queries</li>
                            <li className={styles.listItem}>Size and fit guidance</li>
                            <li className={styles.listItem}>Product recommendations</li>
                        </ul>
                    </div>
                    
                    <div className={styles.policybox}>
                        <h4>↩️ Returns & Refunds</h4>
                        <ul>
                            <li className={styles.listItem}>Return requests</li>
                            <li className={styles.listItem}>Refund status</li>
                            <li className={styles.listItem}>Exchange processes</li>
                            <li className={styles.listItem}>Damaged item reports</li>
                        </ul>
                    </div>
                    
                    <div className={styles.policybox}>
                        <h4>💳 Payment Support</h4>
                        <ul>
                            <li className={styles.listItem}>Payment failures</li>
                            <li className={styles.listItem}>Transaction issues</li>
                            <li className={styles.listItem}>Refund processing</li>
                            <li className={styles.listItem}>EMI options</li>
                        </ul>
                    </div>
                    
                    <div className={styles.policybox}>
                        <h4>👤 Account Support</h4>
                        <ul>
                            <li className={styles.listItem}>Login issues</li>
                            <li className={styles.listItem}>Account information</li>
                            <li className={styles.listItem}>Password reset</li>
                            <li className={styles.listItem}>Profile updates</li>
                        </ul>
                    </div>
                    
                    <div className={styles.policybox}>
                        <h4>🏢 Business Inquiries</h4>
                        <ul>
                            <li className={styles.listItem}>Bulk orders</li>
                            <li className={styles.listItem}>Corporate partnerships</li>
                            <li className={styles.listItem}>Supplier applications</li>
                            <li className={styles.listItem}>Media and press</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>5. RESPONSE TIMES</h2>
            
            <div className={styles.policybox}>
                <h4>Expected Response Times</h4>
                <div className={styles.tablecontainer}>
                    <table style={{width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
                        <thead>
                            <tr>
                                <th style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#3498db', color: 'white', fontWeight: '600'}}>Contact Method</th>
                                <th style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#3498db', color: 'white', fontWeight: '600'}}>Response Time</th>
                                <th style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#3498db', color: 'white', fontWeight: '600'}}>Resolution Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Phone Support</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Immediate</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Same call or within 24 hours</td>
                            </tr>
                            <tr>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>WhatsApp</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Within 2 hours</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Within 24 hours</td>
                            </tr>
                            <tr>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Email</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Within 24 hours</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>1-3 business days</td>
                            </tr>
                            <tr>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Social Media</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Within 4 hours</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>1-2 business days</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>6. FREQUENTLY ASKED QUESTIONS</h2>
            
            <div className={styles.subsection}>
                <p>Before contacting us, you might find answers to common questions:</p>
                
                <div className={styles.policybox}>
                    <h4>Quick Answers</h4>
                    <div style={{ marginTop: '1rem' }}>
                        <details style={{ marginBottom: '1rem', border: '1px solid #ddd', borderRadius: '5px', padding: '0.5rem' }}>
                            <summary style={{ fontWeight: 'bold', cursor: 'pointer', padding: '0.5rem' }}>How can I track my order?</summary>
                            <p style={{ padding: '0.5rem' }}>You can track your order by logging into your account and visiting the "My Orders" section, or by using the tracking link sent in your confirmation email.</p>
                        </details>
                        
                        <details style={{ marginBottom: '1rem', border: '1px solid #ddd', borderRadius: '5px', padding: '0.5rem' }}>
                            <summary style={{ fontWeight: 'bold', cursor: 'pointer', padding: '0.5rem' }}>What are your return policies?</summary>
                            <p style={{ padding: '0.5rem' }}>We offer returns within 7 days of delivery for most items. Visit our Refund Policy page for detailed terms and conditions.</p>
                        </details>
                        
                        <details style={{ marginBottom: '1rem', border: '1px solid #ddd', borderRadius: '5px', padding: '0.5rem' }}>
                            <summary style={{ fontWeight: 'bold', cursor: 'pointer', padding: '0.5rem' }}>Do you ship internationally?</summary>
                            <p style={{ padding: '0.5rem' }}>Currently, we only ship within India. We are working on expanding our international shipping capabilities.</p>
                        </details>
                        
                        <details style={{ marginBottom: '1rem', border: '1px solid #ddd', borderRadius: '5px', padding: '0.5rem' }}>
                            <summary style={{ fontWeight: 'bold', cursor: 'pointer', padding: '0.5rem' }}>How long does delivery take?</summary>
                            <p style={{ padding: '0.5rem' }}>Standard delivery takes 5-7 business days, express delivery takes 2-3 business days, and same-day delivery is available in select cities.</p>
                        </details>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>7. FEEDBACK AND SUGGESTIONS</h2>
            
            <div className={styles.subsection}>
                <p>We value your feedback and continuously strive to improve our services. Please share your:</p>
                <ul>
                    <li className={styles.listItem}>Shopping experience feedback</li>
                    <li className={styles.listItem}>Product suggestions</li>
                    <li className={styles.listItem}>Website improvement ideas</li>
                    <li className={styles.listItem}>Service quality reviews</li>
                </ul>
                
                <div className={styles.highlight}>
                    <strong>Your Voice Matters:</strong> Every piece of feedback helps us create a better shopping experience for you and our community.
                </div>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>8. EMERGENCY CONTACT</h2>
            
            <div className={styles.subsection}>
                <p>For urgent matters requiring immediate attention:</p>
                <div className={styles.policybox}>
                    <p><strong>Emergency Hotline:</strong> +91 7092381019</p>
                    <p><strong>Available:</strong> 24/7 for critical issues</p>
                    <p><strong>WhatsApp:</strong> +91 7092381019</p>
                </div>
                
                <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
                    <em>Emergency contact is for critical issues such as payment problems, order disputes, or account security concerns only.</em>
                </p>
            </div>
        </div>
    </div>
        </>
    )
}

export default Contact;