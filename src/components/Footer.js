import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo/logo-christmas.svg';
import { navigation, productList } from '../utils';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="mt-10 lg:mt-20 mx-4 border-t-2 sm:mx-6 lg:mx-20 py-24 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src={Logo} alt="Sugarbaby" className="h-20 object-cover object-center" loading="lazy" />
          </a>
          <p className="mt-5 text-sm text-gray-500">Serving you only heavenly sweetness. Let us fulfill your cravings, because you are our ultimate sweet ones.</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-black uppercase text-lg mb-3">NAVIGATION</h2>
            <nav className="list-none mb-10">
              {navigation.map(item => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-gray-900 hover:text-secondary text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-black uppercase text-lg mb-3">CHRISTMAS LIMITED</h2>
            <nav className="list-none mb-10">
              {productList.filter(item => item.type === "christmas").map(item => (
                <li key={item.id}>
                  <Link 
                    to={`/catalog/${item.id}`} 
                    className="text-gray-900 hover:text-secondary text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-black uppercase text-lg mb-3">SLICE CAKE</h2>
            <nav className="list-none mb-10">
              {productList.filter(item => item.type === "cake").map(item => (
                <li key={item.id}>
                  <Link 
                    to={`/catalog/${item.id}`} 
                    className="text-gray-900 hover:text-secondary text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-black uppercase text-lg mb-3">QUICHES</h2>
            <nav className="list-none mb-10">
              {productList.filter(item => item.type === "quiche").map(item => (
                <li key={item.id}>
                  <Link 
                    to={`/catalog/${item.id}`} 
                    className="text-gray-900 hover:text-secondary text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-black uppercase text-lg mb-3">BREAD</h2>
            <nav className="list-none mb-10">
              {productList.filter(item => item.type === "bread").map(item => (
                <li key={item.id}>
                  <Link 
                    to={`/catalog/${item.id}`} 
                    className="text-gray-900 hover:text-secondary text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 mx-auto py-4 px-5 lg:px-20">
        <p className="text-gray-500 text-sm text-center">© 2022 Sugarbaby.mdn — All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;