import React from "react";
import { Link, usePage } from '@inertiajs/react'
import {
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  SquaresPlusIcon,
  SunIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

const navListMenuItems = [
  {
    title: "Instrumentos de Gestión Ambiental",
    icon: SquaresPlusIcon,
    route: route('services.service1')
  },
  {
    title: "Servicios de Monitoreos Ambientales",
    icon: UserGroupIcon,
    route: route('services.service2')
  },
  {
    title: "Servicios de Monitoreos Ocupacionales",
    icon: Bars4Icon,
    route: route('services.service3')
  },
  {
    title: "Construcción de Sistemas de Tratamiento",
    icon: SunIcon,
    route: route('services.service4')
  },
  {
    title: "Elaboración de Expedientes Técnicos",
    icon: GlobeAmericasIcon,
    route: route('services.service5')
  }
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { component } = usePage()
  const renderItems = navListMenuItems.map(
    ({ icon, title, route }, key) => (
      <Link href={route} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    ),
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className={`flex items-center gap-2 py-2 pr-4 text-lg font-medium text-gray-900 ${component.startsWith('Services') ? 'text-primary-500' : ''}`}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Servicios
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 outline-none gap-y-2 outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  const { component } = usePage()

  return (
    <List className="p-0 mt-4 mb-6 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Link href={route('home')} >
        <Typography
            as="div"
            variant="small"
            color="blue-gray"
            className="font-medium"
        >
            <ListItem className={`flex items-center gap-2 py-2 pr-4 text-lg ${component === 'Home' ? 'text-primary-500 font-bold' : ''}`}>
                Inicio
            </ListItem>
        </Typography>
      </Link>
      <Link href={route('about')}>
        <Typography
            as="div"
            variant="small"
            color="blue-gray"
            className="font-medium"
        >
            <ListItem className={`flex items-center gap-2 py-2 pr-4 text-lg ${component === 'About' ? 'text-primary-500 font-bold' : ''}`}>
                Nosotros
            </ListItem>
        </Typography>
      </Link>
      <NavListMenu />
      <Link href={route('client')}>
        <Typography
            as="div"
            variant="small"
            color="blue-gray"
            className="font-medium"
        >
            <ListItem className={`flex items-center gap-2 py-2 pr-4 text-lg ${component === 'Client' ? 'text-primary-500 font-bold' : ''}`}>
                Clientes
            </ListItem>
        </Typography>
      </Link>
      <Link href={route('contact')}>
        <Typography
            as="div"
            variant="small"
            color="blue-gray"
            className="font-medium"
        >
            <ListItem className={`flex items-center gap-2 py-2 pr-4 text-lg ${component === 'Contact' ? 'text-primary-500 font-bold' : ''}`}>
                Contáctanos
            </ListItem>
        </Typography>
      </Link>
    </List>
  );
}

export default function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <>
    <nav className="px-4 mx-auto my-4">
      <div className="flex items-center justify-between lg:justify-around text-blue-gray-900">
        <Link href={route('home')}>
        <Typography
          as="div"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          <img className="h-16" src="/logo.png" alt="Logo Servicios Ambientales" />
        </Typography>
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="w-6 h-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="w-6 h-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </nav>
    </>
  );
}
