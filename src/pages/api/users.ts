import { NextApiRequest, NextApiResponse } from "next"


export default (request: NextApiRequest, response: NextApiResponse) => {
    const users =[
        {id: 1, name: 'Felipe'},
        {id: 2, name: 'Rafael'},
        {id: 3, name: 'Saulo'},
    ]

    return response.json(users);
        
}