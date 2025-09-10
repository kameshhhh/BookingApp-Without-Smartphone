Annexure


Project Title – VILLAGE RIDE - SHARED TRANSPORT FOR RURAL COMMUNITIES WITHOUT SMARTPHONES
Team ID : TH11946

1. Overview:

Village Ride is a hackathon prototype designed to enable shared transport booking for rural communities, 
particularly those without access to smartphones. The system leverages missed call and SMS integration, 
a web-based admin dashboard, and a simple authentication mechanism to facilitate easy and inclusive 
transport management. The solution is modular, scalable, and built for rapid deployment in resource-constrained
 environments.

2. Problem & Solution
  • Problem Statement:
        Rural communities often lack access to digital transport booking due to limited smartphone penetration and internet connectivity.
        Existing solutions are not inclusive for users without smart devices.
  • Solution:
        Village Ride enables booking via missed calls or SMS, with backend processing and admin management through a web dashboard. 
        This ensures that even users without smartphones can access shared transport services.

3. Logic & Workflow
  • Data Collection:
      - Users initiate bookings via missed call or SMS.
      - Admins can also enter bookings directly via the dashboard.
  • Processing:
      - Backend APIs process booking requests, authenticate admins, and store booking data.
      - CORS-enabled servers ensure secure communication between frontend and backend.
  • Output:
      - Confirmation messages sent to users (SMS/call).
      - Bookings displayed in the admin dashboard.
  • User Side:
      - Users book rides by sending a missed call or SMS.
  • Admin Side:
      - Admins manage bookings, view analytics, and authenticate via a secure login.

4. Tech Stack
  - Frontend: HTML, CSS, JavaScript (with SweetAlert2 for modals)
  - Backend: Node.js, Express.js
  - Database: MySQL (simulated)
  - APIs: Missed Call/SMS API, Booking API, Authentication API
  - Other: CORS, body-parser

5. Future Scope
  - Integrate real missed call/SMS providers (Twilio, Exotel)
  - Mobile app for admin and user side
  - Advanced analytics and AI-based route optimization
  - Multi-user support and role-based access
  - Integration with payment gateways and government transport schemes
