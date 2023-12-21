import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createUser } from '../api/server';
import { v4 as uuidv4 } from 'uuid';
import UserForm from './UserForm';

const AddUser = () => {

    const queryClient = useQueryClient()

    const createUserMutation = useMutation({
      mutationFn: createUser,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['users'] })
      },
    })
    
    const handleAddUser = (users) => {
      createUserMutation.mutate({
        id: uuidv4(),
        ...users
      })
    }

  return (
    <div>
    <UserForm onSubmit={handleAddUser} initialData={{}}/>
    </div>
  )
}

export default AddUser
