import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const styles = {
    container: { padding: '20px' },
    card: { padding: '30px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' },
    header: { textAlign: 'center', marginBottom: '20px' },
    mutedText: { color: '#6c757d', textAlign: 'center' },
    sectionTitle: { marginTop: '20px', fontSize: '1.25rem', fontWeight: 'bold' },
    list: { paddingLeft: '20px' },
    buttonContainer: { textAlign: 'center', marginTop: '20px' },
    button: { padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '5px' }
  };

  return (
    <div style={styles.container}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card style={styles.card}>
              <Card.Body>
                <h1 style={styles.header}>Privacy Policy</h1>
                <p style={styles.mutedText}>Effective Date: [Insert Date]</p>
                
                <h3 style={styles.sectionTitle}>1. Introduction</h3>
                <p>Welcome to [Your Company Name]. We respect your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information.</p>
                
                <h3 style={styles.sectionTitle}>2. Information We Collect</h3>
                <p>We may collect the following types of information:</p>
                <ul style={styles.list}>
                  <li>Personal information such as name, email, and phone number.</li>
                  <li>Technical data like IP addresses, browser type, and device information.</li>
                  <li>Usage data, including interactions with our website.</li>
                </ul>
                
                <h3 style={styles.sectionTitle}>3. How We Use Your Information</h3>
                <p>We use your information to:</p>
                <ul style={styles.list}>
                  <li>Provide, maintain, and improve our services.</li>
                  <li>Personalize user experience and deliver relevant content.</li>
                  <li>Ensure security and prevent fraudulent activities.</li>
                </ul>
                
                <h3 style={styles.sectionTitle}>4. Data Sharing and Protection</h3>
                <p>We do not sell your personal data. We may share data with third parties only when necessary to:</p>
                <ul style={styles.list}>
                  <li>Comply with legal obligations.</li>
                  <li>Enhance security and prevent fraud.</li>
                  <li>Provide essential third-party services.</li>
                </ul>
                
                <h3 style={styles.sectionTitle}>5. Your Rights</h3>
                <p>You have the right to:</p>
                <ul style={styles.list}>
                  <li>Access, update, or delete your personal information.</li>
                  <li>Opt out of marketing communications.</li>
                  <li>Request a copy of the data we hold about you.</li>
                </ul>
                
                <h3 style={styles.sectionTitle}>6. Changes to This Policy</h3>
                <p>We may update this Privacy Policy periodically. Continued use of our services after any changes indicates acceptance of the updated policy.</p>
                
                <h3 style={styles.sectionTitle}>7. Contact Us</h3>
                <p>If you have any questions about our Privacy Policy, please contact us at <strong>[Your Contact Email]</strong>.</p>
                
                <div style={styles.buttonContainer}>
                  <Link to="/" style={styles.button}>Back to Home</Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;