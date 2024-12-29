### **1. Communication Calendar**  
A React-based application for managing and tracking company communications efficiently.

---

### **2. Setup Instructions**  

#### **2.1 Prerequisites**  
- Node.js (v18 or higher)  
- npm (v9 or higher)  

#### **2.2 Installation**  
```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install
```

---

### **3. Development**  
```bash
# Start development server
npm run dev
```

---

### **4. Production Build**  
```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

---

### **5. Deployment**  

#### **5.1 Build the Application**  
1. Run `npm run build` to create a production-ready build.  
2. The build output will be in the `dist` directory.

#### **5.2 Deploy to Hosting Platform**  
- The application is configured for deployment on **Netlify**.
- Connect your repository to Netlify for automatic deployments.
- Set build command as `npm run build`.
- Set publish directory as `dist`.

---

### **6. Application Features**  

#### **6.1 Admin Dashboard**  
- **Company Management:**  
  - Add, edit, and delete company profiles.  
  - Track company contact information.  
  - Set communication periodicity.  
- **Communication Methods Configuration:**  
  - Predefined communication methods (LinkedIn, Email, Phone).  
  - Customizable sequence and mandatory status.  

#### **6.2 User Dashboard**  
- **Communication History:**  
  - View last 5 communications per company.  
  - Track upcoming scheduled communications.  
- **Quick Actions:**  
  - Log new communications.  
  - View company details.  
  - Access notification center.  
- **Calendar View:**  
  - Visual communication schedule.  
  - Date-specific communication details.  
  - Interactive calendar navigation.  

---

### **7. Technical Details**  
- Built with React 18 and TypeScript.  
- State management using Zustand.  
- UI components from Radix UI.  
- Styling with Tailwind CSS.  
- Icons from Lucide React.  

---

### **8. Known Limitations**  

#### **8.1 Data Persistence**  
- Currently uses in-memory storage (Zustand).  
- Data resets on page refresh.  
- **Future Enhancement:** Add backend integration.  

#### **8.2 Authentication**  
- No user authentication system.  
- Single user environment.  
- **Future Enhancement:** Add multi-user support.  

#### **8.3 Notifications**  
- Static notification count.  
- No real-time notification system.  
- **Future Enhancement:** Add real-time notifications.  

#### **8.4 Calendar Features**  
- Basic calendar functionality.  
- Limited to single-day events.  
- **Future Enhancement:** Add recurring events support.  

---

### **9. Future Enhancements**  

#### **9.1 Backend Integration**  
- Database storage.  
- API endpoints.  
- Data persistence.  

#### **9.2 Authentication System**  
- User roles (Admin/User).  
- Access control.  
- User preferences.  

#### **9.3 Advanced Features**  
- Email integration.  
- Communication templates.  
- Automated reminders.  
- Analytics dashboard.  

#### **9.4 Mobile Responsiveness**  
- Improved mobile UI.  
- Touch interactions.  
- Progressive Web App support.  
