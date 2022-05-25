import data from '../../blogdata/blog.json';

export default function handler(req, res) {
     res.status(200).json({ status: 'true' , data: data , message: 'Data get successfull' })
  
}