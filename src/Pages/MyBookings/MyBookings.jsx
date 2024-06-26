
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useBooking from "../../hooks/useBooking";


const MyBookings = () => {
    // const myBookings = useLoaderData()
    // console.log(myBookings);
    const [bookings,refetch] = useBooking()
    console.log(bookings);
    const{title,tourist_name,tourist_email,tourist_image,price,date,tourGuide } = bookings
    const axiosSecure = useAxiosSecure()
    return (
        <div>
            my bookings : {bookings.length} <br/>
           
           <div className="flex flex-col bg-white">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-2 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                   Tour Guide
                  </th>
                  <th
                    scope="col"
                    className="px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Tour Date
                  </th>
                  <th
                    scope="col"
                    className="px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Price
                  </th>
                
                
                  <th
                    scope="col"
                    className="px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                   Pay
                  </th>
                  <th
                  scope="col"
                  className="px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                 Apply
                </th>
                <th
                scope="col"
                className="px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
              Cancel
              </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {bookings.map(item => (
                  <tr key={item._id}>

                  <td className="px-1 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{item.title}</div>
                      
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                       
                        <div>
                          <div className="text-sm font-medium text-gray-900">{item.tourGuide}</div>
                         
                        </div>
                      </div>
                    </td>
                    
                    <td className="px-2 py-4 whitespace-nowrap">
                      <span
                        className="px-2 inline-flex text-xs leading-5
                      font-semibold rounded-full bg-green-100 text-green-800"
                      >
                        {item.date}
                      </span>
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.price}
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default MyBookings;