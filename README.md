Here's a README format tailored for your React Native mobile app:

---

# MOBILE FOOD DELIVERY APP

## Overview
Welcome to the Repository, a dynamic mobile food delivery app built with React Native and Expo. This full-featured app combines a sleek, responsive frontend with a robust backend powered by Appwrite. Whether you’re exploring restaurants, placing orders, or managing your account, our app delivers a seamless user experience. Dive into our codebase to see how we've integrated state-of-the-art technologies like Redux, Stripe, Google Places, and Sanity.io to craft a compelling food delivery service.

## App Demos
- **STORE DEMO:** [App Demo Link](https://youtu.be/bkN7sYxCyR4)


## Screen Snapshots

  <details>
          <summary>Click to expand!</summary>
        <p float="left">
  <img src="https://i.postimg.cc/FzFyKSB7/IMG-2861.png" height=400  style="border-radius: 10px;" />
  <img src="https://i.postimg.cc/hP5cCS9b/IMG-2862.png" height=400 style="border-radius: 10px;"  />
  <img src="https://i.postimg.cc/SRtFtrzN/IMG-2863.png" height=400  style="border-radius: 10px;" />
  <img src="https://i.postimg.cc/gkQbVgWg/IMG-2864.png" height=400 style="border-radius: 10px;"  />
  <img src="https://i.postimg.cc/q7NrKD9T/IMG-2865.png" height=400  style="border-radius: 10px;" />
  <img src="https://i.postimg.cc/qRgPX2tN/IMG-2867.png" height=400 style="border-radius: 10px;"  />
  <img src="https://i.postimg.cc/Df4VSdkD/IMG-2868.png" height=400  style="border-radius: 10px;" />
  <img src="https://i.postimg.cc/PqS3RrNK/IMG-2869.png" height=400 style="border-radius: 10px;"  />
 <img src="https://i.postimg.cc/fTscYQRb/IMG-2870.png" height=400 style="border-radius: 10px;"  />

</p>
  </details>

## Features
- **Responsive Design:** Mobile-first design with TailwindCSS for optimal user experience across devices.
- **State Management:** Powerful state management using Redux and Redux Persist.
- **Smooth Navigation:** Seamless navigation between screens with React Navigation.
- **Google Maps Integration:** Location-based services powered by Google API and Google Places.
- **Secure Payment:** Integrated Stripe for secure and hassle-free payments.
- **Restaurant & Food Management:** Managed with Sanity.io, providing a flexible content structure for food and restaurant collections.
- **User Authentication:** Secure user login and registration handled by Appwrite.
- **Order & Cart Management:** Efficient handling of cart items and order processing.
- **API Integration:** Seamless API requests using Axios, powered by serverless functions hosted on Appwrite.
- **Push Notifications:** Stay updated with real-time notifications using Expo Push Notifications.
  
## Technologies Used

### Frontend
- **React Native** (0.74.5)
- **Expo** (~51.0.28)
- **TailwindCSS** via **NativeWind** (^4.0.36)
- **Redux Toolkit** (^2.2.6) and **Redux Persist** (^6.0.0)
- **React Navigation** (^6.1.17)
- **Stripe** (0.37.2)
- **Google Places Autocomplete** (^2.5.6)
- **Sanity.io** (^6.20.2)
- **Axios** (^1.7.4)
- **React Native Maps** (1.14.0)
- **React Native Vector Icons** (^10.1.0)

### Backend
- **Appwrite** (Database, Authentication, Serverless Functions)
- **Axios** for API requests
- **Stripe** for payment processing

## Requirements
Before running the application, ensure that you have the following installed:

- **Node.js** (v12 or above)
- **npm** or **yarn** package manager
- **Expo CLI** for running the development server
- **Appwrite Server** for backend services (or access to an Appwrite instance)
- **Stripe Account** for payment processing

## Getting Started
To get started with the app, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Nuellity/FoodDelivery-ReactNative.git
   ```

2. **Install dependencies:**

   Navigate to the project root and install the necessary packages:

   ```bash
   cd FoodDelivery-ReactNative
   npm install
   ```

3. **Start the development server:**

   ```bash
   expo start
   ```

   The app should automatically open in your default simulator or connected device.

4. **Set up environment variables:**

    Create a `.env` file in the root of your project and add the following:
```bash
GOOGLE_API_KEY=
APPWRITE_ENDPOINT=
APPWRITE_PROJECT_ID=
PLATFORM=
DATABASE_ID=
USER_COLLECTION_ID=
STRIPE_PUBLISH_KEY=

```




5. **Run on physical device:**

   To run the app on a physical device, install the Expo Go app on your device and scan the QR code provided by the Expo CLI.

## Testing
To run tests, use the following command:

```bash
npm run test
```

## Deployment
To deploy the app, you can use services like **Expo EAS**, **Appwrite Cloud** for backend services, and **Stripe** for payment processing.

## Dependencies
This project utilizes the following dependencies:

### Frontend Dependencies
- **React Native**
- **Expo**
- **TailwindCSS**
- **Redux Toolkit**
- **React Navigation**
- **Stripe**
- **Google Places Autocomplete**
- **Sanity.io**
- **Axios**

### Backend Dependencies
- **Appwrite**
- **Stripe**
- **Axios**

Refer to the respective documentation for more detailed information.

## Contributing
We welcome contributions! Please open an issue or a pull request with any suggestions or improvements.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

--- 





