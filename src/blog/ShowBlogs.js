import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI = "http://localhost:8000/pedido/"

const CompShowBlogs = ()=>{
    const[blogs, setBlog]=useState([])
    useEffect(()=>{
        getBlogs()
    },[])
    // funcion para traer todos los pedidos
    const getBlogs = async () => {
       const res= await axios.get(URI)
       setBlog(res.data)
    }
    // funcion para eliminar todos los pedidos
    const deleteblog= async (id) =>{
        await axios.delete(`${URI}${id}`)
        getBlogs()

    }

    return(
        <div className='container'>
            <div className='row'>
               <div className='col'>
                <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-cart-plus"></i></Link>
                <table className='table'>
                    <thead className='table-primary'>
                        <tr>
                            <th>Pedido#</th>
                            <th>Nombre</th>
                            <th>Telefono</th>
                            <th>Direccion</th>
                            <th>Metodo de Pago</th>
                            <th>comentario</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map((blog)=>(
                            <tr key={blog.id}>
                               <td> {blog.id}</td>
                               <td> {blog.Nombre}</td>
                               <td>{blog.Telefono}</td>
                               <td>{blog.Direccion}</td>
                               <td>{blog.Metodo_P}</td>
                               <td>{blog.comentario}</td>
                              <td>
                                <Link to={`/edit/${blog.id}`} className='btn btn-info'><i className="fa-solid fa-file-pen"></i></Link>
                                <button onClick={()=>deleteblog(blog.id)} className='btn btn-danger'><i className="fa-solid fa-eraser"></i></button>
                              </td>
                               </tr>   
                        ))}
                    </tbody>
                </table>
               </div>
            </div>
        </div>
    )

}

export default CompShowBlogs

