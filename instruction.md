# Project Overview
SaaS application for sales team training using real-time voice conversations with voice AI agent

# Core functionalities

## Basic requirements:
All pages should have clean, professional design with navigation to other pages and vice versa

## 1. Pages & Routes:
   - Landing Page (`/`). 
   - Start Practice Page (`/conversation`)

## 2. Modal Components:
   - "Get Demo" modal
   - "Register for Practice" modal

## 3. Navigation Flow:
   - Landing Page:
     - "Get Demo" button → Opens demo modal
     - "Start Practice Now"/"Try Free Simulation" → Opens registration/planning pop-up page with calendly widget
   - Registration Modal:
     - "Start Practice" button → Redirects to "Convesation page"
   - Results page:
     - When "Stop conversation" button is clicked on Conversation page -> Redirect to Results page 

## Pages descriptions and requirements
### 1. Landing Page
```
Create a modern, visually appealing landing page designed for an AI-powered sales training platform. The landing page should consist of the following sections:

1. **Header Section:**
    - A clear and engaging headline: "Practice Sales with AI."
    - A subheadline: "Get instant feedback on your sales conversations and improve your skills with our AI-powered training platform."
    - A prominent call-to-action button in the center: "Start Practice Now."
    - Include a "Get a Demo" button in the upper-right corner.
2. **How It Works Section:**
    
    - Title: "How It Works: Perfect Your Sales in 3 Steps."
    - Three distinct cards, each with icons, titles, and descriptions:
        - **Step 1:** "Practice or Upload" with details about engaging with AI customer simulators and uploading CRM sales calls.
        - **Step 2:** "Get Instant Analysis" with insights into performance metrics and progress tracking.
        - **Step 3:** "Scale Across Your Team" focusing on team-wide implementation and CRM integration.
3. **Benefits Section:**
    - Title: "Benefits."
    - Three columns with titles, short descriptions, and bullet points:
        - **Risk-Free Sales Practice:** Emphasize unlimited scenario practice, instant feedback, and pitch perfection.
        - **AI-Powered Analytics:** Highlight key metrics analysis, personalized recommendations, and benchmarking against top performers.
        - **Accelerated Team Growth:** Mention reduced onboarding time, consistent messaging, and scalable team training.
4. **Footer Call-to-Action:**    
    - A button: "Try a Free Simulation."

The design should be professional, clean, and emphasize usability. Use icons and a consistent style to make the page visually cohesive, ensuring the "Get a Demo" button is clearly visible at all times in the top-right corner
```

### 2. Get Demo modal page
```
Create a responsive and visually appealing pop-up page that embeds the scheduling functionality of the link: **[https://calendly.com/jechkov-dmitriy/30min?month=2024-11](https://calendly.com/jechkov-dmitriy/30min?month=2024-11)**. 
The page should include the following:

1. **Header Section:**
    
    - Title: "Schedule a Call with Dmitry."
    - Subtitle: "Choose a convenient time for a 30-minute Zoom call."
    - Ensure the header is clean and visually prominent.
2. **Calendly Embed:**
    
    - Integrate the Calendly scheduling widget directly into the pop-up.
    - Display the calendar for November 2024 by default, allowing users to navigate to other months if needed.
    - Highlight available dates and time slots for easy selection.
    - Include all default Calendly features, such as timezone adjustment.
3. **Footer Section:**
    
    - Add a confirmation button below the calendar (if not included by Calendly), labeled "Confirm and Schedule."
    - Display a disclaimer or footer text: "Powered by Calendly" in a subtle, non-intrusive style.
4. **Pop-Up Design and Functionality:**
    
    - Ensure the pop-up is modal (appears over the current page and dims the background).
    - Include a close button (e.g., an 'X' in the upper-right corner) for easy dismissal.
    - Keep the design minimalistic and professional, using a clean font and visually balanced layout.
    - Ensure compatibility with both desktop and mobile screens.
5. **Additional Features:**
    
    - Prepopulate the user's timezone automatically.
    - Provide smooth scrolling and loading animations to enhance the user experience.
Ensure the pop-up is lightweight, responsive, and functions seamlessly, directly reflecting the scheduling features of the provided Calendly link.
```

### 3. Register-modal page
```
Design a clean, user-friendly pop-up window for collecting user details before scheduling a practice session or demonstration. The pop-up should include the following elements:

### Header Section:

- Title: **"Register for Practice Session"**
- Subtitle: **"Enter your details to start practicing with our AI sales simulator."**

### Form Fields:

1. **Full Name**:
    - Input field placeholder: `"John Doe"`
2. **Email**:
    - Input field placeholder: `"john@example.com"`
    - Validate for proper email format.
3. **Company**:
    - Input field placeholder: `"Company Name"`
4. **Position**:
    - Input field placeholder: `"Sales Manager"`
5. **Phone Number**:
    - Input field placeholder: `"+1 234 567 8900"`
    - Validate for phone number format.
6. **Team Size Dropdown**:
    - Label: `"How many sales professionals are on your team?"`
    - Dropdown options:
        - 1-5
        - 6-10
        - 11-20
        - 21+

### Action Button:

- Button text: **"Start Practice"**
- Style: Prominent, visually distinct (e.g., black background with white text).

### Design Details:

- **Close Button**: Add an 'X' in the top-right corner to close the pop-up.
- **Styling**:
    - Minimalistic and modern design.
    - Balanced use of white space for a clean layout.
    - Use a consistent font and size for all text.
- **Validation and Error Messages**:
    - Highlight fields in red if validation fails.
    - Display a message like "Please fill out this field" or "Invalid email format" as needed.

### Responsiveness:

- Ensure the design works seamlessly across desktop, tablet, and mobile devices.

### User Experience:

- Smooth animations for pop-up appearance and dismissal.
- Input fields should have hover and focus effects to guide users.

The pop-up should be functional, visually polished, and aligned with the purpose of collecting information efficiently before a demonstration session.
```

### 4. Conversation Page
   - Real-time voice interaction with AI voice agent
   - Clear audio controls and visual feedback
   - "Stop Conversation" button
   - Audio recording functionality
   - Loading states and error handling

### 5. Results page

# Documentation
## AI voice widget code for conversation page
```
<iframe id="audio_iframe" src="https://widget.synthflow.ai/widget/v2/1732035369433x639979748453412900/1732035369319x468761323859220300" allow="microphone" width="200px" height="300px" pointer-events="none" scrolling="no" style="position: fixed; background: transparent; border: none; z-index: 999"> </iframe>
```

# Project files structure


└─ sales-trainer
   ├─ .cursorrules
   ├─ .eslintrc.json
   ├─ app
   │  ├─ .env
   │  ├─ favicon.ico
   │  ├─ fonts
   │  │  ├─ GeistMonoVF.woff
   │  │  └─ GeistVF.woff
   │  ├─ globals.css
   │  ├─ layout.tsx
   │  └─ page.tsx
   ├─ components
   │  ├─ get-demo-modal.tsx
   │  ├─ landing-page.tsx
   │  ├─ register-modal.tsx
   │  └─ ui
   │     ├─ button.tsx
   │     ├─ card.tsx
   │     ├─ dialog.tsx
   │     ├─ input.tsx
   │     ├─ label.tsx
   │     └─ select.tsx
   ├─ components.json
   ├─ lib
   │  └─ utils.ts
   ├─ next-env.d.ts
   ├─ next.config.mjs
   ├─ package-lock.json
   ├─ package.json
   ├─ postcss.config.mjs
   ├─ README.md
   ├─ tailwind.config.ts
   └─ tsconfig.json