import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {  deleteUser, getAllUserData } from "../api/server";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import AddUser from "../components/AddUser";


function UserList() {
    const navigate = useNavigate();
    const queryClient = useQueryClient()

  const {
    isLoading,
    isError,
    data: users,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUserData,
  });

  const deleteuserMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })

  if (isLoading) {
    return "...Loading";
  }
  if (isError) {
    return `Error: ${error.meassage}`;
  }
  const handleDelete = (id) =>{
    deleteuserMutation.mutate(id)
  }

  return (
<>    
<AddUser />
    <Grid container spacing={2}>
      {users.map((user) => (
        <Grid key={user.id} item md={3} mt={10} >
          <Card sx={{ maxWidth: 245 }}>
            <Avatar
              alt="Remy Sharp"
              src={user.imageUrl}
              sx={{ width: 56, height: 56 ,marginLeft:"90px",marginTop:"20px"}}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Name:  {user.name}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
               location: {user.location}
              </Typography>
            </CardContent>
            <CardActions>
            <Button style={{cursor:"pointer"}} 
          onClick={()=> navigate(`User/${user.id}/edit`)}>Edit</Button>
            <Button   onClick={() => handleDelete(user.id)} >Remove</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
    </>  
  );
}

export default UserList;
