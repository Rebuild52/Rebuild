import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
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
                <h1 style={styles.header}>Terms and Conditions</h1>
                <p style={styles.mutedText}>Effective Date: [Insert Date]</p>
                
                <h3 style={styles.sectionTitle}>1. Introduction</h3>
                <p>Welcome to [Your Company Name]. By using our services, you agree to comply with and be bound by the following terms and conditions.</p>
                
                <h3 style={styles.sectionTitle}>2. Use of Services</h3>
                <p>By accessing our website, you agree to:</p>
                <ul style={styles.list}>
                  <li>Use the website only for lawful purposes.</li>
                  <li>Not engage in fraudulent or harmful activities.</li>
                  <li>Respect intellectual property rights and copyrights.</li>
                </ul>
                
                <h3 style={styles.sectionTitle}>3. Account Responsibilities</h3>
                <p>If you create an account, you are responsible for:</p>
                <ul style={styles.list}>
                  <li>Maintaining confidentiality of your credentials.</li>
                  <li>Ensuring the security of your account.</li>
                  <li>Notifying us of any unauthorized access.</li>
                </ul>
                
                <h3 style={styles.sectionTitle}>4. Limitations of Liability</h3>
                <p>We are not liable for:</p>
                <ul style={styles.list}>
                  <li>Any indirect, incidental, or consequential damages.</li>
                  <li>Service interruptions or losses beyond our control.</li>
                  <li>User-generated content or third-party links.</li>
                </ul>
                
                <h3 style={styles.sectionTitle}>5. Modifications to Terms</h3>
                <p>We reserve the right to update these terms at any time. Continued use of our services after changes indicates your acceptance of the new terms.</p>
                
                <h3 style={styles.sectionTitle}>6. Governing Law</h3>
                <p>These terms are governed by the laws of [Your Jurisdiction]. Any disputes will be resolved in the courts of [Your Location].</p>
                
                <h3 style={styles.sectionTitle}>7. Contact Us</h3>
                <p>If you have any questions about our Terms and Conditions, please contact us at <strong>[Your Contact Email]</strong>.</p>
                
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

export default TermsAndConditions;