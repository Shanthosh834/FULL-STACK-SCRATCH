import { useParams } from "react-router-dom";

function UserDetial() {
    const {id} = useParams();

    return (
        <div>
            <p> User Id Is :  {id} </p>
        </div>
    );
};

export default UserDetial;