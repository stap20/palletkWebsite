import Buttons from "views/Components/Buttons.js";
import Calendar from "views/Calendar/Calendar.js";
import Charts from "views/Charts/Charts.js";
import Dashboard from "views/Dashboard/Dashboard.js";
import ViewItems from "views/Items/ViewItems.js";
import AddItem from "views/Items/AddItem.js";

import BarcodeGenerator from "views/BarcodeGenerator/BarcodeGenerator.js";

import Inventory from "views/Inventory/Inventory.js";
import AddInventory from "views/Inventory/AddInventory.js";

import Employees from "views/Employees/Employees.js";
import AddEmployees from "views/Employees/AddEmployees.js";

import AddIncomingOrder from "views/IncomingOrders/AddIncomingOrder.js";
import ViewIncomingOrders from "views/IncomingOrders/ViewIncomingOrders.js";

import AddOutgoingOrder from "views/OutgoingOrders/AddOutgoingOrder.js";
import ViewOutgoingOrders from "views/OutgoingOrders/ViewOutgoingOrders.js";

import AddSupplier from "views/Supplier/AddSupplier.js";
import ViewSuppliers from "views/Supplier/ViewSuppliers.js";

import AddCustomer from "views/Customer/AddCustomer.js";
import ViewCustomers from "views/Customer/ViewCustomers.js";

import ErrorPage from "views/Pages/ErrorPage.js";
import ExtendedForms from "views/Forms/ExtendedForms.js";
import ExtendedTables from "views/Tables/ExtendedTables.js";
import FullScreenMap from "views/Maps/FullScreenMap.js";
import GoogleMaps from "views/Maps/GoogleMaps.js";
import GridSystem from "views/Components/GridSystem.js";
import Icons from "views/Components/Icons.js";
import LockScreenPage from "views/Pages/LockScreenPage.js";
import LoginPage from "views/Pages/LoginPage.js";
import Notifications from "views/Components/Notifications.js";
import Panels from "views/Components/Panels.js";
import PricingPage from "views/Pages/PricingPage.js";
import RTLSupport from "views/Pages/RTLSupport.js";
import ReactTables from "views/Tables/ReactTables.js";
import RegisterPage from "views/Pages/RegisterPage.js";
import RegularForms from "views/Forms/RegularForms.js";
import RegularTables from "views/Tables/RegularTables.js";
import SweetAlert from "views/Components/SweetAlert.js";
import TimelinePage from "views/Pages/Timeline.js";
import Typography from "views/Components/Typography.js";
import UserProfile from "views/Pages/UserProfile.js";
import ValidationForms from "views/Forms/ValidationForms.js";
import VectorMap from "views/Maps/VectorMap.js";
import Widgets from "views/Widgets/Widgets.js";
import Wizard from "views/Forms/Wizard.js";

// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import DashboardIcon from "@material-ui/icons/DashboardOutlined";
import DateRange from "@material-ui/icons/DateRangeOutlined";
import GridOn from "@material-ui/icons/GridOnOutlined";
import Image from "@material-ui/icons/ImageOutlined";
import Place from "@material-ui/icons/PlaceOutlined";
import Work from "@material-ui/icons/WorkOutlined";
import Timeline from "@material-ui/icons/Timeline";
import WidgetsIcon from "@material-ui/icons/Widgets";
import FeaturedPlayListIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForwardOutlined";
import CropFreeIcon from "@material-ui/icons/CropFreeOutlined";
import ArrowBack from "@material-ui/icons/ArrowBackOutlined";
import SendIcon from "@material-ui/icons/SendOutlined";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "???????? ??????????????",
    icon: DashboardIcon,
    component: Dashboard,
    layout: "/admin"
  },
  {
    collapse: true,
    name: "Item Types",
    icon: FeaturedPlayListIcon,
    state: "itemsCollapse",
    views: [
      {
        path: "/view_items",
        name: "View Item Types",
        rtlName: "",
        mini: "VI",
        rtlMini: "??",
        component: ViewItems,
        layout: "/admin"
      },
      {
        path: "/add_item",
        name: "Add New Item Type",
        rtlName: "",
        mini: "NI",
        rtlMini: "??",
        component: AddItem,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Inventory",
    icon: Apps,
    state: "inventoryCollapse",
    views: [
      {
        path: "/inventory",
        name: "View Inventory",
        rtlName: "",
        mini: "VI",
        rtlMini: "??",
        component: Inventory,
        layout: "/admin"
      },
      {
        path: "/addinventory",
        name: "Add To Inventory",
        rtlName: "",
        mini: "AI",
        rtlMini: "??",
        component: AddInventory,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Outgoing Orders",
    icon: ArrowBack,
    state: "OrdersCollapse",
    views: [
      {
        path: "/outgoingorders",
        name: "View Orders",
        rtlName: "",
        mini: "VI",
        rtlMini: "??",
        component: ViewOutgoingOrders,
        layout: "/admin"
      },
      {
        path: "/addoutgoingorder",
        name: "Add Outgoing Order",
        rtlName: "",
        mini: "AI",
        rtlMini: "??",
        component: AddOutgoingOrder,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Incoming Orders",
    icon: ArrowForwardIcon,
    state: "inshipCollapse",
    views: [
      {
        path: "/incomingorders",
        name: "View Orders",
        rtlName: "",
        mini: "VI",
        rtlMini: "??",
        component: ViewIncomingOrders,
        layout: "/admin"
      },
      {
        path: "/addincomingorder",
        name: "Add Incoming Order",
        rtlName: "",
        mini: "AI",
        rtlMini: "??",
        component: AddIncomingOrder,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Suppliers",
    icon: SendIcon,
    state: "suppCollapse",
    views: [
      {
        path: "/viewsupp",
        name: "View Supplier",
        rtlName: "",
        mini: "VI",
        rtlMini: "??",
        component: ViewSuppliers,
        layout: "/admin"
      },
      {
        path: "/addsupp",
        name: "Add Suppliers",
        rtlName: "",
        mini: "AI",
        rtlMini: "??",
        component: AddSupplier,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Customers",
    icon: ShoppingCartIcon,
    state: "custCollapse",
    views: [
      {
        path: "/viewcustomers",
        name: "View Customers",
        rtlName: "",
        mini: "VI",
        rtlMini: "??",
        component: ViewCustomers,
        layout: "/admin"
      },
      {
        path: "/addcustomer",
        name: "Add Customer",
        rtlName: "",
        mini: "AI",
        rtlMini: "??",
        component: AddCustomer,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Employees",
    icon: Work,
    state: "workCollapse",
    views: [
      {
        path: "/Employees",
        name: "View Employees",
        rtlName: "",
        mini: "VW",
        rtlMini: "??",
        component: Employees,
        layout: "/admin"
      },
      {
        path: "/addEmployees",
        name: "Add Employees",
        rtlName: "",
        mini: "AW",
        rtlMini: "??",
        component: AddEmployees,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Barcode",
    icon: CropFreeIcon,
    state: "barcodeCollapse",
    views: [
      {
        path: "/barcodeGenerator",
        name: "Generate Barcode",
        rtlName: "",
        mini: "GB",
        rtlMini: "??",
        component: BarcodeGenerator,
        layout: "/admin"
      }
    ]
  },
  // {
  //   collapse: true,
  //   name: "Pages",
  //   rtlName: "??????????",
  //   icon: Image,
  //   state: "pageCollapse",
  //   views: [
  //     {
  //       path: "/pricing-page",
  //       name: "Pricing Page",
  //       rtlName: "????????????????",
  //       mini: "PP",
  //       rtlMini: "??",
  //       component: PricingPage,
  //       layout: "/auth"
  //     },
  //     {
  //       path: "/rtl-support-page",
  //       name: "RTL Support",
  //       rtlName: "?????????? ??????",
  //       mini: "RS",
  //       rtlMini: "????",
  //       component: RTLSupport,
  //       layout: "/rtl"
  //     },
  //     {
  //       path: "/timeline-page",
  //       name: "Timeline Page",
  //       rtlName: "???????????????? ????????????",
  //       mini: "T",
  //       rtlMini: "????",
  //       component: TimelinePage,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/login-page",
  //       name: "Login Page",
  //       rtlName: "?????????????????? ????????????",
  //       mini: "L",
  //       rtlMini: "????????",
  //       component: LoginPage,
  //       layout: "/auth"
  //     },
  //     {
  //       path: "/register-page",
  //       name: "Register Page",
  //       rtlName: "??????????",
  //       mini: "R",
  //       rtlMini: "????",
  //       component: RegisterPage,
  //       layout: "/auth"
  //     },
  //     {
  //       path: "/lock-screen-page",
  //       name: "Lock Screen Page",
  //       rtlName: "???????? ????????????",
  //       mini: "LS",
  //       rtlMini: "????????",
  //       component: LockScreenPage,
  //       layout: "/auth"
  //     },
  //     {
  //       path: "/user-page",
  //       name: "User Profile",
  //       rtlName: "?????? ???????????? ????????????????",
  //       mini: "UP",
  //       rtlMini: "????",
  //       component: UserProfile,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/error-page",
  //       name: "Error Page",
  //       rtlName: "???????? ??????????",
  //       mini: "E",
  //       rtlMini: "????????????",
  //       component: ErrorPage,
  //       layout: "/auth"
  //     }
  //   ]
  // },
  // {
  //   collapse: true,
  //   name: "Components",
  //   rtlName: "????????????????",
  //   icon: Apps,
  //   state: "componentsCollapse",
  //   views: [
  //     {
  //       collapse: true,
  //       name: "Multi Level Collapse",
  //       rtlName: "???????????? ?????????? ??????????????????",
  //       mini: "MC",
  //       rtlMini: "??",
  //       state: "multiCollapse",
  //       views: [
  //         {
  //           path: "/buttons",
  //           name: "Buttons",
  //           rtlName: "????????",
  //           mini: "B",
  //           rtlMini: "??",
  //           component: Buttons,
  //           layout: "/admin"
  //         }
  //       ]
  //     },
  //     {
  //       path: "/buttons",
  //       name: "Buttons",
  //       rtlName: "????????",
  //       mini: "B",
  //       rtlMini: "??",
  //       component: Buttons,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/grid-system",
  //       name: "Grid System",
  //       rtlName: "???????? ????????????",
  //       mini: "GS",
  //       rtlMini: "????",
  //       component: GridSystem,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/panels",
  //       name: "Panels",
  //       rtlName: "??????????",
  //       mini: "P",
  //       rtlMini: "??",
  //       component: Panels,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/sweet-alert",
  //       name: "Sweet Alert",
  //       rtlName: "?????????? ??????????",
  //       mini: "SA",
  //       rtlMini: "??????",
  //       component: SweetAlert,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/notifications",
  //       name: "Notifications",
  //       rtlName: "??????????????",
  //       mini: "N",
  //       rtlMini: "??",
  //       component: Notifications,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/icons",
  //       name: "Icons",
  //       rtlName: "????????????",
  //       mini: "I",
  //       rtlMini: "??",
  //       component: Icons,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/typography",
  //       name: "Typography",
  //       rtlName: "??????????",
  //       mini: "T",
  //       rtlMini: "??",
  //       component: Typography,
  //       layout: "/admin"
  //     }
  //   ]
  // },
  // {
  //   collapse: true,
  //   name: "Forms",
  //   rtlName: "????????????????",
  //   icon: "content_paste",
  //   state: "formsCollapse",
  //   views: [
  //     {
  //       path: "/regular-forms",
  //       name: "Regular Forms",
  //       rtlName: "?????????? ??????????",
  //       mini: "RF",
  //       rtlMini: "????",
  //       component: RegularForms,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/extended-forms",
  //       name: "Extended Forms",
  //       rtlName: "?????????? ??????????",
  //       mini: "EF",
  //       rtlMini: "??????",
  //       component: ExtendedForms,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/validation-forms",
  //       name: "Validation Forms",
  //       rtlName: "?????????? ???????????? ???? ??????????",
  //       mini: "VF",
  //       rtlMini: "????",
  //       component: ValidationForms,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/wizard",
  //       name: "Wizard",
  //       rtlName: "????????",
  //       mini: "W",
  //       rtlMini: "??",
  //       component: Wizard,
  //       layout: "/admin"
  //     }
  //   ]
  // },
  // {
  //   collapse: true,
  //   name: "Tables",
  //   rtlName: "??????????????",
  //   icon: GridOn,
  //   state: "tablesCollapse",
  //   views: [
  //     {
  //       path: "/regular-tables",
  //       name: "Regular Tables",
  //       rtlName: "???????????? ??????????",
  //       mini: "RT",
  //       rtlMini: "????",
  //       component: RegularTables,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/extended-tables",
  //       name: "Extended Tables",
  //       rtlName: "?????????? ??????????",
  //       mini: "ET",
  //       rtlMini: "??????",
  //       component: ExtendedTables,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/react-tables",
  //       name: "React Tables",
  //       rtlName: "???? ?????? ??????????????",
  //       mini: "RT",
  //       rtlMini: "????",
  //       component: ReactTables,
  //       layout: "/admin"
  //     }
  //   ]
  // },
  {
    collapse: true,
    name: "Maps",
    rtlName: "??????????",
    icon: Place,
    state: "mapsCollapse",
    views: [
      {
        path: "/google-maps",
        name: "Google Maps",
        rtlName: "?????????? ????????",
        mini: "GM",
        rtlMini: "????",
        component: GoogleMaps,
        layout: "/admin"
      },
      {
        path: "/full-screen-maps",
        name: "Full Screen Map",
        rtlName: "?????????? ?????????? ????????????",
        mini: "FSM",
        rtlMini: "??????",
        component: FullScreenMap,
        layout: "/admin"
      },
      {
        path: "/vector-maps",
        name: "Vector Map",
        rtlName: "?????????? ????????????",
        mini: "VM",
        rtlMini: "????",
        component: VectorMap,
        layout: "/admin"
      }
    ]
  },
  // {
  //   path: "/widgets",
  //   name: "Widgets",
  //   rtlName: "????????????????",
  //   icon: WidgetsIcon,
  //   component: Widgets,
  //   layout: "/admin"
  // },
  {
    path: "/charts",
    name: "Charts",
    rtlName: "???????????? ????????????????",
    icon: Timeline,
    component: Charts,
    layout: "/admin"
  }
  // {
  //   path: "/calendar",
  //   name: "Calendar",
  //   rtlName: "??????????????",
  //   icon: DateRange,
  //   component: Calendar,
  //   layout: "/admin"
  // }
];
export default dashRoutes;
