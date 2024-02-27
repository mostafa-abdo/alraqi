import { Navigate, createBrowserRouter } from "react-router-dom";

//user website pages
import Layout from "./website-user/layouts/MainLayout";
import GuestLayout from "./website-user/layouts/GuestLayout";
import DefaultLayout from "./website-user/layouts/DefaultLayout";
import Login from "./website-user/pages/login/Login";
import Registration from "./website-user/pages/registration/Registration";
import Home from "./website-user/pages/home/Home";
import Settings from "./website-user/pages/settings/Settings";
import ConfirmEmail from "./website-user/pages/passRecovery/PassRecovery";
import ConfirmCode from "./website-user/pages/confirmCode/ConfirmCode";
import Booking from "./website-user/pages/booking/Booking";
import Blog from "./website-user/pages/blog/Blog";
import Blogs from "./website-user/pages/blogs/Blogs";
import Partner from "./website-user/pages/partner/Partner";
import TravelPartners from "./website-user/pages/travelPartners/TravelPartners";
import PartnerDetails from "./website-user/pages/partnerDetails/PartnerDetails";
import Prices from "./website-user/pages/prices/Prices";
import Packages from "./website-user/pages/packages/Packages";
import ReligiousLandmarks from "./website-user/pages/religiousLandmarks/ReligiousLandmarks";
import BookPackage from "./website-user/pages/bookPackage/BookPackage";
import BookHotel from "./website-user/pages/bookHotel/BookHotel";
import LandmarkBooking from "./website-user/pages/landmarkBooking/LandmarkBooking";
import LoyaltyRewards from "./website-user/pages/loyaltyRewards/LoyaltyRewards";
import Terms from "./website-user/pages/terms/Terms";
import Policy from "./website-user/pages/privacyPolicy/Policy";
import AboutUs from "./website-user/pages/aboutUs/AboutUs";
import OurServices from "./website-user/pages/ourServices/OurServices";
import Visas from "./website-user/pages/visas/Visas";
import Footer from "./website-user/components/footer/Footer";

//dashboard website pages

import GuestAdminLayout from "./website-admin/layouts/GuestAdminLayout";
import DefaultAdminLayout from "./website-admin/layouts/DefaultAdminLayout";
import AdminLogin from "./website-admin/pages/login/Login";
import AdminHome from "./website-admin/pages/home/Home";
import AdminSettings from "./website-admin/pages/settings/Settings";
import AdminUsers from "./website-admin/pages/users/Users";
import AdminBookings from "./website-admin/pages/bookings/Bookings";
import AdminPackages from "./website-admin/pages/packages/Packages";
import AdminPartners from "./website-admin/pages/partners/Partners";
import AdminDrivers from "./website-admin/pages/drivers/Drivers";
import AdminBlogs from "./website-admin/pages/blogs/Blogs";
import AdminPackagesControl from "./website-admin/pages/packagesControl/PackagesControl";
import AdminLandmarks from "./website-admin/pages/landmarks/Landmarks";
import AdminLandmarksControl from "./website-admin/pages/landmarksControl/LandmarksControl";
import AdminLoyalty from "./website-admin/pages/rewards/Rewards";
import AdminHotels from "./website-admin/pages/hotels/Hotels";
import AdminTest from "./website-admin/pages/test/test"



const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [

            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Registration />
            },
            {
                path: "/confirm-email",
                element: <ConfirmEmail />
            },
            {
                path: "/confirm-code",
                element: <ConfirmCode />
            },
            {
                path: '/booking',
                element: <Booking />
            },
            {
                path: '/travel-partners',
                element: <TravelPartners />
            },
            {
                path: '/partner',
                element: <Partner />
            },
            {
                path: '/partner-details',
                element: <PartnerDetails />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/blogs/:id',
                element: <Blog />
            },
            {
                path: '/prices',
                element: <Prices />
            },
            {
                path: '/packages',
                element: <Packages />
            },
            {
                path: '/book-package',
                element: <BookPackage />
            },
            {
                path: '/religious-landmarks',
                element: <ReligiousLandmarks />
            },
            {
                path: '/book-package-religious-landmarks',
                element: <LandmarkBooking />
            },
            {
                path: '/book-hotel',
                element: <BookHotel />
            },
            {
                path: '/loyalty-rewards',
                element: <LoyaltyRewards />
            },
            {
                path: '/terms-conditions',
                element: <Terms />
            },
            {
                path: '/privacy-policy',
                element: <Policy />
            },
            {
                path: '/about-us',
                element: <AboutUs />
            },
            {
                path: '/footer',
                element: <Footer />
            },
            {
                path: '/visas',
                element: <Visas />
            },
            {
                path: '/our-services',
                element: <OurServices />
            },


            {
                path: "/",
                element: <DefaultLayout />,
                children: [
                    {
                        path: "/settings",
                        element: <Settings />
                    }
                ]
            },



        ],

    },
    {
        path: "/dashboard",
        element: <GuestAdminLayout />,
        children: [
            {
                path: "/dashboard/login",
                element: <AdminLogin />
            },
        ]
    },
    {
        path: "/dashboard",
        element: <DefaultAdminLayout />,
        children: [
            {
                path: "/dashboard/",
                element: <Navigate to="/dashboard/home" />
            },
            {
                path: "/dashboard/home",
                element: <AdminHome />
            },
            {
                path: "/dashboard/settings",
                element: <AdminSettings />
            },
            {
                path: "/dashboard/users",
                element: <AdminUsers />
            },
            {
                path: "/dashboard/bookings",
                element: <AdminBookings />
            },
            {
                path: "/dashboard/packages",
                element: <AdminPackages />
            },
            {
                path: "/dashboard/partners",
                element: <AdminPartners />
            },
            {
                path: "/dashboard/drivers",
                element: <AdminDrivers />
            },
            {
                path: "/dashboard/blogs",
                element: <AdminBlogs />
            },
            {
                path: "/dashboard/packages/packages-control",
                element: <AdminPackagesControl />
            },
            {
                path: "/dashboard/landmarks",
                element: <AdminLandmarks />
            },
            {
                path: "/dashboard/landmarks/landmarks-control",
                element: <AdminLandmarksControl />
            },
            {
                path: "/dashboard/rewards",
                element: <AdminLoyalty />
            },
            {
                path: "/dashboard/hotels",
                element: <AdminHotels />
            },
            {
                path: "/dashboard/test",
                element: <AdminTest />
            }
        ]
    },
    {
        path: "*",
        element: <div>Page Not Found 404</div>
    }
])

export default router;
