import useSwr from 'swr'

import { useParams } from 'react-router-dom'


export default function User() {

    const { id } = useParams() // {id: xxx}

    const api = 'https://dummyjson.com/users/' + id;


    const fetcher = (api) => fetch(api).then(res => res.json())

    const { isLoading, error, data } = useSwr(api, fetcher)

    console.log('isLoading', isLoading)
    console.log('error', error)
    console.log('data', data)



    if (isLoading) {
        return (
            <div>.....LOADING.....</div>
        )
    }


    if (error) {
        return (
            <div>.....User not found.....</div>
        )
    }
 

    console.log('api', api)

    return (
        <div>
            <h2 className="text-4xl font-extrabold">
                {data.firstName} {data.lastName}
            </h2>
        </div>
    )
}
