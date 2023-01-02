import { Navbar, Footer,Pagination } from '../components'
import Nav2 from '../components/nav2'
const slug = () => {
  return (
    <>
      <Navbar />
      {/* <Nav2/> */}
      <section className="text-gray-600 body-font">
        <div className="container px-2 py-20 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div>
              <div className="rounded-lg h-100 text-center overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500" />
              </div>
              <h1 className="font-medium title-font mt-4 text-gray-900 text-xl">5 Mistakes You Should Avoid To Become a Web Devloper</h1>
            </div>
            <div className="flex flex-col sm:flex-row mt-5">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Ravi Raushan</h2>
                  <div className="w-12 h-1 bg-pink-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">Professional Web Developer And Editor</p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-2 sm:border-l border-gray-200 sm:border-t-0 border-t sm:mt-4 pt-3  sm:text-left">
                <p className="leading-relaxed text-lg">
                  
                  To run this snippet, save it as a server.js file and run node server.js in your terminal. <br />

This code first includes the Node.js http module.<br />

Node.js has a fantastic standard library, including first-class support for networking.<br />

The createServer() method of http creates a new HTTP server and returns it.<br />

The server is set to listen on the specified port and host name. When the server is ready, the callback function is called, in this case informing us that the server is running.<br /><br />

Whenever a new request is received, the request event is called, providing two objects: a request (an http.IncomingMessage object) and a response (an http.ServerResponse object).<br />

Those 2 objects are essential to handle the HTTP call.<br /><br />

The first provides the request details. In this simple example, this is not used, but you could access the request headers and request data.<br />

The second is used to return data to the caller.<br />

In this case with:<br />


                
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>
      <Pagination/>
      <Footer />
      
    </>
  )
}

export default slug