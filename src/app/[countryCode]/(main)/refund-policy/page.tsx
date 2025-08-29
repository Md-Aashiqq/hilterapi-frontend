import React from "react"
import styles from '../termsandconditions/termsandcondition.module.css'

const RefundPolicy = () => {
    return(
        <>
        <div className={styles.container}>
        <div className={styles.header}>
            <h1>Refund Policy</h1>
            <p>Fair and transparent refund process</p>
        </div>

        <div className={styles.lastupdated}>
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>1. REFUND ELIGIBILITY</h2>
            
            <div className={styles.subsection}>
                <h3 className={styles.subsectiontitle}>General Refund Conditions</h3>
                <p>HitlerAbi Store offers refunds under the following circumstances:</p>
                <ul>
                    <li className={styles.listItem}>Product not received within the estimated delivery time</li>
                    <li className={styles.listItem}>Product received is damaged or defective</li>
                    <li className={styles.listItem}>Wrong product delivered</li>
                    <li className={styles.listItem}>Product significantly different from description</li>
                    <li className={styles.listItem}>Order cancelled before dispatch</li>
                </ul>
            </div>

            <div className={styles.policybox}>
                <h4>Time Limits for Refund Requests</h4>
                <div className={styles.tablecontainer}>
                    <table style={{width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
                        <thead>
                            <tr>
                                <th style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#3498db', color: 'white', fontWeight: '600'}}>Refund Type</th>
                                <th style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#3498db', color: 'white', fontWeight: '600'}}>Time Limit</th>
                                <th style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#3498db', color: 'white', fontWeight: '600'}}>Conditions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{'&:hover': {backgroundColor: '#f5f5f5'}}}>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Pre-dispatch Cancellation</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Until dispatch</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>100% refund, no questions asked</td>
                            </tr>
                            <tr style={{'&:hover': {backgroundColor: '#f5f5f5'}}}>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Damaged/Defective Items</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>7 days from delivery</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Photo evidence required</td>
                            </tr>
                            <tr style={{'&:hover': {backgroundColor: '#f5f5f5'}}}>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Wrong Item Delivered</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>7 days from delivery</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Item must be unused and in original packaging</td>
                            </tr>
                            <tr style={{'&:hover': {backgroundColor: '#f5f5f5'}}}>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Non-delivery</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>15 days from order date</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>After delivery investigation</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>2. NON-REFUNDABLE ITEMS</h2>
            
            <div className={styles.subsection}>
                <p>The following items are not eligible for refund:</p>
                <ul>
                    <li className={styles.listItem}>Items purchased on sale or with special discounts (unless defective)</li>
                    <li className={styles.listItem}>Perishable goods (food items, flowers, etc.)</li>
                    <li className={styles.listItem}>Personal care items (for hygiene reasons)</li>
                    <li className={styles.listItem}>Customized or personalized products</li>
                    <li className={styles.listItem}>Digital downloads and gift cards</li>
                    <li className={styles.listItem}>Items damaged due to misuse or normal wear</li>
                </ul>
                
                <div className={styles.highlight}>
                    <strong>Note:</strong> Even non-refundable items may be eligible for replacement if they arrive damaged or defective.
                </div>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>3. REFUND PROCESS</h2>
            
            <div className={styles.policybox}>
                <h4>How to Request a Refund</h4>
                <ol>
                    <li className={styles.listItem}>Log into your HitlerAbi Store account</li>
                    <li className={styles.listItem}>Go to "My Orders" section</li>
                    <li className={styles.listItem}>Select the order you want to refund</li>
                    <li className={styles.listItem}>Click "Request Refund" and select reason</li>
                    <li className={styles.listItem}>Upload photos if required (for damaged items)</li>
                    <li className={styles.listItem}>Submit refund request</li>
                    <li className={styles.listItem}>Our team will review within 24-48 hours</li>
                    <li className={styles.listItem}>You'll receive confirmation via email/SMS</li>
                </ol>
            </div>

            <div className={styles.subsection}>
                <h3 className={styles.subsectiontitle}>Alternative Contact Methods</h3>
                <p>You can also request refunds by:</p>
                <ul>
                    <li className={styles.listItem}>Email: hitlerabi63@gmail.com</li>
                    <li className={styles.listItem}>Phone: +91 7092381019</li>
                    <li className={styles.listItem}>WhatsApp: +91 7092381019</li>
                </ul>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>4. REFUND METHODS AND TIMELINES</h2>
            
            <div className={styles.policybox}>
                <h4>Refund Processing Times</h4>
                <div className={styles.tablecontainer}>
                    <table style={{width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
                        <thead>
                            <tr>
                                <th style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#3498db', color: 'white', fontWeight: '600'}}>Payment Method</th>
                                <th style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#3498db', color: 'white', fontWeight: '600'}}>Refund Timeline</th>
                                <th style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#3498db', color: 'white', fontWeight: '600'}}>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{'&:hover': {backgroundColor: '#f5f5f5'}}}>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Credit/Debit Card</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>5-7 business days</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Refunded to original card</td>
                            </tr>
                            <tr style={{'&:hover': {backgroundColor: '#f5f5f5'}}}>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Net Banking</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>5-7 business days</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Refunded to original account</td>
                            </tr>
                            <tr style={{'&:hover': {backgroundColor: '#f5f5f5'}}}>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>UPI</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>2-3 business days</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Instant in most cases</td>
                            </tr>
                            <tr style={{'&:hover': {backgroundColor: '#f5f5f5'}}}>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Digital Wallets</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>1-3 business days</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Paytm, PhonePe, GooglePay</td>
                            </tr>
                            <tr style={{'&:hover': {backgroundColor: '#f5f5f5'}}}>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Cash on Delivery</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>7-10 business days</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Bank transfer required</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>5. PARTIAL REFUNDS</h2>
            
            <div className={styles.subsection}>
                <p>Partial refunds may be applicable in the following situations:</p>
                <ul>
                    <li className={styles.listItem}>Items with minor damage that don't affect functionality</li>
                    <li className={styles.listItem}>Partial order fulfillment (when some items in multi-item order are unavailable)</li>
                    <li className={styles.listItem}>Promotional discounts applied incorrectly</li>
                    <li className={styles.listItem}>Shipping cost refunds for delayed deliveries</li>
                </ul>
                
                <p>The refund amount will be determined based on the extent of the issue and will be communicated before processing.</p>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>6. EXCHANGE POLICY</h2>
            
            <div className={styles.subsection}>
                <p>Instead of a refund, you may choose to exchange your item for:</p>
                <ul>
                    <li className={styles.listItem}>Same product in different size/color (if available)</li>
                    <li className={styles.listItem}>Different product of equal or lesser value</li>
                    <li className={styles.listItem}>Store credit for future purchases</li>
                </ul>
                
                <div className={styles.highlight}>
                    <strong>Exchange Timeline:</strong> Exchanges must be requested within 7 days of delivery and follow the same eligibility criteria as refunds.
                </div>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>7. REFUND TRACKING</h2>
            
            <div className={styles.subsection}>
                <p>Once your refund is approved, you can track its status:</p>
                <ul>
                    <li className={styles.listItem}>Check refund status in your account under "My Orders"</li>
                    <li className={styles.listItem}>Receive SMS/email notifications at each stage</li>
                    <li className={styles.listItem}>Contact customer support for updates</li>
                </ul>
                
                <p>Refund statuses include: Request Submitted → Under Review → Approved → Processing → Completed</p>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>8. FAILED REFUNDS</h2>
            
            <div className={styles.subsection}>
                <p>If your refund fails to reach your account:</p>
                <ul>
                    <li className={styles.listItem}>Check with your bank for any processing delays</li>
                    <li className={styles.listItem}>Verify that account details provided are correct</li>
                    <li className={styles.listItem}>Contact our support team with transaction details</li>
                    <li className={styles.listItem}>We will re-initiate the refund or provide alternative solutions</li>
                </ul>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>9. BULK ORDERS</h2>
            
            <div className={styles.subsection}>
                <p>For bulk orders (quantities above 50 units or value above ₹50,000):</p>
                <ul>
                    <li className={styles.listItem}>Special refund terms may apply</li>
                    <li className={styles.listItem}>Refund processing may take additional time</li>
                    <li className={styles.listItem}>Dedicated account manager will handle your case</li>
                    <li className={styles.listItem}>Contact us before placing bulk orders to understand specific terms</li>
                </ul>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>10. CONTACT INFORMATION</h2>
            
            <div className={styles.subsection}>
                <p>For refund-related queries, contact us:</p>
                <div className={styles.policybox}>
                    <p><strong>Email:</strong> hitlerabi63@gmail.com</p>
                    <p><strong>Phone:</strong> +91 7092381019</p>
                    <p><strong>WhatsApp:</strong> +91 7092381019</p>
                    <p><strong>Address:</strong> Hitler Abi karode Rd, Adaikkakuzhi P.O Kanayakumari Tamil Nadu 629 153</p>
                    <p><strong>Support Hours:</strong> Monday to Saturday, 10:00 AM to 7:00 PM (IST)</p>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default RefundPolicy;