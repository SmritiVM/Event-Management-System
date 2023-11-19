import Axios from "axios";
import { Link } from "react-router-dom";

function UserListRow(props) {
    const { _id, username, fullName, email, phone, password, bookedEvents} = props.obj; //Object destruction

    const handleClick = () => {
        Axios.all([
            Axios.delete("https://eventhub-t514.onrender.com/eventRoute/delete-user/" + _id)
            .then((res) => {
                if (res.status === 200) {
                    alert("Record deleted successfully");
                    window.location.reload();
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err)),

            Axios.get("https://eventhub-t514.onrender.com/eventRoute/event-list")
            .then((eventResponse) => {
                if(eventResponse.status === 200){
                    //Finding events where current user is registered
                    const collectedEvents = eventResponse.data;
                    for(let i = 0; i < collectedEvents.length; i++){
                        let eventData = collectedEvents[i];
                        eventData.registeredUsers = eventData.registeredUsers.filter((user) => user.username !== username);

                        Axios.put("https://eventhub-t514.onrender.com/eventRoute/update-event/" + collectedEvents[i]._id, eventData)
                        .then((updateResponse) => {
                            if(updateResponse.status === 200)
                                console.log("Event details updated")
                            
                            else
                                Promise.reject();
                        })
                        .catch((updateError) => alert(updateError))
                    }
                }
            }) 

        ])
        
    }

    return (
        <tr>
            <td>{username}</td>
            <td>{fullName}</td>
            <td>{email}</td>
            <td>{phone}</td>

            <td class="d-flex justify-content-center">
                <button onClick={handleClick} class="btn delete-button">
                    Delete
                </button>
            </td>
        </tr>
    )
}
export default UserListRow;
