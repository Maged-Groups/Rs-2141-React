import { Link } from 'react-router-dom';
import useSwr from 'swr'

export default function Users() {

  const api = 'https://dummyjson.com/users';

  const handler = api => fetch(api).then(res => res.json())


  const { isLoading, data, error, isValidating } = useSwr(api, handler);


  if (isLoading) {
    return <div>...... LOADING ......</div>
  }

  if (error) {
    return <div>Sorry, we couldn't get the users data!</div>
  }

  const { users } = data;

  console.log('isValidating', isValidating);
  console.log('isLoading', isLoading);
  console.log('users', users);

  return (
    <div>
      <h2>Users</h2>

      <div className='flex gap-3 flex-wrap justify-center'>
        {
          users.map((user) => (
            <div key={user.id} className='flex flex-col gap-2 border max-w-2xl p-4'>
              <h2 className='text-center font-bold'>{user.firstName} {user.lastName} </h2>
              <div>
                <img src={user.image} alt="" />
              </div>
              <div className='px-4 py-1 bg-green-600 text-green-100 text-center shadow-md rounded-sm hover:brightness-50'>
                <Link to={user.id.toString()}>Profile</Link>
              </div>
            </div>
          )
          )
        }
      </div>

    </div>
  )
}
