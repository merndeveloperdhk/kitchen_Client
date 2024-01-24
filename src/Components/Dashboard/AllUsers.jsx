import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users = [], refetch} = useQuery({
        queryKey:['users',  ],
        queryFn: async () => {
            const res = await axiosSecure.get('/users' )
            return res.data;
        }
    });

    const handleDelUser = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: `You want to delete  ?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
           
              axiosSecure.delete(`/users/${id}`)
              .then(res => {
                if(res.data.deletedCount > 0){
                    refetch();
                       Swal.fire({
                title: "Deleted!",
                text: `item has been deleted`,
                icon: "success"
              }); 
            }
        })
        
            }
          });
    }
    return (
        <div className="p-3">
            <h1 className="text-center text-xl">All Users: {users.length}</h1>
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map((user, idx) => <tr key={idx}>
            <th>{idx + 1}</th>
            <td>{user.name}</td>
            <td>{user.email}t</td>
            <td><button className="btn btn-sm bg-sky-300 hover:bg-sky-500 ">Make Admin</button></td>
            <td><button onClick={() => handleDelUser(user._id)} className="btn btn-sm bg-red-300 hover:bg-red-500 "><FaTrashAlt></FaTrashAlt></button></td>
            
          </tr>)
      }
      
   
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default AllUsers;