import { useNavigate, useParams } from 'react-router-dom';
import { getUserById, updateUser } from '../api/server';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import UserForm from '../components/UserForm';

const UserEdit = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient()
  
    const {isLoading,isError,data:user,error} = useQuery({
      queryKey:["user",id],
      queryFn: ()=> getUserById(id),
    })
     
    const updatedUserMutation = useMutation({
        mutationFn: updateUser,
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['users'] })
          navigate("/")
        },
      })

    if (isLoading) {
      return 'loading'
    }
  
    if (isError) {
      return `Error: ${error.meassage}`
    }
  
    const handleSubmit = (updatedUser) => {
        updatedUserMutation.mutate({id,...updatedUser})
    }
  


  
  return (
    <div>
      <h1>
        <UserForm onSubmit={handleSubmit} initialData={user} />
      </h1>
    </div>
  )
}

export default UserEdit
