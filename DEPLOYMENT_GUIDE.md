# Audit Pro - Firebase Deployment Guide

## Project Structure

```
audit-pro-monorepo/
├── admin/                      # Admin dashboard (separate React app)
│   ├── src/
│   │   ├── routes/             # Dashboard, Messages, Forums, Bookings, Users, Settings
│   │   ├── components/ui/      # Reusable UI components
│   │   └── lib/                # Firebase config, utils
│   ├── package.json
│   └── vite.config.ts
├── audit-pro-dashboard-main/   # Customer-facing website
├── functions/                  # Cloud Functions (Admin SDK, Custom Claims)
├── firebase.json               # Firebase hosting config (both apps)
├── firestore.rules             # Security rules
├── firestore.indexes.json      # Composite indexes
└── package.json                # Monorepo workspace config
```

## Setup Instructions

### 1. Install Dependencies

```bash
# Root level
npm install

# Admin app
cd admin && npm install

# Functions
cd functions && npm install
```

### 2. Configure Firebase

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Authentication (Email/Password, Google)
3. Enable Firestore Database
4. Enable Hosting

### 3. Set Environment Variables

```bash
# Copy example and fill in your values
cp .env.example .env.local

# For functions, place service account key:
# Firebase Console > Project Settings > Service Accounts > Generate New Private Key
# Save as functions/serviceAccountKey.json
```

### 4. Configure Firestore Security Rules

Deploy rules:
```bash
firebase deploy --only firestore:rules
```

### 5. Deploy Admin Custom Claims Function

```bash
cd functions && npm run build
firebase deploy --only functions:setAdminClaim
```

Then make yourself an admin:
```bash
# Using Firebase CLI
firebase functions:shell
# In shell:
# setAdminClaim({ uid: "YOUR_UID" })
```

### 6. Build and Deploy Both Apps

```bash
# Build both apps
npm run build

# Deploy to Firebase Hosting
firebase deploy --only hosting
```

### 7. Configure Custom Domains (Optional)

In Firebase Console > Hosting > Add custom domain:
- `yourdomain.com` → Customer app (target: app)
- `admin.yourdomain.com` → Admin app (target: admin)

## Admin Dashboard Features

| Route | Description |
|-------|-------------|
| `/` | Dashboard with stats & recent activity |
| `/messages` | View/reply to customer messages |
| `/forums` | Manage forum topics |
| `/bookings` | Manage demo bookings |
| `/users` | User management (roles, status) |
| `/settings` | App configuration |

## Security Rules Summary

- **Users**: Can read/write own profile; admins can read all
- **Messages**: Authenticated users can create; admins can read/update/delete all
- **Forums**: Authenticated users can create topics/replies; admins can moderate
- **Bookings**: Authenticated users can create; admins can manage all
- **Admin operations**: Require `request.auth.token.admin == true`

## Local Development

```bash
# Start emulators
firebase emulators:start

# Or run apps individually
npm run dev:app      # Customer app on port 3000
npm run dev:admin    # Admin app on port 3001
```

## Useful Commands

```bash
# View function logs
firebase functions:log

# Deploy specific parts
firebase deploy --only hosting:app
firebase deploy --only hosting:admin
firebase deploy --only firestore:rules
firebase deploy --only functions

# Open Firebase Console
firebase open
```