import { MDXRemote } from 'next-mdx-remote/rsc'
import markdownStyles from './markdown.module.css'

const markdown = `
**Wordwise Browser Extension Privacy Policy**

Effective Date: July 1, 2024

Thank you for using the Wordwise browser extension. We are committed to protecting your privacy and personal data, and we comply with applicable privacy regulations.

This privacy policy is designed to inform you about the personal data we collect, and how we use, share, and protect that data.

## **1. Personal Data Collected**

When using the Wordwise extension, we may collect the following types of personal data:

- **User Activity:** When you use the Wordwise extension, we may collect and store your user activities, such as clicks, mouse cursor positions, or keystroke records.
- **Device Information:** We may collect information related to your device, such as device type, operating system version, and unique device identifiers.
- **Log Information:** When you interact with the Wordwise extension, our servers automatically record certain information, including your browser type, access date and time, page views, etc.

## **2. Data Usage**

The personal data we collect will be used for the following purposes:

- **Service Provision:** We use the collected data to perform the functions of the Wordwise extension, helping you to operate and manage files.
- **Improvement of the Extension:** We may use the collected log information to analyze user behavior and continuously improve and optimize the functionality and performance of the Wordwise extension.
- **Security Assurance:** We may use data such as device information to ensure the security and integrity of the Wordwise extension.

## **3. Data Sharing**

We do not sell, rent, or share your personal data to any third party without your explicit consent or unless required by law. However, we may share data with third parties in the following cases:

- **Service Providers:** We may share data with third-party partners to provide the services and features required by the Wordwise extension.
- **Legal Requirements:** If we have a reasonable belief that it is necessary to disclose your personal data to comply with applicable laws, regulations, legal processes, or government requests, we may disclose the relevant information.

## **4. Data Protection**

We take reasonable security measures to protect your personal data from unauthorized access, use, or disclosure. However, you understand that data transmission over the internet is at risk, and we cannot fully guarantee the security of the data.

## **5. Updates to Privacy Policy**

We may update this privacy policy from time to time based on business needs and changes in laws and regulations. The updated privacy policy will be notified to you through appropriate means before it takes effect.

## **6. Contact Us**

If you have any questions or concerns about this privacy policy or the data processing of the Wordwise extension, please contact us at the following address:

[nieshuanghe@gmail.com](mailto:nieshuanghe@gmail.com)

Please note that this privacy policy applies only to the Wordwise browser extension and not to our website or other services.

Thank you for reading our privacy policy, and we hope the Wordwise extension brings you a pleasant user experience!

`

function RemoteMdxPage() {
  return (
    <div className={markdownStyles.md}>
      <MDXRemote source={markdown} />
    </div>
  )
}

export default RemoteMdxPage
