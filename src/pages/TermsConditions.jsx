import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import '../styles/TermsConditions.css';

const TermsConditions = () => {
  return (
    <Container>
      <Typography variant="h2">Terms and Conditions</Typography>
      <Typography variant="subtitle1">Effective Date: July 31, 2023</Typography>

      <Divider style={{ margin: '16px 0', background: '#F3DEE5' }} />

      <Typography variant="h4">1. Acceptance of Terms</Typography>

      <Typography variant="body1" my={2}>
        Welcome to DevConnect! By accessing or using our website and services, you agree to be bound by these Terms and Conditions, our Privacy Policy, and any additional guidelines, policies, or rules posted on the website. If you do not agree with any of these terms, please refrain from using the website.
      </Typography>

      <Typography variant="h4">2. Description of Services</Typography>

      <Typography variant="body1" my={2}>
        DevConnect is a social media platform that allows users to connect, make friends, and collaborate on project ideas. Users can post project ideas, share updates, and interact with others through various communication features provided by the platform.
      </Typography>

      <Typography variant="h4">3. User Registration</Typography>

      <Typography variant="h5" mt={1}>3.1 Eligibility:</Typography>
      <Typography variant="body1" my={2}>To use DevConnect, you must be at least 18 years old or the age of legal majority in your jurisdiction. By registering, you represent and warrant that you meet these eligibility requirements.</Typography>

      <Typography variant="h5">3.2 Account Information:</Typography>
      <Typography variant="body1" my={2}>When registering, you agree to provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for any activity that occurs under your account.</Typography>

      <Typography variant="h4">4. User Content</Typography>

      <Typography variant="h5" mt={1}>4.1 Content Ownership:</Typography>
      <Typography variant="body1" my={2}>You retain ownership of any content you post on DevConnect. By posting content, you grant DevConnect a non-exclusive, worldwide, royalty-free, sublicensable, and transferable license to use, reproduce, modify, adapt, publish, translate, distribute, and display such content for the purpose of operating and improving the platform.</Typography>

      <Typography variant="h5">4.2 Responsibility for Content:</Typography>
      <Typography variant="body1" my={2}>You are solely responsible for the content you post on DevConnect. Content must comply with applicable laws and must not infringe on the rights of third parties. DevConnect reserves the right to remove or modify any content that violates these terms.</Typography>

      <Typography variant="h4">5. User Conduct</Typography>

      <Typography variant="h5" mt={1}>5.1 Prohibited Activities:</Typography>
      <Typography variant="body1" my={2}>When using DevConnect, you agree not to:</Typography>
      <Box component="ul">
        <Typography variant="body1" component="li">Violate any applicable laws or regulations;</Typography>
        <Typography variant="body1" component="li">Use the platform for any unlawful, harmful, or malicious purposes;</Typography>
        <Typography variant="body1" component="li">Impersonate another person or entity;</Typography>
        <Typography variant="body1" component="li">Engage in any form of harassment, hate speech, or discrimination;</Typography>
        <Typography variant="body1" component="li">Introduce malware or other malicious code;</Typography>
        <Typography variant="body1" component="li">Attempt to gain unauthorized access to other users&apos; accounts;</Typography>
        <Typography variant="body1" component="li">Engage in any activity that interferes with or disrupts the platform&apos;s functionality;</Typography>
        <Typography variant="body1" component="li">Collect or store other users&apos; personal information without their consent.</Typography>
      </Box>
      <Typography variant="h4">6. Intellectual Property</Typography>

      <Typography variant="h5" mt={1}>6.1 DevConnect Content:</Typography>
      <Typography variant="body1" my={2}>All content provided by DevConnect, including logos, trademarks, graphics, and text, is the property of DevConnect and is protected by copyright and other intellectual property laws.</Typography>

      <Typography variant="h5">6.2 User Contributions:</Typography>
      <Typography variant="body1" my={2}>Users retain ownership of their content, as stated in Section 4.1. Users are responsible for ensuring that their content does not infringe on the intellectual property rights of others.</Typography>

      <Typography variant="h4">7. Termination</Typography>

      <Typography variant="body1" my={2}>
        DevConnect reserves the right to terminate or suspend any user&apos;s account at its discretion, with or without cause. Upon termination, all licenses granted to DevConnect regarding user content will terminate.
      </Typography>

      <Typography variant="h4">8. Modification of Terms</Typography>

      <Typography variant="body1" my={2}>
        DevConnect may update or modify these Terms and Conditions at any time. Any changes will be effective upon posting on the website. Your continued use of the platform after such changes signifies your acceptance of the modified terms.
      </Typography>

      <Typography variant="h4">9. Disclaimer of Warranties</Typography>

      <Typography variant="body1" my={2}>
        DevConnect provides the platform &quot;as is&quot; and without warranties of any kind, whether express or implied. DevConnect does not warrant that the platform will be error-free or uninterrupted.
      </Typography>

      <Typography variant="h4">10. Limitation of Liability</Typography>

      <Typography variant="body1" my={2}>
        To the maximum extent permitted by law, DevConnect shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with the use or inability to use the platform.
      </Typography>

      <Typography variant="h4">11. Governing Law</Typography>

      <Typography variant="body1" my={2}>
        These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction].
      </Typography>

      <Typography variant="h3">Comments and Concerns</Typography>
      <Typography my={2}>All feedback, comments, requests for technical support, and other communications relating to DevConnect should be directed to <a title="Email to DevConnect Support" href="mailto:audrey.patterson31@gmail.com">our support team</a>.</Typography>
    </Container>
  )
}

export default TermsConditions;