import React from "react"
import styles from '../termsandconditions/termsandcondition.module.css'

const ShippingPolicy = () => {
    return(
        <>
        <div className={styles.container}>
        <div className={styles.header}>
            <h1>Shipping Policy</h1>
            <p>Fast, reliable, and secure delivery nationwide</p>
        </div>

        <div className={styles.lastupdated}>
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>1. SHIPPING COVERAGE</h2>
            
            <div className={styles.subsection}>
                <h3 className={styles.subsectiontitle}>Domestic Shipping</h3>
                <p>We currently ship to all locations within India, including:</p>
                <ul>
                    <li className={styles.listItem}>All major cities and metro areas</li>
                    <li className={styles.listItem}>Tier 2 and Tier 3 cities</li>
                    <li className={styles.listItem}>Rural and remote areas (where courier services are available)</li>
                    <li className={styles.listItem}>Islands and special economic zones</li>
                </ul>
                
                <div className={styles.highlight}>
                    <strong>Note:</strong> International shipping is currently not available. We are working to expand our reach globally in the near future.
                </div>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>2. SHIPPING OPTIONS AND COSTS</h2>
            
            <div className={styles.policybox}>
                <h4>Available Shipping Methods</h4>
                <div className={styles.tablecontainer}>
                    <table style={{width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
                        <thead>
                            <tr>
                                <th style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#3498db', color: 'white', fontWeight: '600'}}>Shipping Method</th>
                                <th style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#3498db', color: 'white', fontWeight: '600'}}>Delivery Time</th>
                                <th style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#3498db', color: 'white', fontWeight: '600'}}>Cost</th>
                                <th style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#3498db', color: 'white', fontWeight: '600'}}>Availability</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{'&:hover': {backgroundColor: '#f5f5f5'}}}>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Standard Delivery</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>5-7 business days</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>₹49 (Free above ₹499)</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Pan India</td>
                            </tr>
                            <tr style={{'&:hover': {backgroundColor: '#f5f5f5'}}}>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Express Delivery</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>2-3 business days</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>₹99</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Major cities</td>
                            </tr>
                            <tr style={{'&:hover': {backgroundColor: '#f5f5f5'}}}>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Same Day Delivery</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Within 24 hours</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>₹149</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Select metros only</td>
                            </tr>
                            <tr style={{'&:hover': {backgroundColor: '#f5f5f5'}}}>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Next Day Delivery</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>1 business day</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>₹199</td>
                                <td style={{padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd'}}>Major cities</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className={styles.subsection}>
                <h3 className={styles.subsectiontitle}>Free Shipping Offers</h3>
                <ul>
                    <li className={styles.listItem}>Free standard shipping on orders above ₹499</li>
                    <li className={styles.listItem}>Free express shipping on orders above ₹1,999</li>
                    <li className={styles.listItem}>Free shipping for premium members on all orders</li>
                    <li className={styles.listItem}>Special promotional offers during festivals and sales</li>
                </ul>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>3. ORDER PROCESSING TIME</h2>
            
            <div className={styles.subsection}>
                <p>Order processing times vary based on product type and availability:</p>
                
                <div className={styles.policybox}>
                    <h4>Processing Timelines</h4>
                    <ul>
                        <li className={styles.listItem}><strong>In-Stock Items:</strong> 1-2 business days</li>
                        <li className={styles.listItem}><strong>Pre-Order Items:</strong> As specified on product page</li>
                        <li className={styles.listItem}><strong>Customized Products:</strong> 3-5 business days</li>
                        <li className={styles.listItem}><strong>Bulk Orders (50+ items):</strong> 3-7 business days</li>
                    </ul>
                </div>
                
                <div className={styles.highlight}>
                    <strong>Note:</strong> Processing time is separate from shipping time. Orders placed on weekends or public holidays will be processed on the next business day.
                </div>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>4. DELIVERY AREAS AND RESTRICTIONS</h2>
            
            <div className={styles.subsection}>
                <h3 className={styles.subsectiontitle}>Serviceable Areas</h3>
                <p>We deliver to:</p>
                <ul>
                    <li className={styles.listItem}>All pin codes covered by major courier partners</li>
                    <li className={styles.listItem}>APO/FPO addresses (with additional processing time)</li>
                    <li className={styles.listItem}>Corporate offices and business addresses</li>
                    <li className={styles.listItem}>Residential addresses with proper accessibility</li>
                </ul>
                
                <h3 className={styles.subsectiontitle}>Delivery Restrictions</h3>
                <p>We cannot deliver to:</p>
                <ul>
                    <li className={styles.listItem}>P.O. Box addresses</li>
                    <li className={styles.listItem}>Areas with security restrictions</li>
                    <li className={styles.listItem}>Remote locations not covered by our courier partners</li>
                    <li className={styles.listItem}>Addresses with incomplete or incorrect details</li>
                </ul>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>5. TRACKING YOUR ORDER</h2>
            
            <div className={styles.policybox}>
                <h4>Order Tracking Process</h4>
                <ol>
                    <li className={styles.listItem}>Order confirmation email/SMS sent immediately</li>
                    <li className={styles.listItem}>Processing notification when order is being prepared</li>
                    <li className={styles.listItem}>Dispatch notification with tracking number</li>
                    <li className={styles.listItem}>Real-time tracking updates via SMS/email</li>
                    <li className={styles.listItem}>Out-for-delivery notification</li>
                    <li className={styles.listItem}>Delivery confirmation</li>
                </ol>
            </div>

            <div className={styles.subsection}>
                <h3 className={styles.subsectiontitle}>How to Track</h3>
                <ul>
                    <li className={styles.listItem}>Log into your account and check "My Orders"</li>
                    <li className={styles.listItem}>Use the tracking number on courier partner's website</li>
                    <li className={styles.listItem}>Click tracking links in notification emails</li>
                    <li className={styles.listItem}>Contact customer support for real-time updates</li>
                </ul>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>6. DELIVERY GUIDELINES</h2>
            
            <div className={styles.subsection}>
                <h3 className={styles.subsectiontitle}>Delivery Attempt Policy</h3>
                <ul>
                    <li className={styles.listItem}>Up to 3 delivery attempts at no extra charge</li>
                    <li className={styles.listItem}>If delivery fails after 3 attempts, package is returned to us</li>
                    <li className={styles.listItem}>Re-delivery charges may apply for returned packages</li>
                    <li className={styles.listItem}>Customer will be notified before each delivery attempt</li>
                </ul>
                
                <h3 className={styles.subsectiontitle}>Delivery Requirements</h3>
                <ul>
                    <li className={styles.listItem}>Someone must be available to receive the package</li>
                    <li className={styles.listItem}>Valid ID proof may be required for high-value items</li>
                    <li className={styles.listItem}>Signature confirmation required for deliveries</li>
                    <li className={styles.listItem}>Safe drop-off not available for valuable items</li>
                </ul>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>7. SPECIAL HANDLING</h2>
            
            <div className={styles.subsection}>
                <h3 className={styles.subsectiontitle}>Fragile Items</h3>
                <ul>
                    <li className={styles.listItem}>Extra protective packaging for fragile items</li>
                    <li className={styles.listItem}>Special handling instructions to delivery partners</li>
                    <li className={styles.listItem}>Insurance coverage for high-value fragile items</li>
                    <li className={styles.listItem}>Immediate replacement for items damaged during transit</li>
                </ul>
                
                <h3 className={styles.subsectiontitle}>Perishable Goods</h3>
                <ul>
                    <li className={styles.listItem}>Express shipping mandatory for perishables</li>
                    <li className={styles.listItem}>Cold chain maintained for temperature-sensitive items</li>
                    <li className={styles.listItem}>Same-day or next-day delivery only</li>
                    <li className={styles.listItem}>No delivery on weekends for perishables</li>
                </ul>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>8. ADDRESS CHANGE POLICY</h2>
            
            <div className={styles.subsection}>
                <p>Address changes are allowed under the following conditions:</p>
                <ul>
                    <li className={styles.listItem}>Before order is dispatched from our warehouse</li>
                    <li className={styles.listItem}>Within the same city (no additional charges)</li>
                    <li className={styles.listItem}>To different city (additional shipping charges may apply)</li>
                    <li className={styles.listItem}>Contact customer support immediately for address changes</li>
                </ul>
                
                <div className={styles.highlight}>
                    <strong>Important:</strong> Address changes are not possible once the order is out for delivery. Please double-check your address during checkout.
                </div>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>9. SHIPPING DELAYS</h2>
            
            <div className={styles.subsection}>
                <h3 className={styles.subsectiontitle}>Common Causes of Delays</h3>
                <ul>
                    <li className={styles.listItem}>Extreme weather conditions</li>
                    <li className={styles.listItem}>Natural disasters or emergencies</li>
                    <li className={styles.listItem}>Festival seasons and peak shopping periods</li>
                    <li className={styles.listItem}>Strikes or transportation issues</li>
                    <li className={styles.listItem}>Incorrect or incomplete address information</li>
                </ul>
                
                <h3 className={styles.subsectiontitle}>Our Response to Delays</h3>
                <ul>
                    <li className={styles.listItem}>Proactive communication about potential delays</li>
                    <li className={styles.listItem}>Regular updates on revised delivery timeline</li>
                    <li className={styles.listItem}>Compensation or shipping fee refund for significant delays</li>
                    <li className={styles.listItem}>Priority processing once normal operations resume</li>
                </ul>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>10. BULK AND CORPORATE ORDERS</h2>
            
            <div className={styles.subsection}>
                <p>Special shipping arrangements for bulk orders:</p>
                <ul>
                    <li className={styles.listItem}>Dedicated account manager for orders above ₹50,000</li>
                    <li className={styles.listItem}>Flexible delivery scheduling</li>
                    <li className={styles.listItem}>Multiple delivery locations for single order</li>
                    <li className={styles.listItem}>Special packaging and branding options</li>
                    <li className={styles.listItem}>Negotiated shipping rates for regular bulk orders</li>
                </ul>
                
                <p>Contact our B2B team at <strong>hitlerabi63@gmail.com</strong> for custom shipping solutions.</p>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>11. SHIPPING INSURANCE</h2>
            
            <div className={styles.subsection}>
                <p>Protection for your orders during transit:</p>
                <ul>
                    <li className={styles.listItem}>All orders automatically insured up to ₹1,000</li>
                    <li className={styles.listItem}>Optional additional insurance for high-value items</li>
                    <li className={styles.listItem}>Coverage against loss, theft, or damage during shipping</li>
                    <li className={styles.listItem}>Quick claim processing and resolution</li>
                </ul>
            </div>
        </div>

        <div className={styles.contentsection}>
            <h2 className={styles.sectiontitle}>12. CONTACT INFORMATION</h2>
            
            <div className={styles.subsection}>
                <p>For shipping-related queries:</p>
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

export default ShippingPolicy;