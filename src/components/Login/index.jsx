import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        
        dispatch(login(navigate, email, password, setIsLoading));
    }

    return (
    );
}
