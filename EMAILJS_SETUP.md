# EmailJS Setup Guide for Saridena Constructions

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Set up Email Service
1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended):
   - Select **Gmail**
   - Connect your Gmail account
   - Give it a name like "Saridena Contact Form"
4. Copy the **Service ID** (looks like: service_abc123)

## Step 3: Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

**Template Name:** Contact Form Submission

**Subject:** New Contact Form Submission from {{from_name}}

**Content:**
```
Hello Saridena Constructions Team,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Project Type: {{project_type}}

Message:
{{message}}

Please respond to this inquiry promptly.

Best regards,
Saridena Website Contact Form
```

4. Copy the **Template ID** (looks like: template_xyz789)

## Step 4: Get Public Key
1. Go to **Account** > **General**
2. Copy your **Public Key** (looks like: user_def456)

## Step 5: Configure Environment Variables
1. Create a `.env` file in your project root
2. Add these variables with your actual values:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=user_def456
```

## Step 6: Test the Setup
1. Restart your development server: `npm run dev`
2. Go to your contact form
3. Fill out and submit a test message
4. Check your email for the submission

## Troubleshooting
- Make sure all environment variables are set correctly
- Check the browser console for any error messages
- Verify your EmailJS service is connected properly
- Ensure your email template variables match the ones in the code

## Email Delivery
- Free tier: 200 emails/month
- Emails will be sent to the email address connected to your EmailJS service
- Response time: Usually instant, but can take up to a few minutes

## Security Notes
- Environment variables starting with `VITE_` are public (safe for client-side)
- Never share your EmailJS credentials publicly
- Consider upgrading to a paid plan for higher limits and better features

## Need Help?
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/
